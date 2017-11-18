import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


//引入自定义组件
import login from '../components/login.vue'
import orderlist from '../components/OrderList.vue'

//创建实例
export default new Router({
  routes: [
    {
      path: '/',
      name: 'orderlist',
      component: orderlist
    }
  ]
})
