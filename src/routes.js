import Vue from "vue";
import Router from "vue-router";
const Login = () =>
    import ("./components/login");


const Main = () =>
    import ("./components/Video");

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [{
            path: "/",
            name: "Main",
            component: Main,
        },
        {
            path: "/login",
            name: "Login",
            component: Login,
        }
    ],
});

export default router;