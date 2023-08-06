import axios from 'axios';

import { BASE_URL, API_KEY } from 'models/API/exchange-rates/constants';

const API = axios.create({
    baseURL: BASE_URL,
    params: {
        apikey: API_KEY,
    },
});

export default API;
