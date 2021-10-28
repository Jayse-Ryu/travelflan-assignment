import accountApi from '@/api/account/account';

const state = {
  user: {},
};

// getters
const getters = {
  userName: (state) => (!!state.user.name),
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
