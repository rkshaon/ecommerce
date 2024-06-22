import { getCategoriesForAdmin, createCategoryForAdmin, deleteCategoryForAdmin } from '@/services/adminCategoryAPI';

const state = {
  categories: [],
};

const mutations = {
    setCategories(state, categories) {
        state.categories = categories;
    },
    
    addCategory(state, category) {
        state.categories.push(category);
    },
  
    removeCategory(state, id) {
        state.categories = state.categories.filter(
            (category) => category.id !== id
        );
    },
};

const actions = {
    async fetchCategories({ commit }) {
        console.log('Hello');
        const response = await getCategoriesForAdmin();
        console.log(response.data);
        commit("setCategories", response.data);
    },
    
    async addCategory({ commit }, category) {
        const response = await createCategoryForAdmin(category);
        commit("addCategory", response.data);
    },
    
    async deleteCategory({ commit }, id) {
        await deleteCategoryForAdmin(id);
        commit("removeCategory", id);
    },
};

const getters = {
    categories: (state) => state.categories,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};