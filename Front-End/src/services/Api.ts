import axios from "axios"
import { getToken } from "./auth"

const api = axios.create({
    baseURL: "http://localhost:1210"
})

api.interceptors.request.use(async config => {
    let token = getToken();
    if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
    }
    return config;
  });

export default api;