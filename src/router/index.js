import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import RouterTest from '@/components/Router'
import User from '@/components/User'
import UserProfile from '@/components/UserProfile'
import Login from '@/components/Login'

Vue.use(Router)

const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      { path: 'profile', component: UserProfile, meta: { requiresAuth: true } }
    ],
    //路由钩子
    beforeEnter: (to, from, next) => {
      // ...
      console.log('我是路由的钩子')
      next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]


const router = new Router({
  routes: [...routes, {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
    , {
    path: '/router',
    component: RouterTest
  }]
})
//全局钩子
router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  to.matched.some(record => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      // next({
      //   path: '/login',
      //   query: { redirect: to.fullPath }
      // })
      next()
    } else {
      next() // 确保一定要调用 next()
    }
  })
})
router.afterEach((route) => {
  // console.log(route)
})
export default router