const PocketBase = require("pocketbase/cjs");
require("cross-fetch/polyfill");

const pb = new PocketBase("http://127.0.0.1:8090/");

const test = async () => {
  const autdData = await pb
    .collection("users")
    .authWithPassword("test_user1", "password");

  console.log(pb.authStore.isValid);
  console.log(pb.authStore.token);
  console.log(pb.authStore.model.id);
  console.log(pb.authStore);

  //const goalData = await pb.collection("goal").getList(1, 50);
  //console.log(goalData);
};


test();