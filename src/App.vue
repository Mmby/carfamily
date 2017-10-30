<template>
	<div id="app">
		<heads></heads>
		<!--<publicheader></publicheader>-->
		<!--<promotion></promotion>
		<wash-beaut></wash-beaut>
		<robbuy></robbuy>
		<evaluating></evaluating>
		<state></state>-->
		<!--<record></record>-->
		<!--<ranking class="app_product"></ranking>-->
		<!--<shopping-cart></shopping-cart>-->
		<!--<merchantregister></merchantregister>-->
		<!--<merchantorder></merchantorder>-->
		<!--地区三级联动-->
		<!--<distpicker></distpicker>-->
		<!--社区新闻-->
		<!--<journalism></journalism>-->
		<!--商品详情-->
		<!--<detailpage></detailpage>-->
		<div class="app_cont">
			<router-view></router-view>
		</div>
		<!--<details1></details1>-->
		<!--手机找回密码-->
		<!--<mobilever></mobilever>-->
		<!--<lotterys></lotterys>-->
		<div class="js_backup_top"></div>
		<foots></foots>
		<!--<download></download>-->
		<!--<commodity-class></commodity-class>-->
		
	</div>
</template>

<script>

import CommodityClass from './components/home/CommodityClass'
import HomeSwiper from './components/home/HomeSwiper'
import Heads from './components/home/Heads'
import Homes from './components/Homes'
import Foots from './components/foots/Foots'
import Promotion from './components/home/Promotion'
import WashBeaut from './components/home/WashBeaut'
import Robbuy from './components/home/Robbuy'
import Evaluating from './components/home/Evaluating'
import State from './components/home/State'
//import GpClass from './components/goup/GpClass'
import ShoppingCart from './components/shopping/ShoppingCart'
//import Publicheader from './components/Publicheader'
//商户
import Merchantregister from './components/merchant/Merchantregister'
//商户➡️订单管理
import Merchantorder from './components/merchant/Merchantorder'
//抽奖页面
import Lotterys from './components/Lotterys'
import Details1 from './components/raffile/Details1'
//商品详情页
import Detailpage from './components/detailpage/Detailpage'
//手机找回密码
import Mobilever from './components/login/Mobilever'
	export default {
		name: 'app',
		components: {
			Homes,
			Heads,
			CommodityClass,
			HomeSwiper,
			Foots,
			Promotion,
			WashBeaut,
			Robbuy,
			Evaluating,
			State,
//			Merchantregister,
			ShoppingCart,
			Merchantorder,
			//抽奖总页面
			Lotterys,
			Detailpage,
			//手机找回密码
			Mobilever,
			Details1
//			,
//			Publicheader,
//			GpClass,
		},
		
		mounted(){
			/* 返回顶部 */
			$(function(){
				$(window).scroll(function () {
			     if($(window).scrollTop() > 200)//距离顶部多少高度显示按钮
			     {
			     	$('.js_backup_top').slideDown(200);
			     }else
			     {
			     	$('.js_backup_top').slideUp(200);
			     }
			   }); 
				var timerReturnTop=null;
				$(".js_backup_top").on("click",function(){
					clearInterval(timerReturnTop);
					timerReturnTop=setInterval(function (){
						var scrollTopNum=document.documentElement.scrollTop||document.body.scrollTop;
						var speed=Math.floor(-scrollTopNum/3);
						if(scrollTopNum==0)
						{
							 clearInterval(timerReturnTop);
						}
						document.documentElement.scrollTop=scrollTopNum+speed;
						document.body.scrollTop=scrollTopNum+speed;//兼容chrome浏览器
					}, 30);
				});
			});
		}
	}
</script>

<style>
	div,p,img,li,ul,h1,h2,h3,h4,a{
		padding: 0;
		margin: 0;
	}
	.app_product{
		margin-left: 100px;
	}
	ul,li{
		list-style: none;
	}
	img{
		vertical-align: top;
	}
	a{
		text-decoration: none;
	}
	.nav_active{
		background: #101f4b;
		color: red;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		min-width: 1000px;
		
		/*text-align: center;
		color: #2c3e50;*/
		
	}
	.app_cont{
		background: #e9e9e9;
	}
	.js_backup_top {
		display: none;
		cursor: pointer;
		position: fixed;
		bottom: 20px;
		left: 50%;
		width: 54px;
		height: 54px;
		margin-left: 500px;
		background: url(../static/cmbk.png) no-repeat;
	}
</style>