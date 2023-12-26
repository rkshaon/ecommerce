<template>
    <nav id="sidebar">
        <ul class="nav flex-column">
            <li class="nav-item">
                <router-link to="/admin/dashboard" class="nav-link">Dashboard</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/dashboard" class="nav-link">Category</router-link>
            </li>
            <li class="nav-item">
                <router-link to="/admin/dashboard" class="nav-link">Product</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'AdminSidebarComponent',
}
</script>
