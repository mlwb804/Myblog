import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import About from '@/views/About'
import Article from '@/views/Article'
import Login from '@/views/Login'
import Admin from '@/views/Admin'
import Add from '@/views/Admin/Add'
import AdminHome from '@/views/Admin/AdminHome'
import NotFound404 from '@/views/NotFound404'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: "/admin",
    name: 'Admin',
    component: Admin,
    children: [ 
      {
      path: '/',
      name: 'Admin-Home',
      component: AdminHome
      },
    {
      path: 'add',
      name: 'Admin-Add',
      component: Add
     },
      {
      path: 'edit/:id',
      name: 'Admin-Edit',
      component: Add
     },
    ]
  },
   {
      path: '*',
      name: 'NotFound404',
      component: NotFound404
     },
    
]

const router = new VueRouter({
  routes
})

export default router
