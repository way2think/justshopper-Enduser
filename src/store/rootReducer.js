import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import { apiSlice } from "../api/apiSlice";

const rootReducer = combineReducers({
  [apiSlice.reducerPath]: apiSlice.reducer,
  app: appReducer,
});

export default rootReducer;
