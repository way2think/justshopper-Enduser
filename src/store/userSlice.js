import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  email: "",
  phone: "",
  role: "",
  address: {
    id: "",
    line: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  },
  favourite: [],
  shipping_addresses: [],
  isAuthenticated: false,
  selected_address: {
    id: "",
    line: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const payload = action.payload;
      let selectedAddress = {
        id: "",
        line: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
      };
      if (payload.shipping_addresses.length > 0) {
        let activeAddress = payload.shipping_addresses.filter(
          (add) => add.is_active
        );
        selectedAddress = activeAddress[0];
      } else {
        selectedAddress = {
          name: payload.name,
          ...payload.address,
        };
      }
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
      state.selected_address = selectedAddress;
    },
    setUserLogout: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.phone = "";
      state.role = "";
      state.address = {
        id: "",
        line: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
      };
      state.favourite = [];
      state.shipping_addresses = [];
      state.isAuthenticated = false;
      state.selected_address = {
        id: "",
        line: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
      };
    },
    updateShippingAddress: (state, action) => {
      const payload = action.payload;
      state.shipping_addresses = payload;
    },
    updateSelectedAddress: (state, action) => {
      const payload = action.payload;
      state.selected_address = payload;
    },
  },
});

export const {
  setUser,
  setUserLogout,
  updateShippingAddress,
  updateSelectedAddress,
} = userSlice.actions;

// export const selectTable = (state) => state.app;
export const selectUser = (state) => state.user;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectFavourite = (state) => state.user.favourite;
export const selectSavedAddress = (state) => state.user.selected_address;

export default userSlice.reducer;
