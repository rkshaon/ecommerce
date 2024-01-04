import { createRouter, createWebHistory } from "vue-router";

import BaseLayout from '@/BaseLayout';
import HomeComponent from '@/components/HomeComponent';
import CategoryWiseProductComponent from "@/components/CategoryWiseProductComponent";
import ProductDetailsComponent from "@/components/support/ProductDetailsComponent";

import NotFoundComponent from '@/components/NotFoundComponent';

import AdminBaseComponent from "@/components/admin/AdminBaseComponent";
import AdminDashboardComponent from '@/components/admin/AdminDashboardComponent';
import AdminLoginComponent from '@/components/admin/AdminLoginComponent.vue';
import AdminCategoryListComponent from '@/components/admin/category/AdminCategoryListComponent';


const routes = [
  {
    path: "/",
    component: BaseLayout,
    children: [
      {
        path: "",
        name: "home",
        component: HomeComponent,
      },
      {
        path: "category/:category_id/:category_slug",
        name: "category",
        component: CategoryWiseProductComponent,
      },
      {
        path: "product/:product_id/:product_slug",
        name: "product",
        component: ProductDetailsComponent,
      },
    ],
  },
  {
    path: "/admin",
    component: AdminBaseComponent,
    meta: { requiresAuth: true }, // Add meta field to indicate that authentication is required for admin routes
    children: [
      {
        path: "",
        name: "admin",
        component: AdminDashboardComponent,
      },
      {
        path: "category",
        name: "admin-category",
        component: AdminCategoryListComponent,      
      }
    ],
  },
  {
    path: "/admin/login",
    name: "admin-login",
    component: AdminLoginComponent,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFoundComponent,
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