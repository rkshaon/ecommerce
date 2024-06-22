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
                            data-bs-target="#updateCategoryModal" @click="setUpdateCategoryId(category.id)" />
                        <font-awesome-icon :icon="['fas', 'trash']" style="padding-left: 10px;" data-bs-toggle="modal"
                            data-bs-target="#deleteCategoryModal" @click="setDeleteCategoryId(category.id)" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { API_BASE_URL } from '@/config';
import adminCategoryAPI from "@/services/adminCategoryAPI";


import { Modal } from 'bootstrap';

export default {
    name: "AdminCategoryListComponent",
    components: {
    },
    setup() { },
    data() {
        return {
            API_BASE_URL: API_BASE_URL,
            updateForm: {
                id: '',
                title: '',
                short_title: '',
                icon: null,
                description: '',
            },
            errorMessages: [],
            successMessage: '',
            categoryList: [],
            deleteCategoryId: null,
            originalIcon: null,
            showAddModal: false,
        }
    },
    created() {
        this.fetchCategories();
    },
    methods: {

        async fetchCategories() {
            try {
                const response = await adminCategoryAPI.getCategoriesForAdmin();
                this.categoryList = response.data;
            } catch (error) {
                console.error('Failed to fetch categories:', error);
                this.errorMessages.push({
                    'title': 'Fetch Category',
                    'message': 'Failed to fetch categories.',
                });
            }
        },

        async deleteCategory() {
            if (!this.deleteCategoryId) {
                console.error('Category ID is not set');
                return;
            }

            try {
                const response = await adminCategoryAPI.deleteCategoryForAdmin(this.deleteCategoryId);
                console.log('Deleted...', response.data);
                this.successMessage = response.data.message;
            } catch (error) {
                console.error('Failed...', error);
                this.errorMessages.push({
                    'title': 'Delete Category',
                    'message': 'Failed to delete an existing category.',
                });
            }

            let deleteCategoryModalElement = document.getElementById('deleteCategoryModal');
            let modal = Modal.getInstance(deleteCategoryModalElement);
            modal.hide();
        },

        handleFileChangeOnUpdate(event) {
            this.updateForm.icon = event.target.files[0];
        },

        setDeleteCategoryId(id) {
            this.deleteCategoryId = id;
        },

        findCategory(id) {
            this.updateForm = this.categoryList.find(obj => obj.id === id);
            return this.updateForm;
        },

        setUpdateCategoryId(id) {
            let categoryData = this.findCategory(id);

            if (categoryData) {
                this.updateForm.id = id;
                this.updateForm.title = categoryData.title;
                this.updateForm.short_title = categoryData.short_title;
                this.updateForm.icon = categoryData.icon;
                this.updateForm.description = categoryData.description;
                this.originalIcon = categoryData.icon;
            } else {
                console.log('Not found...');
            }
        },

        async updateCategory(id) {
            const formData = new FormData();

            formData.append('title', this.updateForm.title);
            formData.append('short_title', this.updateForm.short_title);
            formData.append('description', this.updateForm.description);

            if (this.updateForm.icon && this.originalIcon !== this.updateForm.icon) {
                formData.append('icon', this.updateForm.icon);
            }

            try {
                const response = await adminCategoryAPI.updateCategoryForAdmin(id, formData);
                this.successMessage = response.data.message;
            } catch (error) {
                for (const [field, messages] of Object.entries(error.response.errors)) {
                    this.errorMessages.push({
                        'title': field,
                        'message': messages[0],
                    });
                }
            }
        },
    }
}
</script>

<style scoped></style>
