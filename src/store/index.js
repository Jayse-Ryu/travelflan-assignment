import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import account from './modules/account';
import displaySettings from './modules/displaySettings';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    account,
    displaySettings,
  },
});
