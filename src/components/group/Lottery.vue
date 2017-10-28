<template>
	<div class="w_lottery">
		<div class="w_lottery_img">
			<span><img src="../../assets/icon/images/图层 314.png"/></span>
			<span class="w_lottery_title">0元抽奖是真的吗?</span>
			<span class="w_lottery_link"><a href="/home/Lotterys">车族圆梦系列抽奖>></a></span>
		</div>
		<div class="w_lottery_bottom">
			<div>
				<span class="w_lottery_diamonds"></span>
				<span>北京运通嘉宝S4</span>
				<span><a href="#">抽奖结果</a></span>
			</div>
			<div>
				<span class="w_lottery_diamonds"></span>
				<span>博瑞祥云奥迪购车惠</span>
				<span class="w_lottery_hot">火爆进行中</span>
			</div>
			<div>
				<span class="w_lottery_diamonds"></span>
				<span>购BMW3系尊享万元开业礼</span>
				<span  class="w_lottery_hot">火爆进行中</span>
			</div>
		</div>
	</div>
</template>

<style>
	@import url("../../css/public.css");
	.w_lottery{
		width: 236px;
		height: 166px;
		background: white;
		border: 1px solid #c5c5c5;
	}
	.w_lottery_img{
		height:77px;
		width: 100%;
	}
	.w_lottery_img>span>img{
		margin-top: 15px;
		margin-left:6px;
	}
	.w_lottery_title{
		display: inline-block;
		font-size:15px;
		color: red;
		margin-top: 27px;
		font-weight: 600;
	}
	.w_lottery_link{
		display: inline-block;
		position:relative;
		left: 80px;
		top: -30px;
	}
	.w_lottery_link>a{
		display: inline-block;
		font-size: 12px;
		margin-top:7px;
		color: #096edf;
	}
	.w_lottery_bottom{
		font-size: 11px;
		padding-left: 11px;
		padding-top: 19px;
		/*background: powderblue;*/
	}
	.w_lottery_diamonds{
		display: inline-block;
		width: 4px;
		height: 4px;
		background: black;
	}
	.w_lottery_hot{
		color: red;
	}
</style>

<script>
	export default {
		name:"lottery"
}
</script>

