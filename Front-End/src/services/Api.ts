import axios from "axios";
import { getToken } from "./auth";
import { toast } from 'react-toastify';

let url = "https://apigh.azurewebsites.net/";
let urlLocal = "http://localhost:8080/"

const token = getToken();
const api = axios.create({
    baseURL: urlLocal,
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
api.interceptors.response.use(
    response => response,
    error => {
        toast.error(error.response.data.value)
        return Promise.reject(error);
    }
);


export default api;