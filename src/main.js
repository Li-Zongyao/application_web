// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Appp from './App'
import router from './router'
import axios from '../node_modules/axios'
import ElementUI from 'element-ui'

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  components: { Appp },
  template: '<Appp/>'
})
