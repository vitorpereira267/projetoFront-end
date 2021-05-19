import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Personagens from '../views/Personagens.vue'
import Episodios from '../views/Episodios'
import Episodio from '../views/Episodio'
import Personagem from '../views/Personagem.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/episodios',
    component: Episodios
  },
  {
    path: '/episodio/:id',
    component: Episodio
  },
  {
    path: '/personagens',
    component: Personagens
  },
  {
    path: '/personagem',
    component: Personagem
  },
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
