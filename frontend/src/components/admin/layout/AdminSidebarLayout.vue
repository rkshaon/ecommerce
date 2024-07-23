<template>
    <div class="shadow-lg rounded">
        <div class="d-flex flex-column flex-shrink-0 p-3 bg-light" style="width: 280px;">
            <router-link to="/admin"
                class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                <img src="@/assets/company-logo.png" alt="Company Logo" height="" width="75" />
                <span class="fs-4">E-Commerce</span>
            </router-link>
            <hr>
            <ul class="nav nav-pills flex-column mb-auto">
                <li class="nav-item">
                    <router-link to="/admin" class="nav-link active">
                        <font-awesome-icon :icon="['fas', 'house']" class="text-white pe-3" />
                        Home / Dashboard
                    </router-link>
                </li>
                <!-- <li>
                    <router-link to="/admin" class="nav-link link-dark">
                        <font-awesome-icon :icon="['fas', 'gauge']" class="pe-3" />
                        Dashboard
                    </router-link>
                </li> -->
                <li>
                    <router-link :to="{ name: 'admin-setup' }" class="nav-link link-dark">
                        <font-awesome-icon :icon="['fas', 'list']" class="pe-3" />
                        Setup
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'admin-inventory'}" class="nav-link link-dark">
                        <font-awesome-icon :icon="['fab', 'product-hunt']" class="pe-3" />
                        Inventory
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'admin-accounting'}" class="nav-link link-dark">
                        <font-awesome-icon :icon="['fab', 'product-hunt']" class="pe-3" />
                        Accounts
                    </router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'admin-order'}" class="nav-link link-dark">
                        <font-awesome-icon :icon="['fas', 'table-cells-large']" class="pe-3" />
                        Orders
                    </router-link>
                </li>
                <!-- <li>
                    <router-link to="/admin" class="nav-link link-dark">
                        <font-awesome-icon :icon="['fab', 'product-hunt']" class="pe-3" />
                        Products
                    </router-link>
                </li> -->
                <li>
                    <router-link :to="{ name: 'admin-customer' }" class="nav-link link-dark">
                        <font-awesome-icon :icon="['fas', 'address-card']" class="pe-3" />
                        Customers
                    </router-link>
                </li>
            </ul>
            <hr>
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                    id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="@/assets/profile.jpg" alt="" width="32" height="32" class="rounded-circle me-2">
                    <strong>Rezaul Karim Shaon</strong>
                </a>
                <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li>
                        <button class="dropdown-item" @click="logOut()">Sign out</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
// import { logOut } from '@/services/logOutService';

export default {
    name: 'AdminSidebarLayout',
    watch: {},
    methods: {
        logOut() {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            console.log('Now remove accessToken and refreshToken.');
            window.location.reload();
        },
    },
}
</script>
