import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/Index'
import PostPrice from '@/components/pages/PostPrice'
import GetIp from '@/components/pages/GetIp'
import PostAxios from '@/components/pages/PostAxios'
import GetAxiosAndWriteInTable from '@/components/pages/GetAxiosAndWriteInTable'
import bootstrap4 from '@/components/pages/bootstrap4'
import vuetify from '@/components/pages/vuetify'
import route404 from '@/components/pages/route404'
import datepickerCom from '@/components/pages/datepickerCom'
import propsParentToChild from '@/components/pages/propsParentToChild'
import login from '@/components/pages/login'
import vuexAddStoreCard from '@/components/pages/card/vuexAddStoreCard'
import vuexShowStoreCard from '@/components/pages/card/vuexShowStoreCard'

Vue.use(Router)

// eslint-disable-next-line camelcase
function middlewareCheckLoginTokenExist () {
  const auth = sessionStorage.getItem('login')
  console.log('auth:: ' + auth)
  if (auth !== 'true') {
    alert('please first login and back again')
    console.log('middlewareCheckLoginTokenExist return false')
    return false
  }

  console.log('middlewareCheckLoginTokenExist return true')
  return true
}

export default new Router({
  mode: 'history', /* How to remove hashbang #! from url? */
  scrollBehavior: function (to, from, savedPosition) {
    return savedPosition || { x: 0, y: 1000 }
  },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/get-price',
      name: 'PostPrice',
      component: PostPrice,
      beforeEnter: function (to, from, next) {
        next(middlewareCheckLoginTokenExist())
      }
    },
    {
      path: '/get-ip',
      name: 'GetIp',
      component: GetIp,
      beforeEnter: function (to, from, next) {
        next(middlewareCheckLoginTokenExist())
      }
    },
    {
      path: '/post-axios',
      name: 'PostAxios',
      component: PostAxios,
      beforeEnter: function (to, from, next) {
        next(middlewareCheckLoginTokenExist())
      }
    },
    {
      path: '/get-axios-table',
      name: 'GetAxiosAndWriteInTable',
      component: GetAxiosAndWriteInTable,
      beforeEnter: function (to, from, next) {
        next(middlewareCheckLoginTokenExist())
      }
    },
    {
      path: '/bootstrap4',
      name: 'bootstrap4',
      component: bootstrap4,
      beforeEnter: function (to, from, next) {
        next(middlewareCheckLoginTokenExist())
      }
    },
    {
      path: '/vuetify',
      name: 'vuetify',
      component: vuetify,
      beforeEnter: function (to, from, next) {
        next(middlewareCheckLoginTokenExist())
      }
    },
    {
      path: '/datepickerCom',
      name: 'datepickerCom',
      component: datepickerCom,
      beforeEnter: function (to, from, next) {
        next(middlewareCheckLoginTokenExist())
      }
    },
    {
      path: '/propsParentToChild',
      name: 'propsParentToChild',
      component: propsParentToChild,
      beforeEnter: function (to, from, next) {
        next(middlewareCheckLoginTokenExist())
      }
    },
    {
      path: '/vuexAddStoreCard',
      name: 'vuexAddStoreCard',
      component: vuexAddStoreCard,
      beforeEnter: function (to, from, next) {
        next(middlewareCheckLoginTokenExist())
      }
    },
    {
      path: '/vuexShowStoreCard',
      name: 'vuexShowStoreCard',
      component: vuexShowStoreCard,
      beforeEnter: function (to, from, next) {
        next(middlewareCheckLoginTokenExist())
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'route404',
      component: route404
    }
  ]
})
