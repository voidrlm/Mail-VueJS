import Vue from "vue";
import Vuex from "vuex";
import { encrypt } from "../services/encryptDecrypt";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    currentUser: {},
    search: "",
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      return (state.currentUser = currentUser);
    },
    setSearchValue(state, search) {
      return (state.search = search);
    },
  },
  actions: {
    setCurrentUser(context, currentUser) {
      window.$cookies.set("uauth", encrypt(currentUser));
      if (context.currentUser === currentUser) return;
      context.commit("setCurrentUser", currentUser);
    },
    setSearchValue(context, search) {
      if (context.search === search) return;
      context.commit("setSearchValue", search);
    },

    resetState() {
      // context.dispatch("setCurrentUser", {});
    },
  },
  getters: {
    currentUser: (state) => state.currentUser,
    searchValue: (state) => state.search,
  },
});

export default store;
