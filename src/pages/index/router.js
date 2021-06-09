import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: '',
      component: () => import(/* webpackChunkName: "_index" */ './views/index.vue')
    }
  ]
})
