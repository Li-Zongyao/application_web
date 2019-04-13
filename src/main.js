// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Appp from './App'
import router from './router'
import axios from '../node_modules/axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'//引入store

Vue.config.productionTip = false

Vue.use(ElementUI)

Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:8086/api'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store

  axios,
  components: { Appp },
  template: '<Appp/>'
})
