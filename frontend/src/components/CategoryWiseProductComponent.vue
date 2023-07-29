<template>
  <div class="">
    <!-- {{ category.title }} -->
    <ProductGridViewComponent :category="category" />
  </div>
</template>

<script>
import ProductGridViewComponent from '@/components/utility/ProductGridViewComponent.vue';
import { useRoute } from 'vue-router';
import categoryStore from '@/store/category';

export default {
  name: 'CategoryWiseProductComponent',
  props: {},
  components: {
    ProductGridViewComponent,
  },
  setup() {
    const route = useRoute();
    const slug = route.params.slug;
    // console.log('Category Slug: ',slug);
    const category = categoryStore.state.categories.find(category => category.category_slug === slug);
    // console.log('Category: ', category);
    return {
      slug,
      category,
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
