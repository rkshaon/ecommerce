<template>
    <div class="container mb-3 mt-3">
        <!-- Product Path -->
        <nav aria-label="breadcrumb" class="">
            <ol class="breadcrumb">
                <li class="breadcrumb-item">
                    <router-link to="/" class="me-3"><font-awesome-icon :icon="['fas', 'house']" class="text-dark" /></router-link>
                </li>
                <li class="breadcrumb-item">
                    <router-link v-if="categoryDetails.category_slug && categoryDetails.id > 0" class="text-decoration-none text-dark"
                        :to="{
                            name: 'category',
                            params: {
                                category_id: categoryDetails.id,
                                category_slug: categoryDetails.category_slug,
                            }
                        }">{{ categoryDetails.title }}</router-link>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                    <router-link :to="{
                        name: 'product',
                        params: {
                            product_id: productDetails.id,
                            product_slug: productDetails.product_slug,
                        }
                    }" class="navbar-brand">{{ productDetails.title }}</router-link>
                </li>
            </ol>
        </nav>
        <!-- Product Image Gallery -->
        <div class="row">            
            <div class="col-5">
                <div>
                    <picture>
                        <source srcset="" type="image/svg+xml">
                        <img
                            v-if="productDetails.images && productDetails.images.length > 0"
                            :src="`${API_BASE_URL}${primaryImage}`"
                            class="img-fluid img-thumbnail"
                            :alt="productDetails.title"
                            style="height: 515px;"
                        />
                        <img
                            v-else
                            src="/icon.png"
                            class="img-fluid img-thumbnail"
                            :alt="productDetails.title"
                            style="height: 515px;"
                        />
                    </picture>
                </div>
                <div class="mt-1">
                    <img
                        v-for="(image, index) in productDetails.images"
                        :key="index"
                        :src="`${API_BASE_URL}${image.image}`"
                        :alt="productDetails.title"
                        style="height: 100px; width: 100px;"
                        class="img-fluid img-thumbnail me-1"
                        @click="updatePrimaryImage(index)"
                    />
                </div>
            </div>
            <div class="col-7">
                <h3>{{ productDetails.title }}</h3>
                <!-- Product Tags -->
                <div class="d-flex">
                    <span class="badge bg-secondary me-2">#motorbike</span>
                    <span class="badge bg-secondary me-2">#honda</span>
                    <span class="badge bg-secondary me-2">#exmotion</span>
                </div>
                <!-- Product Price and related details -->
                <div class="mt-3">
                    <button type="button" class="btn btn-outline-secondary me-2 btn-sm">
                        Brand: <b>Honda</b>
                    </button>
                    <button type="button" class="btn btn-outline-secondary me-2 btn-sm">
                        Price: <b>4,00,000 BDT</b>
                    </button>
                    <button type="button" class="btn btn-outline-secondary position-relative me-2 btn-sm">
                        Offer Price: <b>3.50,000 BDT</b>
                        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                            Save 50,000 BDT
                            <span class="visually-hidden">unread messages</span>
                        </span>
                    </button>
                    <button type="button" class="btn btn-outline-secondary me-2 btn-sm">
                        Status: <b>In stock</b>
                    </button>
                    <button type="button" class="btn btn-outline-secondary me-2 btn-sm">
                        Code: <b>#A13</b>
                    </button>
                </div>
                <div class="mt-3">
                    <h5>Key Features</h5>
                    <p><b>Model:</b> Q3</p>
                    <p><b>Layout:</b> 87% or TKL</p>
                    <p><b>Switch:</b> Brown Switch</p>
                    <p><b>Connectivity:</b> Bluetooth and Type-C</p>
                    <p><b>Features:</b> RGB, CNC Aluminum body</p>
                </div>
                <!-- Payment Options -->
                <div>
                    <a class="btn btn-link text-danger" href="#product-specification">View More Information</a>
                    <div class="mt-3 row">
                        <div class="col">
                            <div class="d-flex border shadow p-3" style="border-radius: 10px;">
                                <div class="me-3 my-auto">
                                    <input type="radio" class="form-check-input" id="flexRadioDefault1">
                                </div>
                                <div>
                                    <h5>3,50,000 BDT</h5>
                                    <p>Cash Discount</p>
                                    <p>Online / Cash Payment</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="d-flex border shadow p-3" style="border-radius: 10px;">
                                <div class="me-3 my-auto">
                                    <input type="radio" class="form-check-input" id="flexRadioDefault2">
                                </div>
                                <div>
                                    <h5>3,500 BDT/month</h5>
                                    <p class="p-0">4,00,000 BDT 0% interest</p>
                                    <p class="p-0">EMI</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col">
                            <div class="input-group">
                                <button 
                                    class="btn border"
                                    style="border-radius: 5px;"
                                    @click="decrementProductQuantity"
                                >
                                    <font-awesome-icon :icon="['fas', 'minus']" />
                                </button>
                                <button class="btn border" style="border-radius: 5px;">
                                    {{ productQuantity }}
                                </button>
                                <button 
                                    class="btn border me-4" 
                                    style="border-radius: 5px;"
                                    @click="incrementProductQuantity"
                                >
                                    <font-awesome-icon :icon="['fas', 'plus']" />
                                </button>
                                <button class="btn btn-warning me-3" style="border-radius: 5px;">Add to Cart</button>
                                <button class="btn btn-success" style="border-radius: 5px;">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div data-bs-spy="scroll" data-bs-target="#product-specification" id="product-specification" class="col-8" style="background-color: rgb(255, 251, 243);">
                <div>
                    <h5>Specification</h5>
                    <h5>Details</h5>
                    <p>{{ productDetails.description }}</p>
                </div>
                <div>
                    <h5>FAQ about {{ productDetails.title }}</h5>
                    <div>
                        <p><b>Question 1</b> What is this?</p>
                        <p>{{ productDetails.description }}</p>
                        <p><b>Question 2</b> What is this?</p>
                        <p>{{ productDetails.description }}</p>
                        <p><b>Question 3</b> What is this?</p>
                        <p>{{ productDetails.description }}</p>
                    </div>
                    <div class="text-end">
                        <!-- A modal will appear after clicking the button -->
                        <!-- If user is logged in, then question will be posted as his own -->
                        <!-- User can choose, as they can post the question Anonymously -->
                        <!-- If user is not logged in, then the user can ask the question -->
                        <!-- as anonymous user, but he has to put his e-mail -->
                        <!-- Button trigger modal -->
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Ask about {{ productDetails.title }}
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                <div class="modal-body text-start">
                                    ...
                                </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary">Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-3">
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
                        <div class="mt-3 text-end">
                            <!-- If user is logged in, then this part will be available. -->
                            <!-- After cliking on the button, a modal will appear, where user will give rating, and other things. -->
                            <!-- Button trigger modal -->
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Write review {{ productDetails.title }}
                            </button>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                    <div class="modal-body text-start">
                                        ...
                                    </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-primary">Save changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <h5>Related products</h5>
                <div v-for="(product, index) in relatedProducts" :key="index" class="card pt-2 d-flex flex-row">
                    <picture class="col-4">
                        <source srcset="" type="image/svg+xml">
                        <img
                            v-if="product.images && product.images.length > 0"
                            :src="`${API_BASE_URL}${product.images[0].image}`"
                            class="img-fluid img-thumbnail"
                            :alt="product.title"
                            style="width: 100%"
                        />
                        <img
                            v-else
                            src="/icon.png"
                            class="img-fluid img-thumbnail"
                            :alt="product.title"
                        />
                    </picture>
                    <div class="card-body">
                        <h5 class="card-title">{{ product.title }}</h5>
                        <router-link class="btn btn-primary" title="Product"
                            :to="{
                                name: 'product',
                                params: {
                                    product_id: product.id,
                                    product_slug: product.product_slug,
                                }
                            }">$ 100.50
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { API_BASE_URL } from '@/config';

