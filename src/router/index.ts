import { createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

import Index from '../pages/index'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'index',
        component: Index
    },
    {
        path: '/page2',
        name: 'page2',
        component: () => import("../pages/page2")
    }
]

const router  = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

