import VueRouter from 'vue-router'

import Vue from 'vue'

Vue.use(VueRouter)

import Test from '../mui-test/index.vue'
console.log('Test,', Test)
const router = new VueRouter({
  routes: [{
    path: '/',
    component: Test
  }],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

export default router