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
    signUpError: "",
    signUpSuccess: "",
    signInError: "",
    signInSuccess: "",
    signOutError: "",
    signOutSuccess: "",
    userLogedIn: false,
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
    get_loggedInStatus(state) {
      return state.userLogedIn;
    },
    get_signInError(state) {
      return state.signInError;
    },
    get_signInSuccess(state) {
      return state.signInSuccess;
    },
    get_signUpError(state) {
      return state.signUpError;
    },
    get_signUpSuccess(state) {
      return state.signUpSuccess;
    },
    get_signOutError(state) {
      return state.signOutError;
    },
    get_signOutSuccess(state) {
      return state.signOutSuccess;
    },
  },
  mutations: {
    toggle_loading(state) {
      state.loading = !state.loading;
    },
    toggle_loadingPost(state) {
      state.loadingPost = false;
    },
    set_signUpError(state, payload) {
      state.signUpError = payload;
    },
    set_signUpSuccess(state, payload) {
      state.signUpSuccess = payload;
    },
    set_signInError(state, payload) {
      state.signInError = payload;
    },
    set_signInSuccess(state, payload) {
      state.signInSuccess = payload;
    },
    load_user(state, payload) {
      state.user.email = payload.email;
      state.user.name = payload.displayName;
    },
    set_loggedInState(state, payload) {
      state.userLogedIn = payload;
    },
    set_signOutError(state, payload) {
      state.signOutError = payload;
    },
    set_signOutSuccess(state, payload) {
      state.signOutSuccess = payload;
    },
  },
  actions: {
    simpleSignUp({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          firebase.auth().currentUser.updateProfile({
            displayName: payload.name,
          });
          let success = "You Accound Has Been Created Successfully";
          commit("set_signUpSuccess", success);
          commit("set_signUpError", "");
        })
        .catch((error) => {
          commit("set_signUpError", error);
        });
    },
    simpleSignIn({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          if (user) {
            commit("load_user", user.user);
            let success = "You are Logged In Successfully";
            commit("set_signInSuccess", success);
            commit("set_signInError", "");
            commit("set_loggedInState", true);
          }
        })
        .catch((error) => {
          commit("set_signInError", error);
        });
    },
    reloadUser({ commit }) {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          commit("load_user", user);
          commit("set_loggedInState", true);
          console.log(user);
        } else {
          console.log("user is signed out");
        }
      });
    },
    signOutUser({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("set_signOutSuccess", "Signed Out Successfully");
          commit("set_signOutError", "");
        })
        .catch((error) => {
          commit("set_signOutError", error);
          commit("set_signOutSuccess", "");
        });
    },
  },
});
