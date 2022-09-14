import { reqGoodsInfo, reqAddOrUpdeteShopCart } from '@/api';
import { getUUID } from '@/utils/uuid_token';

const state = {
    // feature: { property: value },
    goodInfo: {},
    uuid_token: getUUID()

};

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
    },
    async addOrUpdeteShopCart({ commit }, { skuId, skuNum }) {
        let result = await reqAddOrUpdeteShopCart(skuId, skuNum);
        if (result.code == 200) {
            //返回的是成功的标记
            return "ok";
        } else {
            //返回的是失败的标记
            return Promise.reject(new Error("faile"));
        }
    },
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