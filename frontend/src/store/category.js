
import Vuex from "vuex";

import { API_BASE_URL } from '@/config';
import axios from 'axios';


export default new Vuex.Store({
  state: {
    categories: [],
  },
  mutations: {
    // Update the category list
    setCategories(state, categories) {
      const existingCategories = state.categories.filter((existingCategory) =>
        categories.some(
          (filteredCategory) => filteredCategory.id === existingCategory.id
        )
      );

      const newCategories = categories.filter(
        (category) =>
          !existingCategories.some(
            (existingCategory) => existingCategory.id === category.id
          )
      );

      state.categories = [...state.categories, ...newCategories];
    },
  },
  actions: {
    async getCategories(context) {
      let URL = API_BASE_URL + "/api/categories/?query=only-parent";
      const response = await axios.get(URL);

      if (response.status === 200) {
        let data = response.data.data;
        data.forEach((element) => {
          element.is_root = true;
        });

        context.commit("setCategories", data);
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
