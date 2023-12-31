// src/router.js
import { createRouter, createWebHistory } from 'vue-router';

const requireAuth = (to, from, next) => {
  if (localStorage.getItem('accessToken') == null) {
    next('/') // Si el usuario está autenticado, se permite el acceso a la ruta
  } else {
    next() // Si el usuario no está autenticado, se redirige a la página de inicio
  }
};
const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../components/Login.vue'),
  },
  {
    path: '/IMC',
    name: 'IMC',
    component: () => import('../components/IMC.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/RecipeHipertension',
    name: 'RecipeHipertension',
    component: () => import('../components/RecipeHipertension.vue'),

  },
  {
    path: '/Inicio',
    name: 'Inicio',
    component: () => import('../components/Inicio.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../components/perfil.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/CamaraComponent',
    name: 'CamaraComponent',
    component: () => import('../components/CamaraComponent.vue'),
    beforeEnter: requireAuth
  },
  {
    path: '/recipe/:id',
    name: 'recipe-details',
    component: () => import('../components/RecipeDetails.vue'),
    props: true,

  },
  {
    path: '/Registro',
    name: 'Registro',
    component: () => import('../components/Registro.vue'),
  },
  {
    path: '/Recordar',
    name: 'Recordar',
    component: () => import('../components/RecordarCotraseña.vue'),
  },
 
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
