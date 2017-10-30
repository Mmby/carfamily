<template>
	<div class="group">
		<!--<lottery></lottery>-->
		<!--你还有几个订单没有付款-->
		<div class="group_unfinished">你有2个订单还没有付款,<span>快来支付吧!</span> 以免团购抢光了</div>
		<gp-class></gp-class>
		<div class="group_foot">
			<div class="group_l">
				<!--从产品组件复制过来的代码便于循环-->
					<!--单个产品组件-->
			<!--	<div v-for="item in productLiArr" class="productaa productLi">-->
				<!--动态添加-->
				<div class="productaa productLi">
					<div class="product_img">
						<img v-bind:src="picnum1"/>
						<!--<img src="../assets/group2.png"/>
						<img src="../assets/wash4.png"/>-->
						<div class="product_img_intro" >
							北京朝阳区朝阳北路白家楼村29号(白家楼桥西北角)
						</div>
					</div>
					
					<div class="product_title">
						【2店通用】和平里4S店
					</div>
					<div class="product_intro">
						仅1650元享原价3760元汽车顶级贴膜套餐挡膜餐
					</div>
					<ul class="product_price">
						<li>¥15</li>
						<li>门店价: <span>¥80</span></li>
					</ul>
					<div class="product_patch1"></div>
					<div class="product_patch2"><span></span></div>
					<div class="product_patch3"></div>
					<div class="product_patch4"></div>
				
					<div class="product_look">
						去看看
						
					</div>
				
					<div class="product_buy">
						<span>16816</span>  已经购买
					</div>
				</div>
				<!--结束位置-->
				
				
				<!--页码部分-->
				<!--页码动态添加-->
				
				
			</div>
			<div class="group_r">
				<promise></promise>
				<!--车族客服-->
				<mycarserve class="group_r_service"></mycarserve>
				<!--热卖排行榜-->
				<ranking></ranking>
				<!--0元抽奖-->
				<lottery class="group_r_lottery"></lottery>
				<!--最近浏览过-->
				<record></record>
				<!--最新通知-->
				<latestnotice></latestnotice>
				<!--商务合作-->
				<business></business>
			</div>
			<div class="gp_page">
			</div>
		</div>

	</div>
</template>

<script>
	import Lottery from './group/Lottery'
	import GpClass from './group/GpClass'
	import Promise from './group/Promise'
	import Mycarserve from './mycar/Mycarserve'
	import Ranking from './home/Ranking'
	import Record from './group/Record'
	
	import Latestnotice from './group/Latestnotice'
	import Business from './group/Business'


//	import Details1 from './raffile/Details1'
	export default {
		name:"group",
		components: {
			Lottery,
			GpClass,
			Promise,
			Mycarserve,
			Ranking,
			Record,
			Latestnotice,
			Business
//			Details1

		},
		data(){
			return {
				productLiArr:[1,2,3,4,5,6,7,7,7,7],
	
				picnum1:'/static/group1.png',
				picnum2:'/static/group2.png',
				picnum3:'/static/wash4.png'

			}
		},
		mounted(){
			var _this = this;
			//创建节点的函数
			//创建节点的函数
			function creatLi(pic,name,intro,price1,price2,buynum) {
				var oLi = $("<div class='productaa productLi'><div class='product_img'><img v-bind:src="+pic+"/><div class='product_img_intro'>北京朝阳区朝阳北路白家楼村29号(白家楼桥西北角)</div></div><div class='product_title'>"+name+"</div><div class='product_intro'>"+intro+"</div><ul class='product_price'><li>¥"+price2+"</li><li>门店价: ¥"+price1+"</li></ul><div class='product_patch1'></div><div class='product_patch2'><span></span></div><div class='product_patch3'></div><div class='product_patch4'></div><div class='product_look'>去看看</div><div class='product_buy'><span>"+buynum+"</span> 已经购买<div></div>");
				//从前面追加
				$(".group_l").prepend(oLi);

			}
			
			//点击事件
			$(document).on("click",".product_look",function(){
				
				//去看看传值;
				
				_this.$router.replace({ path: '/detailpage' })
			})
			


				





			
			
			
		}
	}
</script>

