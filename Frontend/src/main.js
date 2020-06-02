import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex";
import Router from "vue-router";
import Home from "./views/Home.vue";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(Router);



    const store = new Vuex.Store(
        {
            state: {
                authenticated: false,
                username:"",
                user: 0
            },
            mutations: {
                setAuthentication(state, status) {
                    state.authenticated = status;
                },
                setUserId(state,id) {
                    state.user = id;
                }
            },
            getters: {},
            actions: {}
        }
    );

const router = new Router ({

    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            props: true
        },
        {
            path: "/login",
            name: "login",
            component: () =>
                import( "./views/Login.vue")
        },
        {
            path: "/aboutus",
            name: "aboutus",
            component: () =>
                import( "./views/AboutUs.vue")
        },
        {
            path: "/faq",
            name: "faq",
            component: () =>
                import( "./views/FAQ.vue")
        },
        {
            path: "/register",
            name: "register",
            component: () =>
                import( "./views/Register.vue")
        },
        {
            path: "/mypage",
            name: "mypage",
            component: () =>
                import( "./views/Mypage.vue"),
            // beforeEnter: (to, from, next) => {
            //     if (store.state.authenticated === false) {
            //         next(false);
            //     } else {
            //         next();
            //     }
            // }
        }


    ]
})

new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount('#app')
