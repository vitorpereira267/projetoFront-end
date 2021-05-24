<template>
  <div class="hello" >
      <h3 >Name: {{ resultados.name }}</h3>
      <br>
      <img :src="resultados.img_url" alt=""  />
      <h3 >Specie: {{ resultados.species }}</h3>
      <h3 >Status: {{ resultados.status}}</h3>
      <h3 >Origin: {{ resultados.origin }}</h3>
     
      
      
      
      

    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Api",
  props: {
    msg: String,
  },
  data() {
    return {
      resultados: "",
    };
  },
  methods: {
    carregaInfo(query) {
      axios.get('https://finalspaceapi.com/api/v0/character/'+query).then((res) => {
         console.log(res.data);
        this.resultados = res.data;
      });
    },
  },
  // mounted() {
  //   this.carregaInfo();
  // },
  mounted(){
      this.carregaInfo(this.$route.params.id)
  }
};
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