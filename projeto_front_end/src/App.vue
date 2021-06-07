<template>
  <div id="app" >
    
    <div id="nav">
      <router-link to="/"><img src="https://upload.wikimedia.org/wikipedia/en/7/7c/Final_Space_Logo.png" alt=""></router-link> 
      <div>
       <!-- <i class="far fa-heart"></i>  -->
      <router-link to="/">Home</router-link>  |
      <router-link to="/personagens">Characters</router-link>  |
      <router-link to="/episodios">Episodes</router-link> |
      <router-link to="/favoritos">Favorites</router-link> |
      <router-link to="/login" ><strong>Login</strong></router-link>
      </div>
      
      
      
    </div>
    
    <router-view/>
  </div>
</template>

<style>
/*@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
 .far{
  font-family: 'Font Awesome 5 Free';
  font-weight: 900;
} */
/*#app {
  /* font-family: cursive;
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-image:  url("https://i.pinimg.com/originals/f6/20/a1/f620a179ca1acfd15a0754701677fb58.jpg"); 
}*/
body{
  margin:0;
  background-image: url('https://i.pinimg.com/originals/f6/20/a1/f620a179ca1acfd15a0754701677fb58.jpg');
  /* font-family: 'Bebas Neue', cursive; */
  font-family: arial;
  font-weight: 100;
  font-size: 32px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  

}

#nav {
  padding:30px 300px;
  display:flex;
  justify-content: space-between;
  align-items: center;

  text-align: center;
  color: white;
  background-image:  url("https://i.pinimg.com/originals/f6/20/a1/f620a179ca1acfd15a0754701677fb58.jpg");
}

#nav a {
  font-weight: bold;
  color: #00BFFF;
}

#nav img {
  width: 120px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

</style>
