<template>
	<div class="m_mcollectall">
		<div class="mcollectall_cont">
				<div class="person_set">
					<span class="option_aft">全部</span>
					<span>进行中团购</span>
					<span>已结束</span>
				</div>
				<div class="person_inftro">
					<p class="person_inftro_eval">您还没收藏过呢，现在可以在详情页直接收藏项目啦!</p>
					<img src="../../assets/order/shoucang.png"  class="eval_img"/>
				</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Mcollectall",
		mounted(){
			$(".person_set span").on("click",function() {
				$(this).addClass("option_aft").siblings().removeClass("option_aft");
			})
		}
	}
</script>

<style>
	.m_mcollectall {
		width: 977px;
		height: 557px;
		margin: auto;
	}
	.m_mcollectall .mcollectall_cont {
		width: 718px;
		height: 557px;
		border: 1px solid #c5c5c5;
	}
	.m_mcollectall .mcollectall_cont .person_set {
		width: 660px;
		height: 35px;
		margin: 26px auto 0;
		border-bottom: 1px solid #C5C5C5;
	}
	.m_mcollectall .mcollectall_cont .person_set span {
		padding: 5px;
		color: white;
		font-size: 12px;
		color: #1978cf;
		cursor: pointer;
	}
	.m_mcollectall .mcollectall_cont .person_set .option_aft {
		background-color: #5a97d4;
		color: #fff;
		font-weight: 500;
	}
	.m_mcollectall .mcollectall_cont .person_inftro {
		width: 660px;
		height: 273px;
		margin: auto;
	}
	.m_mcollectall .mcollectall_cont .person_inftro .person_inftro_eval {
		font-size: 14px;
		color: #6e6e6e;
		line-height: 56px;
	}
	.m_mcollectall .mcollectall_cont .person_inftro .eval_img {
		margin: 20px 0 0 72px;
	}
</style>