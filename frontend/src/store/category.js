
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
      state.categories = categories;
    },
  },
  actions: {
    async getCategories(context) {
      // Generate API URL
      let URL = API_BASE_URL + "/api/categories/?query=only-parent";
      // Make the APi call
      const response = await axios.get(URL);

      if (response.status === 200) {
        console.log("In the store.js", response.data.data);
        context.commit("setCategories", response.data.data);
      } else {
        // Handle the error.
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
      }
    },
  },
});
