import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import findRoutes from "./modules/find"

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: Home,
        children: [
            findRoutes,
            {
                path: '/FM',
                name: 'private-FM',
                component: () =>
                    import ('@/views/recomend/privateFM')
            },
            {
                path: '/live',
                name: 'look-live',
                component: () =>
                    import ('@/views/recomend/live')
            },
            {
                path: '/video',
                name: 'video',
                component: () =>
                    import ('@/views/recomend/video')
            },
            {
                path: '/friend',
                name: 'friend',
                component: () =>
                    import ('@/views/recomend/friend')
            },
            {
                path: '/local',
                name: 'local-music',
                component: () =>
                    import ('@/views/MyMusic/local')
            },
            {
                path: '/download',
                name: 'download-management',
                component: () =>
                    import ('@/views/MyMusic/download')
            },
            {
                path: '/created',
                name: 'created-playlist',
                component: () =>
                    import ('@/views/createdList')
            }
            // {
            //   path:'/collect',
            //   name:'collect-playlist',
            //   component:() => import('@/views/collect')
            // }

        ]

    },
    // 找不到路径时，匹配到首页
    { path: "*", redirect: "/" }
]


const router = new VueRouter({
    routes
})

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error);
}
export default router