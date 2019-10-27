import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMaill from '@/pages/ShoppingMaill'
import Register from '@/pages/Register'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'ShoppingMaill',
        component: ShoppingMaill
    }, {
        path: '/register',
        name: 'Register',
        component: Register
    }]
})