import Vue from 'vue'
import Admin from './Admin.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Admin)
}).$mount('#app')
