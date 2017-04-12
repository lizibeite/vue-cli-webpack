// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App'
import goods from './components/goods/goods'
import ratings from './components/ratings/ratings'
import seller from './components/seller/seller'

Vue.use(VueAxios, axios)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', redirect: '/goods'}, // 路由重定向 进入页面默认到goods组件
    {path: '/goods', component: goods},
    {path: '/ratings', component: ratings},
    {path: '/seller', component: seller}
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App}
})
