<template>
    <div>
        <NavBarLayout />
        <router-view></router-view>
        <FooterLayout />
    </div>
</template>

<script>
import NavBarLayout from '@/components/layout/NavBarLayout.vue';
import FooterLayout from '@/components/layout/FooterLayout.vue'

export default {
    name: 'BaseLayout',
    components: {
        NavBarLayout,
        FooterLayout,
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
