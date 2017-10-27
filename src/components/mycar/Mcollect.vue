<template>
	<div class="m_mcollect">
		<div class="mcollect_cont">
				<div class="person_set">
					<span>全部</span>
					<span>进行中团购</span>
					<span class="option_aft">已结束</span>
				</div>
				<div class="person_inftro">
					<p class="person_inftro_eval">您的收藏中没有进行的项目</p>
				</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Mcollect",
		mounted(){
			$(".person_set span").on("click",function() {
				$(this).addClass("option_aft").siblings().removeClass("option_aft");
			})
		}
	}
</script>

<style>
	.m_mcollect {
		width: 977px;
		height: 557px;
		margin: auto;
	}
	.m_mcollect .mcollect_cont {
		width: 718px;
		height: 557px;
	}
	.m_mcollect .mcollect_cont .person_set {
		width: 660px;
		height: 35px;
		margin: 26px auto 0;
		border-bottom: 1px solid #C5C5C5;
	}
	.m_mcollect .mcollect_cont .person_set span {
		padding: 5px;
		color: white;
		font-size: 12px;
		color: #1978cf;
		cursor: pointer;
	}
	.m_mcollect .mcollect_cont .person_set .option_aft {
		background-color: #5a97d4;
		color: #fff;
		font-weight: 500;
	}
	.m_mcollect .mcollect_cont .person_inftro {
		width: 660px;
		height: 273px;
		margin: auto;
	}
	.m_mcollect .mcollect_cont .person_inftro .person_inftro_eval {
		font-size: 14px;
		color: #6e6e6e;
		line-height: 40px;
	}
</style>