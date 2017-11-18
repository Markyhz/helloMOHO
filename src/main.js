// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入mint-ui 全局
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(Mint);

//引入Fontawesome
import './style/font-awesome.min.css'
//引入组件公共样式
import './style/compont.less'
//引入axios
import axios from 'axios'
import qs from 'qs'
import './until/http'
Vue.prototype.$ajax = axios;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
