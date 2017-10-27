<template>
	<div class="m_mpayment">
		<div class="mpayment_cont">
			<h4>购买仅需3步</h4>
			<img src="../../assets/order/buzou.png" alt="" class="step_img"/>
			<div class="mpayment_cont_descr">
				<p>项目名称:立水桥4S店 -1张，赠送食品优惠券，节假日通用</p>
				<p>商品数量: 1</p>
				<p>您的手机: 团购成功后，车族卷密码将发送到手机: <span>136****9712</span>，凭车族卷密码去商家消费。</p>
			</div>
			<h4 class="mtitle">总付金额 <em class="mshow_money">¥ 30</em></h4>
			<img src="../../assets/order/zhifufangshi.png" class="m_pay_style"/>
			<div class="mpayment_cont_bottom">
				<p class="pay">支付 <em> ¥ 30</em></p>
				<button class="pay_btn">去付款</button>
				<span class="m_return">返回修改订单</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Mpayment"
	}
</script>

<style>
	.m_mpayment {
		width: 977px;
		height: 511px;
		margin: auto;
	}
	.m_mpayment .mpayment_cont {
		width: 718px;
		height: 511px;
		background-color: #ffF;
		border: 1px solid #C5C5C5;
	}
	.m_mpayment .mpayment_cont h4 {
		padding: 25px 0 12px 28px;
		font-size: 16px;
		color: #535455;
	}
	.m_mpayment .mpayment_cont .step_img {
		margin-left: 28px;
	}
	.m_mpayment .mpayment_cont .mpayment_cont_descr {
		margin: 36px 0 0 28px;
		font-size: 14px;
	}
	.m_mpayment .mpayment_cont .mpayment_cont_descr p {
		margin: 6px 0;
	}
	.m_mpayment .mpayment_cont .mtitle {
		font-size: 16px;
		color: #000;
		font-weight: 500;
		padding:  6px 0 0 28px;
	}
	.m_mpayment .mpayment_cont .mtitle .mshow_money {
		font-style: normal;
		color: #dc0404;
		font-weight: 700;
	}
	.m_mpayment .mpayment_cont .m_pay_style {
		margin: 22px 0 0 28px;
		cursor: pointer;
	}
	.m_mpayment .mpayment_cont .mpayment_cont_bottom {
		margin: 18px 0 0 560px;
		text-align: center;
	}
	.m_mpayment .mpayment_cont .mpayment_cont_bottom .pay {
		font-size: 16px;
		font-weight: 600;
	}
	.m_mpayment .mpayment_cont .mpayment_cont_bottom .pay  em {
		font-style: normal;
		color: #dc0404;
	}
	.m_mpayment .mpayment_cont .mpayment_cont_bottom .pay_btn {
		width: 94px;
		height: 42px;
		background-color: #3b6bb1;
		color: #fff;
		outline: none;
		margin: 16px 0;
	}
	.m_mpayment .mpayment_cont .mpayment_cont_bottom .m_return {
		display: block;
		color: #3d76d6;
		font-size: 14px;
		cursor: pointer;
		
	}
</style>