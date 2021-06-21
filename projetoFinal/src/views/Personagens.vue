<template>
  <div class="background-images">
    <div class="header">
      <div>
        <img
          style="height: 30px; border-radius: 100%"
          src="https://logosmarcas.net/wp-content/uploads/2020/11/Steam-Logo.png"
          alt=""
        /><a href="">STEAM</a>
      </div>
      <div>
        <img
          style="height: 30px; border-radius: 100%"
          src="https://img1.gratispng.com/20180706/gig/kisspng-uplay-game-computer-software-steam-computer-icons-uplay-5b3f1a956429e6.5982707815308622294103.jpg"
          alt=""
        /><a href="">UPLAY</a>
      </div>
      <div>
        <img
          style="height: 30px; border-radius: 100%"
          src="https://img2.gratispng.com/20180410/ucq/kisspng-origin-the-sims-4-video-game-computer-software-ele-escalator-5acd20cd34ca05.5264656815233927172162.jpg"
          alt=""
        /><a href="">ORIGIN</a>
      </div>
    </div>
    <div class="background-staff">
      <div class="box">
        <div class="box-search-container">
          <span class="box-search-filters">
            <select name="platforms" id="search-platforms">
              <option value="1">Platforms</option>
              <option value="2">Steam</option>
              <option value="3">Uplay</option>
              <option value="4">Origin</option>
              
            </select>
          </span>

          <span class="box-search-filters"> Category </span>
          <span class="box-search-filters"> Trendings </span>
        </div>
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
  text-decoration: none;
  color: white;
}
p {
  color: black;
}

.background-images {
}
.background-staff {
  padding: 0 400px 50px;
  background: linear-gradient(to bottom, #004351 0px, transparent 150px),
    url(https://s3.gaming-cdn.com/images/products/6690/background/6690.jpg)
      center 0px no-repeat #004351;
  background-attachment: fixed;
}
.box {
  display: flex;
  flex-flow: row wrap;

  border-radius: 8px;

  background: #eee;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  width: 200px;
}

#img {
  width: 100%;
  height: 250px;
  width: 250px;
  transition: 0.5s ease;
  backface-visibility: hidden;
}
.header {
  display: flex;
  justify-content: space-around;
  background: #004351;
  padding: 25px 600px;
}

.box-search-container {
  display: flex;
  padding: 20px 25px 20px 15px;
  width: 1400px;
  height: 90px;
  align-items: center;
}

.box-search-filters {
  position: relative;
  border-radius: 5px;
  display: inline-block;
  align-items: center;
  margin: 10px;
  resize: none;
  cursor: pointer;
  color: #777;
  background: #fff;
  box-shadow: 0 0 8px 0 rgb(0 0 0 / 10%);
  font-size: 15px;
  padding: 15px 20px;
  min-height: 27px;
  width: 175px;
  text-shadow: 0 0 0 #777;
  overflow: hidden;
  vertical-align: top;
}

#search-platforms{
  resize: none;
    cursor: pointer;
    border: 0;
    height: 19px;
    background: 0 0;
    font-size: 15px;
    color: transparent;
    text-shadow: 0 0 0 #777;
    top: 5px;
}

option{
  font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
}
</style>

