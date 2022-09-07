import { reqCategoryList } from "@/api";

const state = {
    categoryList: [],
};
const mutations = {
    CATAGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
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
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}