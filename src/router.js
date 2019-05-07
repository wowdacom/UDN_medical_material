import Vue from 'vue'
import Router from 'vue-router'
import Enter from './views/Enter.vue'
import End from './views/End.vue'

Vue.use(Router)

export default new Router({
  base: '/upf/newmedia/2019_data/medical_material/',
  routes: [
    {
      path: '/',
      name: 'enter',
      component: Enter,
      alias: '/1'
    },
    {
      path: '/2',
      name: 'page2',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page2.vue')
    },
    {
      path: '/3',
      name: 'page3',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page3.vue')
    },
    {
      path: '/end',
      name: 'end',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: End,
      alias: '/18'
    },
    { path: '/*', redirect: { name: 'enter' }}
  ]
})
