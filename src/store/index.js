import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
import search from './search';
import home from './home';
export default new Vuex.Store({

    modules: {
        home,
        search,
    }
});