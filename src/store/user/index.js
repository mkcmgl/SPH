import { reqGetCode, reqRegister } from '@/api';
const state = {
    // feature: { property: value },
    code: '',

};

const mutations = {
    // mutationHandler(state, payload) {

    // },
    GETCODE(state, code) {
        state.code = code
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
    async getCode({ commit }, phone) {

        let result = await reqGetCode(phone);

        if (result.code == 200) {
            commit('GETCODE', result.data);
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    async register({ dispatch }, data) {
        let result = await reqRegister(data);
        console.log(result);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },

};
const getters = {};
export default {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters
};