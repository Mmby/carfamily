<template>
	<div class="w_detailpage">
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
		name: 'Detailpage'
	}
</script>

<style>
	.w_detailpage {
		width: 977px;
		margin: auto;
	}
	
	.w_detailpage_cont {
		width: 719px;
		height: 200px;
		/*background: red;*/
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
</style>