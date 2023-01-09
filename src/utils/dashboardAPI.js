import PocketBase from 'pocketbase';

export async function getCampaignData() {
  const pb = new PocketBase(import.meta.env.VITE_DB);

  const resultList = await pb.collection('campaign').getList(1,50, { })

  return resultList;
}