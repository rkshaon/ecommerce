<template>
    <div class="card" style="">
      <img src="/icon.png" class="card-img-top" alt="Featured-Category-Icon">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.description.slice(0, 90) }}</p>
        <a href="#" class="btn btn-primary">$ 100.50</a>
      </div>
    </div>
</template>

<script>
export default {
  name: 'ProductCardComponent',
  props: {
    product: {
      type: Object,
      default: () => ({
        title: 'Product Title',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
      }),
    },
  }
}
</script>

<style></style>