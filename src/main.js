import Vue from 'vue'
import App from './App.vue'
import typeNav from '@/components/TypeNav';
import Carousel from '@/components/Carousel';
import Pagination from '@/components/Pagination';
import { Button ,MessageBox} from 'element-ui';

Vue.component(typeNav.name, typeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);
Vue.component(Button.name,Button)
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

import router from '@/router';

import * as API from '@/api';
import store from '@/store';
import '@/mock/mockServe';
import 'swiper/css/swiper.css';
import atm from '@/assets/1.gif';
import VueLazyload from 'vue-lazyload';

Vue.config.productionTip = false



Vue.use(VueLazyload,{
    //懒加载默认的图片
    loading:atm
  });
new Vue({
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this;
        Vue.prototype.$API=API;
    },
    router,
    store
}).$mount('#app')