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
import AdminAddCategoryComponent from '@/components/admin/category/AdminAddCategoryComponent.vue';
import AdminCategoryListComponent from '@/components/admin/category/AdminCategoryListComponent.vue';

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
            errorMessages: [],
            successMessage: '',
        }
    },
    created() {

    },
    methods: {
        showAddCategoryModal() {
            this.$refs.addComponentModal.showAddCategoryModal();
        },
    }
}
</script>

<style scoped></style>
