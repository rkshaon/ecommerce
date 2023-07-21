<template>
  <div class="">
    <BannerComponent />
    <FeaturedCategoryComponent />
    <FeaturedProductComponent />
    <h1>Home Page</h1>
  </div>
</template>

<script>
import BannerComponent from '@/components/utility/BannerComponent.vue'
import FeaturedCategoryComponent from '@/components/utility/FeaturedCategoryComponent.vue'
import FeaturedProductComponent from '@/components/utility/FeaturedProductComponent.vue'

export default {
  name: 'HomeComponent',
  props: {},
  components: {
    BannerComponent,
    FeaturedCategoryComponent,
    FeaturedProductComponent,
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
