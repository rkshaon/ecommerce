<template>
  <div class="">
    <SliderComponent />
    <h1>Home Page</h1>
  </div>
</template>

<script>
import SliderComponent from './utility/SliderComponent'

export default {
  name: 'HomeComponent',
  props: {},
  components: {
    SliderComponent
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
