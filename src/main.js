import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/element'
import '@/assets/style/global.scss'
import './assets/style/fontAwesome.less'

import db from '@/utils/datastore.js'
import TopNav from '@/components/nav/TopNav.vue'
Vue.config.productionTip = false
Vue.use(db)

// 全局注册组件
Vue.component('TopNav', TopNav)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
