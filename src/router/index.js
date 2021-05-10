import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    meta: {
      requiresAuth : true
    },
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: {
      checkLogin: true
    },
    component: () => import(/* webpackChunkName: "admin" */ '../views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const checkLogin = to.matched.some(record => record.meta.checkLogin)
  const isAuthenticated = (localStorage.getItem('jwtToken') && new Date(localStorage.getItem('tokenExpires')).getTime() > Date.now())
  if (requiresAuth && !isAuthenticated) {
    next('/login')
  } else if (checkLogin && isAuthenticated){
    next('/admin')
  } else {
    next()
  }
})

export default router
