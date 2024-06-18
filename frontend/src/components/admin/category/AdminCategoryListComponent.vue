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
        <!-- Add category modal -->
        <!-- Add Category Modal -->
        <div class="modal fade" id="addCategoryModal" tabindex="-1" aria-labelledby="addCategoryModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addCategoryModalLabel">Add Category</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="createCategory">
                            <div class="mb-3">
                                <label for="title" class="form-label">Title</label>
                                <input type="text" class="form-control" id="title" v-model="categoryForm.title">
                            </div>
                            <div class="mb-3">
                                <label for="shortTitle" class="form-label">Short Title</label>
                                <input type="text" class="form-control" id="shortTitle"
                                    v-model="categoryForm.short_title">
                            </div>
                            <div class="mb-3">
                                <label for="icon" class="form-label">Icon</label>
                                <input type="file" class="form-control" id="icon" @change="handleFileChangeOnInsert">
                            </div>
                            <div class="mb-3">
                                <label for="description" class="form-label">Description</label>
                                <textarea class="form-control" id="description" rows="3"
                                    v-model="categoryForm.description" maxlength="255"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Save</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
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
        <button type="button" class="btn btn-primary btn-lg mb-2" data-bs-toggle="modal"
            data-bs-target="#addCategoryModal">
            <font-awesome-icon :icon="['fas', 'plus']" class="me-2" />
            Add Category
        </button>
        <button type="button" class="btn btn-success" @click="showTestModal">Test me!</button>
        <ModalComponent></ModalComponent>
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
                            <font-awesome-icon :icon="['fas', 'trash']" style="padding-left: 10px;"
                                data-bs-toggle="modal" data-bs-target="#deleteCategoryModal"
                                @click="setDeleteCategoryId(category.id)" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { API_BASE_URL } from '@/config';
import adminCategoryAPI from "@/services/adminCategoryAPI";
import ModalComponent from '@/components/admin/category/ModalComponent.vue';

import { Modal } from 'bootstrap';
// import bootstrap from 'bootstrap';

// let testModal;

export default {
    name: "AdminCategoryListComponent",
    components: {
        ModalComponent,
    },
    // onMounted
    // mounted() {
    //     // () => {
    //     //     testModal = new bootstrap.Modal(document.getElementById('testModal'));
    //     //     console.log(testModal);
    //     // }
    //     testModal = new bootstrap.Modal(document.getElementById('testModal'));
    //     // console.log(testModal);
    // },
    setup() {},
    data() {
        return {
            API_BASE_URL: API_BASE_URL,
            categoryForm: {
                title: '',
                short_title: '',
                icon: null,
                description: '',
            },
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
        showTestModal() {
            // console.log('Hello...');
            // let testModal = new bootstrap.Modal(document.getElementById('testModal'));
            // // console.log(testModal);
            // testModal.show();
            this.$refs.modalComponent.showTestModal();
        },

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

        async createCategory() {
            const formData = new FormData();

            formData.append('title', this.categoryForm.title);
            formData.append('short_title', this.categoryForm.short_title);
            formData.append('description', this.categoryForm.description);
            formData.append('is_active', true);

            if (this.categoryForm.icon) {
                formData.append('icon', this.categoryForm.icon);
            }

            try {
                const response = await adminCategoryAPI.createCategoryForAdmin(formData);
                console.log('Create...', response.data);
                this.successMessage = 'Category created successfully!';
            } catch(error) {
                console.error('Failed...', error);
                this.errorMessages.push({
                    'title': 'Create Category',
                    'message': 'Failed to create a new category.',
                });
            }

            let createCategoryModalElement = document.getElementById('addCategoryModal');
            let modal = Modal.getInstance(createCategoryModalElement);
            modal.hide();
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

        handleFileChangeOnInsert(event) {
            this.categoryForm.icon = event.target.files[0];
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
