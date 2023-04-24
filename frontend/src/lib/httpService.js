import axios from "axios";
import Cookies from "js-cookie";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_URL;

axios.interceptors.request.use(function (config) {
  const token = Cookies.get("access_token");
  if (token) {
    config.headers.Authorization = "Bearer " + token;
  }
  return config;
});

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default httpService;
