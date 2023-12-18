<template>
    <div class="container">
        <div class="mt-3 mb-3 d-flex align-items-center">
            <router-link to="/" class="me-3"><font-awesome-icon :icon="['fas', 'house']" class="text-dark" /></router-link>
            <font-awesome-icon :icon="['fas', 'right-long']" />
            <router-link v-if="categoryDetails.category_slug && categoryDetails.id > 0" class="nav-link me-3"
                :to="{
                    name: 'category',
                    params: {
                        category_id: categoryDetails.id,
                        category_slug: categoryDetails.category_slug,
                    }
            }">{{ categoryDetails.title }}</router-link>
            <font-awesome-icon :icon="['fas', 'right-long']" />
            <router-link :to="{
                name: 'product',
                params: {
                    product_id: productDetails.id,
                    product_slug: productDetails.product_slug,
                }
            }" class="navbar-brand">{{ productDetails.title }}</router-link>
        </div>
        <div class="row">            
            <div class="col-5">
                <div>
                    <picture>
                        <source srcset="" type="image/svg+xml">
                        <img
                            v-if="productDetails.images && productDetails.images.length > 0"
                            :src="`${API_BASE_URL}${productDetails.images[0].image}`"
                            class="img-fluid img-thumbnail"
                            :alt="productDetails.title"
                        />
                        <img
                            v-else
                            src="/icon.png"
                            class="img-fluid img-thumbnail"
                            :alt="productDetails.title"
                        />
                    </picture>
                </div>
                <div></div>
            </div>
            <div class="col-7">
                <h1>{{ productDetails.title }}</h1>
            </div>
        </div>
        <div class="row">
            <div class="col-8">
                <h1>Specification/Details of {{ productDetails.title }}</h1>
            </div>
            <div class="col-4">
                <h1>Related products</h1>
            </div>            
        </div>
        <div class="row">
            <h1>FAQ about {{ productDetails.title }}</h1>
        </div>
        <div class="row">
            <h1>Review of {{ productDetails.title }}</h1>
        </div>
    </div>
</template>

<script>
import { API_BASE_URL } from '@/config';

export default {
    name: 'ProductDetailsComponent',
    data() {
        return {
            API_BASE_URL: API_BASE_URL,
            productDetails: {
                'title': 'Product Title',
            },
            categoryDetails: {
                'id': 0,
                'title': 'category',
                'category_slug': 'category',
            },
            loading: true,
        }
    },
    props: {},
    components: {},
    mounted() {},
    async created() { 
        await this.fetchProductDetailsData();
        this.fetchCategoryDetailsData();
    },
    watch: {
        // Watch for changes in route parameters
        '$route.params.product_id': 'handleProductChange',
    },
    methods: {
        async handleProductChange() {
            await this.fetchProductDetailsData();
            this.fetchCategoryDetailsData();
        },
        
        async fetchProductDetailsData() {
            let url = `${API_BASE_URL}/api/products/${this.$route.params.product_id}`;
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                this.productDetails = data.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                this.loading = false;
            }
        },

        async fetchCategoryDetailsData() {
            if (!this.productDetails.category) {
                // Check if productDetails has a category before making the request
                return;
            }

            let url = `${API_BASE_URL}/api/categories/${this.productDetails.category}`;
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                this.categoryDetails = data.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                this.loading = false;
            }
        },
    },
}
</script>