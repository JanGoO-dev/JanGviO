import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
  },
  getters: {
    get_loading(state) {
      return state.loading;
    },
  },
  mutations: {
    toggle_loading(state) {
      state.loading = !state.loading;
    },
  },
  actions: {},
  modules: {},
});
