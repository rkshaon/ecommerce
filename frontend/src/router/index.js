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
    path: "/category/:slug",
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

router.push({
  name: "category",
  params: { slug: "category-slug" },
});

export default router;