// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import Vuex from "vuex";
import store from "./store/store.js";
import iView from 'iview';
import 'iview/dist/styles/iview.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'

Vue.use(iView);
Vue.use(Vuex);
Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
// const store = new Vuex.Store({
//     state: {
//         mainPage:0
//     }
// }