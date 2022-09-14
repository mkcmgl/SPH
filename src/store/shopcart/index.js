import { reqGetCartList } from '@/api';
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
        if (result.code == 200) {
            commit('GETCARTLIST', result.data);
        }

    }

};
const getters = {};
export default {

    state,
    mutations,
    actions,
    getters,
};