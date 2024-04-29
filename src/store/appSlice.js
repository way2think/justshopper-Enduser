import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isLoadingMessage: "",
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
    setIsLoadingWithMessage: (state, action) => {
      const obj = action.payload;
      state.isLoading = obj.isLoading;
      state.isLoadingMessage = obj.isLoadingMessage;
    },
  },
});

export const { setIsLoading, setIsLoadingWithMessage } = appSlice.actions;

// export const selectTable = (state) => state.app;
export const selectIsLoadingWithMessage = (state) => state.app;

export default appSlice.reducer;
