import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    loadingPost: true,
  },
  getters: {
    get_loading(state) {
      return state.loading;
    },
    get_loadingPost(state) {
      return state.loadingPost;
    },
  },
  mutations: {
    toggle_loading(state) {
      state.loading = !state.loading;
    },
    toggle_loadingPost(state) {
      state.loadingPost = false;
    },
  },
  actions: {},
  modules: {},
});
