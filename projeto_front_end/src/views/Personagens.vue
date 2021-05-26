<template>
  <div class="hello">
    
    <div v-for="(data, index) in resultados" :key="index">
      <br>
        <hr>
        
        <h3>{{data.name}}</h3>

		div(
			v-for="image in images"
			:key="image.id"
			@mouseover="hovered = image.id"
			@mouseleave="hovered = null"
			).image
			transition(name="fade")
				div(v-if="hovered === image.id").overlay
					div(
						v-if="isStarred(image.id)"
						@click="starToggle(image.id)"
						).icon.icon-liked &#9733;
					div(
						v-else
						@click="starToggle(image.id)"
						).icon.icon-unliked &#9734;
			img(:src="image.path")<div class="space">
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
        pesquisa:""
    }
  },

  //https://finalspaceapi.com/api/v0/character
  methods: {
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
  background-color: #5F9EA0;
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

