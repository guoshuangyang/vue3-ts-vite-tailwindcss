/** ============================================
 * 路由文件
 ============================================*/
// 引入vue-router对象 注意目前vite所有的单页面组件必须加.vue
// index.ts
import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";
import Main from "@/layout/main/index.vue";
import Mine from "@/pages/mine/index.vue"
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        redirect: '/main',
    },
    {
        path: '/main',
        name: 'main',
        component: Main,
        children: [
            {
                path: '/mine',
                name: 'mine',
                component: Mine
            }
        ]
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
