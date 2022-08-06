import axios from "axios";
import Path from "./Path.json";

let getData = () => {
  return axios.get(Path.URL);
};

let requests = {
  getData,
};
export default requests;
