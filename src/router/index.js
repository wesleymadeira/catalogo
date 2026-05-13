import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import alimentosView from "@/views/alimentosView.vue";
import brinquedosView from "@/views/brinquedosView.vue";
import higieneView from "@/views/higieneView.vue";
import acessoriosView from "@/views/acessoriosView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/alimentos', component: alimentosView },
    { path: '/brinquedos', component: brinquedosView },
    { path: '/higiene', component: higieneView },
    { path: '/acessorios', component: acessoriosView },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;