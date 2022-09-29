import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   redirect:'/home'
  // },
  {
    path: '/',
    name: 'home',
    redirect:'/booking',
    component: HomeView,
    children: [
      {
        path: 'booking',
        name: 'booking',
        component: () => import('../views/booking.vue')
      },
      {
        path: 'statistics',
        name: 'statistics',
        component: () => import('../views/statistics.vue')
      }, {
        path: 'setup',
        name: 'setup',
        component: () => import('../views/setup.vue'),
        
      },
      {
        path:'setupClass',
        name:'setupClass',
        component:() => import('../components/setupClass.vue'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
