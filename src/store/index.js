import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth-slice";
import userDataSlice from "./userData-slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    userData: userDataSlice
  },
});

export default store;
