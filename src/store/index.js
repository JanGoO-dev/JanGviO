import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase/app";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    loadingPost: true,
    user: {
      email: "",
      name: "",
    },
  },
  getters: {
    get_loading(state) {
      return state.loading;
    },
    get_loadingPost(state) {
      return state.loadingPost;
    },
    get_user(state) {
      return state.user;
    },
  },
  mutations: {
    toggle_loading(state) {
      state.loading = !state.loading;
    },
    toggle_loadingPost(state) {
      state.loadingPost = false;
    },
    load_user(state, payload) {
      console.log(payload);
      state.user.email = payload.email;
      state.user.name = payload.displayName;
    },
  },
  actions: {
    simpleSignUp({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          console.log("Account Created Successfully");
          firebase.auth().currentUser.updateProfile({
            displayName: payload.name,
          });
          commit("load_user", user.user);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    simpleSignIn({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          if (user) {
            console.log("Signed In Successfully");
            commit("load_user", user.user);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    reloadUser({ commit }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          commit("load_user", user);
          console.log(user);
        } else {
          console.log("user is signed out");
        }
      });
    },
  },
});
