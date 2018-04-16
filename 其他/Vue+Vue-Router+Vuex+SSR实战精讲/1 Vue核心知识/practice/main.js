import Vue from 'vue'
import router from './router'
import App from './App.vue'

console.log('App,', App)
// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI)

import { AlertPlugin, ToastPlugin } from 'vux'

Vue.use(AlertPlugin)
Vue.use(ToastPlugin)

console.log('开始')

new Vue({
  el: '#app',
  template: '<App/>',
  router,
  components: { App },
  // render: (h) => h('div', {}, '1323')
})