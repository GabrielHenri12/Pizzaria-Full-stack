import axios from "axios"
import { getToken } from "./auth"

let url = "https://pizzaria-full-stack-production.up.railway.app";
const token = getToken();
const api = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export default api;