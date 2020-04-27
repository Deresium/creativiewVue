import axios from "axios";

export default axios.create({
    baseURL: process.env.VUE_APP_URL_CREATIVIEW,
    withCredentials: process.env.NODE_ENV === 'development'
});