import { combineReducers } from "@reduxjs/toolkit";
import appReducer from "./appSlice";
import userReducer from "./userSlice";
import { api } from "../api/api";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  app: appReducer,
  user: userReducer,
});

export default rootReducer;
