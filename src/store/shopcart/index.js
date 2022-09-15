import { reqGetCartList, reqDeleteCart, reqCheckCart } from '@/api';

const state = () => ({
    // feature: { property: value },
    cartList: []
});

const mutations = {
    // mutationHandler(state, payload) {

    // },
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    }
};

const actions = {
    // actionHandler({ commit }, payload) {
    //     return new Promise((resolve) => {
    //         request().then((response) => {
    //             commit(mutationHandler, response);
    //             resolve(response);
    //         });
    //     });
    // },
    async getCartList({ commit }) {
        let result = await reqGetCartList()
            // console.log(result);
        if (result.code == 200) {
            commit('GETCARTLIST', result.data);
        }

    },
    async delteCartListBySkuId({ commit }, skuId) {
        let result = await reqDeleteCart(skuId);
        // console.log(result);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    async checkCartById({ commit }, { skuId, isChecked }) {
        let result = await reqCheckCart(skuId, isChecked);
        if (result.code) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    deleteAllCheckedCart({ dispatch, getters }) {
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('delteCartListBySkuId', item.skuId) : '';
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll);
    },
    updateAllCartIsChecked({ dispatch, getters }, isChecked) {
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked != isChecked ? dispatch('checkCartById', { skuId: item.skuId, isChecked }) : '';
            PromiseAll.push(promise);
        });
        return Promise.all(PromiseAll);
    },
    // updateAllCartIsChecked(contex) {
    //     console.log(contex);
    // }

};
const getters = {
    cartList(state) {
        return state.cartList[0] || {};
    }
};
export default {

    state,
    mutations,
    actions,
    getters,
};