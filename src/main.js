import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/element'
import '@/assets/style/global.scss'
import "font-awesome/css/font-awesome.css"

import db from '@/utils/datastore.js'
Vue.config.productionTip = false
Vue.use(db)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
