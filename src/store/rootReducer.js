import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import { api } from "../api/api";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  app: appReducer,
});

export default rootReducer;
