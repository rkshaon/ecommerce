<template>
    <div>
        <AdminSidebarComponent />
        <router-view></router-view>        
    </div>
</template>

<script>
import AdminSidebarComponent from '@/components/admin/AdminSidebarComponent.vue';

export default {
    name: 'AdminBaseComponent',
    components: {
        AdminSidebarComponent,
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
