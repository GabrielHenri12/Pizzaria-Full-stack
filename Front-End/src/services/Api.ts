import axios from "axios"
import { getToken } from "./auth"

let url = "http://localhost:1210";

const api = axios.create({
    baseURL: url
})

api.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            api.defaults.headers.authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use((response) => {
    if (response.status === 401) {
        console.log("You are not authorized");
    }
    return response;
}, (error) => {
    if (error.response && error.response.data) {
        return Promise.reject(error.response.data);
    }
    return Promise.reject(error.message);
});

export default api;