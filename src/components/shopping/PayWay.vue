<template>
	<!--购物车页-->
	<div class="shopping1">
	<div class="payway">
		<!--上面的导航栏-->
		<div class="shopping_nav">
			
			<!--箭头流程-->
			<ul class="shopnav_flow">
				<li>
					<div class="li1_block1">1.查看购物车</div>
					<div class="li1_block2"></div>
				</li>
				<li>
					<div class="li1_block1 bianhua2">2.选择支付方式</div>
					<div class="li1_block2 li1_block21"></div>
				</li>
				<li>
					<div class="li1_block1">3.购买成功</div>
				</li>
			</ul>
			
			
		</div>
		<div class="fukuan">
				你应付总金额为 ¥<span>{{zongjine}}</span>
		</div>
		
		<!--提交订单按钮-->
		<button class="shopping_btn goumai">点击购买</button>
		<!--右边-->
		
		
	</div>
		<div id="rightpay">
			<div class="mz_right_top"><mcarserve></mcarserve></div>
			<div class="mz_right_bottom"><mhint></mhint></div>
		</div>
	</div>
</template>

<script>
	import Mcarserve from '../mycar/Mycarserve'
	import Mhint from '../mycar/Mhint'
	export default {
		name:"shoppingCart",
		components:{
			Mhint,
			Mcarserve
		},
		data(){
			return {
				
				zongjine: window.sessionStorage.zongjine
			
			}
		},
		methods:{
			
		},
		mounted(){
			//点击购买
			var _this = this;
			$(".goumai").click(function(){
				//判断金额是否充足
				var ggg = parseFloat(_this.zongjine);
				var fff = parseFloat(window.sessionStorage.cunmoney);
				if(ggg> fff){
					alert("余额不足请充值")
					window.location.href = "/mycar/carbalance";
				}else{
					//购买成功
					window.location.href = "/paysuccess";
				}
			})
			
		}
	}
</script>

<style>
	/*后来添加*/
	.fukuan{
		font-size: 30px;
		
		/*background: gray;*/
		width: 380px;
		margin: 0 auto;
		margin-top: 50px;
	}
	.fukuan span{
		color: red;
	}
	/**/
	.shopping1{
		padding: 30px 0;
		width: 977px;
		margin: 0 auto;
	}
	.shopping1:after{
		content: "";
		display: block;
		clear: both;
	}
	.payway{
		width: 716px;
		border: 1px solid #c6c6c6;
		background: white;
		margin: 0 auto ;
		height: 580px;
		position: relative;
		float: left;
		
	}
	.shopping_nav{
		width: 100%;
		height: 60px;
		position: relative
	}
	
	.jiajian{
		font-size: 20px;
		font-weight: 700;
		display: inline-block;
		border: 1px solid gray;
		width: 20px;
	}
	.jiajian1{
		font-size: 14px;
		font-weight: 700;
		display: inline-block;
		border: 1px solid gray;
		width: 20px;
	}
	.shopnav_cart p{
		position: absolute;
		left: 102px;
		top: 45px;
		line-height: 23px;
		font-size: 23px;
		font-weight: 800;
	}
	.shopnav_progress{
		position: absolute;
		left: 104px;
		top: 70px;
	}
	.shopnav_progress progress{
		width: 90px;
	}
	.shopnav_progress span{
		font-size: 12px;
		color: #989898;
		
	}
	.shopnav_flow{
		width: 660px;
		height: 30px;
		position: relative;
		float: left;
		text-align: center;
		color: white;
		line-height: 30px;
		font-size: 14px;
		/*left: 285px;*/
		top: 37px;
		margin-left: 25px;
	}
	.shopping_nav_msg{
		position: absolute;
		left: 285px;
		top: 76px;
		font-size: 12px;
		color: gray;
	}
	.li1_block1{
		width: 222px;
		height: 30px;
		background-color: #3b6bb1;

	}
	.li1_block21{
		background-color: #3b6bb1 !important;
		z-index: 100;
	}
	.li1_block2{
		width: 20px;
		height: 21px;
		/*background-color: #3b6bb1;*/
		background: #ececec;
		position: absolute;
		transform: rotate(45deg);
		left: 212px;
		top: 4px;
		border-top: 1px solid white;
		border-right: 1px solid white;
		
	}
	.shopnav_flow li:first-child{
		position: absolute;
		/*后来需要修改的地方*/
		z-index: 10;
		
	}
	.shopnav_flow li:nth-child(2){
		position: absolute;
		left: 222px;
		z-index: 8;
		color: white;
	}
	.bianhua2{
		background-color: #3b6bb1 !important;
	}
	.shopnav_flow li:nth-child(1) .li1_block1,.shopnav_flow li:nth-child(3) .li1_block1{
		background-color: #ececec;
		color: gray;
	}
	.shopnav_flow li:nth-child(2) .li1_block2{
		background-color: #3b6bb1;
		
	}
	.shopnav_flow li:nth-child(3){
		position: absolute;
		left: 444px;
		color: gray;
	}
	.shopping_project_title{
		width: 916px;
		height: 40px;
		background-color: #f6f6f6;
		
	}
	
	
	.shopping_project ul li{
		display: inline-block;
	}
	.shopping_project{
		overflow: hidden;
		width: 916px;
		border: 1px solid #c5c5c5;
		margin-left: 28px;
	}
	.shopping_project_title li{
		/*float: left;*/
		display: inline-block;
/*		line-height: 33px;*/
/*		height: 33px;*/
		text-align: center;
	}
	

	
	/*提交订单按钮*/
	.shopping_btn{
		/*margin: 30px 0 75px 850px;*/
		color: white;
		font-weight: 600;
		background-color: #3b6bb1;
		line-height: 33px;
		width: 96px;
		font-size: 14px;
		outline: none;
		border: none;
		border-radius: 4px;
		position: absolute;
		right: 80px;
		bottom: 150px;
	}
	/*右边*/
	.mz_right_top {
		/*position: absolute;
		left: 736px;
		top: 0;*/
	}
	.mz_right_bottom {
		margin-top: 11px;
	}
	
	#rightpay{
		float: right;
		/*width: 250PX;*/
	}
</style>