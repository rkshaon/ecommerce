<template>
    <div class="container mt-5">
        <div v-if="successMessage" class="alert alert-success mt-3">
            {{ successMessage }}
        </div>
        <div v-if="errorMessages.length > 0" class="">
            <ul class="list-unstyled">
                <li v-for="message in errorMessages" :key="message">
                    <div class="alert alert-danger">
                        <h5 class="text-capitalize">{{ message.title }}</h5>
                        <p>{{ message.message }}</p>
                    </div>
                </li>
            </ul>
        </div>
        <AdminAddCategoryComponent ref="addComponentModal" />
        <!-- Update category modal -->
        <div class="modal fade" id="updateCategoryModal" tabindex="-1" aria-labelledby="updateCategoryModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="updateCategoryModalLabel">Update Category</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-start">
                        <form action="">
                            <div class="mb-3">
                                <label for="exampleInputText1" class="form-label">Title</label>
                                <input type="text" class="form-control" id="exampleInputText1"
                                    aria-describedby="textHelp1" v-model="updateForm.title">
                                <div id="textHelp1" class="form-text">Category name must be unique.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputText2" class="form-label">Short Title</label>
                                <input type="text" class="form-control" id="exampleInputText2"
                                    v-model="updateForm.short_title">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputText3" class="form-label">Icon</label>
                                <img v-if="updateForm.icon" :src="`${API_BASE_URL}${updateForm.icon}`"
                                    :alt="updateForm.title" height="50" />
                                <input type="file" class="form-control" id="exampleInputText3"
                                    @change="handleFileChangeOnUpdate">
                            </div>
                            <div class="mb-3">
                                <label for="exampleTextarea" class="form-label">Description</label>
                                <textarea class="form-control" id="exampleTextarea" rows="3"
                                    v-model="updateForm.description" maxlength="255">
                                </textarea>
                                <div class="ms-3 text-end">
                                    <span class="text-muted small">{{ updateForm.description.length }} / 255</span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="updateCategory(updateForm.id)">Save
                            changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Delete category modal -->
        <div class="modal fade" id="deleteCategoryModal" tabindex="-1" aria-labelledby="deleteCategoryModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="deleteCategoryModalLabel">Delete Category</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-start">
                        <div class="mb-3">
                            <label for="exampleInputText1" class="form-label">Are you sure?</label>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-danger" @click="deleteCategory">Yes, delete</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add category button -->
        <!-- <button type="button" class="btn btn-primary btn-lg mb-2" data-bs-toggle="modal"
            data-bs-target="#addCategoryModal">
            <font-awesome-icon :icon="['fas', 'plus']" class="me-2" />
            Add Category
        </button> -->
        <button type="button" class="btn btn-primary btn-lg mb-2" @click="showAddCategoryModal">
            <font-awesome-icon :icon="['fas', 'plus']" class="me-2" />Add Category
        </button>
        <div class="row">
            <div class="col-md-4">
                <div class="shadow-lg">
                    <div class="card bg-dark text-white">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center pt-3">
                                <p class="card-text px-3">Total Categories</p>
                                <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" class="pe-3" />
                            </div>
                            <div class="d-flex justify-content-between pb-3">
                                <h3 class="card-title px-3">2150</h3>
                                <a href="#" class="btn btn-primary me-3">Any state</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="shadow-lg">
                    <div class="card bg-dark text-white">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center pt-3">
                                <p class="card-text px-3">Active Categories</p>
                                <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" class="pe-3" />
                            </div>
                            <div class="d-flex justify-content-between pb-3">
                                <h3 class="card-title px-3">177</h3>
                                <a href="#" class="btn btn-primary me-3">Any state</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4">
                <div class="shadow-lg">
                    <div class="card bg-dark text-white">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex justify-content-between align-items-center pt-3">
                                <p class="card-text px-3">Total Products</p>
                                <font-awesome-icon :icon="['fas', 'ellipsis-vertical']" class="pe-3" />
                            </div>
                            <div class="d-flex justify-content-between pb-3">
                                <h3 class="card-title px-3">300547</h3>
                                <a href="#" class="btn btn-primary me-3">Any state</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <AdminCategoryListComponent />
    </div>
</template>

<script>
import { API_BASE_URL } from '@/config';
import adminCategoryAPI from "@/services/adminCategoryAPI";
import AdminAddCategoryComponent from '@/components/admin/category/AdminAddCategoryComponent.vue';
import AdminCategoryListComponent from '@/components/admin/category/AdminCategoryListComponent.vue';

import { Modal } from 'bootstrap';

export default {
    name: "AdminCategoryComponent",
    components: {
        AdminAddCategoryComponent,
        AdminCategoryListComponent
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
            deleteCategoryId: null,
            originalIcon: null,
            showAddModal: false,
        }
    },
    created() {

    },
    methods: {
        showAddCategoryModal() {
            this.$refs.addComponentModal.showAddCategoryModal();
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
