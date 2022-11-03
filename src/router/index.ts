import {createRouter, createWebHistory} from 'vue-router'
import MenuView from '../views/MenuView.vue'
import LoginView from '../views/LoginView.vue'
import PageNotFound from '../views/PageNotFound.vue'
import AboutView from '../views/AboutView.vue'
import DorisChat from "@/views/DorisChat.vue";
import EntryView from "@/views/EntryView.vue";
import WelcomeDoris from "@/views/WelcomeDoris.vue";
import WelcomeDorisVoce from "@/views/WelcomeDorisVoce.vue";
import AutocuidadoView from "@/views/AutocuidadoView.vue";
import DiabetesView from "@/views/DiabetesView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'entry',
            component: EntryView
        },
        {
            path: '/welcome_doris',
            name: 'welcome_doris',
            component: WelcomeDoris
        },
        {
            path: '/welcome_doris_voce',
            name: 'welcome_doris_voce',
            component: WelcomeDorisVoce
        },
        {
            path: '/diabetes',
            name: 'diabetes',
            component: DiabetesView
        },
        {
            path: '/autocuidado',
            name: 'autocuidado',
            component: AutocuidadoView
        },
        {
            path: '/home',
            name: 'home',
            component: MenuView
        },
        {
            path: '/about',
            name: 'about',
            component: AboutView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/:catchAll(.*)*',
            name: "page_not_found",
            component: PageNotFound,
        },
        {
            path: '/doris',
            name: "doris",
            component: DorisChat,
            props: true,
        },
    ]
})

// router.beforeEach((to, from, next) => {
//     // const user = localStorage.getItem('user_token')
//     // if (user && to.name === 'login') {
//     //     next({name: "home"})
//     // } else if (user || to.name === 'login') {
//     //     next()
//     // } else {
//     //     next({name: 'login'})
//     // }
//     next({name: "home"})
// })

export default router
