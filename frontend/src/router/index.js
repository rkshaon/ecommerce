import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from '@/components/HomeComponent';
import CategoryWiseProductComponent from "@/components/CategoryWiseProductComponent";


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
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.push({
  name: "category",
  params: { slug: "category-slug" },
});

export default router;