import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";
import { api } from "../api/api";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  app: appReducer,
  user: userReducer,
  cart: cartReducer,
});

export default rootReducer;
