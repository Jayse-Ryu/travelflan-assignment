const state = {
  darkMode: false,
};

// mutations
const mutations = {
  setDarkMode(state, newValue) {
    state.darkMode = newValue;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
};
