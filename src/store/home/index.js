import { reqCategoryList, reqGetBannerList } from "@/api";
import { async } from "q";

const state = {
    categoryList: [],
    bannerList: [],
};
const mutations = {
    CATAGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    }
};
const actions = {
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        if (result.code == 200) {
            // if(result.data.legth>){

            // }else{

            // }
            let data = result.data.slice(0, 16)
            commit('CATAGORYLIST', data)
        }
    },
    async getBannerList(commit) {

        let result = await reqGetBannerList;
        if (result.code == 200) {

            commit('GETBANNERLIST', result.data)
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}