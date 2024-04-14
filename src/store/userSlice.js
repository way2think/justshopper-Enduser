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
  saved_address: [],
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
      state.favourite = payload.favourite;
      state.saved_address = payload.saved_address;
      state.isAuthenticated = payload.isAuthenticated;
    },
    setUserLogout: (state) => {
      state.id = "";
      state.name = "";
      state.email = "";
      state.phone = "";
      state.role = "";
      state.favourite = [];
      state.saved_address = [];
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, setUserLogout } = userSlice.actions;

// export const selectTable = (state) => state.app;
export const selectUser = (state) => state.user;
export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectFavourite = (state) => state.user.favourite;
export const selectSavedAddress = (state) => state.user.saved_address;

export default userSlice.reducer;
