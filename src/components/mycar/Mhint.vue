<template>
	<div class="m_hint">
		<div class="mhint_cont">
			<h4>小提示</h4>
			<p class="mtit">为什么使用过的订单仍然显示为"未使用"</p>
			<p class="mexplain">订单的使用状态更新可能会延迟，订单的真实使用状态以实际消费情况为准，敬请谅解</p>
			<p class="mt_tit">哪种订单可以评价？</p>
			<p class="mexplain">· 只有以消费的订单可以评价，评价可获赠积分!</p>
			<p class="mexplain">· 如果团购项目为优惠码，支付成功即可评价(建议消费后再评价)。</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Mhint"
	}
</script>

<style>
	.m_hint {
		width: 237px;
		height: 307px;
		background-color: white;
	}
	.m_hint .mhint_cont { 
		width: 237px;
		height: 307px;
		border: 1px solid #C5C5C5;
	}
	.m_hint .mhint_cont h4 {
		padding: 25px 14px;
		color: #53455;
		font-size: 16px;
		font-weight: 500;
	}
	.m_hint .mhint_cont .mtit {
		padding: 2px 18px;
		color: ##53455;
		font-size: 14px;
		font-weight: 500;
	}
	.m_hint .mhint_cont .mt_tit {
		padding: 2px 18px;
		color: ##53455;
		font-size: 14px;
		font-weight: 500;
		margin-top: 20px;
	}
	.m_hint .mhint_cont .mexplain {
		padding: 0 18px 0 17px;
		color: #6E6C6C;
		font-size: 12px;
	}
</style>