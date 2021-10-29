import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';

// Modules
import account from './modules/account';
import displaySettings from './modules/displaySettings';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: process.env.VUE_APP_VUEX_KEY,
  modules: [
    'account',
    'displaySettings',
  ],
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    account,
    displaySettings,
  },
  plugins: [vuexLocal.plugin],
});
