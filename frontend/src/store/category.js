
import Vuex from "vuex";

import { API_BASE_URL } from '@/config';
import axios from 'axios';


export default new Vuex.Store({
  state: {
    categories: [],
    // featureCategories: [],
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },

    // setFeatureCategories(state, featureCategories) {
    //   state.featureCategories = featureCategories;
    // },
  },
  actions: {
    async getCategories(context) {
      // let URL = API_BASE_URL + "/api/categories/?query=only-parent";
      let URL = API_BASE_URL + "/api/categories/";
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

    // async getFeaturedCategories(context) {
    //   let URL = API_BASE_URL + "/api/categories/?query=only-feature";
    //   const response = await axios.get(URL);

    //   if (response.status === 200) {
    //     context.commit("setFeatureCategories", response.data.data);
    //   } else {
    //     const error = new Error(response.statusText);
    //     error.response = response;
    //     throw error;
    //   }
    // },
  },
});
