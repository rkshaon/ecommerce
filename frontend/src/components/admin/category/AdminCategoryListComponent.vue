<template>
    <AdminDeleteCategoryComponent ref="deleteComponentModal" />
    <div class="pt-5">
        <table class="table caption-top table-hover table-bordered">
            <caption>List of categories</caption>
            <thead class="table-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Description</th>
                    <th scope="col">Icon</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(cat, index) in categoryList" :key="index">
                    <th scope="row">{{ index + 1 }}</th>
                    <td>{{ cat.title }}</td>
                    <td>{{ cat.description }}</td>
                    <td>
                        <img v-if="cat.icon" :src="`${API_BASE_URL}${cat.icon}`" :alt="cat.title" height="50" />
                        <div v-else>Upload Icon</div>
                    </td>
                    <td>
                        <font-awesome-icon class="text-warning" :icon="['fas', 'file-pen']" style=""
                            data-bs-toggle="modal" data-bs-target="#updateCategoryModal" />
                        <!-- <font-awesome-icon class="text-danger" :icon="['fas', 'trash']" style="padding-left: 10px;"
                            data-bs-toggle="modal" data-bs-target="#deleteCategoryModal" /> -->
                        <font-awesome-icon class="text-danger" :icon="['fas', 'trash']" style="padding-left: 10px;"
                            @click="showDeleteCategoryModal(cat.id)"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { API_BASE_URL } from '@/config';
import AdminDeleteCategoryComponent from '@/components/admin/category/AdminDeleteCategoryComponent.vue';

export default {
    name: "AdminCategoryListComponent",
    components: {
        AdminDeleteCategoryComponent,
    },
    setup() { },
    data() {
        return {
            API_BASE_URL: API_BASE_URL,
        }
    },
    computed: {
        ...mapState('category', {
            categoryList: 'categories'
        }),
    },
    methods: {
        ...mapActions('category', ['fetchCategories']),

        showDeleteCategoryModal(id) {
            this.$refs.deleteComponentModal.showDeleteCategoryModal(id);
        },

    },
    created() {
        this.fetchCategories();
    },
}
</script>

<style scoped></style>
