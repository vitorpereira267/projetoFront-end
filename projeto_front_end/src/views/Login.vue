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
            axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB_OyO2NisQcW_NfsYHHRIUHJz2ATZOv2Q', {
                email: this.email,
                password: this.password,
                returnSecureToken: true
            })
            .then(
                res => console.log(res)
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