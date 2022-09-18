import {reqAddressInfo,reqOrderInfo} from '@/api';
const state ={
    // feature: { property: value },
    addressList:[],
    orderInfo:{},
};

const mutations = {
    GETADDRESSINFO(state, addressList) {
        state.addressList=addressList
    },
    GETOREDERINFO(state,orderInfo){
        state.orderInfo=orderInfo
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
// }
        async getAddressInfo({commit}){
            let result= await reqAddressInfo();
            console.log(result);
            if(result.code==200){
                commit('GETADDRESSINFO',result.data)
            }
        },
        async getOrderInfo({commit}){
            let result=await reqOrderInfo();
            console.log(result);
            if(result.code==200){
                commit('GETOREDERINFO',result.data);
            }
        }
    };

const getters={};
export default {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters,
};