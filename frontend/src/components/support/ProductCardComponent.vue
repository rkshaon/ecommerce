<template>
    <div class="card">
      <img src="/icon.png" class="card-img-top" alt="Featured-Category-Icon">
      <div class="card-body">
        <h5 class="card-title">{{ product.title }}</h5>
        <p class="card-text">{{ product.description.slice(0, 90) }}</p>
        <router-link class="nav-link btn btn-primary" title="Product"
          :to="{
            name: 'product',
            params: {
              product_id: product.id,
              product_slug: product.product_slug,
            }
          }">$ 100.50
        </router-link>
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
        id: "#",
        title: 'Product Title',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        product_slug: '#',
      }),
    },
  }
}
</script>

<style></style>