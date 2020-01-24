import Vue from "vue";
import Vuex from "vuex";
import demo from "./module/demo";
import app from "./module/app";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

export default new Vuex.Store({
  strict: debug,
  state: {},
  mutations: {},
  actions: {},
  modules: {
    demo,
    app
  }
});
