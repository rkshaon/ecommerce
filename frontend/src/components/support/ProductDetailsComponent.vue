<template>
    <div class="container">
        <h1>{{ productDetails.title }}</h1>
    </div>
</template>

<script>

export default {
    name: 'ProductDetailsComponent',
    data() {
        return {
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