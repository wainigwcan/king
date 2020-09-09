import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "./assets/scss/style.scss"
import './assets/iconfont/iconfont.css'

import axios from 'axios';

Vue.prototype.$http = axios.create({
  baseURL: "http://localhost:3000/web/api"
})

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import Card from './components/Card';
Vue.component("m-card", Card);

import ListCard from './components/ListCard';
Vue.component("list-card", ListCard);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
