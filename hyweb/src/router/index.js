import Vue from 'vue'
import Router from 'vue-router'
import ShoppingMaill from '@/pages/ShoppingMaill'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'ShoppingMaill',
        component: ShoppingMaill
    }]
})