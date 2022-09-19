import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

import routes from './routes';
import store from '@/store';


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
                    next();
                } catch (error) {
                    await store.dispatch('logout');
                    next('/login')
                }
            }
        }
    } else {
        let toPath = to.path;
        if (toPath.indexOf('/trade') != -1 || toPath.indexOf('/pay') != -1 || toPath.indexOf('/center') != -1) {
            //把未登录的时候向去而没有去成的信息，存储于地址栏中【路由】
            next('/login?redirect=' + toPath);
        } else {
            //去的不是上面这些路由（home|search|shopCart）---放行
            next();
        }
    }

});

export default router;