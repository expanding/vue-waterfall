// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
import Http from './libs/http'
import Utils from './libs/utils'
import Tip from './libs/tip'

import rem from './assets/js/rem'

Vue.config.productionTip = false
Vue.prototype.$http = Http
Vue.prototype.$utils = Utils
Vue.prototype.$tip = Tip

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  rem,
  store
})
