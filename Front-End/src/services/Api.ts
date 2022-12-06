import axios from "axios"
import { getToken } from "./auth"

let url = "http://backend.gabrieldev.online";
const token = getToken();
const api = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

api.interceptors.request.use(
    config => {
        
        if (token) {
            api.defaults.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

export default api;