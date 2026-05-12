import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import AlimentosView from "@/views/alimentosView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/alimentos', component: AlimentosView }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router