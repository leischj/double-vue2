import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/search',
      name: 'search',
      component: () => import(/* webpackChunkName: "search" */ './views/Search.vue')
    },
    {
      path: '/details',
      name: 'details',
      component: () => import(/* webpackChunkName: "details" */ './views/Details.vue')
    },
    {
      path: '/setup',
      name: 'setup',
      component: () => import(/* webpackChunkName: "details" */ './views/Setup.vue')
    },
    {
      path: '/meas',
      name: 'meas',
      component: () => import(/* webpackChunkName: "details" */ './views/Measurements.vue')
    },
    {
      path: '/graphics',
      name: 'graphics',
      component: () => import(/* webpackChunkName: "details" */ './views/Graphics.vue')
    },
    {
      path: '/reporting',
      name: 'reporting',
      component: () => import(/* webpackChunkName: "details" */ './views/Reporting.vue')
    }
  ]
});

export default router;