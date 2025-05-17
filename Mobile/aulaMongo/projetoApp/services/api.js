import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://obscure-cod-jxgj5xg6v9hq4gr-3000.app.github.dev/api/produtos',
    timeout: 5000
});