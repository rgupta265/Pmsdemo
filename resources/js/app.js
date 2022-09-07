require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios'
// import VueAxios from 'vue-axios'
import router from './Router/index'
import store from './Store/index';
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
import can from './helpers/can';
import moment from 'moment';
Vue.filter('formatDate', function(value) {
  if (value) {
      return moment(String(value)).format('DD/MM/YYYY hh:mm:ss a')
  }
});
Vue.filter('DateChange', function(value) {
  if (value) {
      return moment(String(value)).format('DD/MM/YYYY')
  }
});
Vue.filter('humanReadableTime', function (value) {
  return moment(value).fromNow();
});//get time like 2hrs ago,50 seconds ago


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
import { VuejsDatatableFactory } from 'vuejs-datatable';
Vue.use(VuejsDatatableFactory);
Vue.component('pagination', require('laravel-vue-pagination'));

axios.get('constants').then((res)=>{
  Vue.prototype.$constants =res.data;

    const app = new Vue({
      el: '#app',
      router,
      store,
    });
    
});