<template>
  <div class="">
    <BannerComponent />
    <FeaturedCategoryComponent />
    <ProductGridViewComponent :category="category" />
  </div>
</template>

<script>
import BannerComponent from '@/components/utility/BannerComponent.vue'
import FeaturedCategoryComponent from '@/components/utility/FeaturedCategoryComponent.vue'
import ProductGridViewComponent from '@/components/utility/ProductGridViewComponent.vue'

export default {
  name: 'HomeComponent',
  props: {},
  components: {
    BannerComponent,
    FeaturedCategoryComponent,
    ProductGridViewComponent,
  },
  data() {
    return {
      category: {
        title: 'Featured'
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
