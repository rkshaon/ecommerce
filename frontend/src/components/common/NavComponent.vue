<template>
    <div id="top-bar"></div>
    <div class="container">
        <nav class="navbar navbar-expand-lg">
            <router-link to="/" class="navbar-brand">E-Commerce</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav>
    </div>
    <div class="container">
        <nav class="navbar navbar-expand-lg">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item" v-for="category in categories" :key="category.id">
                        <router-link :to="{ name: 'category', params: {slug: category.category_slug} }" class="nav-link" >{{ category.title }}</router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
import categoryStore from '@/store/category';

export default {
    name: 'NavBarComponent',
    mounted() {
        categoryStore.dispatch('getCategories');
    },
    computed: {
        categories() {
            const categories = categoryStore.state.categories.filter(category => category);
            return categories;
        }
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
