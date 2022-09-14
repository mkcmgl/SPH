import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import search from './search';
import home from './home';
import detail from './detail';
import shopcart from './shopcart';
export default new Vuex.Store({

    modules: {
        home,
        search,
        detail,
        shopcart,
    }
});