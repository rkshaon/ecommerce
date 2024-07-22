// /src/store/modules/setup.js

import {
  getSetupForAdmin,
} from "@/services/adminSetupAPI";

const state = {
  setup: {},
};

const mutations = {
  setSetup(state, setup) {
    state.setup = setup;
  },
};

const actions = {
  async fetchSetup({ commit }) {
    const response = await getSetupForAdmin();
    commit("setSetup", response.data);
  },
};

const getters = {
  setup: (state) => state.setup,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
