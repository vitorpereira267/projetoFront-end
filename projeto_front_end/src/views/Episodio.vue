<template>
  <div style="text-align:center;">
      <h3>Characters From {{resultados.name}}</h3>
      
  <div class="hello">
    
      
      
    <h1>{{ msg }}</h1>
    <br>
      
        <div v-for="(data, index) in characters" :key="index">
          <br>
          
            <h3>{{data.name}}</h3>
            <div class="space">
              <img :src="data.img_url" alt="">
            </div>
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
        characters: []
        
    }
  },
  methods:{
    carregaInfo(id){
      axios.get('https://finalspaceapi.com/api/v0/episode/' + id) //https://finalspaceapi.com/api/v0/
          .then(
            res => {
              this.resultados = res.data
              console.log(this.resultados)
              for (let i = 0; i < this.resultados.characters.length; i++) {
                 axios.get(this.resultados.characters[i])
                    .then(
                      res => {
                          this.characters.push(res.data);
                          
                      }
                    )
              }
            }
          )
    }
  },


  
  mounted(){
    this.carregaInfo(this.$route.params.id);
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
  display: flex;
  flex-flow: row wrap;
  
}
.space{
  display: inline-block;
  margin: 5px;
  box-shadow: 10px 10px 5px 0px rgba(0,0, 0, 0.25);
}

</style>