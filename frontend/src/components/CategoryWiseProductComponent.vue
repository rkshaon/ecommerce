<template>
  <div class="">
    <h1>Category Wise Products</h1>
    <p>Category Slug: {{ $route.params.slug }}</p>
  </div>
</template>

<script>

export default {
  name: 'CategoryWiseProductComponent',
  props: {},
  components: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
