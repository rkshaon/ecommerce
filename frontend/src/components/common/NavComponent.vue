<template>
    <div>
        <div id="top-bar">
            <div class="container">
                <div class="row">
                    <div class="col-6">
                        <div class="d-flex align-items-center h-100">
                            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div v-for="(item, index) in trendingNewsData" :key="index">
                                        <div :class="{ 'active': index === 0 }" class="carousel-item text-white" style="font-weight:350;">
                                            <span v-if="!item.redirect_url">{{ item.title }}</span>
                                            <a class="text-white" style="text-decoration: none;" v-else :href="item.redirect_url">{{ item.title }} <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                    </div>
                    <div class="col-6">
                        <ul class="nav justify-content-end">
                            <li class="nav-item">
                                <a class="nav-link  text-white active" aria-current="page" href="#">Blog</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-white" href="#">Track Order</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  text-white" href="#">Get Support</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link  text-white" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>                
            </div>
        </div>
        <div class="container">
            <nav class="navbar navbar-expand-lg">
                <router-link to="/" class="navbar-brand">E-Commerce</router-link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">                
                <ul class="navbar-nav">
                    <li v-for="(category, index) in categoriesData" :key="`${category.id}-${index}`" class="nav-item">
                        <router-link v-if="category.category_slug" class="nav-link"
                            :to="{ 
                                name: 'category', 
                                params: { 
                                    category_id: category.id,
                                    category_slug: category.category_slug,                                        
                                } 
                            }">
                            {{ category.title }}
                        </router-link>
                        <span v-else class="nav-link">{{ category.title }}</span>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import categoryAPI from '@/services/categoryAPI';

export default {
    name: 'NavBarComponent',
    data() {
        return {
            categoriesData: [],
            loading: true,
            trendingNewsData: [
                {
                    'title': 'Welcome back and get 500 BDT discount',
                    'redirect_url': 'awesome-news-link',
                },
                {
                    'title': 'Have surprise disconte',
                    'redirect_url': 'redirecting-to-somewhere.',
                },
                {
                    'title': 'Awesome no redirect',
                    'redirect_url': '',
                },
                {
                    'title': 'Continue...',
                    'redirect_url': 'redirecting-to-somewhere.',
                }
            ],
            currentIndex: 0,
        };
    },
    created() {
        this.fetchCategories();
    },
    methods: {
        async fetchCategories() {
            try {
                const response = await categoryAPI.getCategories();
                this.categoriesData = response.data.results;
            } catch(error) {
                console.log('Error: ', error);
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#top-bar {
    height: 50px;
    background-color: #081B4B;
}
</style>
