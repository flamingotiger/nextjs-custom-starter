import axios from 'axios';

axios.defaults.baseURL = process.env.BACKEND_URL;
axios.defaults.withCredentials = true;
axios.interceptors.response.use(
	response => response.data,
	error => error
);

export default axios;
