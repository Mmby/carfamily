<template>
	<div class="w_detailpage">
		
		
		<!--后来添加的页面头部信息-->
		
		
		<!--上面的商品详情-->
		<div class="w_detailpage_particulars">
			
			
			<div class="productaa1 productLi1">
					<ul class="product_price1">
						<li>¥{{bjiage2}}</li>
						<li>门店价: <span>¥{{bjiage1}}</span></li>
					</ul>
					<div class="product_patch11"></div>
					<div class="product_patch21"><span></span></div>
					<div class="product_patch31"></div>
					<div class="product_patch41"></div>
				
					
			</div>
			<span class="w_detailpage_taiping">{{bname}}</span>
			<span class="w_detailpage_cost">{{bintro}}</span>
			<div class="w_detailpage_rush">
				<div class="w_detailpage_rush_tit">
					<input class="w_detailpage_purchase" type="button" value="抢购" />
					<input class="w_detailpage_jion" type="button"  value="加入购物车" />
				</div>
				<div class="w_detailpage_rush_center">
					<span class="w_detailpage_rush_count"><a href="###">{{bhasbuy}}</a>人已购买</span>
					<span>剩余3天以上</span>
				</div>
				<div class="w_detailpage_rush_Img">
						<span id=""><img src="../../../static/支持图标.png"/></span>
				</div>				
			</div>
			<!--../../../static/图层 372.png-->
			<img class="w_detailpage_car" :src="bimg"/>
			
			
			
		</div>
		
		
		
		<!--后来添加信息结束部分-->
		<div class="w_detailpage_cont">
			<div class="w_detailpage_cont_titile">
				<span class="w_detailpage_vip">会员评分:</span>
				<span class="w_detailpage_grade">4.7&nbsp;⭐⭐⭐⭐</span>
				<span class="w_detailpage_three">已有3人评价</span>
				<span class="w_detailpage_evaluate"><a href="###">查看全部评价</a></span>
			</div>
			<div class="w_detail_detail">
				<div class="w_detail_options">
					<span class="w_detail_opti">商家位置</span>
					<span class="w_detail_opti">本单详情</span>
					<span class="w_detail_new">消费评价(<span>55</span>)<img src="../../assets/icon/NEW.png" /></span>
					<span class="w_detail_opti">我要提问(<span>10</span>条)</span>
				</div>
				<div class="w_detail_adv">
					<img src="../../assets/icon/图层 385.png" />
				</div>
				<div class="w_detail_place">
					<span class="w_place_title">商家位置</span>
						<img class="w_place_discount" src="../../assets/icon/2--团购子页_本单详情地图_01_03.jpg" />
						<div class="w_place_detail">
							<span class="w_place_shop">2店通用(太平庄店)</span>
							<span class="w_place_level">商家星级:&nbsp;&nbsp;⭐️⭐⭐⭐</span>
							<span class="w_place_minute">地址:丰台区南四环中路肖村桥西500米</span>
							<span class="w_place_minute">010-8400000</span>
							<span class="w_place_minute"><a href="###">查看地图>></a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="###">驾车路线>></a></span>
							<span class="w_place_4s">4s店通用(立水桥店)</span>
							<span class="w_place_4s">门店通用(东莞店)</span>
						</div>
				</div>
				<div class="">
					<img src="../../assets/icon/images/2--团购子页_本单详情截图_03.jpg"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Detailpage',
		data(){
			return {
				bjiage2:window.sessionStorage.bjiage2,
				bjiage1:window.sessionStorage.bjiage1,
				bname:window.sessionStorage.bname,
				bintro:window.sessionStorage.bintro,
				bhasbuy:window.sessionStorage.bhasbuy,
				bimg:window.sessionStorage.bimg
			}
		},
		mounted(){
			var _this = this;
			
			//点击抢购进入购买页面
			$(".w_detailpage_purchase").click(function(){
				_this.$router.replace({ path: '/shoppingcart' })
			})
			
		}
	}
</script>

