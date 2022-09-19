export default [{
        path: "/center",
        name: "center",
        component: () =>
            import ('@/pages/Center'),
        meta: { shouw: true },
        children: [{
                path: 'myorder',
                component: () =>
                    import ('@/pages/Center/myOrder'),
            },
            {
                path: 'grouporder',
                component: () =>
                    import ('@/pages/Center/groupOrder'),
            },
            {
                path: '',
                redirect: 'myorder',
            }
        ]
    },
    {
        path: "/paySuccess",
        name: "paySuccess",
        component: () =>
            import ('@/pages/PaySuccess'),
        meta: { shouw: true },
        beforeEnter(to, from, next) {
            if (from.path === '/pay') {
                next()
            } else {
                next('/pay')
            }
        }
    },
    {
        path: "/pay",
        name: "pay",
        component: () =>
            import ('@/pages/Pay'),
        meta: { shouw: true },
        props: route => ({ orderId: route.query.orderId }),

        /* 只能从交易界面, 才能跳转到支付界面 */
        beforeEnter(to, from, next) {
            if (from.path === '/trade') {
                next()
            } else {
                next('/trade')
            }
        }
    },
    {
        path: "/trade",
        name: "trade",
        component: () =>
            import ('@/pages/Trade'),
        meta: { shouw: true },
    },
    {
        path: "/shopcart",
        name: "shopcart",
        component: () =>
            import ('@/pages/ShopCart'),
        meta: { shouw: true },
    },
    {
        path: "/addCartSuccess",
        name: "addCartSuccess",
        component: () =>
            import ('@/pages/AddCartSuccess'),
        meta: { shouw: true },
    },
    {
        path: "/detail/:skuid",
        component: () =>
            import ('@/pages/Detail'),
        meta: { shouw: true },
    },
    {
        path: "/home",
        component: () =>
            import ('@/pages/Home'),
        meta: { show: true },
    },
    {
        path: "/search/:keyword?",
        component: () =>
            import ('@/pages/Search'),
        meta: { show: true },
        name: "search",
    },
    {
        path: "/login",
        component: () =>
            import ('@/pages/Login'),
        meta: { show: false },
    },
    {
        path: "/register",
        component: () =>
            import ('@/pages/Register'),
        meta: { show: false },
    },
    {
        path: "*",
        redirect: "/home", //redirect  跳转到
    },
];