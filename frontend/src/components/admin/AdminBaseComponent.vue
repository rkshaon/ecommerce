<template>
    <div class="d-flex">
        <AdminSidebarComponent />
        <div class="flex-grow-1">
          <router-view></router-view>
        </div>
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
