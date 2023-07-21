<template>
  <NavComponent />
  <HomeComponent />
  <FooterComponent />
</template>

<script>
import HomeComponent from '@/components/HomeComponent.vue'
import NavComponent from '@/components/common/NavComponent.vue';
import FooterComponent from '@/components/common/FooterComponent.vue'

export default {
  name: 'App',
  components: {
    HomeComponent,
    NavComponent,
    FooterComponent,
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
</style>
