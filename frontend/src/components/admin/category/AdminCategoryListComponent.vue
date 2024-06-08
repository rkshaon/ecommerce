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
        <div class="modal fade" id="addCategoryModal" tabindex="-1" aria-labelledby="addCategoryModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addCategoryModalLabel">Add Category</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-start">
                        <form action="">
                            <div class="mb-3">
                                <label for="exampleInputText1" class="form-label">Title</label>
                                <input type="text" class="form-control" id="exampleInputText1"
                                    aria-describedby="textHelp1" v-model="categoryForm.title">
                                <div id="textHelp1" class="form-text">Category name must be unique.</div>
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputText2" class="form-label">Short Title</label>
                                <input type="text" class="form-control" id="exampleInputText2"
                                    v-model="categoryForm.short_title">
                            </div>
                            <div class="mb-3">
                                <label for="exampleInputText3" class="form-label">Icon</label>
                                <input type="file" class="form-control" id="exampleInputText3"
                                    @change="handleFileChange">
                            </div>
                            <div class="mb-3">
                                <label for="exampleTextarea" class="form-label">Description</label>
                                <textarea class="form-control" id="exampleTextarea" rows="3"
                                    v-model="categoryForm.description" maxlength="255">
                                </textarea>
                                <div class="ms-3 text-end">
                                    <span class="text-muted small">{{ categoryForm.description.length }} / 255</span>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary" @click="saveCategory">Save changes</button>
                    </div>
                </div>
            </div>
        </div>
        <!-- Add category modal -->
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
                            <font-awesome-icon :icon="['fas', 'file-pen']" style="" />
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
import axios from "axios";
import { API_BASE_URL } from '@/config';
import { refreshToken } from "@/services/refreshToken";
// import { Modal } from 'bootstrap';

export default {
    name: "AdminCategoryListComponent",
    data() {
        return {
            API_BASE_URL: API_BASE_URL,
            categoryForm: {
                title: '',
                short_title: '',
                icon: null,
                description: '',
            },
            errorMessages: [],
            successMessage: '',
            categoryList: [],
            deleteCategoryId: null,
        }
    },
    created() {
        this.getCategoryList();
    },
    methods: {
        handleFileChange(event) {
            this.categoryForm.icon = event.target.files[0];
        },

        async saveCategory() {
            const URL = API_BASE_URL + '/api/v1/categories/';
            const headers = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                }
            }
            const formData = new FormData();

            formData.append('title', this.categoryForm.title);
            formData.append('short_title', this.categoryForm.short_title);
            formData.append('description', this.categoryForm.description);

            if (this.categoryForm.icon) {
                console.log('Icon is not empty.');
                formData.append('icon', this.categoryForm.icon);
            }

            formData.append('is_active', true);

            await axios.post(
                URL, formData, headers,
            ).then(response => {
                console.log('Success', response);
                this.successMessage = 'Category created successfully!';
            }).catch(error => {
                if (error.response.status === 401) {
                    refreshToken();
                    this.saveCategory();
                } else if (error.response.status === 500) {
                    this.errorMessages = 'Server issue';
                } else {
                    for (const [field, messages] of Object.entries(error.response.data.errors)) {
                        this.errorMessages.push({
                            'title': field,
                            'message': messages[0],
                        })
                    }
                }
            });
        },

        async getCategoryList() {
            const URL = API_BASE_URL + '/api/v1/categories/';
            const headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
                }
            }

            await axios.get(
                URL, headers
            ).then(response => {
                if (response.status === 200) {
                    this.categoryList = response.data.data;
                }
            }).catch(error => {
                if (error.response.status === 401) {
                    refreshToken();
                    this.saveCategory();
                } else if (error.response.status === 500) {
                    this.errorMessages = 'Server issue';
                }
            })
        },

        setDeleteCategoryId(id) {
            this.deleteCategoryId = id;
        },

        async deleteCategory() { 
            if (!this.deleteCategoryId) {
                console.error('Category ID is not set');
                return;
            }

            const URL = `${this.API_BASE_URL}/api/v1/categories/${this.deleteCategoryId}`;
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`,
            };

            console.log('Delete...', this.deleteCategoryId);
            console.log(URL);
            console.log(headers);

            try {
                const response = await axios.delete(URL, { headers });
                console.log(response.status);
                if (response.status === 202) {
                    this.successMessage = 'Category deleted successfully!';
                    this.getCategoryList();
                }
            } catch (error) {
                if (error.response && error.response.status === 401) {
                    refreshToken();
                    this.deleteCategory();
                } else if (error.response && error.response.status === 500) {
                    this.errorMessages = 'Server issue';
                } else {
                    this.errorMessages.push({
                        'title': 'Error',
                        'message': 'Could not delete the category',
                    });
                }
            }

            // let deleteModal = Modal.getInstance(document.getElementById('deleteCategoryModal'));
            // deleteModal.hide();
        },
        
    }
}
</script>

<style scoped></style>
