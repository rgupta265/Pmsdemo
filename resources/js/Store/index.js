import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    error : '',
    userDetails:{},
    webDetails: {}
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token){
      state.status = 'success'
      state.token = token
    },
    set_user(state,user){
      state.user = user
    },
    handle_error(state,error){
      state.error = error
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
    setUserDetails(state,userDetails){
      state.userDetails = userDetails
    },
    setWebDetails(state,webDetails){
      state.webDetails = webDetails
    },
  },
  actions: {
    //declare all mapActions methods routes of different methods (GET,POST etc)
    login({commit}, user){
        return new Promise((resolve, reject) => {
          commit('auth_request')
          axios({url: 'login', data: user, method: 'POST' })
          .then(resp => {
            const token = 'Bearer '+resp.data.access_token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            commit('set_user',user)
            commit('handle_error', '')
            resolve(resp)
          })
          .catch(err => {
            localStorage.removeItem('token')
            reject(err)
          })
        })
    },
    Register({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'register', data: user, method: 'POST' })
        .then(resp => {
          const token = 'Bearer '+resp.data.access_token
          const user = resp.data.user
          localStorage.setItem('token', token)
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', token, user)
          commit('handle_error', '')
          resolve(resp)
        })
        .catch(error => {
          localStorage.removeItem('token')
          reject(error)
        })
      })
    },
    ChangePassword({commit}, user){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'changePassword', data: user, method: 'POST' })
        .then(resp => {
          resolve(resp)
        })
        .catch(error => {
          reject(error)
        })
      })
    },
    logout({commit}){
      return new Promise((resolve, reject) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve()
      })
    },
    getUserDetails({commit}){
      return new Promise((resolve, reject) => {
        axios({url:'me',method:'GET'}).then(res =>{
          commit('setUserDetails',res.data.data)
          resolve(res)
        })
      }); 
    },
    getWebDetails({commit}){
      return new Promise((resolve, reject) => {
        axios({url:'webinfo',method:'GET'}).then(res =>{
          commit('setWebDetails',res.data)
          resolve(res)
        })
      }); 
    },
  },
  getters : {
    //decalre only route/api of getting data
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getUser: state=> state.user,
    getError: state=> state.error,
    getUserDetails :state=>state.userDetails,
    getWebDetails :state=>state.webDetails,
  }
})


