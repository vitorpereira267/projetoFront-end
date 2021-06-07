<template>
  <div class="form">
      <h3> LOGIN </h3>
      <form @submit.prevent="submit">
          <span>Email: </span>
          <input type="email" v-model='email'>
          <br><br>
          <span>Password: </span>
          <input type="password" v-model='password'>
          <br>
        
          <button type="submit">Send</button>
           <div style="text-align:end;">
          <a href="/register">Create account here</a>
           </div>
          
          
      </form>
  </div>
</template>

<script>
import axios from "axios"
export default {
    data(){
        return {
            email:'',
            password:''
        }
    },
    methods:{
        submit(){
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB_OyO2NisQcW_NfsYHHRIUHJz2ATZOv2Q', {
                email: this.email,
                password: this.password,
                returnSecureToken: true
            })
            .then(
                res => {
                    //$this.store.commit('setUser', res.data)
                    this.$router.push('/')
                }
            )
            .catch(
                res => console.log(res)
            )
        }
    }
}
</script>

<style>
.form{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: center;
    flex-direction: column;
}
</style>