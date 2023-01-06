import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  isLoading: false,
  auth: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    authenticate(state) {
      state.isAuthenticated = true;
    },
    loading(state) {
      state.isLoading = !state.isLoading;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
