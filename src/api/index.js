import requests from './request';
import mockRequests from './mockAjax';

export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });

export const reqGetBannerList = () => mockRequests.get("/banner");
export const reqFloorList = () => mockRequests.get("/floors");

export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params })