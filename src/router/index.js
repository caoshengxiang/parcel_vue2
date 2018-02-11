/**
 * Created by allen on 17-3-13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home = require('../pages/home.vue')
const test = require('../pages/test.vue')

const router = new Router({
  // mode: 'history', // 这个模式路由没有#
  routes: [
    {
      path: '',
      component: home,
    },
    {
      path: '/home',
      component: home,
      name: 'home'
    }, {
      path: '/test',
      component: test,
      name: 'test'
    },
  ],
})
router.beforeEach((to, from, next) => {
  next();
})
router.afterEach(()=>{
  window.scrollTo(0,0);
})
export default router