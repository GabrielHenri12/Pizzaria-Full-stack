import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:1210"
})

export default api;