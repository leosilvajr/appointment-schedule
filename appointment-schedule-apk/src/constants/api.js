import axios from "axios";

//Acesso via LOCALHOST
const api = axios.create({
    baseURL: "http://192.168.18.4:3002/" 
});


export default api