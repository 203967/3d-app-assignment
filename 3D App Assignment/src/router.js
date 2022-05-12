// index.js


import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('./components/Home.vue')
  },
  {
    path: '/model',
    component: () => import('./components/Model.vue')
  },

]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})


export default router