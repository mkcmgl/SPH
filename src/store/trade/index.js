import {reqAddressInfo,reqOrderInfo} from '@/api';
const state ={
    // feature: { property: value },
    addressLis:[],
};

const mutations = {
    mutationHandler(state, payload) {
        
    },
};

const actions = {
    // actionHandler({ commit }, payload) {
    //     return new Promise((resolve) => {
    //         request().then((response) => {
    //             commit(mutationHandler, response);
    //             resolve(response);
    //         });
    
    //     });
    },
};
const getters={};
export default {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters,
};