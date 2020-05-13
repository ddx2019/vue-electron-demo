import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './plugins/element'
import '@/assets/style/global.scss'
import db from '@/utils/datastore.js'
Vue.config.productionTip = false
Vue.use(db)

Vue.filter('filterPrice', function (price, param) {
  return price ? (param + price) : '--'
})



Vue.filter('filterURL', function(val){
  return val ? ('https://baidu.com/' + val) : '#'
}) 

Vue.filter('filterPriceA', function (price) {
  return price || false
})

Vue.filter('filterPriceB', function (price) {
  return  price ? ( ' $ '+ price) : '--'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
