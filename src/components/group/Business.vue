<template>
	<div class="w_business">
		<div class="w_business_title">
			<span>商务合作</span>
			<span><img src="../../assets/icon/images/1-团购_2013.7.6(1)_06.jpg"/></span>
		</div>
		<div class="w_business_top">
			<span>团购让更多的人了解您的店</span>
		</div>
		<div class="w_business_center">
			<span>JOIN US</span>
		</div>
		<div class="w_business_bottom">
			<span>我们期待您的加盟</span>
		</div>
	</div>
</template>

<style>

	.w_business{
		width: 236px;
		height: 220px;
		background: white;
		border: 1px solid #c5c5c5;
		margin-top: 10px;
	}
	.w_business_title{
		font-size: 16px;
		font-weight: 800;
		margin-left: 15px;
		margin-top: 24px;
	}
	.w_business_title>span>img{
		margin-top: 8px;
		width: 220px;
	}
	.w_business_top{
		font-size: 12px;
		color:#737373;
		text-align: center;
		margin-top: 3px;
	}
	.w_business_center{
		font-size: 30px;
		text-align: center;
		color: #1b5495;
		font-weight: 800;
		/*-webkit-box-reflect:below -21px;*/
		-webkit-box-reflect:below -20px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.5, transparent), to(white));
	}
	.w_business_bottom{
		text-align: center;
		font-size: 18px;
		color: #8c8c8c;
	}
</style>

<script>
	export default {
		name:"Business"
}
</script>

