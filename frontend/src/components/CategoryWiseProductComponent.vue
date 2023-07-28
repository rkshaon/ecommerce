<template>
  <div class="">
    This is Category wise Product List Component
    <ProductGridViewComponent />
  </div>
</template>

<script>
import ProductGridViewComponent from '@/components/utility/ProductGridViewComponent.vue';

export default {
  name: 'CategoryWiseProductComponent',
  props: {},
  components: {
    ProductGridViewComponent,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
