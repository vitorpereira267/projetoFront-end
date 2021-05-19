<template>
  <div id="app">
    
    <div id="nav">
      <router-link to="/"><img src="https://upload.wikimedia.org/wikipedia/en/7/7c/Final_Space_Logo.png" alt=""></router-link> 
      <div>
      <router-link to="/">Home</router-link>  |
      <router-link to="/personagens">Characters</router-link>  |
      <router-link to="/episodios">Episodes</router-link>  
      </div>
      
      
      
    </div>
    
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Blippo, fantasy;
  font-size: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-color:  #191970;
}

#nav {
  padding:30px 300px;
  display:flex;
  justify-content: space-between;
  align-items: center;
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
