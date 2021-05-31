import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
/*
import firebase from "firebase";
*/


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')

/*
var firebaseConfig = {
  apiKey: "YourConfigHere",
  authDomain: "YourConfigHere",
  projectId: "YourConfigHere",
  storageBucket: "YourConfigHere",
  messagingSenderId: "YourConfigHere",
  appId: "YourConfigHere"

};

firebase.initializeApp(firebaseConfig);*/