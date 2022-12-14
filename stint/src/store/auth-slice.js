import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthenticated: false,
  isLoading: false
}

const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    authenticate(state) {
      state.isAuthenticated = true;
    }, 
    loading(state) {
      state.isLoading = !state.isLoading;
    }
  }
})

const PBauthenticate = (authData) => {
  return async (dispatch) => {
    const email = authData.email;
    const password = authData.password;

    dispatch(authActions.loading);

    try {
      const authData = await pb.collection("users").authWithPassword(email, password)
      dispatch(authActions.authenticate);
    } catch (error) {
      console.log(error);
    }

    dispatch(authActions.loading);
    
  }
}
export const authActions = authSlice.actions;
export default authSlice.reducer;