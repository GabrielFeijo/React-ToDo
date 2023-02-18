import axios from "axios";

const taskFetch = axios.create({
    baseURL: 'url-da-api-aqui',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default taskFetch;