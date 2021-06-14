<template>
  <div class="hello">
    
    <div v-for="(data, index) in $store.state.favorites" :key="index">
      
        
        
        <h3>{{data.name}} <i class="far fa-heart"></i>&emsp; <button @click="unmarkedFavorites(index)">&#9829;</button></h3> 
        

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


  methods: {
    unmarkedFavorites(index){
      this.$store.commit('unmarkedFavorites',index)
    },
    carregaInfo() {
      axios.get('https://finalspaceapi.com/api/v0/character').then((res) => { 
        console.log(res.data);
        this.resultados = res.data;
      });
    },
    navega(personagem){
      this.$router.push('/personagens/'+personagem) 
    },
  },
  mounted() {
    this.carregaInfo();
  }
};

</script>

<style scoped>
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