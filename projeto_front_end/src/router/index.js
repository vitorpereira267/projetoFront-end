import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Personagens from '../views/Personagens.vue'
import Episodios from '../views/Episodios'

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
    path: '/personagens',
    component: Personagens
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
