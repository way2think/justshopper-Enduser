import React, { useState, useMemo, useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// import DeleteIcon from "@mui/icons-material/Delete";
import "./CartTable.css";
import { Box, Button, Checkbox, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemQty,
  clearCart,
  removeItem,
  removeItemQty,
  selectCartItems,
  setCartItems,
} from "../../store/cartSlice";
import { displayRazorpay } from "../../services/razorpay-http";
import { selectUser } from "../../store/userSlice";
import { useCreateOrderMutation } from "../../api/order";
import { setIsLoading, setIsLoadingWithMessage } from "../../store/appSlice";
import {
  errorNotification,
  successNotification,
  warningNotification,
} from "../../utils/notifications";
import { useNavigate } from "react-router-dom";
import { selectCategory } from "../../api/api";
import { useCreateRazorpayPaymentOrderMutation } from "../../api/payment";
import { useLazyGetMultiProductByIdsQuery } from "../../api/product";
import AddressModal from "../../Reusable/AddressModal";
import { formatAddress } from "../../utils";
import { shipping_charges } from "../../utils/constants";

const checkoutStyle = {
  background: "#dc3237",
  color: "#fff",
  fontSize: "18px",
  marginTop: "10px",
  "&:hover": {
    border: "2px solid #dc3237",
    background: "transparent",
    color: "#dc3237",
    fontSize: "18px",
    // "@media only screen and (min-width: 320px) and (max-width: 600px)": {
    //   width: "100%",
    // },
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

const CartTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [createOrder, {}] = useCreateOrderMutation();
  const [createRazorpayOrder, {}] = useCreateRazorpayPaymentOrderMutation();
  const [getMultiProductByIds, result, lastPromiseInfo] =
    useLazyGetMultiProductByIdsQuery();
  const user = useSelector(selectUser);
  const categoryList = useSelector(selectCategory);
  const { cartItems } = useSelector(selectCartItems);
  // console.log("user: ", user);
  const [open, setOpen] = useState(false);
  const [oneDayDelivery, setOneDayDelivery] = useState(false);
  const [checkout, setCheckout] = useState({
    canCheckout: true,
    message: "",
  });

  const tax = {
    total_tax_price: 0,
    tax_cgst_percentage: 0,
    tax_sgst_percentage: 0,
    tax_total_percentage: 0,
  }; // for India

  useEffect(() => {
    // console.log("selectedaddre: ", user.selected_address.state);
    if (user.selected_address.state !== "Tamil Nadu") {
      setOneDayDelivery(false);
    }
  }, [user.selected_address.state]);

  // console.log("cartItems: ", cartItems);

  const {
    subtotalPrice,
    // totalPrice,
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

    // const totalPrice =
    //   subtotalPrice + +shipping.shipping_price + tax.total_tax_price;

    const totalProfitPrice = totalDiscountPrice - totalActualPrice;

    return {
      subtotalPrice: subtotalPrice.toFixed(2),
      // totalPrice: totalPrice.toFixed(2),
      totalWeightInGrams: totalWeightInGrams,
      totalQuantity,
      totalActualPrice: totalActualPrice.toFixed(2),
      totalSellingPrice: totalSellingPrice.toFixed(2),
      totalDiscountPrice: totalDiscountPrice.toFixed(2),
      totalProfitPrice: totalProfitPrice.toFixed(2),
    };
  }, [cartItems]);

  // console.log("subtotalPrice: ", subtotalPrice, totalDiscountPrice);

  const shipping = useMemo(() => {
    // const totalWeight = 1000;
    const totalWeight = parseFloat(totalWeightInGrams);
    const { selected_address } = user;
    const country = shipping_charges.countries[selected_address.country];

    if (!country) {
      setCheckout({
        canCheckout: false,
        message: `Currently we don't support Country: ${selected_address.country}`,
      });
      return;
    }

    const state =
      country.states[selected_address.state] || country.states["others"];

    const city = state.cities[selected_address.city] || state.cities["others"];

    let weightBracket = "1kg";
    let price = 0;
    let multiplier = 1;

    if (totalWeight > 1000) {
      // 2000, 5500
      multiplier = Math.ceil(totalWeight / 1000); // 2, 5.5 -> 2, 6
    } else {
      weightBracket =
        totalWeight < 250
          ? "250g"
          : totalWeight <= 500
          ? "500g"
          : totalWeight <= 1000 && "1kg";
    }

    price = city[weightBracket];

    if (!price) {
      setCheckout({
        canCheckout: false,
        message: `Shipping charges not available for this address.`,
      });
      return;
    }

    console.log("oneDayDelivery shipping: ", oneDayDelivery);

    const deliveryType = oneDayDelivery
      ? "one_day_delivery"
      : "standard_delivery";
    const deliveryPrice = oneDayDelivery
      ? price.one_day_delivery_charge
      : price.standard_delivery_charge;

    if (deliveryPrice === "NA") {
      setCheckout({
        canCheckout: false,
        message: `One Day Delivery is not available for this address, please try standard delivery or try with another shipping address`,
      });
      return { shipping_type: deliveryType, shipping_price: "NA" };
    }

    setCheckout({
      canCheckout: true,
      message: "",
    });

    return {
      shipping_type: deliveryType,
      shipping_price: parseFloat(deliveryPrice * multiplier).toFixed(2),
    };
  }, [totalWeightInGrams, user, oneDayDelivery]);

  const { totalPrice } = useMemo(() => {
    const totalPrice =
      parseFloat(subtotalPrice) +
        parseFloat(shipping?.shipping_price) +
        parseFloat(tax.total_tax_price) || 0;

    return {
      totalPrice:
        totalPrice === 0
          ? (
              parseFloat(subtotalPrice) + parseFloat(tax.total_tax_price)
            ).toFixed(2)
          : parseFloat(totalPrice).toFixed(2),
    };
  }, [shipping?.shipping_price, subtotalPrice, tax.total_tax_price]);

  // console.log("shipping price: ", shipping);

  const handleAddItemQty = (product) => {
    dispatch(addItemQty(product));
  };

  const handleRemoveItemQty = (product) => {
    dispatch(removeItemQty(product));
  };

  const handleCheckout = async () => {
    if (user.isAuthenticated) {
      if (checkout.canCheckout) {
        console.log("subtotalPrice: ", subtotalPrice);
        if (subtotalPrice < 100) {
          errorNotification(
            "Minimum order value must be Rs. 100, Please add more products."
          );
        } else {
          // dispatch(setIsLoading(true));
          dispatch(
            setIsLoadingWithMessage({
              isLoading: true,
              isLoadingMessage: "Your payment is loading, Please wait!!!",
            })
          );
          // console.log("cartItems: ", cartItems);
          // 1. check whether the items in cart is available, if yes, proceed payment, in webhook, decrement the total_quantity
          const result = await getMultiProductByIds(cartItems);
          if (result.data) {
            let proceedPayment = true;
            // console.log("result: ", result.data);

            const products = result.data;
            let outOfStock = 0;
            products.forEach((product) => {
              if (product.total_quantity <= 0) {
                dispatch(removeItem(product));
                errorNotification(`${product.name} is out of stock`);
                outOfStock++;
              } else {
                // more than 0, that is stock available.
                // now we have to check the cart_quantity for each product, if its exceeds the current stock, then update the value to the current quantity
                const currentCartItems = [...cartItems];
                const cartItemIndex = currentCartItems.findIndex(
                  (item) => item.id === product.id
                );

                if (
                  currentCartItems[cartItemIndex].cart_quantity >
                  product.total_quantity
                ) {
                  warningNotification(
                    `Current stock quantity is greater than available stock, stock quantity recalculated`
                  );
                  console.log(
                    currentCartItems,
                    cartItemIndex,
                    currentCartItems[cartItemIndex].cart_quantity
                  );
                  const updatedCartItem = {
                    ...currentCartItems[cartItemIndex],
                    cart_quantity: product.total_quantity,
                    cart_total_price:
                      product.total_quantity * product.discount_price,
                  };

                  const updatedCartItems = [
                    ...currentCartItems.slice(0, cartItemIndex),
                    updatedCartItem,
                    ...currentCartItems.slice(cartItemIndex + 1),
                  ];

                  dispatch(setCartItems(updatedCartItems));
                  dispatch(setIsLoading(false));
                  proceedPayment = false;
                  return;
                }
              }
            });

            console.log("outOfStock: ", outOfStock, proceedPayment);

            if (outOfStock > 0 || !proceedPayment) {
              dispatch(setIsLoading(false));
              return;
            } else {
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
                  billing_address: formatAddress(user.address),
                  shipping_address: formatAddress(user.selected_address),
                },
                notifications: {
                  isConfirmationEmailSent: false,
                  isDispatchedEmailSent: false,
                  // isDeliveredEmailSent: false,
                },
              };
              // console.log("order: ", order);
              // 2. create order in firebase - order_id
              const resultOrderCreation = await createOrder(order);
              if (resultOrderCreation.data) {
                console.log("resultOrderCreation: ", resultOrderCreation.data);
                const { data: resultOrder } = resultOrderCreation;
                // 3. create razorpay payment order using firebase functions - get razorpay payment: order_id
                const resultRzpOrderCreation = await createRazorpayOrder({
                  order_id: resultOrder.id,
                  amount: resultOrder.total_price,
                });
                if (resultRzpOrderCreation.data) {
                  const { data: resultRzpOrder } = resultRzpOrderCreation;
                  // 4. pass it to razorpay checkout api, to open modal
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
                      // 5. in handler, just show the payment success or failure
                      // 6. after completing, in webhook, we will get success or failure, update the firebase order with the payment details - done in server
                      // 7. add the order in notifications for real-time listener - done in server
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
                    retry: {
                      enabled: false,
                    },
                    timeout: 300,
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
                // console.log("resultOrderCreation-error: ", resultOrderCreation.error);
                dispatch(setIsLoading(false));
                errorNotification(resultOrderCreation.error.message);
              }
            }
          } else {
            console.log("err: ", result.error);
            errorNotification("Network error, please try after sometime");
          }
        }
      } else {
        errorNotification(checkout.message);
      }
    } else {
      errorNotification("Please login to checkout");
    }
  };

  return (
    <div class="container m-auto mt-3">
      <AddressModal open={open} setOpen={(val) => setOpen(val)} />
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
                <td
                  className="Items"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "4px",
                  }}
                >
                  <img
                    src={item.images[0] || "../images/dummy-image.jpg"}
                    alt={item.name}
                    style={{
                      maxWidth: "180px",
                      borderRadius: 30,
                      cursor: "pointer",
                    }}
                    onClick={() => navigate(`/product/${item.id}`)}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      textAlign: "left",
                      marginLeft: "15px",
                    }}
                  >
                    <p className="itemname">
                      <strong>{item.name}</strong>
                    </p>
                    <p className="itemdesc">Category: {item.category}</p>
                    {item.theme && (
                      <p className="itemdesc">Theme: {item.theme}</p>
                    )}
                    {item.color && (
                      <p className="itemdesc">
                        Color: {item.color}{" "}
                        <span
                          style={{
                            width: "35px",
                            height: "35px",
                            borderRadius: "50%",
                            backgroundColor: item.color,
                            cursor: "pointer",
                            marginRight: "10px",
                          }}
                        ></span>
                      </p>
                    )}
                  </div>
                </td>
                <td className="text-right" title="Amount">
                  <Box
                    className="boxitems"
                    style={{
                      position: "relative",
                      // display: "flex",
                      // justifyContent: "left",
                      // alignItems: "center",
                      // "@media only screen and (min-width: 320px) and (max-width: 768px)":
                      //   {
                      //     display: "flex",
                      //     justifyContent: "flex-end",
                      //     alignItems: "center",
                      //   },
                    }}
                  >
                    <div className="qtyFlex">
                      <Stack
                        direction="row"
                        justifyContent="space-around"
                        alignItems="center"
                        className="cartqty"
                        sx={{
                          width: "100%",
                          "@media only screen and (min-width: 320px) and (max-width: 600px)":
                            {
                              width: "100%",
                            },
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
              <td className="text-right price">
                {shipping?.shipping_price || "NA"}
              </td>
            </tr>

            <tr className="total-row info">
              <td className="text-right price" colspan="3">
                <span className="ml-auto">Total</span>
              </td>
              <td className="text-right price">{totalPrice}</td>
            </tr>
            <tr className="total-row info">
              <td className="text-right price" colspan="10">
                {" "}
                {/* Adjust colspan to cover all columns */}
                <Stack
                  direction={{ xs: "column", sm: "row" }} // Switch to column layout on extra small screens (mobile)
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Stack
                    direction="column" // Switch to column layout on extra small screens (mobile)
                    justifyContent="space-between"
                    alignItems="flex-start"
                  >
                    <div>
                      {user.isAuthenticated &&
                        user?.selected_address?.state === "Tamil Nadu" && (
                          <div className="d-flex align-items-center">
                            {/* Checkbox for one-day delivery */}
                            <Checkbox
                              checked={oneDayDelivery}
                              onChange={(e) =>
                                setOneDayDelivery(e.target.checked)
                              }
                            />
                            <label className="oneday">
                              One-Day Delivery
                              <span className="tamilnadu">
                                {" "}
                                (only available in Tamil Nadu)
                              </span>
                            </label>
                          </div>
                        )}
                    </div>

                    {user.isAuthenticated && (
                      <>
                        <Stack
                          direction={{ sm: "column", md: "row", lg: "row" }} // Switch to column layout on extra small screens (mobile)
                          justifyContent="space-between"
                          alignItems="flex-start"
                        >
                          <p className="delivery-address">Delivery Address:</p>
                          <div className="d-flex flex-column justify-content-start">
                            <span className="text-start ml-3 address">
                              <div>{user?.selected_address?.line}</div>
                              <div>
                                {user?.selected_address?.city +
                                  ", " +
                                  user?.selected_address?.state}
                              </div>
                              <div>
                                {user?.selected_address?.country +
                                  " - " +
                                  user?.selected_address?.pincode}
                              </div>
                            </span>
                            <small
                              className="changeaddress"
                              role="button"
                              onClick={() => setOpen(true)}
                            >
                              Change Address
                            </small>
                          </div>
                        </Stack>
                      </>
                    )}
                  </Stack>
                  <Button
                    sx={checkoutStyle}
                    className="checkoutbtn"
                    variant="contained"
                    type="button"
                    onClick={handleCheckout}
                  >
                    Buy
                  </Button>
                </Stack>
              </td>
            </tr>
          </table>

          {/* <Stack direction="row" justifyContent="end" alignItems="center">
            <Button
              sx={checkoutStyle}
              className="checkoutbtn"
              variant="contained"
              type="button"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </Stack> */}
        </>
      )}
    </div>
  );
};

export default CartTable;
