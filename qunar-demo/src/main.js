// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastClick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
// require styles
import 'swiper/dist/css/swiper.css'
import 'styles/reset.css'
// 1像素边框问题解决
import 'styles/border.css'
import 'styles/iconfont/iconfont.css'
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, /* 如果文件名一样直接写 如果不一样，写store:xxxx */
  components: { App },
  template: '<App/>'
})
