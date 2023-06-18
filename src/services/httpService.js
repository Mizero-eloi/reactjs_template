import axios from "axios";
import { toast } from "react-toastify";
import config from "../config.json";

const TOKEN_KEY = config.tokenKey;

console.log("H-frisky token", localStorage.getItem(TOKEN_KEY));
axios.defaults.headers.common["x-auth-token"] = localStorage.getItem(TOKEN_KEY);
axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("The error occured", error);
    toast.error("Unexpected error occured !");
  }

  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
