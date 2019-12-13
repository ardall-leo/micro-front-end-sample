import Router from 'vue-router'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // { path: "/404", component: { template: '<b>NOT FOUND</b>'}},
    // {
    //   path: '*',
    //   redirect: '/404'
    // }
  ]
})
