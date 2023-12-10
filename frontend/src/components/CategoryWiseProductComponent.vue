<template>
  <div class="">
    <ProductGridViewComponent :category="category" />
  </div>
</template>
<!-- <Suspense>
  <div>
    <ProductGridViewComponent :category="category" />
  </div>
</Suspense> -->

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
  async setup() {
    const route = useRoute();
    const slug = route.params.slug;
    const categories = await categoryStore.fetchCategories();
    console.log('Categories: ', categories);
    const category = categoryStore.state.categories.find(category => category.category_slug === slug);

    console.log('Slug value in category wise product route: ', slug);
    console.log('Category in category wise product route: ', category);
    console.log('All categories: ', categoryStore.state.categories);
    console.log('Categories length: ', categoryStore.state.categories.length);

    return {
      slug,
      category,
    }
  },
  // async asyncData() {
  //   console.log('Async Data hook.');
  //   const route = useRoute();
  //   const slug = route.params.slug;
  //   const category = await categoryStore.fetchCategories();
  //   console.log('in CategoryWiseProductComponent: ', category);
  //   return {
  //     slug,
  //     category,
  //   };
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
