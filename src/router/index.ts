import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import PageNotFound from '../views/PageNotFound.vue'
import AboutView from '../views/AboutView.vue'
import PeDiabeticoInfo from "@/views/PeDiabeticoInfo.vue";
import AlimentacaoInfo from "@/views/AlimentacaoInfo.vue";
import AtividadeFisicaInfo from "@/views/AtividadeFisicaInfo.vue";
import DorisChat from "@/views/DorisChat.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
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
            path: '/pe_diabetico',
            name: "pe_diabetico",
            component: PeDiabeticoInfo,
            props: true,
        },
        {
            path: '/alimentacao',
            name: "alimentacao",
            component: AlimentacaoInfo,
            props: true,
        },
        {
            path: '/atividade_fisica',
            name: "atividade_fisica",
            component: AtividadeFisicaInfo,
            props: true,
        },
        {
            path: '/doris',
            name: "doris",
            component: DorisChat,
            props: true,
        },
    ]
})

router.beforeEach((to, from, next) => {
    const user = localStorage.getItem('user_token')
    if (user && to.name === 'login') {
        next({name: "home"})
    } else if (user || to.name === 'login') {
        next()
    } else {
        next({name: 'login'})
    }
})

export default router
