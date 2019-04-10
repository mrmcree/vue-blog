// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import 'lib-flexible'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueLazyLoad from 'vue-lazyload'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import vuex from 'vuex'
import store from './store/store'
require('echarts/lib/chart/bar');
// 引入提示框和标题组件
require('echarts/lib/component/tooltip');
require('echarts/lib/component/title');
Vue.use(mavonEditor)
Vue.use(vuex)
Vue.use(VueLazyLoad,{
  // set observer to true
  observer: true,

  // optional
  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  },
  lazyComponent:true,
    // error:'./static/error.png',
    // loading:'https://loading.io/spinners/spinner/lg.ajax-spinner-preloader.gif'
})
Vue.prototype.$http = axios
Vue.prototype.$host = 'http://localhost/'
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
// console.log(store.state)