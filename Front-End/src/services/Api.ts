import axios from "axios"
import { getToken } from "./auth"

let url = "https://apigh.azurewebsites.net/";
let urlLocal = "http://localhost:8080/"

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