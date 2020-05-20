import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex";
import Router from "vue-router";
import Home from "./views/Home.vue";


Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(Router);



    const store = new Vuex.Store(
        {
            state: {
                authenticated: false
            },
            mutations: {
                setAuthentication(state, status) {
                    state.authenticated = status;
                }
            }
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
            path: "/kontaktaoss",
            name: "kontaktaoss",
            component: () =>
                import( "./views/KontaktaOss.vue")
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
