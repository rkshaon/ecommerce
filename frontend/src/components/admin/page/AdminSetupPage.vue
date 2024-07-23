<template>
    <div class="container mt-5">
        <AdminAddCategoryModal ref="addComponentModalForCategory" />
        <AdminAddProductModal ref="addComponentModalForProduct" />
        <button type="button" class="btn btn-primary btn-lg mb-2" @click="showAddCategoryModal">
            <font-awesome-icon :icon="['fas', 'plus']" class="me-2" />Add Category
        </button>
        <button type="button" class="btn btn-success btn-lg mb-2 mx-2" @click="showAddProductModal">
            <font-awesome-icon :icon="['fas', 'plus']" class="me-2" />Add Product
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
                                <h3 class="card-title px-3">{{ setupData.categories }}</h3>
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
                                <h3 class="card-title px-3">{{ setupData.active_categories }}</h3>
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
                                <h3 class="card-title px-3">{{ setupData.products }}</h3>
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
import { mapState, mapActions } from 'vuex';
import AdminAddCategoryModal from '@/components/admin/category/AdminAddCategoryModal.vue';
import AdminCategoryListComponent from '@/components/admin/category/AdminCategoryListComponent.vue';
import AdminAddProductModal from '@/components/admin/product/AdminAddProductModal.vue';

export default {
    name: "AdminSetupPage",
    components: {
        AdminAddCategoryModal,
        AdminCategoryListComponent,
        AdminAddProductModal,
    },
    setup() { },
    data() {
        return {
            API_BASE_URL: API_BASE_URL,
        }
    },
    computed: {
        ...mapState('setup', {
            setupData: 'setup'
        }),
    },
    methods: {
        ...mapActions('setup', ['fetchSetup']),

        showAddCategoryModal() {
            this.$refs.addComponentModalForCategory.showAddCategoryModal();
        },

        showAddProductModal() {
            this.$refs.addComponentModalForProduct.showAddProductModal();
        },
    },
    created() {
        this.fetchSetup();
    },
}
</script>

<style scoped></style>
