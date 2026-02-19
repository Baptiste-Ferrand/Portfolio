import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/pages/Home.vue'),
        },
        {
          path: 'projects',
          name: 'projects',
          component: () => import('@/pages/Projects.vue'),
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('@/pages/Contact.vue'),
        },
        {
          path: 'information',
          name: 'information',
          component: () => import('@/pages/Information.vue'),
        },
      ],
    },
  ],
})

export default router