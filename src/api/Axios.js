import axios from "axios";

const Axios = axios.create({
    baseURL: "https://localhost:7255/",
    timeout: 5000
});

export default Axios;