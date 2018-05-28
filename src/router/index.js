import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/auth/logout'
    }, {
      path: '/auth/login',
      component: resolve => require(['@/page/auth/login'], resolve)
    }, {
      path: '/home',
      meta: {
        requireAuth: true
      },
      component: resolve => require(['@/page/home/index'], resolve)
    }, {
      path: '/example',
      meta: {
        requireAuth: true
      },
      component: resolve => require(['@/page/example/index'], resolve)
    },
    {
      path: '/example/content/:id',
      meta: {
        requireAuth: true
      },
      component: resolve => require(['@/page/example/content'], resolve)
    }
  ]
})
