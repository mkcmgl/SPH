import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";


const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
};
const mutations = {
    CATAGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        console.log('修改bannerList');
        state.bannerList = bannerList;
    },
    GETFLOORLIST(state, floorList) {
        console.log('修改floorList');
        state.floorList = floorList;
    },
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
    async getBannerList({ commit }) {
        console.log("获取");
        let result = await reqGetBannerList();
        console.log(result);
        if (result.code == 200) {

            commit('GETBANNERLIST', result.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqFloorList();
        console.log(result);
        if (result.code == 200) {
            commit('GETFLOORLIST', result.data)
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