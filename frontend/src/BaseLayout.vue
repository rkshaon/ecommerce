<template>
    <div>
        <NavComponent />
        <router-view></router-view>
        <FooterComponent />
    </div>
</template>

<script>
import NavComponent from '@/components/common/NavComponent.vue';
import FooterComponent from '@/components/common/FooterComponent.vue'

export default {
    name: 'BaseLayout',
    components: {
        NavComponent,
        FooterComponent,
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
