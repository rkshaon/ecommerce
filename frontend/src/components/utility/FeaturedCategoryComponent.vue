<template>
    <div class="container">
        <h1 class="text-center">Featured Categories</h1>
        <p class="text-center">We know what you like.</p>
        <div class="row">
            <div class="col-2 mb-3 mt-3" v-for="category in categories" :key="category.id">
                <FeaturedCategoryCardComponent :category="category" />
            </div>
        </div>
    </div>
</template>

<script>

import FeaturedCategoryCardComponent from '@/components/support/FeaturedCategoryCardComponent'
import categoryStore from '@/store/category';

export default {
    name: 'FeaturedCategoryComponent',
    components: {
        FeaturedCategoryCardComponent,
    },
    mounted() {
        categoryStore.dispatch('getFeaturedCategories');
    },
    computed: {
        categories() {
            const categories = categoryStore.state.featureCategories;
            return categories;
        }
    },
}
</script>

<style></style>