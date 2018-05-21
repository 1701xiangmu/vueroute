// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'  //引入这个懒加载插件
// import "./assets/public/js/common";
import axios from 'axios'
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
FastClick.attach(document.body);
  require('./mock.js');
/* eslint-disable no-new */
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: '../static/lazy.png',
  loading: '../static/index-banner5.jpg',
  attempt: 1,
  //listenEvents: [ 'scroll' ]
})
// Vue.use(VueLazyload, {
//   preLoad:1.3,
//   //error: '../static/lazy.png',//这个是请求失败后显示的图片
//   loading: '../static/index-banner5.jpg',//这个是加载的loading过渡效果
//   attempt: 2 // 这个是加载图片数量
// });
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
