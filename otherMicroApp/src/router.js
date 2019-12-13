import Router from 'vue-router'
import Home from './views/Home.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Account/NewFeature',
      name: 'home',
      component: Home
    },
  ]
})
