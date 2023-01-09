import { userDataActions } from "./userData-slice";
import PocketBase from "pocketbase";

export const getCurrentCampaign = () => {
  return async (dispatch) => {
    const sendCurrentCampaignRequest = async () => {
      const pb = new PocketBase(import.meta.env.VITE_DB);
      const currentCampaign = await pb.collection("campaign").getList(1, 50);
      return currentCampaign;
    };

    try {
      const data = await sendCurrentCampaignRequest();
      console.log(data);
      dispatch(userDataActions.setCurrentCampaign({ cc: data }));
    } catch (err) {
      console.log(err);
    }
  };
};