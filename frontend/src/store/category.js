
import Vuex from "vuex";

import { API_BASE_URL } from '@/config';
import axios from 'axios';


export default new Vuex.Store({
  state: {
    categories: [],
  },
  mutations: {
    // Update the category list
    setCategories(state, categories, query = "only-parent") {
      state.categories = categories;
      
      if (query === "only-feature") {
        state.categories = state.categories.filter(
          (category) => category.is_featured
        );
      }
    },
  },
  actions: {
    async getCategories(context) {
      let URL = API_BASE_URL + "/api/categories/?query=only-parent";
      const response = await axios.get(URL);

      if (response.status === 200) {
        context.commit("setCategories", response.data.data);
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    },

    async getFeaturedCategories(context) {
      let URL = API_BASE_URL + "/api/categories/?query=only-feature";
      const response = await axios.get(URL);

      if (response.status === 200) {
        context.commit("setCategories", response.data.data);
      } else {
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    },
  },
});
