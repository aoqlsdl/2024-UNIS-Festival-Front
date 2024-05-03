import axios from 'axios';

export const http = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
	contentType: 'application/json; charset=utf-8;',
});

http.defaults.withCredentials = true;
