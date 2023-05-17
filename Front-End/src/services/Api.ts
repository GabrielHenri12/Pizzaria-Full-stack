import axios from "axios"
import { getToken } from "./auth"

let url = "https://pizzaria-full-stack-production.up.railway.app";
const token = getToken();
const api = axios.create({
    baseURL: url,
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
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