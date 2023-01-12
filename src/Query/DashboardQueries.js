import pb from "../lib/pocketbase";

export const getCampaigns = async () => {
  try {
    const data = await pb.collection("campaign").getList(1,50);
    return data.items[0].name;
  } catch (err) {
    return err;
  }
}

export const getCurrentCampaign = async () => {
  try {
    const authData = JSON.parse(localStorage.getItem('pocketbase_auth'));
    const id = authData.model.id;
    const data = await pb.collection("campaign").getFirstListItem(`active = true` );
    return data;
  } catch (err) {
    return err;
  }
}