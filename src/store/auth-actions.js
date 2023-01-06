import { authActions } from "./auth-slice";
import PocketBase from "pocketbase";

export const PBauthenticate = (authData) => {
  return async (dispatch) => {
    dispatch(authActions.loading);

    const sendAuthRequest = async () => {
      const pb = new PocketBase(import.meta.env.VITE_DB);
      await pb
        .collection("users")
        .authWithPassword(authData.email, authData.pass);
      return pb;
    };

    try {
      const pb = await sendAuthRequest();
      dispatch(authActions.authenticate());
      window.location.reload(false);
    } catch (error) {
      console.log(error);
    }

    dispatch(authActions.loading);

  };
};
