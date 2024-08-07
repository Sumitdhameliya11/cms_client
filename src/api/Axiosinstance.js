import axios from "axios";
const token = localStorage.getItem("token");
const AxiosInstance  = axios.create({
    baseURL:'http://localhost/cms/server',
    headers: {
        authorization: `Bearer ${token}`
    },
})

export default AxiosInstance;