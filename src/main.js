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
import Mcarbalance from './components/mycar/Mcarbalance'
import Mrecharge from './components/mycar/Mrecharge'
import Accountset from './components/mycar/Accountset'
//我的订单
import Morder from './components/mycar/Morder'
import Mevaluationl from './components/mycar/Mevaluationl'
//我的商家
import Merchantregister from './components/merchant/Merchantregister'

//引入vue-x
import Vuex from 'vuex'
import store from './vuex/store'

Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.config.productionTip = false

//设置路由
const router = new VueRouter({
	mode: 'history',
//		base:__dirname,
	routes: [
		{
			path:"/",
			component:Homes
		},
		{
			path:"/home",
			component:Homes
		},
		{
			path:"/server",
			component:Server,
			children:[
			{
				path:"/server/shoplog",
				component:Merchantregister
			}
			]
		},
		{
			path:"/group",
			component:Group
		},
		//登录页面
		{
			path:"/login",
			component:LoginHome,
			children:[
				{
					path:"/login/",
					component:Login
				},
				{
					path:"/login/phone",
					component:Mobilever
				},
				{
					path:"/register/find",
					component:Verify
				},
				{
					path:"/register/set",
					component:VerifyMobile
				},
				{
					path:"/register/change",
					component:Loginkeys
				}
			]
		},

		//注册页面
		{
			path:"/register",
			component:Register,
			children:[
				{
					path:"/register/",
					component:Emailregister
				},
				{
					path:"/register/phone",
					component:Mobileregister
				}
			]
		},
		{
			path:"/mycar",
			component:Mycar,
			children:[
				{
					path:"/mycar/",
					component:Morder
				},
				{
					path:"/mycar/evaluationl",
					component:Mevaluationl
				},
				{
					path:"/mycar/collectall",
					component:Mcollectall
				},
				{
					path:"/mycar/carbalance",
					component:Mcarbalance
				},
				{
					path:"/mycar/recharge",
					component:Mrecharge
				},
				{
					path:"/mycar/accountset",
					component:Accountset
				}
				
			]
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
		Merchantregister
	}
}).$mount("#app")