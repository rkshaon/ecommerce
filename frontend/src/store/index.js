// import Vue from "vue";
import Vuex from "vuex";
import category from "./modules/category";

// Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    category,
  },
});

// Old codes
// import { createStore } from "vuex";
// import auth from "./modules/auth";

// const store = createStore({
//   modules: {
//     auth,
//   },
// });

// export default store;

// import Vue from "vue";
// import Vuex from "vuex";
// import auth from "./modules/auth";

// Vue.use(Vuex);

// const store = new Vuex.Store({
//   modules: {
//     auth,
//   },
// });

// export default store;
