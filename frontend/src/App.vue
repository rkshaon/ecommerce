<template>
  <NavComponent />
  <HomeComponent />
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'
import NavComponent from './components/common/NavComponent.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
    NavComponent
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
