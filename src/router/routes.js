import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade';
import Pay from '@/pages/Pay';
import PaySuccess from '@/pages/PaySuccess';

export default [
    {
        path: "/paySuccess",
        name: "paySuccess",
        component: PaySuccess,
        meta: { shouw: true },
    },
    {
        path: "/pay",
        name: "pay",
        component: Pay,
        meta: { shouw: true },
    },
    {
        path: "/trade",
        name: "trade",
        component: Trade,
        meta: { shouw: true },
    },
    {
        path: "/shopcart",
        name: "shopcart",
        component: ShopCart,
        meta: { shouw: true },
    },
    {
        path: "/addCartSuccess",
        name: "addCartSuccess",
        component: AddCartSuccess,
        meta: { shouw: true },
    },
    {
        path: "/detail/:skuid",
        component: Detail,
        meta: { shouw: true },
    },
    {
        path: "/home",
        component: Home,
        meta: { show: true },
    },
    {
        path: "/search/:keyword?",
        component: Search,
        meta: { show: true },
        name: "search",
    },
    {
        path: "/login",
        component: Login,
        meta: { show: false },
    },
    {
        path: "/register",
        component: Register,
        meta: { show: false },
    },
    {
        path: "*",
        redirect: "/home", //redirect  跳转到
    },
];