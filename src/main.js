import Vue from 'vue'
import App from './App.vue'
import typeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagenation from '@/components/Pagenation';

Vue.component(typeNav.name, typeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagenation.name, Pagenation);
import router from '@/router';


import store from '@/store';
import '@/mock/mockServe';
import 'swiper/css/swiper.css';
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
    },
    router,
    store
}).$mount('#app')