export default {
    name: 'ProductDetailsPage',
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
            relatedProducts: [],
            loading: true,
            primaryImage: '',
            productQuantity: 1,
        }
    },
    props: { },
    components: { },
    setup() { },
    mounted() {},
    async created() { 
        await this.fetchProductDetailsData();
        this.fetchCategoryDetailsData();
        await this.fetchRelatedProductsData();
    },
    watch: {
        // Watch for changes in route parameters
        '$route.params.product_id': 'handleProductChange',
    },
    methods: {
        async handleProductChange() {
            await this.fetchProductDetailsData();
            this.fetchCategoryDetailsData();
            await this.fetchRelatedProductsData();
        },
        
        async fetchProductDetailsData() {
            const URL = `${API_BASE_URL}/api/v1/products/${this.$route.params.product_id}`;
            
            try {
                const response = await fetch(URL);
                const data = await response.json();
                this.productDetails = data.data;

                if (this.productDetails.images.length > 0) {
                    this.primaryImage = this.productDetails.images[0].image;
                }
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

            let url = `${API_BASE_URL}/api/v1/categories/${this.productDetails.category}`;
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                this.categoryDetails = data;
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                this.loading = false;
            }
        },

        async fetchRelatedProductsData() {
            let url = `${API_BASE_URL}/api/products/related-products/${this.$route.params.product_id}`;
            
            try {
                const response = await fetch(url);
                const data = await response.json();
                this.relatedProducts = data.data;
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                this.loading = false;
            }
        },

        updatePrimaryImage(index) {
            this.primaryImage = this.productDetails.images[index].image;
        },

        decrementProductQuantity() {
            this.productQuantity -= 1;
        },

        incrementProductQuantity() {
            this.productQuantity += 1;
        },
    },
}
</script>