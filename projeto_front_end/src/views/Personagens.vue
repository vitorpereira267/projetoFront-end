<template>
  <div class="hello">
    
    <div v-for="(data, index) in resultados" :key="index">
        <hr>
        
        <h3>{{data.name}} <i class="fas fa-heart"></i>&emsp; <button @click="markedFavorites(data)">&#9829;</button></h3> 
        

		<div class="space">
        <img @click="navega(index+1)" :src="data.img_url" alt="">
        
        </div>
        
    </div>
  </div>
  
</template>

<script>
import axios from "axios"
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      	resultados:"",
        pesquisa:"",
        favorites:[]
    }
  },

  //https://finalspaceapi.com/api/v0/character
  methods: {
    markedFavorites(data){
      //this.$store.commit('markedFavorites',data)
      if(!!!this.$store.state.favorites.find((res) => res === data)){
        this.$store.commit('markedFavorites',data)
      }
    },
    
    carregaInfo() {
      axios.get('https://finalspaceapi.com/api/v0/character').then((res) => { // https://blog.logrocket.com/full-guide-to-using-font-awesome-icons-in-vue-js-apps-5574c74d9b2d/
        console.log(res.data);
        this.resultados = res.data;
      });
    },
    navega(personagem){
      this.$router.push('/personagens/'+personagem) //https://codesandbox.io/s/vue-3-form-validation-demo-7mp4z?file=/src/App.vue link para o login
    },
  },
  mounted() {
    this.carregaInfo();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css');
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.hello{
  display: flex;
  flex-flow: row wrap;
 
}
.space{
  display: inline-block;
  margin: 5px;
  box-shadow: 10px 10px 5px 0px rgba(0,0, 0, 0.25);
  
  
}
#img{
  width: 100%;
  height: auto;
  transition: .5s ease;
  backface-visibility: hidden;

}
</style>

