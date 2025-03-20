import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/record'
    },
    {
      path: '/record',
      name: 'record',
      component: () => import('../views/RecordView.vue'),
    },
  ],
})

export default router
