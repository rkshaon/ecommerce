import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from '@/components/HomeComponent';
import CategoryComponent from '@/components/CategoryComponent';


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeComponent
    },
    {
        path: '/category/:slug',
        name: 'category',
        component: CategoryComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.push({
  name: "category",
  params: { slug: "category-slug" },
});

export default router;