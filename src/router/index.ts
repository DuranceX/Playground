import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DanmuView.vue'
import TestView from '../views/TestView.vue'
import JsonView from '../views/JsonView.vue'
import TransformDemo from '../views/TransformDemo.vue'
import TransformTest from '@/views/TransformTest.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
    },
    {
      path: '/json',
      name: 'json',
      component: JsonView
    },
    {
      path: '/transform',
      name: 'transform',
      component: TransformDemo
    },
    {
      path: '/transform-test',
      name: 'transform-test',
      component: TransformTest
    }
  ],
})

export default router
