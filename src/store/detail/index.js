import { reqGoodsInfo } from '@/api';

const state = () => ({
    // feature: { property: value },
    goodInfo: {},
});

const mutations = {
    // mutationHandler(state, payload) {

    // },
    REQFETDETAIL(state, goodInfo) {
        state.goodInfo = goodInfo;
    },
};

const actions = {
    // actionHandler({ commit }, skuid) {
    //     return new Promise((resolve) => {
    //         request().then((response) => {
    //             commit(mutationHandler, response);
    //             resolve(response);
    //         });
    //     });
    // },
    async reqGetdetail({ commit }, skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit('REQFETDETAIL', result.data);
        }
    }
};
const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    },
};

export default {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters,
};