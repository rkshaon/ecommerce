
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
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container">
                <ul class="navbar-nav">
                    <li v-for="category in categories" :key="category.id" class="nav-item" :class="{ 'dropdown': category.children && category.children.length > 0 }">
                        <a v-if="category.children && category.children.length > 0" class="nav-link dropdown-toggle" :href="'#'" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ category.title }}</a>
                        <router-link v-else class="nav-link" :to="{ name: 'category', params: { slug: category.category_slug } }">{{ category.title }}</router-link>
                        <ul v-if="category.children && category.children.length > 0" class="dropdown-menu" :aria-labelledby="'#' + category.category_slug">
                            <li v-for="child in category.children" :key="child.id">
                                <router-link class="dropdown-item" :to="{ name: 'category', params: { slug: child.category_slug } }">{{ child.title }}</router-link>
                            </li>
                        </ul>
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
