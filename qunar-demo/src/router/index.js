import Vue from 'vue'
import Router from 'vue-router'
// @代表src目录
// import Home from '@/pages/home/Home.vue'
// import List from '@/pages/list/List.vue'
// import city from '@/pages/city/City.vue'
// import Detail from '@/pages/detail/Detail.vue'
Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home.vue')
    },
    {
      path: '/list',
      name: 'List',
      // 这里的component名要与import中的名相同
      component: () => import('@/pages/list/List.vue')
    },
    {
      path: '/city',
      name: 'City',
      // 这里的component名要与import中的名相同
      component: () => import('@/pages/city/City.vue')
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      // 这里的component名要与import中的名相同
      component: () => import('@/pages/detail/Detail.vue')
    }
  ]
})
