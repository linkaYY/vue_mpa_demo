import Vue from 'vue'
import Manager from './Manager.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(Manager)
}).$mount('#app')
