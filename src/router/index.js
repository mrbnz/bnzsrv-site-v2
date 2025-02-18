import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/project/:id',
    component: () => import('../views/ProjectDetailView.vue')
  }
] // Sense rutes per ara

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
