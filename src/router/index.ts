/** ============================================
 * 路由文件
 ============================================*/
// 引入vue-router对象 注意目前vite所有的单页面组件必须加.vue
// index.ts
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/pages/home/index.vue";
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/chartCard',
        name: 'chartCard',
        component: () => import('@/pages/chartCard/index.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
