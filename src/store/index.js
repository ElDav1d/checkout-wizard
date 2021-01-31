import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userData: {
      name: "",
      lastName: "",
    },
    successData: {
      name: "",
      title: "Enhorabuena",
      copy:
        "El proceso de compra ha finalizado con éxito. En breve recibirás un email con todos los detalles. ¡Muchas gracias!",
      icon: "diploma.svg"
    }
  },
  getters: {
    getUserData: state => {
      return state.userData;
    },
    getSuccessData: state => {
      return state.successData;
    },
  },
  mutations: {
    SAVE_USER_DATA(state, userData) {
      state.userData = userData;
    },
    SAVE_SUCCESS_DATA(state, userName) {
      state.successData.name = userName;
    }
  },
  actions: {
    saveUserData({ commit }, userData) {
      commit("SAVE_USER_DATA", userData);
    },
    saveSuccessData({ commit }, successData) {
      commit("SAVE_SUCCESS_DATA", successData);
    }
  },
  plugins: [createPersistedState()]
});
