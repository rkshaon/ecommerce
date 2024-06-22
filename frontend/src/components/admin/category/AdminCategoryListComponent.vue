<template>
    <div class="pt-5">
        <table class="table caption-top table-hover table-bordered">
            <caption>List of categories</caption>
            <thead class="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Icon</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(category, index) in categoryList" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ category.title }}</td>
                    <td>{{ category.description }}</td>
                    <td>
                        <div class="alert alert-warning" role="alert">
                            Active: {{ category.is_active }}
                        </div>
                        <div class="alert alert-danger" role="alert">
                            Delete: {{ category.is_deleted }}
                        </div>
                    </td>
                    <td>
                        <img v-if="category.icon" :src="`${API_BASE_URL}${category.icon}`" :alt="category.title"
                            height="50" />
                        <div v-else>Upload Icon</div>
                    </td>
                    <td>
                        <font-awesome-icon :icon="['fas', 'file-pen']" style="" data-bs-toggle="modal"
                            data-bs-target="#updateCategoryModal" />
                        <font-awesome-icon :icon="['fas', 'trash']" style="padding-left: 10px;" data-bs-toggle="modal"
                            data-bs-target="#deleteCategoryModal" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { API_BASE_URL } from '@/config';

export default {
    name: "AdminCategoryListComponent",
    components: {
    },
    computed: {
        ...mapState('category', ['categories'])
    },
    setup() { },
    data() {
        return {
            API_BASE_URL: API_BASE_URL,
            categoryList: [],
        }
    },
    methods: {
        ...mapActions('category', ['fetchCategories']),
    },
    created() {
        this.fetchCategories();
    },
}
</script>

<style scoped></style>
