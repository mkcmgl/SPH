import axios from 'axios';


import nprogress from 'nprogress';
import detail from '@/store/detail';
import 'nprogress/nprogress.css';


const requests = axios.create({
    baseURL: '/api',
    timeout: 5000,


})
requests.interceptors.request.use((config) => {
    console.log(detail)
    if (detail.state.uuid_token) {
        //请求头添加一个字段(userTempId):和后台老师商量好了
        config.headers.userTempId = detail.state.uuid_token;

    }
    console.log(detail.state.uuid_token);
    config.headers.userTempId = detail.state.uuid_token;
    nprogress.start();
    return config;
});
requests.interceptors.response.use((res) => {
    nprogress.done();
    return res.data;
}, (error) => {
    return Promise.reject(new Error('false'));
});
export default requests;