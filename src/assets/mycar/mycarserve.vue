<template>
	<div class="m_mycarServe">
		<div class="mycarServe_cont">
			<h4>车族客服</h4>
			<p class="carcont_phone">4006-630-636</p>
			<p class="carcont_time">工作时间:每日9:00-21:00</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Mcarserve"
	}
</script>

<style>
	@import url("../../css/public.css");
	.m_mycarServe {
		width: 239px;
		height: 140px;
	}
	.m_mycarServe .mycarServe_cont {
		width: 239px;
		height: 140px;
		border: 1px solid #C5C5C5;
	}
	.m_mycarServe .mycarServe_cont h4 {
		font-size: 16px;
		color: #535455;
		padding: 25px 15px 20px 15px;
		font-weight: 500;
	}
	.m_mycarServe .mycarServe_cont .carcont_phone {
		width: 214px;
		color: #004783;
		text-align: right;
		font-size: 25px;
		font-weight: bold;
		background: url(../../assets/register/phone2.png) no-repeat 18px 4px;
	}
	.m_mycarServe .mycarServe_cont .carcont_time {
		color: #6e6c6c;
		font-size: 12px;
		margin-left: 19px;
	}
</style>