import Vue from 'vue'
import Router from 'vue-router'
// @代表src目录
import Home from '@/pages/home/Home.vue'
import List from '@/pages/list/List.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      // 这里的component名要与import中的名相同
      component: List
    }
  ]
})
