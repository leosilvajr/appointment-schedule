import axios from "axios";

//Acesso via LOCALHOST informar o IP da maquina
const api = axios.create({
    baseURL: "http://192.168.18.4:3002/" 
});


export default api