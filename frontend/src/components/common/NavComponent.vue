<template>
    <div>
        <div id="top-bar"></div>
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
                <div class="container">
                    <ul class="navbar-nav">
                        <li v-for="(category, index) in categoriesData" :key="`${category.id}-${index}`" class="nav-item">
                            <router-link v-if="category.category_slug" class="nav-link"
                                :to="{ name: 'category', params: { slug: category.category_slug } }">
                                {{ category.title }}
                            </router-link>
                            <span v-else class="nav-link">{{ category.title }}</span>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NavBarComponent',
    data() {
        return {
            categoriesData: [],
            loading: true,
        };
    },
    mounted() { },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            try {
                const response = await fetch('http://127.0.0.1:8000/api/categories/');
                const data = await response.json();
                this.categoriesData = data.data;
            } catch (error) {
                console.error('Error fetching data:', error);
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
    height: 25px;
    background-color: #DAF7A6;
}
</style>
