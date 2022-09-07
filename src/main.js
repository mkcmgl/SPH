import Vue from 'vue'
import App from './App.vue'
import typeNav from '@/components/TypeNav';

Vue.component(typeNav.name, typeNav);
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