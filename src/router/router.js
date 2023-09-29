// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/Login.vue'),
  },
 
  // Agrega más rutas según tu aplicación
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
