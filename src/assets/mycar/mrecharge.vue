<template>
	<div class="m_mrecharge">
		<div class="mrecharge_cont">
				<div class="person_set">
					<span class="mword">充值</span>
					<span class="words">小提示: 账户充值，手机抢购更便捷!</span>
				</div>
				<div class="person_inftro">
					<span class="mbefore">充值金额</span>
					<input type="text" class=""/>
					<span class="money_hint">充值金额不能为空</span>
					<button class="myes_btn">确定,去付款</button>
					
				</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Mrecharge"
	}
</script>

<style>
	.m_mrecharge {
		width: 977px;
		height: 557px;
		margin: auto;
	}
	.m_mrecharge .mrecharge_cont {
		width: 718px;
		height: 557px;
		border: 1px solid #c5c5c5;
	}
	.m_mrecharge .mrecharge_cont .person_set {
		width: 660px;
		height: 35px;
		margin: 26px auto 0;
		border-bottom: 1px solid #C5C5C5;
	}
	.m_mrecharge .mrecharge_cont .person_set .mword {
		font-size: 25px;
		font-weight: 400;
	}
	.m_mrecharge .mrecharge_cont .person_set .words {
		font-size: 14px;
		padding-left: 10px;
	}
	.m_mrecharge .mrecharge_cont .person_inftro {
		width: 660px;
		height: 273px;
		margin: auto;
	}
	.m_mrecharge .mrecharge_cont .person_inftro .person_inftro_eval {
		font-size: 14px;
		color: #6e6e6e;
		line-height: 40px;
	}
</style>