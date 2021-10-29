import accountApi from '@/api/account/account';

const state = {
  user: {},
};

// getters
const getters = {
  isAuth: (state) => (!!state.user?.uuid),
};

// mutations
const mutations = {
  setUser(state, data) {
    state.user = data;
  },

  clearUser(state) {
    state.user = {};
  },
};

// actions
const actions = {
  async doUserLogin({ commit }, form) {
    const response = await accountApi.loginUser(form);
    commit('setUser', response);
    return true;
  },

  async getCurrentUser({ commit }) {
    // empty user data
    commit('clearUser');
    try {
      const response = await accountApi.currentUser();
      commit('setUser', response);
      return response;
    } catch (err) {
      return null;
    }
  },

  async logout({ commit }) {
    commit('clearUser');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
