<template>
  <div class="background-staff ">
    
    <div class="box">
      <div v-for="(data, index) in resultados" :key="index">
        <div class="card">
          <h3>{{ data.name }}</h3>
           

          <img @click="navega(index + 1)" :src="data.img_url" alt="" />

          <p style="display: flex; justify-content: center">30€</p>

          &emsp; <button @click="markedFavorites(data)">&#9829;</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      resultados: "",
      pesquisa: "",
      favorites: [],
    };
  },

  //https://finalspaceapi.com/api/v0/character
  methods: {
    markedFavorites(data) {
      //this.$store.commit('markedFavorites',data)
      if (!!!this.$store.state.favorites.find((res) => res === data)) {
        this.$store.commit("markedFavorites", data);
      }
    },

    carregaInfo() {
      axios.get("https://finalspaceapi.com/api/v0/character").then((res) => {
        // https://blog.logrocket.com/full-guide-to-using-font-awesome-icons-in-vue-js-apps-5574c74d9b2d/
        console.log(res.data);
        this.resultados = res.data;
      });
    },
    navega(personagem) {
      this.$router.push("/personagens/" + personagem); //https://codesandbox.io/s/vue-3-form-validation-demo-7mp4z?file=/src/App.vue link para o login
    },
  },
  mounted() {
    this.carregaInfo();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.3/css/fontawesome.min.css");
h3 {
  margin: 40px 0 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  color: #777;
  font-size: 13px;
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
p {
  color: black;
}

.background-staff {
  padding-left: 300px;
  padding-right: 300px;
  padding-bottom: 50px;
  
  
}
.box {
  display: flex;
  flex-flow: row wrap;
  border: 1px black solid;
  border-radius: 8px;
  padding-top: 100px;
  background: #eee;
   
  
  
}
.card {
    color: #777;
    font-size: 13px;
    margin-top: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    margin: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
  
}



#img {
  width: 100%;
  height: 250px;
  width: 250px;
  transition: 0.5s ease;
  backface-visibility: hidden;
  
}
</style>

