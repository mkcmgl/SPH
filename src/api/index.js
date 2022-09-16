import requests from './request';
import mockRequests from './mockAjax';


export const reqCategoryList = () => requests({ url: '/product/getBaseCategoryList', method: 'get' });

export const reqGetBannerList = () => mockRequests.get("/banner");
export const reqFloorList = () => mockRequests.get("/floors");

export const reqGetSearchInfo = (params) => requests({ url: '/list', method: 'post', data: params });
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });
export const reqAddOrUpdeteShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: "post" })
export const reqGetCartList = () => requests({ url: `/cart/cartList`, method: 'get' });
export const reqDeleteCart = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' });
export const reqCheckCart = (skuId, isChecked) => requests({ url: `cart/checkCart/${skuId}/${isChecked}`, method: 'get' })
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' });
export const reqRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' });
export const reqLogin = (data) => requests({ url: "/user/passport/login", data, method: 'post' });
export const reqUserInfo = () => requests({ url: '/user/passport/auth/getUserInfo', method: 'get' })
export const reqLogout = () => requests({ url: '/user/passport/logout', method: 'get' })
export const reqAddressInfo = () => requests({ url: '/user/userAddress/auth/findUserAddressList', method: 'get' });
export const reqOrderInfo = () => requests({ url: '/order/auth/trade', method: 'get' });