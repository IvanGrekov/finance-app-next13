import axios from 'axios';

import { BASE_URL, API_KEY } from 'models/API/crypto/constants';

const API = axios.create({
    baseURL: BASE_URL,
    params: {
        tsym: 'USD',
    },
    headers: {
        authorization: `Apikey ${API_KEY}`,
    },
});

export default API;
