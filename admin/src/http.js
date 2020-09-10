import axios from 'axios';
import Vue from 'vue';
import router from './router'
const http = axios.create({
    // baseURL: "http://localhost:3000/admin/api"
    baseURL: process.env.VUE_APP_API_URL || '/admin/api'
});

// 请求拦截
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    if (localStorage.token) {
        config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// 响应拦截
http.interceptors.response.use(res => {  // 该处为后端返回整个内容
    return res;
},
    err => {
        if (err.response.data.message) {
            Vue.prototype.$message({
                type: "error",
                message: `${err.response.data.message}`
            });
        }
        if (err.response.status === 401) {
            router.push('/login')
        }
        return Promise.reject(err)
    }
)

export default http;