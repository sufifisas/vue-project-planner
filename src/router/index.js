import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateProject from '../views/CreateProject.vue'
import EditProject from '../views/EditProject.vue'

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
  },
  {
    path: '/projects/:id',
    name: 'EditProject',
    component: EditProject,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
