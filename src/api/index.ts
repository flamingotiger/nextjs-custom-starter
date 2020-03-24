import axios from 'axios';

axios.defaults.baseURL = process.env.BACKEND_URL;
axios.defaults.withCredentials = true;
axios.interceptors.response.use(
	response => response.data,
	error => {
		switch (error.response.status) {
			case 422:
				alert(error.response.data.meta.message);
				break;
			case 401:
				alert(error.response.data.meta.message);
				break;
			case 500:
				alert('Interval server error! Try again!');
				break;
			default:
				alert(error.response.data.meta.message);
				break;
		}
	}
);

export default axios;
