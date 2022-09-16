import { reqGetCode, reqRegister, reqLogin, reqUserInfo, reqLogout } from '@/api';
import { setToken, getToken, removeToken } from "@/utils/token";
const state = {
    // feature: { property: value },
    code: '',
    token: getToken(),
    userInfo: {},
};

const mutations = {
    // mutationHandler(state, payload) {

    // },
    GETCODE(state, code) {
        state.code = code
    },
    LOGIN(state, token) {
        state.token = token;
    },
    USERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },
    CLEARTOKEN(state) {
        state.token = '';
        state.userInfo = {};
        removeToken();
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
    async register({ commit }, data) {
        let result = await reqRegister(data);
        console.log(result);
        if (result.code == 200) {
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    async login({ commit }, data) {
        let result = await reqLogin(data);
        if (result.code == 200) {
            commit('LOGIN', result.data.token)
            setToken(result.data.token)
            return "ok";
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    async userInfo({ commit }) {
        let result = await reqUserInfo()
        if (result.code == 200) {
            commit('USERINFO', result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error('faile'));
        }
    },
    async logout({ commit }) {
        let result = await reqLogout()
        console.log(result)
        if (result.code == 200) {
            commit('CLEARTOKEN')
            return 'ok';
        } else {
            return Promise.resolve(new Error('faile'));
        }
    }

};
const getters = {};
export default {
    // namespaced: true,
    state,
    mutations,
    actions,
    getters
};