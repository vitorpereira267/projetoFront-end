import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Personagens from '../views/Personagens.vue'
import Episodios from '../views/Episodios'
import Episodio from '../views/Episodio'
import Personagem from '../views/Personagem.vue'
import Favoritos from '../views/Favoritos.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Erro from '../views/Error.vue'

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
    path: '/personagens/:id',
    component: Personagem
  },
  {
    path: '/favoritos',
    component: Favoritos
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/error',
    component: Erro
  },
  
  
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
