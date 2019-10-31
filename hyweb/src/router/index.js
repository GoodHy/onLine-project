import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMaill from '@/pages/ShoppingMaill'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Goods from '@/pages/Goods'
import CategoryList from '@/pages/CategoryList'
import Cart from '@/pages/Cart'
import Main from '@/pages/Main'
import Member from '@/pages/Member'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Main',
            component: Main,

            children: [{
                path: '/',
                name: 'ShoppingMall',
                component: ShoppingMaill
            }, {
                path: '/categoryList',
                name: 'CategoryList',
                component: CategoryList
            }, {
                path: '/cart',
                name: 'Cart',
                component: Cart
            }, {
                path: '/member',
                name: 'Member',
                component: Member
            }]
        }, {
            path: '/register',
            name: 'Register',
            component: Register
        }, {
            path: '/login',
            name: 'Login',
            component: Login
        }, {
            path: '/goods',
            name: 'Goods',
            component: Goods
        }

    ]
})