<template>
	<!--单个产品组件-->
	<div class="product">
		<div class="product_img">
			<img src="../../assets/group1.png" />
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
		<div class="product_look">去看看</div>
		<div class="product_buy">
			<span>16816</span>  已经购买
		</div>
	</div>
</template>
	export default {
		name:"product",
		data(){
			return {
				
			}
		},
		methods:{
			
		}
	}
<script>
</script>

<style>
	.product{
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
		color: #666666;
		position: absolute;
		left: 12px;
		top: 224px;
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
</style>