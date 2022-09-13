import Vue from 'vue';
import VueRouter from 'vue-router';


Vue.use(VueRouter);

import routes from './routes';

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

export default new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { y: 0 }
    }

})