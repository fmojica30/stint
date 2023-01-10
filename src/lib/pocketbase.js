import Pocketbase from "pocketbase";

const pb = new Pocketbase(import.meta.env.VITE_DB);

export default pb;