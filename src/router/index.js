import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home'

// import Article from '@/views/Article'
// import Login from '@/views/Login'
// import Admin from '@/views/Admin'
// import Add from '@/views/Admin/Add'
// import AdminHome from '@/views/Admin/AdminHome'
// import NotFound404 from '@/views/NotFound404'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () =>
    import('@/views/Home')
  },
  {
    path: '/about',
    name: 'About',
    component: () =>
    import('@/views/About')
    // component: About
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () =>
    import('@/views/Article')
    // component: Article
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
    import('@/views/Login')
    // component: Login
  },
  {
    path: "/admin",
    name: 'Admin',
    component: () =>
    import('@/views/Admin'),
    // component: Admin,
    children: [ 
      {
      path: '/',
      name: 'Admin-Home',
      component: () =>
    import('@/views/Admin/AdminHome')
      // component: AdminHome
      },
    {
      path: 'add',
      name: 'Admin-Add',
      component: () =>
    import('@/views/Admin/Add')
      // component: Add
     },
      {
      path: 'edit/:id',
      name: 'Admin-Edit',
      component: () =>
    import('@/views/Admin/Add')
      // component: Add
     },
    ]
  },
   {
      path: '*',
      name: 'NotFound404',
      component: () =>
    import('@/views/NotFound404')
      // component: NotFound404
     },
    
]

const router = new VueRouter({
  routes
})

export default router
