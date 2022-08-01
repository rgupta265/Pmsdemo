import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user : {},
    error : '',
    userDetails:{}
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
    }
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
    ChangePassword({commit}, userPass){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({url: 'changePassword', data: userPass, method: 'POST' })
        .then(resp => {
          // const token = 'Bearer '+resp.data.access_token
          // const userPass = resp.data.userPass
          // localStorage.setItem('token', token)
          // axios.defaults.headers.common['Authorization'] = token
          // commit('auth_success', token, userPass)
          // commit('handle_error', '')
          resolve(resp)
        })
        .catch(error => {
          // localStorage.removeItem('token')
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

    getUser({commit}){
      return new Promise((resolve, reject) => {
        axios({url:'user',method:'GET'}).then(res =>{
          commit('set_user',res.data)
          resolve(res)
        })
      }); 
    },
    getUserDetails({commit}){
      return new Promise((resolve, reject) => {
        axios({url:'me',method:'GET'}).then(res =>{
          commit('setUserDetails',res.data.data)
          resolve(res)
        })
      }); 
    }
  },
  getters : {
    //decalre only route/api of getting data
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    getUser: state=> state.user,
    getError: state=> state.error,
    getUserDetails :state=>state.userDetails
  }
})


