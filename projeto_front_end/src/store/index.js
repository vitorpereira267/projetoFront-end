import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    info:[],
    favorites:[],
    user:null
  },
  mutations: {
    setUser(state, user){
      state.user=user
    },
    markedFavorites(state, item){
      state.favorites = [item, ...state.favorites]
      localStorage.setItem('favoriteLocal', JSON.stringify(state.favorites))
    },
    unmarkFavorites(state, index){
      state.favorites.splice(index,1)
      localStorage.setItem('favoriteLocal', JSON.stringify(state.favoritos))
    }
  },
  actions: {
  },
  modules: {
  }
})
