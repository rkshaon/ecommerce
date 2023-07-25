
import Vuex from "vuex";

import { API_BASE_URL } from '@/config';
import axios from 'axios';


export default new Vuex.Store({
  state: {
    categories: [],
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    getCategories(context) {
      let URL = API_BASE_URL + "/api/categories/?query=only-parent";
      axios.get(URL).then((response) => {
        console.log('In store.js');
        context.commit("setCategories", response.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    },
  },
});
