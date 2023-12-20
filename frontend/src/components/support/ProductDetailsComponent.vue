<template>
    <div class="container">
        <!-- Product Path -->
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
        <!-- Product Image Gallery -->
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
                <div>
                    <picture>
                    <img
                        v-for="(image, index) in productDetails.images"
                        :key="index"
                        :src="`${API_BASE_URL}${image.image}`"
                        :alt="productDetails.title"
                        width="100"
                    />
                    </picture>
                </div>
            </div>
            <div class="col-7">
                <h1>{{ productDetails.title }}</h1>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-8" style="background-color: rgb(255, 251, 243);">
                <h5>Specification</h5>
                <h5>Details</h5>
                <p>{{ productDetails.description }}</p>
            </div>
            <div class="col-4">
                <h1>Related products</h1>
            </div>            
        </div>
        <div class="row mt-4">
            <h5>FAQ about {{ productDetails.title }}</h5>
            <div>
                <p><b>Question 1</b> What is this?</p>
                <p>{{ productDetails.description }}</p>
                <p><b>Question 2</b> What is this?</p>
                <p>{{ productDetails.description }}</p>
                <p><b>Question 3</b> What is this?</p>
                <p>{{ productDetails.description }}</p>
            </div>
            <div>
                <!-- A modal will appear after clicking the button -->
                <!-- If user is logged in, then question will be posted as his own -->
                <!-- User can choose, as they can post the question Anonymously -->
                <!-- If user is not logged in, then the user can ask the question -->
                <!-- as anonymous user, but he has to put his e-mail -->
                <a href="#" class="btn btn-primary">Ask about {{ productDetails.title }}</a>                
            </div>
        </div>
        <div class="row mt-4 mb-4">
            <h5>Review of {{ productDetails.title }}</h5>
            <div>
                <div class="card mb-1">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-1">
                                <img src="@/assets/profile.jpg" style="border-radius: 50%;" height="50" width="50" class="" alt="User">
                            </div>
                            <div class="col-11">
                                <h5 class="card-title">Anonymous User</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.Honda, the Japanese two-wheeler maker has finally launched the production version of the Honda 150SS in the Thailand market, named Honda CB150R ExMotion. This motorcycle has been designed on Honda’s latest ‘ExMotion…Life in Exciting Motion’ design concept. It is based on the 150SS Raceer concept, which was showcased at the 2017 Bangkok Motor Show. This global product would suit our market conditions. This motorcycle is powered by a 149cc DOHC 4-valve engine with fuel injection and liquid-cooling.</p>
                            </div>
                        </div>    
                    </div>
                </div>
                <div class="card mb-1">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-1">
                                <img src="@/assets/profile.jpg" style="border-radius: 50%;" height="50" width="50" class="" alt="User">
                            </div>
                            <div class="col-11">
                                <h5 class="card-title">Anonymous User</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-1">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-1">
                                <img src="@/assets/profile.jpg" style="border-radius: 50%;" height="50" width="50" class="" alt="User">
                            </div>
                            <div class="col-11">
                                <h5 class="card-title">Anonymous User</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
                    <!-- If user is logged in, then this part will be available. -->
                    <!-- After cliking on the button, a modal will appear, where user will give rating, and other things. -->
                    <a href="#" class="btn btn-primary">Give Review</a>                
                </div>
            </div>
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