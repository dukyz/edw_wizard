import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Project from '../components/Function/Project.vue'
import User from '../components/Function/User.vue'
import Workflow from '../components/Function/Workflow.vue'
import MetadataTech from '../components/Function/MetadataTech.vue'
import MetadataBusi from '../components/Function/MetadataBusi.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/login',
  component: Login
}, {
  path: '/home',
  component: Home,
  redirect: '/user',
  children: [{
    path: '/welcome',
    component: Welcome
  }, {
    path: '/user',
    component: User
  }, {
    path: '/project',
    component: Project
  }, {
    path: '/workflow',
    component: Workflow
  }, {
    path: '/metadataBusi',
    component: MetadataBusi
  }, {
    path: '/metadataTech',
    component: MetadataTech
  }]
}]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    return next()
  }
  if (window.sessionStorage.getItem('token')) {
    return next()
  }
  next('/login')
})

export default router
