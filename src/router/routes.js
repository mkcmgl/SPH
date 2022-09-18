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
import Center from '@/pages/Center';
import groupOrder from '@/pages/Center/groupOrder';
import myOrder from '@/pages/Center/myOrder';

export default [
    {
        path: "/center",
        name: "center",
        component: Center,
        meta: { shouw: true },
        children:[
            {
                path:'myorder',
                component:myOrder,
            },
            {
                path:'grouporder',
                component:groupOrder,
            },
            {
                path: '',
                redirect: 'myorder'
              }
        ],
    },
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
        beforeEnter: (to, from, next) => {
            if(from.path=='/trade'){
                next()
            }else{
                next(false)
            }
        }
    },
    {
        path: "/trade",
        name: "trade",
        component: Trade,
        meta: { shouw: true },
        beforeEnter: (to, from, next) => {
            if(from.path=='/shopcart'){
                next()
            }else{
                next(false);
            }
        }
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