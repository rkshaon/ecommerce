<template>
  <router-link :to="{ name: 'category', params: { slug: category.category_slug } }" class="nav-link" >
    <div class="card" style="">
      <img v-if="category" :src="FILE_URL" class="card-img-top" :alt="category.title" style="width: 50%; height: 50%;">
      <div class="card-body">
        <p class="card-text text-center">{{ category.title }}</p>
      </div>
    </div>
  </router-link>
</template>

<script>
import { API_BASE_URL } from '@/config';

export default {
  name: 'FeaturedCategoryCardComponent',
  props: {
      category: {
        type: Object,
        required: true,
    },
  },
  data() { },
  computed: {
    FILE_URL() {
      if (this.category.icon) {
        return API_BASE_URL + this.category.icon;
      } else {
        return '/icon.png'
      }
    }
  }
}
</script>

<style></style>