import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router ({

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
    }


    ]

})