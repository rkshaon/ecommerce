<template>
    <div class="container">
        <div id="background">
            <div class="text-center text-white" style="padding-top: 250px;">
                <p class="" style="font-size: 7em; font-weight: bolder;">404</p>
                <p style="font-size: 4em; font-weight: bolder;">Not found!</p>                
                <router-link to="/">
                    <font-awesome-icon :icon="['fas', 'house']" class="text-white" style="font-size: 5em" />
                </router-link>
                <p style="font-size: 2em; font-weight: bold;">Sorry, the page you are looking does not exit.</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NotFoundPage',
    data() {
        return { }
    },
    computed: { },
};
</script>

<style scoped>
#background {
  background: url("../../assets/404.jpg") no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 1000px;
}
</style>