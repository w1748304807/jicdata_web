import Vue from "vue";
import Vuex from "vuex";

import multiTabs from "./modules/multiTabs";
import app from "./modules/app";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  getters: {},
  modules: { multiTabs, app },
});
