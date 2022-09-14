import axios  from "axios";
//自动给同一个vue项目的所有请求添加请求头
axios.interceptors.request.use(function (config) {
	let token = localStorage.getItem('token');
	if (token) {
		config.headers['Authorization'] = token;
	}
	return config;
})

export default axios
