import Vue from 'vue'
import App from './App.vue'
import typeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';

Vue.component(typeNav.name, typeNav);
Vue.component(Carousel.name, Carousel);
import router from '@/router';


import store from '@/store';
import '@/mock/mockServe';
import 'swiper/css/swiper.css';
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')