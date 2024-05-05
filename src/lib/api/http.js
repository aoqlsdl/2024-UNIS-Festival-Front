import axios from 'axios';

export const http = axios.create({
	baseURL: import.meta.env.VITE_APP_API_URL,
	headers: {
		'Content-Type': 'application/json; charset=utf-8',
	},
});
