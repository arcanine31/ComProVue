import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // lazy-loaded: generates a separate chunk when the route is visited
      component: () => import('../views/about.vue'),
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('../views/service.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/project.vue'),
    },
  ],
  // jump to the top when changing pages
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
