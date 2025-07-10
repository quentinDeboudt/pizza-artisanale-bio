import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CarteService from '../views/CarteService.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/carte-service', name: 'CarteService', component: CarteService }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
