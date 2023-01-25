import axios from "axios"
import { getToken } from "./auth"

let url = "http://localhost:1210";
const token = getToken();
const api = axios.create({
    baseURL: url,
    headers: {
        Authorization: `Bearer ${token}`
    }
});

export default api;