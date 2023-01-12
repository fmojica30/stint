import { authActions } from "./auth-slice";
import pb from "../lib/pocketbase";

export const PBauthenticate = (authData) => {
  return async (dispatch) => {

    try {
      await pb
        .collection("users")
        .authWithPassword(authData.email, authData.pass);
      dispatch(authActions.authenticate());
    } catch (error) {
      console.log(error);
    }

    dispatch(authActions.loading());
  };
};
