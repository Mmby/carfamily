<template>
	<div class="promotion">
		<div class="promotion_top">
			<div class="promotion_top_block"></div>
			<span class="promotion_top_text1">商家促销</span>
			<span class="promotion_top_text2">更多>></span>
		</div>
		<ul class="promotion_bot">
			<li v-for="item in promotionArr">
				<img :src='item.oimg'/>
				<!--<img src="../../assets/promotion1.png"/>-->
				<div class="promotion_bot_text">{{item.cont}}</div>
				<div class="promotion_bot_price">
					<span class="promotion_price1">门店价 &nbsp;
						<sapn  class="promotion_price1_a">¥{{item.sPrice}}</sapn>
					</span>
					<span class="promotion_price2">¥{{item.nprice}}</span>
				</div>
			</li>

		</ul>
		<div class="promotion_more">
			<span>展开</span>
		</div>
	</div>
</template>

<script>
	import promotion1 from '../../assets/promotion1.png'
	import promotion2 from '../../assets/promotion2.png'
	import promotion3 from '../../assets/promotion3.png'
	import triangle1 from '../../assets/jiantou1.png'
//	import triangle1 from '../../assets/icon/triangle1.png'
	import jiantou2 from '../../assets/jiantou2.png'
	export default {
		name:"addStore",
		data(){
			return {
				
				promotionArr:[{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"11.2w",nprice:"10.8w",oimg:promotion1},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"11.8w",nprice:"10.5w",oimg:promotion2},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"11.2w",nprice:"9.5w",oimg:promotion3},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"11.2w",nprice:"10.8w",oimg:promotion1},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"12.6w",nprice:"11.1w",oimg:promotion2},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"11.2w",nprice:"12w",oimg:promotion3},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"11.2w",nprice:"10.8w",oimg:promotion1},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"13.2w",nprice:"11w",oimg:promotion2},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"15.5w",nprice:"13.5w",oimg:promotion3},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"17.4w",nprice:"15.6w",oimg:promotion1},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"19.4w",nprice:"16.3w",oimg:promotion2},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"14.5w",nprice:"11.5w",oimg:promotion3},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"16.3w",nprice:"14.2w",oimg:promotion1},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"14.7w",nprice:"13.6w",oimg:promotion2},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"15.6w",nprice:"14.5w",oimg:promotion3}]
			}
		},
		mounted(){
			$(".promotion_more span").click(function(){
				if($(".promotion_more span").html() == "展开"){
					$(".promotion_bot").css({height:"auto",overflow:"block"});
					$(".promotion_more span").html("收起");
					$(".promotion_more").css("background-image","url("+jiantou2+")");
				}else{
					$(".promotion_bot").css({height:"370px",overflow:"hidden"});
					$(".promotion_more span").html("展开")
					$(".promotion_more").css("background-image","url("+triangle1+")")
				}
				
				
			})
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	div,li,ul,span,img{
		margin: 0;
		padding: 0;
	}
	.promotion_bot img{
		width: 167px;
		height: 94px;
	}
	.promotion{
		width: 723px;
		/*background: green;*/
		/*overflow: hidden;*/
	}
	.promotion_top{
		width: 721px;
		height: 43px;
		border: 1px solid #c5c5c5;
		/*background-color: #e9e9e9;*/
		border-left: none;
		position: relative;
		font-size: 16px;
		color: #213f7b;
		line-height: 43px;
		background: #ffffff;
		/*margin-bottom: 10px;*/
		
	}
	.promotion_top_block{
		position: absolute;
		width: 4px;
		height: 43px;
		background: #213f7b;
		left: 0;
		top: 0;
		
		
	}
	.promotion_top_text1{
		font-weight: 800;
		padding-left: 16px;
	}
	.promotion_top_text2{
		padding-left: 575px;
		font-size: 13px;
	}
	ul,li{
		list-style: none;
	}
	.promotion_bot{
		width: 729px;
		height: 370px;
		/*background: pink;*/
		overflow: hidden;
		font-size:13px;
		line-height: 20px;

	}
	.promotion_bot li{
		background: #ffffff;
		width: 174px;
		height: 171px;
		margin-top: 10px;
		margin-right: 6px;
		border:1px solid #c5c5c5;
		display: inline-block;
		float: left;
		
	}
	.promotion_bot:after{
		content:"";
		display: block;
		clear: both;
	}
	.promotion_bot li img{
		margin: 3px;
	}
	.promotion_bot_text{
		color: #565353;
		padding-left: 7px;
		padding-right: 7px;
		padding-top: 5px;
		
	}
	.promotion_bot_price{
		padding-left: 7px;
	}
	.promotion_price1{
		color:#8c8a8a;
	}
	.promotion_price2{
		float: right;
		margin-right: 8px;
		color: #e40d1a;
		margin-left: 5px;
		font-size: 14px;
	}
	.promotion_price1 .promotion_price1_a{
		font-size: 10px !important;
		color: #8c8a8a;
	}
	.promotion_more{
		height: 32px;
		width: 100%;
		background-image: url(../../assets/icon/triangle1.png);
		background-repeat: no-repeat;
		background-size: 15px;
		background-position: 701px 10px;
	}
	.promotion_more span{
		font-size: 14px;
		line-height: 32px;
		float: right;
		padding-right: 25px;
	}
	.promotion_bot_text:hover{
		color: #005ea7;
		text-decoration: underline;
	}
</style>