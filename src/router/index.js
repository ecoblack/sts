import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const toBenefits = () => {

    console.log(document.querySelector("#benefits"));
    document.querySelector("#benefits").scrollIntoView();
}

// const scrollBehavior = (to, from, savedPosition) => {
//   if (savedPosition) {
//     // savedPosition is only available for popstate navigations.
//     return savedPosition
//   } else {
//     const position = {}
//     // new navigation.
//     // scroll to anchor by returning the selector
//     if (to.hash) {
//       position.selector = to.hash
//
//       // specify offset of the element
//       if (to.hash === '#benefits') {
//         position.offset = { y: 100 }
//       }
//     }
//     // check if any matched route config has meta that requires scrolling to top
//     if (to.matched.some(m => m.meta.scrollToTop)) {
//       // cords will be used if no selector is provided,
//       // or if the selector didn't match any element.
//       position.x = 0
//       position.y = 0
//     }
//     // if the returned position is falsy or an empty object,
//     // will retain current scroll position.
//     return position
//   }
// }

const router = new VueRouter({
    routes,
    mode: 'history',
    scrollBehavior(to) {
        if (to.hash) {
            return window.scrollTo({
                top: document.querySelector(to.hash).offsetTop, behavior: 'smooth'
            });
        }

        return window.scrollTo({
            top: 0, behavior: 'smooth'
        });
    },
    toBenefits
})

export default router
