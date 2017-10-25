<template>
	<div class="m_mevaluationl">
		<div class="account_cont">
			<div class="account_person">
				<div class="person_set">
					<span class="option_aft">待评价</span>
					<span>已评价</span>
				</div>
				<div class="person_inftro">
					<p class="person_inftro_eval">您没有待评价的订单</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Mevaluationl",
		mounted(){
			$(".person_set span").on("click",function() {
				$(this).addClass("option_aft").siblings().removeClass("option_aft")
			})
		}
	}
</script>

<style>
	.m_mevaluationl {
		width: 977px;
		height: 557px;
		margin: auto;
	}
	.m_mevaluationl .account_cont {
		width: 718px;
		height: 557px;
	}
	.m_mevaluationl .account_cont .account_person {
		width: 718px;
		height: 557px;
		border: 1px solid #c5c5c5;
	}
	.m_mevaluationl .account_cont .account_person .person_set {
		width: 660px;
		height: 35px;
		margin: 26px auto 0;
		border-bottom: 1px solid #C5C5C5;
	}
	.m_mevaluationl .account_cont .account_person .person_set span {
		padding: 5px;
		color: white;
		font-size: 12px;
		color: #1978cf;
		cursor: pointer;
	}
	.m_mevaluationl .account_cont .account_person .person_set .option_aft {
		background-color: #5a97d4;
		color: #fff;
		font-weight: 500;
	}
	.m_mevaluationl .account_cont .person_inftro {
		width: 660px;
		height: 273px;
		margin: auto;
	}
	.m_mevaluationl .account_cont .person_inftro .person_inftro_eval {
		font-size: 14px;
		color: #6e6e6e;
		line-height: 40px;
	}
</style>