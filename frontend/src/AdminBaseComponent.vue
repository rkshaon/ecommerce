<template>
    <div class="d-flex">
        <AdminSidebarLayout />
        <div class="flex-grow-1">
            <AdminHeaderLayout />
          <router-view></router-view>
        </div>
    </div>
</template>

<script>
import AdminSidebarLayout from '@/components/admin/layout/AdminSidebarLayout.vue';
import AdminHeaderLayout from '@/components/admin/layout/AdminHeaderLayout.vue';

export default {
    name: 'AdminBaseComponent',
    components: {
        AdminSidebarLayout,
        AdminHeaderLayout,
    },
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
</style>
