// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../components/Login.vue'),
  },
  {
    path: '/Registro',
    name: 'Registro',
    component: () => import('../components/Login.vue'),
  },
  {
    path: '/Recordar',
    name: 'Contraseña',
    component: () => import('../components/RecordarCotraseña.vue'),
  },
 
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
