require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios'
// import VueAxios from 'vue-axios'
import router from './Router/index'
import store from './Store/index';
import App from './App.vue';

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import can from './helpers/can';
const options = {
    timeout: 3000,
    position: "top-right",
  // You can set your default options here
};


Vue.use(Toast, options);

Vue.use(VueRouter);
Vue.use(axios);
Vue.prototype.$can =can;


//get Current BaseUrl
var rootUrl = window.location.origin

axios.defaults.withCredentials = true
axios.defaults.baseURL= rootUrl+'/api/'
//axios.defaults.baseURL= 'http://127.0.0.1:8000/api/'
const token = localStorage.getItem('token')
if(token){
  axios.defaults.headers.common['Authorization'] = token
}


// manage error and expire token

axios.interceptors.response.use(undefined, function (error) {
  if (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        store.dispatch('logout')
        return router.push('/')//redirect to login
    }
    else{
      store.commit('handle_error',JSON.parse(error.response.data.error));
    }
  }
})
axios.get('constants').then((response)=>{
  Vue.prototype.$constants =response.data;

    const app = new Vue({
      el: '#app',
      router,
      store,
      // components: { App }
    });
});