import Vue from 'vue'
import Router from 'vue-router'
import Enter from './views/Enter.vue'

Vue.use(Router)

export default new Router({
  base: '/upf/newmedia/2019_data/medical_material/',
  routes: [
    {
      path: '/',
      name: 'enter',
      component: Enter
    },
    {
      path: '/1',
      name: 'page1',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page1.vue')
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
      path: '/4',
      name: 'page4',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page4.vue')
    },
    {
      path: '/5',
      name: 'page5',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page5.vue')
    },
    {
      path: '/6',
      name: 'page6',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page6.vue')
    },
    {
      path: '/7',
      name: 'page7',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page7.vue')
    },
    {
      path: '/8',
      name: 'page8',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page8.vue')
    },
    {
      path: '/9',
      name: 'page9',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page9.vue')
    },
    {
      path: '/10',
      name: 'page10',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page10.vue')
    },
    {
      path: '/11',
      name: 'page11',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page11.vue')
    },
    {
      path: '/12',
      name: 'page12',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page12.vue')
    },
    {
      path: '/13',
      name: 'page13',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page13.vue')
    },
    {
      path: '/14',
      name: 'page14',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page14.vue')
    },
    {
      path: '/15',
      name: 'page15',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page15.vue')
    },
    {
      path: '/16',
      name: 'page16',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Page16.vue')
    },
    {
      path: '/end',
      name: 'end',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/End.vue')
    },
    { path: '/*', redirect: { name: 'enter' }}
  ]
})
