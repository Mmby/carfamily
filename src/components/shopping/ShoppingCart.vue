<template>
	<!--购物车页-->
	<div class="shopping">
		<!--上面的导航栏-->
		<div class="shopping_nav">
			<!--包含购物车,下一步消失-->
			<div class="shopnav_cart">
				<p>我的购物车</p>
				<div class="shopnav_progress">
					<progress max="100" value="5"></progress>
					<span>1/20</span>
				</div>
			</div>
			<!--箭头流程-->
			<ul class="shopnav_flow">
				<li>
					<div class="li1_block1">1.查看购物车</div>
					<div class="li1_block2"></div>
				</li>
				<li>
					<div class="li1_block1">2.选择支付方式</div>
					<div class="li1_block2"></div>
				</li>
				<li>
					<div class="li1_block1">3.购买成功</div>
				</li>
			</ul>
			<div class="shopping_nav_msg">
				现在<span>登录</span>, 你的购物车的商品将被永久保存
			</div>
		</div>
		<!--购物车项目-->
		<div class="shopping_project"> 
			<ul class="shopping_project_title">
				<li>项目</li>
				<li>状态</li>
				<li>类型/数量</li>
				<li>单价</li>
				<li>小计</li>
				<li></li>
			</ul>
			<!--下面均为购物车选项-->
			<ul class="shopping_list shopping_pro_bor">
				<li>
					<img src="../../assets/pp1.png"/>
					<div>
						第三带全时科技数字轿车, 全新奥迪7豪华版
					</div>
				</li>
				<li><span class="product_state">可购买</span></li>
				<li>
					<input type="number" min="1" placeholder="1"/>
				</li>
				<li>¥78</li>
				<li>¥78</li>
				<li><span class="product_del">删除</span></li>
			</ul>
			
			<!--代金券优惠-->
			<ul class="shopping_sp1 shopping_pro_bor shopping_li2">
				
				<li class="shopping_place"></li>
				<li class="shopping_place1">代金券</li>
				<li class="shopping_place2">-¥0</li>
				
			</ul>
			<!--应该付款总额-->
			<ul class="shopping_pro_bor shopping_li2">
				
				<li class="shopping_place"></li>
				
				<li class="shopping_place1">应付总额</li>
				<li class="shopping_place2"><span class="shopping_project_title_pri">¥30</span></li>
				
			</ul>
		</div>
		
		<!--提交订单按钮-->
		<button class="shopping_btn">提交订单</button>
	</div>
</template>

<script>
	export default {
		name:"shoppingCart",
		data(){
			return {

			}
		},
		methods:{
			
		}
	}
</script>

<style>
	.shopping{
		width: 975px;
		border: 1px solid #c6c6c6;
	}
	.shopping_nav{
		width: 100%;
		height: 131px;
		position: relative
	}
	.shopnav_cart{
		width: 285px;
		height: 131px;
		/*background: pink;*/
		/*display: inline-block;*/
		background-image: url(../../assets/shoppingcart.png);
		background-repeat: no-repeat;
		background-position: 28px 38px;
		/*position: relative;*/
		float: left;
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
	.li1_block2{
		width: 20px;
		height: 20px;
		/*background-color: #3b6bb1;*/
		background: #3b6bb1;
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
		z-index: 5;
		color: gray;
	}
	.shopnav_flow li:nth-child(2) .li1_block1,.shopnav_flow li:nth-child(3) .li1_block1{
		background-color: #ececec;
	}
	.shopnav_flow li:nth-child(2) .li1_block2{
		background-color: #ececec;
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
	
	.product_del{
		color: blue;
	}
	.shopping_project_title li:nth-child(1), .shopping_list li:nth-child(1){
		width: 264px;
	}
	.shopping_project_title li:nth-child(2), .shopping_list li:nth-child(2){
		width: 129px;
	}
	.shopping_project_title li:nth-child(3), .shopping_list li:nth-child(3){
		width: 169px;
	}
	.shopping_project_title li:nth-child(4), .shopping_list li:nth-child(4){
		width: 197px;
	}
	.shopping_project_title li:nth-child(5), .shopping_list li:nth-child(5){
		width: 107px;	
	}
	.shopping_project_title li:nth-child(6){
		width: 50px;
	}
	.shopping_project li{
		padding: 10px 0;
	
	}
	.shopping_project .shopping_list li:nth-child(1) img{
		width: 63px;
		height: 36px;
		display: inline-block;
	}
	.shopping_project .shopping_list li:nth-child(1) div{
		display: inline-block;
		width: 180px;
		font-size: 12px;
		line-height: 20px;
		text-align: left;
		color: #212121;
		margin-left: 2px;
	}
	.shopping_project .shopping_list li{
		font-size: 12px;
		line-height: 20px;
		color: #212121;
		text-align: center;
	}
	/*下边框*/
	.shopping_pro_bor{
		border-top: 1px solid #c5c5c5;
	}
	.shopping_project .shopping_sp1{
		font-size: 12px;
		line-height: 20px;
		color: #212121;
	}
	.shopping_project_title_pri{
		color: red;
		font-weight: 800;
	}
	/*为了让最后2行向右靠*/
	.shopping_place{
		width: 608px;
	}
	.shopping_place1{
		width: 120px;
		text-align: center;
	}
	.shopping_place2{
		width: 110px;
		text-align: right;
	}
	/*提交订单按钮*/
	.shopping_btn{
		margin: 30px 0 75px 850px;
		color: white;
		font-weight: 600;
		background-color: #3b6bb1;
		line-height: 33px;
		width: 96px;
		font-size: 14px;
		outline: none;
		border: none;
		border-radius: 4px;
	}
</style>