import { createRouter, createWebHistory } from "vue-router";

import BaseLayout from '@/BaseLayout';
import AdminBaseComponent from "@/AdminBaseComponent";

import HomePage from '@/components/page/HomePage.vue';
import CategoryWiseProductPage from "@/components/page/CategoryWiseProductPage.vue";
import ProductDetailsPage from "@/components/page/ProductDetailsPage.vue";
import NotFoundPage from '@/components/page/NotFoundPage';

import AdminLoginPage from "@/components/admin/page/AdminLoginPage.vue";
import AdminDashboardPage from '@/components/admin/page/AdminDashboardPage.vue';
import AdminSetupPage from "@/components/admin/page/AdminSetupPage.vue";
import AdminInventoryPage from '@/components/admin/page/AdminInventoryPage.vue';
import AdminAccountingPage from "@/components/admin/page/AdminAccountingPage.vue";
import AdminOrderPage from "@/components/admin/page/AdminOrderPage.vue";
import AdminCustomerPage from "@/components/admin/page/AdminCustomerPage.vue";
import AdminProfilePage from "@/components/admin/page/AdminProfilePage.vue";


const routes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomePage,
      },
      {
        path: "category/:category_id/:category_slug",
        name: "category",
        component: CategoryWiseProductPage,
      },
      {
        path: "product/:product_id/:product_slug",
        name: "product",
        component: ProductDetailsPage,
      },
    ],
  },
  {
    path: "/admin",
    component: AdminBaseComponent,
    meta: { requiresAuth: true }, // Add meta field to indicate that authentication is required for admin routes
    children: [
      {
        path: "profile",
        name: "admin-profile",
        component: AdminProfilePage,
      },
      {
        path: "",
        name: "admin",
        component: AdminDashboardPage,
      },
      {
        path: "setup",
        name: "admin-setup",
        component: AdminSetupPage,
      },
      {
        path: "inventory",
        name: "admin-inventory",
        component: AdminInventoryPage,
      },
      {
        path: "accounting",
        name: "admin-accounting",
        component: AdminAccountingPage,
      },
      {
        path: "order",
        name: "admin-order",
        component: AdminOrderPage,
      },
      {
        path: "customer",
        name: "admin-customer",
        component: AdminCustomerPage,
      },
    ],
  },
  {
    path: "/admin/login",
    name: "admin-login",
    component: AdminLoginPage,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Navigation guard to check if authentication is required for admin routes
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !isAdminLoggedIn()) {
    // If the route requires authentication and the user is not logged in, redirect to admin login
    next('/admin/login');
  } else {
    next();
  }
});

// Function to check if the user is logged in (replace this with your actual authentication check)
function isAdminLoggedIn() {
  if (!localStorage.getItem('accessToken') && !localStorage.getItem('refreshToken')) {
    return false;
  }
  
  return true;
}

export default router;