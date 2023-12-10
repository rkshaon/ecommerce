import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from '@/components/HomeComponent';
import CategoryWiseProductComponent from "@/components/CategoryWiseProductComponent";
import NotFoundComponent from '@/components/NotFoundComponent';


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeComponent,
  },
  {
    path: "/category/:category_id/:category_slug",
    name: "category",
    component: CategoryWiseProductComponent,
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