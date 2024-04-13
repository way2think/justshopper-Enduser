import React, { useMemo } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
// import DeleteIcon from "@mui/icons-material/Delete";
import "./CartTable.css";
import { Box, Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemQty,
  removeItemQty,
  selectCartItems,
} from "../../store/cartSlice";

const CartTable = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector(selectCartItems);
  console.log("cart: ", cartItems);

  let delivery = 50; // for India

  const discount = 0;

  const subtotal = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.cart_total_price, 0);
  }, [cartItems]);

  const total = useMemo(() => subtotal + delivery, [delivery, subtotal]);

  const totalWeightInGrams = useMemo(() => {
    return cartItems.reduce(
      (totalWeight, item) => totalWeight + parseInt(item.dimensions.weight),
      0
    );
  }, [cartItems]);

  console.log("totalWeightInGrams: ", totalWeightInGrams);

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

  return (
    <div class="container m-auto mt-5">
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
              {item.cart_total_price.toFixed(2)}
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
          <td className="text-right price">{subtotal.toFixed(2)}</td>
        </tr>
        <tr className="total-row info">
          <td className="text-right price" colspan="3">
            Delivery Price
          </td>
          <td className="text-right price">{delivery.toFixed(2)}</td>
        </tr>
        <tr className="total-row info">
          <td className="text-right price" colspan="3">
            Total
          </td>
          <td className="text-right price">{total.toFixed(2)}</td>
        </tr>
      </table>
      <Stack direction="row" justifyContent="end" alignItems="center">
        {/* <td className="text-right price">Checkout</td> */}
        {/* <td className="text-right price">898.00</td> */}
        <Button sx={checkout} className="checkoutbtn" variant="contained">
          Checkout
        </Button>
      </Stack>
    </div>
  );
};

export default CartTable;
