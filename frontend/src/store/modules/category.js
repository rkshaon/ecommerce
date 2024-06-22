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
        const response = await getCategoriesForAdmin();
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
    state,
    mutations,
    actions,
    getters,
};