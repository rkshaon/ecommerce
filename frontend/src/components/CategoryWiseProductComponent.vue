<template>
  <div class="container">
    <h1>{{ categoryDetails.title }}</h1>
    <p>Category Slug: {{ $route.params.category_slug }} {{ $route.params.category_id }}</p>
  </div>
</template>

<script>

export default {
  name: 'CategoryWiseProductComponent',
  data() {
    return {
      categoryDetails: {
        'title': 'Category Title is coming soon.',
      },
      loading: true,
    };
  },
  props: {},
  components: {
  },
  mounted() { },
  created() {
    this.fetchCategoryDetailsData();
  },
  watch: {
    // Watch for changes in route parameters
    '$route.params.category_id': 'fetchCategoryDetailsData',
  },
  methods: {
    async fetchCategoryDetailsData() {
      let url = `http://127.0.0.1:8000/api/categories/${this.$route.params.category_id}`;
      console.log(url);

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
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
