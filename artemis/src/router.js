import Router from 'vue-router'
import Home from './views/Home.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/Search',
      name: 'home',
      component: Home
    },
    {
      path: '/Account/List',
      name: 'accountList',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/AccountList.vue')
    },
    // {
    //   path: '*',
    //   redirect: '/404'
    // }
  ]
})
