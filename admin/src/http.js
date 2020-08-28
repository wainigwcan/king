import axios from 'axios'
import Vue from "vue";
import router from './router'
const http = axios.create({
    baseURL: "http://localhost:3000/admin/api"
});

http.interceptors.request.use(
    //在请求之前做点什么 比如加入token
    config => {
        if (localStorage.token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = "Bearer " + localStorage.token
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

http.interceptors.response.use(
    config => {
        return config;
    },
    error => {
        if (error.response.data.message) {
            Vue.prototype.$message({
                type: "error",
                message: error.response.data.message
            });
        }
        if (error.response.status) {
            router.push("/login");
        }
        return Promise.error(error);
    })

export default http;