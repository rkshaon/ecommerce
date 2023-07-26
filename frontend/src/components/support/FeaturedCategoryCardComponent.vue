<template>
  <router-link :to="{ name: 'category', params: { slug: category.category_slug } }" class="nav-link" >
    <div class="card" style="">
      <img src="/icon.png" class="card-img-top" alt="Featured-Category-Icon">
      <!-- <i class="fa-solid fa-desktop"></i> -->
      <!-- <font-awesome-icon :icon="['fas', 'desktop']" /> -->
      <div class="card-body">
        <p class="card-text text-center">{{ category.title }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'FeaturedCategoryCardComponent',
  props: {
      category: {
        type: Object,
        required: true,
    },
  }
}
</script>

<style></style>