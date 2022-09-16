import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

import routes from './routes';
import store from '@/store';
import { fail } from 'assert';
import { async } from 'q';

let originPush = VueRouter.prototype.push;
let originreplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function(location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject);
    } else {
        originPush.call(this, location, () => {}, () => {});
    }
}
VueRouter.prototype.replace = function(location, resolve, reject) {
    if (resolve && reject) {
        originreplace.call(this, location, resolve, reject);
    } else {
        originreplace.call(this, location, () => {}, () => {});
    }
}

let router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }
});

router.beforeEach(async(to, from, next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;

    if (token) {
        if (to.path == '/login' || to.path == '/register') {
            next('/')
        } else {
            if (name) {
                next()
            } else {
                try {
                    await store.dispatch('userInfo');
                } catch (error) {
                    await store.dispatch('logout');
                    next('/login')
                }
            }
        }
    } else {
        next();
    }
    next();

});

export default router;