import { createRouter, createWebHistory } from "vue-router";

import BaseLayout from '@/BaseLayout';
import HomeComponent from '@/components/HomeComponent';
import CategoryWiseProductComponent from "@/components/CategoryWiseProductComponent";
import ProductDetailsComponent from "@/components/support/ProductDetailsComponent";
import NotFoundComponent from '@/components/NotFoundComponent';
import AdminBaseComponent from "@/components/admin/AdminBaseComponent";
import AdminDashboardComponent from '@/components/admin/AdminDashboardComponent';


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
    children: [
      {
        path: "",
        name: "admin",
        component: AdminDashboardComponent,
        meta: {
          title: 'Admin',
        },
      },
    ],
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

export default router;