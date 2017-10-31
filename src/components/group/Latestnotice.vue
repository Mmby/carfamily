<template>
	<div class="w_latestnotice">
		<span class="w_latestnotice_title">最新通知</span>
		<div class="w_latestnotice_top">
			<span class="w_latestnotice_roundel"></span><span>
				可以在线申请七天退款了! <a href="###">详情</a></span>
		</div>
		<div class="w_latestnotice_center">
			<span class="w_latestnotice_roundel"></span>
			<span>
				<a href="###3">立即充值</a>,手机抢购更方便!
			</span>
		</div>
		<div class="w_latestnotice_center">
			<span class="w_latestnotice_roundel"></span>
			<span>最新<a href="###">媒体报道</a>
			</span>
		</div>
	</div>
</template>

<style>
	
	.w_latestnotice{
		width: 236px;
		height: 155px;
		background: white;
		border: 1px solid #c5c5c5;
		margin-top: 10px;
		padding-top: 24px;
		padding-bottom: 22px;
	}
	.w_latestnotice_title{
		font-size: 16px;
		font-weight: 600;
		margin-left: 15px;
	}
	.w_latestnotice_top{
		margin-top: 27px;
		line-height: 27px;
		margin-left: 15px;
		font-size: 14px;
	}
	.w_latestnotice_top>span>a,.w_latestnotice_center>span>a{
		color: #096edf;
	}
	.w_latestnotice_center{
		line-height: 27px;
		margin-left: 15px;
		font-size: 14px;
	}
	.w_latestnotice_buttom{
		
	}
	.w_latestnotice_roundel{
		display: inline-block;
		width: 6px;
		height: 6px;
		background: #5e5b5b;
		border-radius:50% ;
		margin-top: 5px;	
	}
</style>

<script>
	export default {
		name:"Latestnotice"
}
</script>

