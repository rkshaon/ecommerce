<template>
  <div class="container mb-3">
    <h1 class="text-center">{{ categoryDetails.title }} Products</h1>
    <p class="text-center">{{ categoryDetails.description }}</p>
    <div v-if="loading" class="row">
      <img src="@/assets/loading.gif" alt="Loading..." />
      <h1>Loading...</h1>
    </div>
    <div v-else class="row">
      <div class="col-3" v-for="(product, index) in products" :key="index">
        <ProductCardComponent :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCardComponent from '@/components/support/ProductCardComponent';

export default {  
  name: 'CategoryWiseProductComponent',
  data() {
    return {
      categoryDetails: {
        'title': 'Category Title is coming soon.',
        "id": null,
        "category_slug": null,
        "short_title": null,
        "icon": null,
        "description": null,
        "is_featured": false,
        "is_active": true,
        "is_deleted": false,
        "added_date_time": null,
        "added_by": null,
      },
      products: [],
      loading: true,
    };
  },
  props: {},
  components: {
    ProductCardComponent,
  },
  mounted() { },
  created() {
    this.fetchCategoryDetailsData();
    this.fetchProductsCategoryWiseData();
  },
  watch: {
    // Watch for changes in route parameters
    '$route.params.category_id': 'handleCategoryChange',
  },
  methods: {
    handleCategoryChange() {
      this.fetchCategoryDetailsData();
      this.fetchProductsCategoryWiseData();
    },

    async fetchCategoryDetailsData() {
      let url = `http://127.0.0.1:8000/api/categories/${this.$route.params.category_id}`;

      try {
        const response = await fetch(url);
        const data = await response.json();
        this.categoryDetails = data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    },
    async fetchProductsCategoryWiseData() {
      let url = `http://127.0.0.1:8000/api/products/category/${this.$route.params.category_id}`;
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.products = data.data;
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        this.loading = false;
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
