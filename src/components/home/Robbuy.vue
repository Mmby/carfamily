<template>
	<div class="robbuy">
		
		<div class="robbuy_top">
			<div class="robbuy_top_block"></div>
			<span class="robbuy_top_text1">限时抢购</span>
			<span class="robbuy_top_text2">更多>></span>
		</div>
		<!--循环数据-->
		<ul class="robbuy_bot">
			<li v-for="item in robbuyArr">
				<div class="robbuy_time">{{item.time}}</div>
				<img :src='item.oimg'/>
				<!--<img src="../../assets/promotion1.png"/>-->
				<div class="robbuy_bot_text">{{item.cont}}</div>
				<div class="robbuy_bot_price">
					<span class="robbuy_price1">门店价 &nbsp;
						<span  class="robbuy_price1_a">¥{{item.sPrice}}</span>
					</span>
					<span class="robbuy_price2">¥{{item.nprice}}</span>
				</div>
			</li>

		</ul>
		<div class="robbuy_more">
			<span>展开</span>
		</div>
	</div>
</template>

<script>
	import robbuy1 from '../../assets/robbuy1.png'
	import robbuy2 from '../../assets/robbuy2.png'
	import robbuy3 from '../../assets/robbuy3.png'
	import jiantou2 from '../../assets/jiantou2.png'
	import triangle1 from '../../assets/jiantou1.png'
		export default {
		name:"robbuy",
		data(){
			return {
				robbuyArr:[{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"17.8w",nprice:"15.8w",oimg:robbuy1,time:"抢购结束"},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"98.8w",nprice:"92.5w",oimg:robbuy2,time:"抢购结束"},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"11.2w",nprice:"9.5w",oimg:robbuy3,time:"抢购结束"},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"12.0w",nprice:"10.7w",oimg:robbuy1,time:"抢购结束"},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"12.6w",nprice:"11.1w",oimg:robbuy2,time:"抢购结束"},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"11.2w",nprice:"12w",oimg:robbuy3,time:"抢购结束"},{cont:"第三带全时科技数字轿车,全新奥迪7豪华版",sPrice:"11.2w",nprice:"10.8w",oimg:robbuy1,time:"抢购结束"}]
			}
		},
		mounted(){
			$(".robbuy_more span").click(function(){
				if($(".robbuy_more span").html() == "展开"){
					$(".robbuy_bot").css({height:"auto",overflow:"block"});
					$(".robbuy_more span").html("收起");
					$(".robbuy_more").css("background-image","url("+jiantou2+")");
				}else{
					$(".robbuy_bot").css({height:"206px",overflow:"hidden"});
					$(".robbuy_more span").html("展开")
					$(".robbuy_more").css("background-image","url("+triangle1+")")
				}
				
				
			})
		},
		methods:{
			
		},
		created:function(){

		}
	}
</script>

<style scoped>
	div,li,ul,span,img{
		margin: 0;
		padding: 0;
	}
	.robbuy_bot img{
		width: 167px;
		height: 94px;
	}
	.robbuy{
		width: 723px;
	}
	.robbuy_top{
		width: 722px;
		height: 43px;
		border: 1px solid #c5c5c5;
		background-color: #ffffff;
		border-left: none;
		position: relative;
		font-size: 16px;
		color: #213f7b;
		line-height: 43px;
		
		/*margin-bottom: 10px;*/
		
	}
	.robbuy_top_block{
		position: absolute;
		width: 4px;
		height: 43px;
		background: #213f7b;
		left: 0;
		top: 0;
		
	}
	.robbuy_bot_text:hover{
		color: #005ea7;
		text-decoration: underline;
	}
	.robbuy_top_text1{
		font-weight: 800;
		padding-left: 16px;
	}
	.robbuy_top_text2{
		padding-left: 575px;
		font-size: 13px;
	}
	ul,li{
		list-style: none;
	}
	.robbuy_bot{
		width: 729px;
		height: 206px;
		/*background: pink;*/
		overflow: hidden;
		font-size:13px;
		line-height: 20px;

	}
	.robbuy_bot li{
		/*width: 174px;*/
		width: 174px;
		height: 194px;
		margin-top: 10px;
		margin-right: 6px;
		border:1px solid #c5c5c5;
		background-color: #ffffff;
		display: inline-block;
		float: left;
		
	}
	.robbuy_bot:after{
		content:"";
		display: block;
		clear: both;
	}
	.robbuy_bot li img{
		margin: 3px;
	}
	.robbuy_bot_text{
		color: #565353;
		padding-left: 7px;
		padding-right: 7px;
		padding-top: 5px;
		
	}
	.robbuy_bot_price{
		padding-left: 7px;
	}
	.robbuy_price1{
		color:#8c8a8a;
	}
	.robbuy_price2{
		float: right;
		margin-right: 8px;
		color: #e40d1a;
		margin-left: 5px;
		font-size: 14px;
	}
	.robbuy_price1 .robbuy_price1_a{
		font-size: 10px !important;
		color: #8c8a8a;
	}
	.robbuy_more{
		height: 32px;
		width: 100%;
		background-image: url(../../assets/icon/triangle1.png);
		background-repeat: no-repeat;
		background-size: 15px;
		background-position: 701px 10px;
	}
	.robbuy_more span{
		font-size: 14px;
		line-height: 32px;
		float: right;
		padding-right: 25px;
	}
	/*抢购时间*/
	.robbuy_time{
		height: 23px;
		width: 100%;
		font-size: 12px;
		text-align: center;
		line-height: 23px;
		color: #999999;
	}
</style>