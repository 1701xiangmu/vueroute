// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import "./assets/public/js/common";
import axios from 'axios'
Vue.config.productionTip = false
Vue.prototype.$http = axios
  require('./mock.js');
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
