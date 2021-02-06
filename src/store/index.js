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
    },
    progressStatus: "",
  },
  getters: {
    getUserData: state => {
      return state.userData;
    },
    getSuccessData: state => {
      return state.successData;
    },
    getProgressStatus: state => {
      return state.progressStatus;
    }
  },
  mutations: {
    SAVE_USER_DATA(state, userData) {
      state.userData = userData;
    },
    SAVE_SUCCESS_DATA(state, userName) {
      state.successData.name = userName;
    },
    SAVE_PROGRESS_STATUS(state, progressStatus) {
      state.progressStatus = progressStatus;
    },
  },
  actions: {
    saveUserData({ commit }, userData) {
      commit("SAVE_USER_DATA", userData);
    },
    saveSuccessData({ commit }, successData) {
      commit("SAVE_SUCCESS_DATA", successData);
    },
    saveProgressStatus({ commit }, progressStatus) {
      commit("SAVE_PROGRESS_STATUS", progressStatus);
    },
  },
  plugins: [createPersistedState()]
});
