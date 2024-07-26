// src/store/modules/category.js

import {
  getUserProfile,
  changePassword,
} from "@/services/userAPI";

const state = {
  profile: {},
};

const mutations = {
  setUserProfile(state, profile) {
    state.profile = profile;
  },
};

const actions = {
  async fetchUserProfile({ commit }) {
    const response = await getUserProfile();
    commit("setUserProfile", response.data);
  },

  async changePassword() {
    const response = await changePassword();
    console.log("response in store: ", response.data);
  },
};

const getters = {
  profile: (state) => state.profile,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};