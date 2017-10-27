<template>
	<div class="m_mwithdrawal">
		<div class="mwithdrawal_cont">
				<div class="person_set">
					<span class="mword">提现</span>
				</div>
				<span class="m_cont_back">返回交易记录</span>
				<div class="person_inftro">
					<p>车族余额: <span >¥0</span></p>
					<p>不可提现: <span>¥0</span> <span class="m_remin">(此部分为充值卡或返利余额)</span></p>
					<p class="can_tx">可提现: <span class="can_money">¥0</span></p>
				</div>
				<img src="../../assets/order/txts.png" alt="" class="m_txts"/>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Mwithdrawal"
	}
</script>

<style>
	.m_mwithdrawal {
		width: 977px;
		height: 512px;
		margin: auto;
	}
	.m_mwithdrawal .mwithdrawal_cont {
		width: 718px;
		height: 512px;
		position: relative;
		background-color: #FFF;
	}
	.m_mwithdrawal .mwithdrawal_cont .person_set {
		width: 660px;
		height: 35px;
		margin: 30px auto 0;
		padding-bottom: 14px;
		border-bottom: 1px solid #C5C5C5;
	}
	.m_mwithdrawal .mwithdrawal_cont .person_set .mword {
		font-size: 25px;
		font-weight: 400;
	}
	.m_mwithdrawal .mwithdrawal_cont .person_set .words {
		font-size: 14px;
		padding-left: 10px;
	}
	.m_mwithdrawal .mwithdrawal_cont .m_cont_back {
		position: absolute;
		top: 54px;
		right: 36px;
		color: #3574d2;
		font-size: 14px;
		cursor: pointer;
		font-weight: 500;
	}
	.m_mwithdrawal .mwithdrawal_cont .person_inftro {
		font-size: 14px;
		padding: 20px 0 0 48px;
	}
	.m_mwithdrawal .mwithdrawal_cont .person_inftro p {
		padding: 3px 0;
	}
	.m_mwithdrawal .mwithdrawal_cont .person_inftro .m_remin {
		font-size: 12px;
		color: #999999;
		padding: 0 0 0 6px;
	}
	.m_mwithdrawal .mwithdrawal_cont .person_inftro  .can_tx {
		padding-left: 14px;
	}
	.m_mwithdrawal .mwithdrawal_cont .person_inftro .can_money {
		color: #d24248;
		font-weight: 600;
	}
	.m_mwithdrawal .mwithdrawal_cont .m_txts {
		padding-top: 66px;
	}
</style>