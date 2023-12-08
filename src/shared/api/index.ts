import axios from 'axios';

import { AxiosParams } from './types';
import { BASE_URL } from './constants';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
});

const swapiAxios = <T = unknown>(endpoint: string, params?: AxiosParams) => {
    const { query, method = 'GET' } = params || {};
    let url = endpoint;

    if (query) {
        url += `?${new URLSearchParams(query).toString()}`;
    }

    return instance<T>({ url, method })
        .then(res => res.data)
        .catch(err => {
            throw err;
        });
};

export default swapiAxios;
