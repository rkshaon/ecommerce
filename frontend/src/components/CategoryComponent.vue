<template>
  <div class="">
    This is Category wise Product List Component
    <FeaturedProductComponent />
  </div>
</template>

<script>
import FeaturedProductComponent from '@/components/utility/FeaturedProductComponent.vue';

export default {
  name: 'CategoryComponent',
  props: {},
  components: {
    FeaturedProductComponent,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
