// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App'

import Homes from './components/homes'
import Heads from './components/home/heads'

import Foots from './components/foots/Foots'
import Server from './components/Server'
import Mycar from './components/Mycar'
import Group from './components/Group'
import LoginHome from './components/LoginHome'
import Mobilever from './components/login/Mobilever'
import Login from './components/login/Login'
import Verify from './components/login/Verify'
import Loginkeys from './components/login/Loginkeys'
import VerifyMobile from './components/login/VerifyMobile'
import Register from './components/Register'
import Emailregister from './components/register/Emailregister'
import Mobileregister from './components/register/Mobileregister'
import Mcollectall from './components/mycar/Mcollect-all'
import Jifen from './components/mycar/Jifen'
import Mcarbalance from './components/mycar/Mcarbalance'
import Mrecharge from './components/mycar/Mrecharge'
import Accountset from './components/mycar/Accountset'
//我的订单
import Morder from './components/mycar/Morder'
import Mevaluationl from './components/mycar/Mevaluationl'
//我的商家
import Merchantregister from './components/merchant/Merchantregister'
//商家入口
import Merchant from './components/merchant/Merchantregister'
import Merchantorder from './components/merchant/Merchantorder'
//邮箱注册成功
import Emailverify from './components/register/emailverify'
//手机注册成功
import Registersucess from './components/register/registersucess'
//我的车族-代金券
import Mvoucher from './components/mycar/Mvoucher'
//去付款
import Mpayment from './components/mycar/Mpayment'
//提现
import Mwithdrawal from './components/mycar/Mwithdrawal'
//社区
import Mshequ from './components/Mshequ'

//详情
import Detailpage from './components/detailpage/Detailpage'
//引入vue-x
import Vuex from 'vuex'
import store from './vuex/store'
//城市三级联动
import Distpicker from 'v-distpicker'
//抽奖系统
import Lotterys from './components/Lotterys'
import Details1 from './components/raffile/Details1'
ShoppingCart
//购物车
import ShoppingCart from './components/shopping/ShoppingCart'
import PayWay from './components/shopping/PayWay'
import Paysuccess from './components/shopping/Paysuccess'
//注册三级联动组件
Vue.component('v-distpicker', Distpicker)
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

// 引入vue-amap
import AMap from 'vue-amap';
Vue.use(AMap);
// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'da15623b3c9fdcaaeddbb0103f8e9a0d',
  // 插件集合
  plugin: ['']
});

//设置路由
const router = new VueRouter({
	mode: 'history',
	//		base:__dirname,
	routes: [{
			path: "/",
			component: Homes,
		},
		{
			path: "/home",
			component: Homes
		},
		{
			path: "/server",
			component: Group
			
		},
		{
			path: "/group",
			component: Group
		},
		//商家入口W
		{
			path: "/merchant",
			component: Merchantregister
		},
		{
			path: "/merchant/merorder",
			component: Merchantorder
		},
		{
			path: "/merchant/verify",
			component: Verify
		},
		//登录页面
		{
			path: "/login",
			component: LoginHome,
			children: [{
					path: "/login/",
					component: Login
				},
				{
					path: "/login/phone",
					component: Mobilever
				},
				{
					path: "/register/find",
					component: Verify
				},
				{
					path: "/register/set",
					component: VerifyMobile
				},
				{
					path: "/register/change",
					component: Loginkeys
				}
			]
		},
		//抽奖系统
		{
			path: "/home/Lotterys",
			component: Lotterys
		},
		{
			path: "/home/Lotterys/details",
				component: Details1
		},
		//注册页面
		{
			path: "/register",
			component: Register,
			children: [{
					path: "/register/",
					component: Emailregister
				},
				{
					path: "/register/phone",
					component: Mobileregister
				}
			]
		},
		{
			path: "/register/success",
			component: Emailverify
		},
		{
			path: "/register/mobsuccess",
			component: Registersucess
		},
		{
			path: "/mycar",
			component: Mycar,
			children: [{
					path: "/mycar/",
					component: Morder
				},
				{
					path: "/mycar/evaluationl",
					component: Mevaluationl
				},
				{
					path: "/mycar/collectall",
					component: Mcollectall
				},
				{
					path: "/mycar/carbalance",
					component: Mcarbalance
				},
				{
					path: "/mycar/recharge",
					component: Mrecharge
				},
				{
					path: "/mycar/voucher",
					component: Mvoucher
				},
				{
					path: "/mycar/accountset",
					component: Accountset
				},
				{
					path: "/mycar/jifen",
					component: Jifen
				}

			]
		},
		//去付款
		{
			path:"/payment",
			component:Mpayment
		},
		//提现
		{
			path:"/withdrawal",
			component:Mwithdrawal
		},
		//详情页
		{
			path:"/detailpage",
			component:Detailpage
		},
		//购物车
		{
			path:"/shoppingcart",
			component:ShoppingCart
		},
		//支付
		{
			path:"/payWay",
			component:PayWay
		},
		//Paysuccess
		{
			path:"/paysuccess",
			component:Paysuccess
		},
		//社区
		{
			path:"/shequ",
			component:Mshequ
		}
	]
})
/* eslint-disable no-new */
new Vue({
	router,
	store,
	template: "<App/>",
	components: {
		App,
		Homes,
		Heads,
		Foots,
		Server,
		Group,
		Register,
		Emailregister,
		Mobileregister,
		Mobilever,
		LoginHome,
		Verify,
		VerifyMobile,
		Loginkeys,
		Mycar,
		Morder,
		Mevaluationl,
		Mcollectall,
		Mcarbalance,
		Mrecharge,
		Accountset,
		Merchantregister,
		Detailpage,
		Jifen,
		ShoppingCart,
		PayWay
	}
}).$mount("#app")