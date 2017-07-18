import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Cart from '@/components/Cart'
import RouterTest from '@/components/Router'
import User from '@/components/User'
import UserProfile from '@/components/UserProfile'

Vue.use(Router)

const routes = [
  {
    path: '/user/:id',
    component: User,
    children: [
      { path: 'profile', component: UserProfile }
    ]
  }
]


export default new Router({
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
