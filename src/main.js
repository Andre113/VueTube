import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from 'firebase';

Vue.config.productionTip = false;

var config = {
    apiKey: "AIzaSyDmRZ3ZPCYlrtHmbu1ApF3_xY2zjNXvdRM",
    authDomain: "vuetube-4ab5a.firebaseapp.com",
    databaseURL: "https://vuetube-4ab5a.firebaseio.com",
    projectId: "vuetube-4ab5a",
    storageBucket: "vuetube-4ab5a.appspot.com",
    messagingSenderId: "345982165614"
  };
  firebase.initializeApp(config);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
