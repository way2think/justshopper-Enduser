import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  phone: "",
  role: "",
  address: {
    door_no: "",
    street_name: "",
    district: "",
    pincode: "",
  },
  favourite: [],
  saved_addresses: [],
  shipping_addresses: [],
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const payload = action.payload;
      // console.log("pauload: ", payload);
      state.id = payload.id;
      state.name = payload.name;
      state.email = payload.email;
      state.phone = payload.phone;
      state.role = payload.role;
      state.address = payload.address;
      state.shipping_addresses = payload.shipping_addresses;
      state.favourite = payload.favourite;
      state.saved_addresses = payload.saved_addresses;
      state.isAuthenticated = payload.isAuthenticated;
    },
    setUserLogout: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.phone = "";
      state.role = "";
      state.address = {
        door_no: "",
        street_name: "",
        district: "",
        pincode: "",
      };
      state.favourite = [];
      state.saved_addresses = [];
      state.shipping_addresses = [];
      state.isAuthenticated = false;
      localStorage.removeItem("cartItems"); // to clear items, so another user can login
    },
    updateShippingAddress: (state, action) => {
      const payload = action.payload;
      state.shipping_addresses = payload;
    },
  },
});

export const { setUser, setUserLogout, updateShippingAddress } =
  userSlice.actions;

// export const selectTable = (state) => state.app;
export const selectUser = (state) => state.user;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectFavourite = (state) => state.user.favourite;
export const selectSavedAddress = (state) => state.user.saved_addresses;

export default userSlice.reducer;
