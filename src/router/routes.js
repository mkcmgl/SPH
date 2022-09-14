import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from '@/pages/AddCartSuccess';
import ShopCart from '@/pages/ShopCart'


export default [{
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