<style>
	
	.group{
		width: 977px;
		margin: 0 auto;
		padding-top: 10px;
	}
	.group_unfinished{
		color: black;
		font-size: 12px;
		text-indent: 28px;
		line-height: 38px;
		background-color: white;
		width: 974px;
		border: 1px solid #c5c5c5;
		margin-bottom: 5px;
	}
	.group_foot{
		width: 977px;
		margin: 0 auto;
	}
	/*右边*/
	.group_r{
		width: 239px;
		float: right;
		margin-top: 12px;
	}
	.group_foot:after{
		content: "";
		display: block;
		clear: both;
	}
	.group_r_service,.group_r_lottery{
		margin: 10px 0;
	}
	
	/*复制过来的样式*/
	.productaa{
		background: white;
		width: 344px;
		height: 357px;
		border: 1px solid #c5c5c5;
		position: relative;
	}
	.product_img{
		width: 320px;
		height: 179px;
		position: absolute;
		left:12px;
		top: 11px;	
	}
	.product_img img{
		width: 100%;
		height: 100%;
		z-index: 1;
	}
	.product_title{
		font-weight: 800;
		font-size: 18px;
		line-height: 30px;
		position: absolute;
		top: 194px;
		left: 4px;
		color: black;
	}
	.product_intro{
		font-size: 16px;
		line-height: 22px;
		height: 44px;
		overflow: hidden !important;
		color: #666666;
		position: absolute;
		left: 12px;
		top: 224px;
	/*	overflow: hidden;*/
	}
	.product_price{
		position: absolute;
		width: 206px;
		height: 61px;
		top: 275px;
		left: -1px;
		background-color: #e3e3e3;
		border-top: 1px solid #b8b8b8;
		border-bottom: 1px solid #b8b8b8;
	}
	/*突出的块*/
	.product_patch1{
		position: absolute;
		left: -7px;
		bottom: 19px;
		width: 7px;
		height: 61px;
		background-color: #e3e3e3;
		border-left: 1px solid #b8b8b8;
		border-bottom: 1px solid #b8b8b8;
		border-bottom-left-radius: 3px;
		z-index: 10;
	}
	.product_patch2{
		position: absolute;
		right: 0;
		bottom: 0;
		width: 0;
		height: 0;
		left: -7px;
		top: 272px;
		border-top: 5px solid #e3e3e3;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		transform: rotate(-45deg);
		z-index: 10;
	}
	.product_patch2 span{
		display: inline-block;
		position: absolute;
		width: 9px;
		height: 1px;
		background: #b8b8b8;
		top: -5px;
		left: -5px;
		z-index: 10;
		
	}
	.product_patch4{
		position: absolute;
		bottom: 40px;
		left: 180px;
		transform: rotate(-30deg);
		width: 35px;
		height: 35px;
		background: #e3e3e3;
		border-right: 1px solid #b8b8b8;
		z-index: 10;
	}
	.product_patch3{
		position: absolute;
		bottom: 26px;
		left: 180px;
		transform: rotate(30deg);
		width: 35px;
		height: 35px;
		background: #e3e3e3;
		border-right: 1px solid #b8b8b8;
		z-index: 10;
	}
	.product_price li:first-child{
		letter-spacing: 2px;
		color: #e40d1a;
		font-weight:900;
		font-size: 24px;
		position: absolute;
		left: 7px;
		top: 18px;
		line-height: 24px;
	}
	.product_price li:last-child{
		font-size: 14px;
		line-height: 14px;
		color: #989c9c;
		position: absolute;
		left: 116px;
		top: 29px;	
		z-index: 100;
	}
	.product_price li:last-child span{
		text-indent: 2px;
		font-size: 12px;
	}
	.product_look{
		position: absolute;
		width: 90px;
		height: 36px;
		border-radius: 18px;
		background-color: #536b99;
		text-align: center;
		line-height: 36px;
		color: white;
		font-weight: 700;
		right: 20px;
		bottom: 35px;
	}
	.product_buy{
		position: absolute;
		font-size: 12px;
		line-height: 12px;
		bottom: 17px;
		right: 23px;
	}
	.product_buy span{
		color: #e40d1a;
	}
	/*效果*/
	.product_title:hover,.product_look:hover{
		text-decoration: underline;
	}
	.product_img_intro{
		background: rgba(0,0,0,0.6);
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
		font-size: 13px;
		color: white;
		font-weight: 700;
		line-height: 22px;
		font-weight: 800;
		z-index: 100;
		letter-spacing: 1px;
		display: none;
	}
	.product_img:hover .product_img_intro{
		display: block;
	}
	
	/*复制过来样式的结束位置*/
	.group_l{
		width: 738px;
/*		height: 1857px;*/
/*		height: 2000px !important;*/
		float: left;
		/*overflow: hidden;*/
	}
	.group_l:after{
		content: "";
		display: block;
		clear: both;
	}
	.productLi{
		float: left;
		margin-top: 12px;
		margin-right: 22px;
	}
	
	/*页码部分*/
	/*.group_l:after{
		content: "";
		display: block;
		clear: both;
	}*/
	.gp_page{
			font-size: 15px;
			margin-top:40px;
			padding-bottom: 20px;
	/*		background:hotpink !important;*/
			text-align: center;
			height: 60px;
			float: left;
			width: 712px;
			z-index: 1000;
			
		}
		.gp_page a {
			text-decoration: none;
			color: green;
			padding: 0px 7px;
			margin-left: 15px;
			border: 1px solid grey;
			border-radius: 50%;
			font-weight: 800;
		}
		.gp_page a.cur{
			color: white !important;
			background: red;
		}
	
	
	/**/
</style>