<style>
	.w_detailpage {
		width: 977px;
		margin:0 auto;
	}
	
	/*后面添加的样式*/
	/*复制过来的样式*/
	.productaa1{
		background: transparent;
		width: 344px;
		height: 157px;
		/*border: 1px solid #c5c5c5;*/
		position: absolute;
		z-index: 1000;
		top: 86px;
		left: 0;
		
	}
	.product_price1{
		position: absolute;
		width: 206px;
		height: 61px;
		top: 75px;
		left: -1px;
		background-color: #e3e3e3;
		border-top: 1px solid #b8b8b8;
		border-bottom: 1px solid #b8b8b8;
	}
	/*突出的块*/
	.product_patch11{
		position: absolute;
		left: -7px;
		bottom: 19px;
		width: 7px;
		height: 61px;
		background-color: #e3e3e3;
		border-left: 1px solid #b8b8b8;
		border-bottom: 1px solid #b8b8b8;
		border-bottom-left-radius: 3px;
		z-index: 100;
	}
	.product_patch21{
		position: absolute;
		right: 0;
		bottom: 0;
		width: 0;
		height: 0;
		left: -7px;
		top: 72px;
		border-top: 5px solid #e3e3e3;
		border-left: 5px solid transparent;
		border-right: 5px solid transparent;
		transform: rotate(-45deg);
		z-index: 100;
	}
	.product_patch21 span{
		display: inline-block;
		position: absolute;
		width: 9px;
		height: 1px;
		background: #b8b8b8;
		top: -5px;
		left: -5px;
		z-index: 100;
		
	}
	.product_patch41{
		position: absolute;
		bottom: 40px;
		left: 180px;
		transform: rotate(-30deg);
		width: 35px;
		height: 35px;
		background: #e3e3e3;
		border-right: 1px solid #b8b8b8;
		z-index: 100;
	}
	.product_patch31{
		position: absolute;
		bottom: 26px;
		left: 180px;
		transform: rotate(30deg);
		width: 35px;
		height: 35px;
		background: #e3e3e3;
		border-right: 1px solid #b8b8b8;
		z-index: 100;
	}
	.product_price1 li:first-child{
		letter-spacing: 2px;
		color: #e40d1a;
		font-weight:900;
		font-size: 35px;
		position: absolute;
		left: 7px;
		top: 20px;
		line-height: 24px;
	}
	.product_price1 li:last-child{
		font-size: 14px;
		line-height: 14px;
		color: #989c9c;
		position: absolute;
		left: 116px;
		top: 29px;	
		z-index: 1000;
	}
	.product_price1 li:last-child span{
		text-indent: 2px;
		font-size: 12px;
		z-index: 1000;
	}
	
	/*复制过来样式的结束位置*/
	
	/*添加样式结束位置*/
	
	
	
	.w_detailpage_cont {
		width: 719px;
		/*height: 200px;*/
		/*background: red;*/
		z-index: 5;
	}
	
	.w_detailpage_cont_titile {
		width: 717px;
		height: 62px;
		background: #ffffff;
		border: 1px solid #c5c5c5;
		line-height: 62px;
		font-size: 14px;
	}
	
	.w_detailpage_vip {
		margin-left: 16px;
	}
	
	.w_detailpage_grade {
		font-size: 16px;
		color: red;
		font-weight: 800;
		margin-left: 38px;
	}
	
	.w_detailpage_three {
		margin-left: 34px;
	}
	
	.w_detailpage_evaluate {
		margin-left: 286px;
		position: absolute;
	}
	
	.w_detailpage_evaluate>a {
		color: #1b4fb7;
	}
	/*详情信息*/
	
	.w_detail_detail {
		width: 717px;
		margin-top: 14px;
		/*background:#f6f6f6;*/
		background: white;
		border: 1px solid #c5c5c5;
	}
	
	.w_detail_new {
		background: #fdfdfd;
		font-size: 12px;
		padding: 12px 10px;
	}
	
	.w_detail_options {
		background: #f6f6f6;
		border-bottom: 1px solid #e0e0e0;
	}
	
	.w_detail_opti {
		display: inline-block;
		padding: 13px 9px;
		border-right: 1px solid #e0e0e0;
		font-size: 12px;
	}
	
	.w_detail_adv {
		text-align: center;
		margin-top: 20px;
	}
	/*商家位置*/
	
	.w_detail_place {
		width: 684px;
		margin: auto;
		height: 353px;
		margin-top: 14px;
		background:#FAFAFA;
	}
	
	.w_place_title {
		display: block;
		background: #3071b9;
		color: white;
		font-size: 16px;
		text-indent: 8px;
		font-weight: 800;
		height: 37px;
		line-height: 37px;
	}
	
	.w_place_discount {
		width: 310px;
		margin-left: 30px;
		margin-top: 20px;
	}
	/*详细信息*/
	
	.w_place_detail {
		width: 310px;
		height: 250px;
		background: white;
		float: right;
		margin-top: 20px;
		margin-right: 15px;
		/*padding: 10px;*/
	}
	
	.w_place_shop {
		margin-top: 10px;
		margin-left: 10px;
		display: block;
		color: #1b4fb7;
		font-size: 14px;
		font-weight: 800;
	}
	.w_place_level {
		display: block;
		font-size: 12px;
		margin-top: 20px;
		margin-left: 10px;
	}
	.w_place_minute {
		display: block;
		font-size: 12px;
		margin-top: 11px;
		margin-left: 10px;
	}
	.w_place_minute>a {
		color: #1b4fb7;
	}
	.w_place_4s{
		display: block;
		background:#FAFAFA;
		font-size: 14px;
		line-height:50px;
		text-indent: 10px;
		border-bottom:1px solid #eeeeee;
		color: #1b4fb7;
		font-weight: 800;
	}
	.w_detailpage:after{
		content: "";
		display: block;
		clear: both;	
	}
	.w_detailpage_particulars{
		width: 685px;
		height: 407px;
		background:white;
		border: 1px solid #c5c5c5;
		padding: 32px 15px 10px 17px;
		position: relative;
	}
	.w_detailpage_taiping{
		display: block;
		font-size: 30px;
		font-weight: 800;
	}
	.w_detailpage_cost{
		font-size: 22px;
		margin-left: 12px;
		color: #777777;
	}
	.w_detailpage_rush{
		width: 215px;
		height: 218px;
		background:#eeeeee;
		margin-top: 60px;
		border: 1px solid #c5c5c5;
	}
	.w_detailpage_rush_tit{
		padding: 36px 12px 14px 12px;
	}
	.w_detailpage_purchase{
		width: 85px;
		height: 40px;
		background: #213f7b;
		color: white;
		font-weight: 800;
		margin-right: 12px;
	}
	.w_detailpage_jion{
		width: 85px;
		height: 40px;
		background: white;
		color: #666666;
	}
	.w_detailpage_rush_center{
		border-top: 1px solid #d0cfcf;
		border-bottom: 1px solid #d0cfcf ;
		margin-top: 13px;
		text-align: center;
		font-size: 12px;
	}
	.w_detailpage_rush_count{
		font-size: 14px;
		display: block;
		text-align: center;
		padding: 12px 40px;
	}
	.w_detailpage_rush_count>a{
		color: red;
		font-weight: 800;
		font-size: 14px;
	}
 	.w_detailpage_rush_Img{
 		text-align: center;
 		padding: 9px;
 	}
 	.w_detailpage_car{
 		width:459px;
 		position: absolute;
 		top: 160px;
 		left: 240px;
 	}
</style>