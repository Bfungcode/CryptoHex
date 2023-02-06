import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/Login'
import RegisterPage from '../views/Register'
import HomePage from '../views/Home'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: HomePage
    }, {
        path: '/register',
        name: 'Register',
        component: RegisterPage
    },
    {
        path: '/login',
        name: 'Login',
        component: LoginPage
    },
]

const router = new VueRouter({
    routes
})

export default router