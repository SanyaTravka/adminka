import Vue from "vue";
import Router from "vue-router";
const Register = () =>
    import ("./components/Register");
const Login = () =>
    import ("./components/login");
const Main = () =>
    import ("./components/Main");
const ForgetPassword = () =>
    import ("./components/ForgetPassword");
const Logout = () =>
    import ("./components/logout");

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
        },
        {
            path: "/register",
            name: "Register",
            component: Register,
        },
        {
            path: "/forgetPassword",
            name: "ForgetPassword",
            component: ForgetPassword,
        },
        {
            path: "/logout",
            name: "Logout",
            component: Logout,
        }
    ],
});

export default router;