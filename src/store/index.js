import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      name: "",
      lastName: "",
    }
  },
  getters: {
    getUserData: state => {
      return state.userData;
    }
  },
  mutations: {
    SAVE_USER_DATA(state, userData) {
      state.userData = userData;
    }
  },
  actions: {
    saveUserData({ commit }, userData) {
      commit("SAVE_USER_DATA", userData);
    }
  },
  plugins: [createPersistedState()]
});
