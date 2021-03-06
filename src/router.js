import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'

Vue.use(Router)
Vue.use(Meta)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/testKan/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/testKan/help',
      name: 'help',
      component: () => import(/* webpackChunkName: "help" */ './views/Help.vue')
    },
    {
      path: '/testKan/contactus',
      name: 'contactus',
      component: () => import(/* webpackChunkName: "contactus" */ './views/Contactus.vue')
    },
    
  ]
})
