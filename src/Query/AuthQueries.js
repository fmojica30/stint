import pb from "../lib/pocketbase";

export const logIn = async (user, pass) => {
  await pb.collection("users").authWithPassword(user, pass);
};
