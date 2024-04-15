import React, { useMemo } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// import DeleteIcon from "@mui/icons-material/Delete";
import "./CartTable.css";
import { Box, Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemQty,
  clearCart,
  removeItemQty,
  selectCartItems,
} from "../../store/cartSlice";
import { displayRazorpay } from "../../services/razorpay-http";
import { selectUser } from "../../store/userSlice";
import { useCreateOrderMutation } from "../../api/order";
import { setIsLoading } from "../../store/appSlice";
import {
  errorNotification,
  successNotification,
} from "../../utils/notifications";
import { useNavigate } from "react-router-dom";
import { selectCategory } from "../../api/api";
import { useCreateRazorpayPaymentOrderMutation } from "../../api/payment";

const CartTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createOrder, {}] = useCreateOrderMutation();
  const [createRazorpayOrder, {}] = useCreateRazorpayPaymentOrderMutation();
  const user = useSelector(selectUser);
  const categoryList = useSelector(selectCategory);
  const { cartItems } = useSelector(selectCartItems);
  // console.log("user: ", user, categoryList);

  const shipping = {
    shipping_type: "normal",
    shipping_price: (40.5).toFixed(2), // tamil nadu
  };

  const tax = {
    total_tax_price: 0,
    tax_cgst_percentage: 0,
    tax_sgst_percentage: 0,
    tax_total_percentage: 0,
  }; // for India

  const {
    subtotalPrice,
    totalPrice,
    totalWeightInGrams,
    totalQuantity,
    totalActualPrice,
    totalSellingPrice,
    totalDiscountPrice,
    totalProfitPrice,
  } = useMemo(() => {
    let subtotalPrice = 0;
    let totalQuantity = 0;
    let totalWeightInGrams = 0;
    let totalActualPrice = 0;
    let totalSellingPrice = 0;
    let totalDiscountPrice = 0;

    cartItems.forEach((item) => {
      const qty = parseInt(item.cart_quantity);
      subtotalPrice += parseFloat(item.cart_total_price);
      totalWeightInGrams += parseFloat(item.dimensions.weight) * qty || 0;
      totalQuantity += qty;
      totalActualPrice += parseFloat(item.actual_price) * qty;
      totalSellingPrice += parseFloat(item.selling_price) * qty;
      totalDiscountPrice += parseFloat(item.discount_price) * qty;
    });

    const totalPrice =
      subtotalPrice + +shipping.shipping_price + tax.total_tax_price;

    const totalProfitPrice = totalDiscountPrice - totalActualPrice;

    return {
      subtotalPrice: subtotalPrice.toFixed(2),
      totalPrice: totalPrice.toFixed(2),
      totalWeightInGrams: totalWeightInGrams.toFixed(2),
      totalQuantity,
      totalActualPrice: totalActualPrice.toFixed(2),
      totalSellingPrice: totalSellingPrice.toFixed(2),
      totalDiscountPrice: totalDiscountPrice.toFixed(2),
      totalProfitPrice: totalProfitPrice.toFixed(2),
    };
  }, [cartItems, shipping.shipping_price, tax.total_tax_price]);

  const handleAddItemQty = (product) => {
    dispatch(addItemQty(product));
  };

  const handleRemoveItemQty = (product) => {
    dispatch(removeItemQty(product));
  };

  const checkout = {
    background: "#dc3237",
    color: "#fff",
    fontSize: "18px",
    "&:hover": {
      border: "2px solid #dc3237",
      background: "transparent",
      color: "#dc3237",
      fontSize: "18px",
    },
  };

  const deleteicon = {
    padding: "8px 15px",
    marginLeft: 2,
    bgcolor: "#000",
    fontWeight: 600,
    "&:hover": {
      border: "2px solid #000",
      bgcolor: "#fff",
      color: "#000",
    },
  };

  const handleCheckout = async () => {
    dispatch(setIsLoading(true));
    // console.log("cartItems: ", cartItems);

    // 4. in handler, just show the payment success or failure
    // 5. after completing, in webhook, we will get success or failure, update the firebase order with the payment details
    // 6. add the order in notifications for real-time listener

    const items = cartItems.map((item) => ({
      id: item.id,
      name: item.name,
      pack_of: item.pack_of,
      category: item.category,
      theme: item.theme,
      description: item.description,
      dimensions: item.dimensions,
      actual_price: item.actual_price,
      selling_price: item.selling_price,
      discount_price: item.discount_price,
      discount_percentage: item.discount_percentage,
      images: item.images,
      color: item?.color || "", // "" - if not multi-color
      quantity: item.cart_quantity,
      total_price: item.cart_total_price,
    }));

    const order = {
      type: "online",
      device: "website",
      ordered_items: [...items],
      order_pending_timestamp: new Date().getTime(),
      order_booked_timestamp: null,
      order_dispatched_timestamp: null,
      order_cancelled_timestamp: null,
      status: "pending", // pending(only opened to pay, but didn't pay), booked(paid & order booked), dispatched, cancelled
      total_weight_in_grams: +totalWeightInGrams,
      total_quantity: +totalQuantity,
      price_unit: "INR",
      total_price: +totalPrice, // total_item_price + shipping_price + total_tax_price
      total_actual_price: +totalActualPrice,
      total_selling_price: +totalSellingPrice,
      total_discount_price: +totalDiscountPrice,
      total_item_price: +subtotalPrice, // equal to total_discount_price
      total_profit_price: +totalProfitPrice, // total_discount_price - total_actual_price
      total_tax_price: +tax.total_tax_price,
      tax_cgst_percentage: +tax.tax_cgst_percentage,
      tax_sgst_percentage: +tax.tax_sgst_percentage,
      tax_total_percentage: +tax.tax_total_percentage,
      shipping_type: shipping.shipping_type,
      shipping_price: +shipping.shipping_price,
      cancel_reason: "",
      logistics: {
        carrier_name: "",
        estimated_delivery_date: "",
        tracking_number: "",
        tracking_url: "",
      },
      payment_status: "",
      payment_method: "",
      payment_details: {},
      user_details: {
        user_id: user.id,
        name: user.name,
        phone: user.phone,
        email: user.email,
        billing_address: "",
        shipping_address: "",
      },
      notifications: {
        isConfirmationEmailSent: false,
        isDeliveredEmailSent: false,
        isDispatchedEmailSent: false,
      },
    };

    console.log("order: ", order);

    // 1. create order in firebase - order_id
    const resultOrderCreation = await createOrder(order);

    if (resultOrderCreation.data) {
      console.log("resultOrderCreation: ", resultOrderCreation.data);
      const { data: resultOrder } = resultOrderCreation;
      // 2. create razorpay payment order using firebase functions - get razorpay payment: order_id
      const resultRzpOrderCreation = await createRazorpayOrder({
        order_id: resultOrder.id,
        amount: resultOrder.total_price,
      });
      if (resultRzpOrderCreation.data) {
        const { data: resultRzpOrder } = resultRzpOrderCreation;
        // 3. pass it to razorpay checkout api, to open modal
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY_ID,
          amount: resultRzpOrder.amount,
          currency: resultRzpOrder.currency,
          name: "Just Shopper",
          description: `Payment for you order no: ${resultOrder.id}`, // receipt from razorpay order response
          image:
            "https://firebasestorage.googleapis.com/v0/b/justshopper-dev.appspot.com/o/JS%20logo%20png.png?alt=media&token=4d5bf95f-cb69-44c4-936d-8368d1df0689",
          order_id: resultRzpOrder.id,
          handler: function (response) {
            console.log("rzp: ", response.razorpay_payment_id);
            console.log(response.razorpay_order_id);
            console.log(response.razorpay_signature);
            dispatch(clearCart());
            successNotification(
              "Order Successfully Placed, You'll receive receipt in email shortly. Have a great day!"
            );
            navigate("/orders");
          },
          prefill: {
            name: user.name,
            email: user.email,
            contact: user.phone,
          },
          notes: {
            order_id: resultOrder.id,
          },
          theme: {
            color: "#dc3237",
          },
        };
        await displayRazorpay(options);
        dispatch(setIsLoading(false));
      } else {
        console.log(
          "resultRzpOrderCreation-error: ",
          resultRzpOrderCreation.error
        );
        dispatch(setIsLoading(false));
        errorNotification(resultRzpOrderCreation.error.message);
      }
    } else {
      console.log("resultOrderCreation-error: ", resultOrderCreation.error);
      dispatch(setIsLoading(false));
      errorNotification(resultOrderCreation.error.message);
    }
  };

  return (
    <div class="container m-auto mt-5">
      {cartItems.length === 0 ? (
        <>
          <p>No items in cart</p>
          <Button
            variant="contained"
            sx={checkout}
            onClick={() =>
              navigate(`/shop-by-category?category=${categoryList[0].name}`)
            }
          >
            Shop
          </Button>
        </>
      ) : (
        <>
          <table class="table table-xs">
            <tr className="tableheadrow">
              {/* <th></th> */}
              <th className="text-left tableheaditem">Product Name</th>
              <th className="text-left tableheaditem">Quantity </th>
              <th className="text-right tableheaditem">Price</th>
              <th className="text-right tableheaditem">Total Price</th>
            </tr>

            {cartItems.map((item) => (
              <tr className="item-row" key={item.id}>
                {/* <td>
            {" "}
            <img src="../images/chocolate.jpg" alt="" className="imagecion" />
          </td> */}
                <td
                  className="Items"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "4px",
                  }}
                >
                  <img
                    src="../images/biscuit.jpg"
                    alt=""
                    style={{ maxWidth: "180px", borderRadius: 30 }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                    }}
                  >
                    <p className="itemname">
                      {" "}
                      <strong>{item.name}</strong>
                    </p>
                    <p className="itemdesc">Category - {item.category}</p>
                    {/* <p className="itemdesc">Theme - {item.theme}</p> */}
                  </div>
                </td>
                <td className="text-right" title="Amount">
                  <Box style={{ position: "relative" }}>
                    <div className="qtyFlex">
                      <Stack
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        className="cartqty"
                        sx={{
                          width: "50%",
                          // "@media only screen and (min-width: 320px) and (max-width: 600px)":
                          //   {
                          //     width: "100%",
                          //   },
                        }}
                      >
                        <RemoveIcon
                          htmlColor="#dc3237"
                          sx={{ cursor: "pointer" }}
                          onClick={() => handleRemoveItemQty(item)}
                        />
                        <p className="qty">{item.cart_quantity}</p>
                        <AddIcon
                          htmlColor="#dc3237"
                          sx={{ cursor: "pointer" }}
                          onClick={() => handleAddItemQty(item)}
                        />
                      </Stack>
                      {/* <Button
                    sx={deleteicon}
                    variant="contained"
                    className="delete"
                  >
                    <DeleteIcon />
                  </Button> */}
                    </div>
                  </Box>
                </td>

                <td className="text-right price" title="Price">
                  {item.discount_price}
                </td>
                <td className="text-right price" title="Total">
                  {item.cart_total_price}
                </td>
              </tr>
            ))}

            {/* <tr className="item-row item-row-last">
          <td
            className="Items"
            style={{ display: "flex", flexDirection: "row", padding: "4px" }}
          >
            <img
              src="../images/biscuit.jpg"
              alt=""
              style={{ maxWidth: "180px", borderRadius: 30 }}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
              }}
            >
              <p className="itemname">
                {" "}
                <strong>Choco Bar</strong>
              </p>
              <p className="itemdesc">STATIONERY - Notes</p>
            </div>
          </td>
          <td className="text-right" title="Amount">
            <Box style={{ position: "relative" }}>
              <Stack
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                className="cartqty"
                sx={{
                  width: "50%",
                }}
              >
                <RemoveIcon htmlColor="#dc3237" sx={{ cursor: "pointer" }} />
                <p className="qty">1</p>
                <AddIcon htmlColor="#dc3237" sx={{ cursor: "pointer" }} />
              </Stack>
              <Button sx={deleteicon} variant="contained" className="delete">
                <DeleteIcon />
              </Button>
            </Box>
          </td>
          <td className="text-right price" title="Price">
            499.00
          </td>
          <td className="text-right price" title="Total">
            499.00
          </td>
        </tr> */}
            <tr className="total-row info">
              <td className="text-right price" colspan="3">
                Sub Total
              </td>
              <td className="text-right price">{subtotalPrice}</td>
            </tr>
            <tr className="total-row info">
              <td className="text-right price" colspan="3">
                Delivery Price
              </td>
              <td className="text-right price">{shipping.shipping_price}</td>
            </tr>
            <tr className="total-row info">
              <td className="text-right price" colspan="3">
                Total
              </td>
              <td className="text-right price">{totalPrice}</td>
            </tr>
          </table>
          <Stack direction="row" justifyContent="end" alignItems="center">
            {/* <td className="text-right price">Checkout</td> */}
            {/* <td className="text-right price">898.00</td> */}
            <Button
              sx={checkout}
              className="checkoutbtn"
              variant="contained"
              type="button"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </Stack>
        </>
      )}
    </div>
  );
};

export default CartTable;
