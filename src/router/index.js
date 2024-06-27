import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/blog/BlogPage.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/blog/HomePage.vue')
      },
      {
        path: '/about',
        component: () => import('@/views/blog/AboutPage.vue')
      },
      {
        path: '/user/:userId',
        component: () => import('@/views/blog/UserDetailPage.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('@/views/admin/AdminPage.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/admin/DashboardPage.vue')
      },
      {
        path: '/setting',
        component: () => import('@/views/admin/SettingPage.vue')
      },
      {
        path: '/user',
        component: () => import('@/views/admin/UserPage.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('@/views/auth/AuthPage.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/auth/RegisterPage.vue')
      },
      {
        path: '/login',
        component: () => import('@/views/auth/LoginPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
