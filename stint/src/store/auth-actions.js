import { authActions } from "./auth";
import PocketBase from 'pocketbase';

export async function authenticatePb() {
  return async (dispatch) => {

    const sendRequest = async () => {
      const pb = new PocketBase("http://127.0.0.1:8090/");
      const authData = await pb.collection('users').authWithPassword('test_user1', "password");

    }

  }


}