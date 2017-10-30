<template>
	<div class="m_mcarbalance">
		<div class="mcollect_cont">
				<div class="mcar_balance">
					<span class="mcar_balance_word">您当前的车族余额 : </span>
					<span class="mcar_balance_money">¥ 0</span>
					<router-link to="/mycar/recharge" class="mcar_balance_top">充值</router-link>
					<router-link to="/withdrawal" class="mcar_balance_deop">提现</router-link>
				</div>
				<div class="person_set">
					<span class="option_aft deals">交易记录</span>
					<span class="withs">提现记录</span>
				</div>
				<div class="person_inftro deal">
					<p class="person_inftro_eval">您还没有消费记录</p>
				</div>
				<div class="person_inftro with" style="display: none;">
					<img src="../../../static/rmbss.png" class="withimg"/>
					<p class="person_inftro_eval">您还没有提现记录</p>
				</div>
				
		</div>
	</div>
</template>

<script>
	export default {
		name:"Mcarbalance",
		mounted(){
			$(".person_set span").on("click",function() {
				$(this).addClass("option_aft").siblings().removeClass("option_aft");
			})
			$(".deals").on("click",function() {
				$(".deal").show();
				$(".with").hide();
			})
			$(".withs").on("click",function() {
				$(".deal").hide();
				$(".with").show();
			})
		}
	}
</script>

<style>
	.m_mcarbalance {
		width: 977px;
		height: 557px;
		margin: auto;
	}
	.m_mcarbalance .mcollect_cont {
		width: 718px;
		height: 557px;
	}
	.m_mcarbalance .mcollect_cont .mcar_balance {
		padding: 30px 0 5px 0;
		font-size: 0;
	}
	.m_mcarbalance .mcollect_cont .mcar_balance .mcar_balance_word {
		font-size: 14px;
		color: #000;
		font-weight: 300;
		margin-left: 30px;
	}
	.m_mcarbalance .mcollect_cont .mcar_balance .mcar_balance_money {
		color: #c8161d;
		font-size: 20px;
		font-weight: bold;
	}
	.m_mcarbalance .mcollect_cont .mcar_balance .mcar_balance_top {
		width: 62px;
		height: 30px;
		font-size: 14px;
		padding: 5px 20px;
		border-radius: 5px;
		margin: 0 7px;
		outline: none;
		border-width: 1;
		background-color: #3b6bb1;
		color: #fff;
	}
	.m_mcarbalance .mcollect_cont .mcar_balance .mcar_balance_deop {
		width: 62px;
		height: 30px;
		padding: 5px 20px;
		font-size: 14px;
		margin: 0 7px;
		outline: none;
		border-width: 1;
		border-radius: 5px;
		background-color: #f2f2f2;
		color: #000;
	}
	.m_mcarbalance .mcollect_cont .person_set {
		width: 660px;
		height: 35px;
		margin: 26px auto 0;
		border-bottom: 1px solid #C5C5C5;
	}
	.m_mcarbalance .mcollect_cont .person_set span {
		padding: 5px;
		color: white;
		font-size: 12px;
		color: #1978cf;
		cursor: pointer;
	}
	.m_mcarbalance .mcollect_cont .person_set .option_aft {
		background-color: #5a97d4;
		color: #fff;
		font-weight: 500;
	}
	.m_mcarbalance .mcollect_cont .person_inftro {
		width: 660px;
		height: 273px;
		margin: auto;
	}
	.m_mcarbalance .mcollect_cont .person_inftro .withimg {
		padding-top: 22px;
	}
	.m_mcarbalance .mcollect_cont .person_inftro .person_inftro_eval {
		font-size: 14px;
		color: #6e6e6e;
		line-height: 40px;
	}
</style>