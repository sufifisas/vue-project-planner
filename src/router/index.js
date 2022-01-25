import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateProject from '../views/CreateProject.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/create-project',
    name: 'CreateProject',
    component: CreateProject
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
