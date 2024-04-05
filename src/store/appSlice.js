import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    // setUser: (state, action) => {
    //   const payload = action.payload;
    //   state.app.user = {
    //     id: payload.id,
    //     phone: payload.phone,
    //     currentOrderId: payload.currentOrderId,
    //   };
    // },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = appSlice.actions;

// export const selectTable = (state) => state.app;
export const selectIsLoading = (state) => state.app.isLoading;

export default appSlice.reducer;
