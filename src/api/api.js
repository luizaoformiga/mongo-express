import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:7758'
});

export default api;