<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="(data, index) in resultados" :key="index">
      <br>
        <hr>
        
        <h3>{{data.name}}</h3>
        <div class="space">
        <img @click="methods" :src="data.img_url" alt="">
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
        
    }
  },
  methods:{
    carregaInfo(){
      axios.get('https://finalspaceapi.com/api/v0/episode' + id) //https://finalspaceapi.com/api/v0/
          .then(
            res => {
              this.resultados = res.data
            }
          )
    }
  },
  mounted(){
    this.carregaInfo();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  
  
  background-color: #5F9EA0;
}
.space{
  display: inline-block;
  margin: 5px;
  box-shadow: 10px 10px 5px 0px rgba(0,0, 0, 0.25);
}

</style>