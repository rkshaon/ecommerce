<template>
    <div class="container">
        <div>
            <p>Product Path: Home / Category / Sub Category / Sub Category / Product Title</p>
        </div>
        <div class="row">            
            <div class="col-5">
                <div>
                    <picture>
                        <source srcset="" type="image/svg+xml">
                        <img :src="`${API_BASE_URL}${productDetails.images[0].image}`" class="img-fluid img-thumbnail" :alt="productDetails.title">
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
            loading: true,
        }
    },
    props: {},
    components: {},
    mounted() {},
    created() { 
        this.fetchProductDetailsData();
    },
    watch: {
        // Watch for changes in route parameters
        '$route.params.product_id': 'handleProductChange',
    },
    methods: {
        handleProductChange() {
            this.fetchProductDetailsData();
        },
        
        async fetchProductDetailsData() {
            let url = `http://127.0.0.1:8000/api/products/${this.$route.params.product_id}`;
            
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
    },
}
</script>