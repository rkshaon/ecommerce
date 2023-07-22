import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from '@/components/HomeComponent';


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeComponent
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;