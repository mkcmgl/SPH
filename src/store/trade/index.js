import { reqAddressInfo, reqOrderInfo } from '@/api';


const state = {
    // feature: { property: value },
    addressList: [],
    orderInfo: {},
};

const mutations = {
    // mutationHandler(state, payload) {

    // },
    GETADDRESSINFO(state, addressList) {
        state.addressList = addressList
    },
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo;
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
    async getAddressInfo({ commit }) {
        let result = await reqAddressInfo();
        console.log(result);
        if (result.code == 200) {
            commit('GETADDRESSINFO', result.data);
            return 'ok';
        }
    },
    async getOrderInfo({ commit }) {
        let result = await reqOrderInfo();
        console.log(result)
        if (result.code == 200) {
            commit('GETORDERINFO', result.data);
        }
    }

};
const getters = {};
export default {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters,
};