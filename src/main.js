import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import * as firebase from "firebase/app";
import "firebase/auth";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

var firebaseConfig = {
  apiKey: "AIzaSyDF6qvgggsPTAeJwiyLBIgZ7-jttaAIyS0",
  authDomain: "jangvio.firebaseapp.com",
  databaseURL: "https://jangvio.firebaseio.com",
  projectId: "jangvio",
  storageBucket: "jangvio.appspot.com",
  messagingSenderId: "136463658555",
  appId: "1:136463658555:web:337696cfd749ba2aeeb61e",
};

firebase.initializeApp(firebaseConfig);
Vue.use(firebase);

window.addEventListener("onload", store.dispatch("reloadUser"));

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
