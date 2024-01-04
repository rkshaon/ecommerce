<template>
    <div class="d-flex">
        <AdminSidebarComponent />
        <div class="flex-grow-1">
            <AdminHeaderComponent />
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AdminSidebarComponent from '@/components/admin/AdminSidebarComponent.vue';
import AdminHeaderComponent from '@/components/admin/AdminHeaderComponent.vue';

export default {
    name: 'AdminBaseComponent',
    components: {
        AdminSidebarComponent,
        AdminHeaderComponent
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
