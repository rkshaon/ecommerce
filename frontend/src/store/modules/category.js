// src/store/modules/category.js

import {
    getCategoryForAdmin,
    getCategoriesForAdmin,
    createCategoryForAdmin,
    deleteCategoryForAdmin,
    updateCategoryForAdmin,
} from "@/services/adminCategoryAPI";

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

    updateCategory(state, updatedCategory) {
        const index = state.categories.findIndex(
            (category) => category.id === updatedCategory.id
        );

        if (index !== -1) {
            state.categories.splice(index, 1, updatedCategory);
        }
    },
};

const actions = {
    async fetchCategory({ commit }, id) {
        const category = state.categories.find(
            (category) => category.id === id
        );

        if (category) {
          return category;
        } else {
            const response = await getCategoryForAdmin(id);            
            commit("addCategory", response.data);
            return response.data;
        }
    },

    async fetchCategories({ commit }) {
        const response = await getCategoriesForAdmin();
        commit("setCategories", response.data.results);
    },

    async addCategory({ commit }, category) {
        try {
            const response = await createCategoryForAdmin(category);
            commit("addCategory", response.data);
            return response.data;
        } catch (error) {
            console.error("Error adding category:", error);
            throw error;
        }
    },

    async deleteCategory({ commit }, id) {
        await deleteCategoryForAdmin(id);
        commit("removeCategory", id);
    },

    async updateCategory({ commit }, {id, category}) {
        const response = await updateCategoryForAdmin(id, category);
        commit("updateCategory", response.data);
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
