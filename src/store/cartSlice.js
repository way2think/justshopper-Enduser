import { createSlice } from "@reduxjs/toolkit";
import { errorNotification } from "../utils/notifications";

const initialState = {
  cartItems: [],
  totalQuantity: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      // if (state.totalQuantity <= 5 - 1) {
      const newItem = action.payload;
      const index = state.cartItems.findIndex((item) => item.id === newItem.id);
      if (index === -1 || state.cartItems.length === 0) {
        console.log(";newItem: ", newItem);
        const updatedNewItem = {
          ...newItem,
          cart_quantity: 1,
          // discount_price: newItem.discount_price || newItem.item_price, // from orders page
          cart_total_price: newItem.discount_price, // item_price - from orders page
        };
        state.totalQuantity += 1;
        // console.log("totalQuantity-ad:", state.totalQuantity);
        state.cartItems.push(updatedNewItem);
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      } else {
        errorNotification("Already added, check cart page!!!");
      }
      // } else {
      //   errorNotification(
      //     "Only 5 items, you can add. For bulk/foriegn orders, please contact Agan Adhigaram (+91 9363123828)"
      //   );
      // }
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalQuantity = 0;
      localStorage.clear();
    },
    addItemQty: (state, action) => {
      // console.log("totalQuantity-ad:", state.totalQuantity);
      // if (state.totalQuantity <= 5 - 1) {
      const cartItem = action.payload;
      const index = state.cartItems.findIndex((item) => {
        return item.id === cartItem.id;
      });

      if (index !== -1) {
        state.totalQuantity += 1;
        state.cartItems[index].cart_quantity += 1;
        state.cartItems[index].cart_total_price =
          state.cartItems[index].cart_quantity *
          state.cartItems[index].discount_price;

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
      // } else {
      //   errorNotification(
      //     "Only 5 items, you can add. For bulk/foriegn orders, please contact Agan Adhigaram (+91 9363123828)"
      //   );
      // }
    },
    removeItemQty: (state, action) => {
      // console.log("totalQuantity-re:", state.totalQuantity);
      const cartItem = action.payload;
      const index = state.cartItems.findIndex(
        (item) => item.id === cartItem.id
      );

      if (index !== -1) {
        const cart_quantity = state.cartItems[index].cart_quantity;
        if (cart_quantity === 1) {
          // Use filter to remove the item from the array
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );
          state.totalQuantity -= 1;
        } else {
          // Create a new array with the quantity decremented
          // state.cartItems[index] = {
          //   ...state.cartItems[index],
          //   cart_quantity: cart_quantity - 1,
          // };
          state.cartItems[index].cart_quantity -= 1;
          state.cartItems[index].cart_total_price =
            state.cartItems[index].cart_quantity *
            state.cartItems[index].discount_price;
          state.totalQuantity -= 1;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeItem: (state, action) => {
      const cartItem = action.payload;
      // console.log("removeItem:", cartItem);
      const index = state.cartItems.findIndex(
        (item) => item.id === cartItem.id
      );

      if (index !== -1) {
        const cart_quantity = state.cartItems[index].cart_quantity;

        state.cartItems = state.cartItems.filter(
          (item) => item.id !== cartItem.id
        );
        state.totalQuantity -= cart_quantity;

        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    setCartItems: (state, action) => {
      const cartItems = action.payload;
      console.log("cartItems: ", cartItems);
      if (cartItems) {
        if (cartItems.length > 0) {
          if (cartItems.length === 1) {
            state.totalQuantity = cartItems[0].cart_quantity;
          } else {
            const totalQty = cartItems.reduce(
              (a, b) => a.cart_quantity + b.cart_quantity
            );
            console.log("totalQuantity: ", totalQty);
            state.totalQuantity = totalQty;
          }
        }
        state.cartItems = [...cartItems];
      }
      // console.log("cartItems--:", cartItems, state.totalQuantity);
    },
  },
});

export const {
  addItem,
  addItemQty,
  clearCart,
  removeItemQty,
  setItemQty,
  removeItem,
  setCartItems,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart;
export const selectCartSize = (state) => state.cart.totalQuantity;

export default cartSlice.reducer;
