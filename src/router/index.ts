import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/DanmuView.vue'
import TestView from '../views/TestView.vue'
import JsonView from '../views/JsonView.vue'
import TransformDemo from '../views/TransformDemo.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      path: '/transform-demo',
      name: 'transform-demo',
      component: TransformDemo
    }
  ],
})

export default router
