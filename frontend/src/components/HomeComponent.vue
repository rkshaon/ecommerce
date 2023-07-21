<template>
  <div class="">
    <!-- <SliderComponent /> -->
    <BannerComponent />
    <h1>Home Page</h1>
  </div>
</template>

<script>
// import SliderComponent from './utility/SliderComponent'
import BannerComponent from './utility/BannerComponent.vue'

export default {
  name: 'HomeComponent',
  props: {},
  components: {
    // SliderComponent
    BannerComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
