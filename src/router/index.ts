import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Connexion from '../views/Connexion.vue'
import Habitude from '../views/Habitude.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component : AboutView
    },
    {
      path: '/connexion',
      name: 'connexion',
      component : Connexion
    },
    {
      path: '/habitude',
      name: 'habitude',
      component : Habitude
    }
  ],
})

export default router
