<template>
	<div class="m_accountSet">
		<div class="account_cont">
			<div class="account_person">
				<div class="person_set">
					<span class="option_aft">基本信息</span>
					<span>邮件订阅</span>
					<span>收货地址</span>
				</div>
				<div class="person_inftro">
					<p>手机号: <span>186****9559</span><span class="m_phone_btn">更换</span></p>
					<p>邮&nbsp;&nbsp;&nbsp;&nbsp;箱: <span>biehongli@163.com</span><span class="m_yorn">未验证，<em class="m_eamil_btn">立即验证/修改邮箱</em></span></p>
					<p>用户名: <span>biehongli</span><span class="m_user_btn">修改</span></p>
					<p>密&nbsp;&nbsp;&nbsp;&nbsp;码: <span>******</span><span class="m_pass_btn">修改</span></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Accountset",
		mounted(){
			$(".person_set span").on("click",function() {
				$(this).addClass("option_aft").siblings().removeClass("option_aft")
			})
		}
	}
</script>

<style>
	@import url("../../css/public.css");
	.m_accountSet {
		width: 977px;
		height: 458px;
		margin: auto;
	}
	.m_accountSet .account_cont {
		width: 718px;
		height: 373px;
	}
	.m_accountSet .account_cont .account_person {
		width: 718px;
		height: 336px;
		border: 1px solid #c5c5c5;
	}
	.m_accountSet .account_cont .account_person .person_set {
		width: 660px;
		height: 35px;
		margin: 26px auto 0;
		border-bottom: 1px solid #C5C5C5;
	}
	.m_accountSet .account_cont .account_person .person_set span {
		padding: 5px;
		color: white;
		font-size: 12px;
		color: #1978cf;
		cursor: pointer;
	}
	.m_accountSet .account_cont .account_person .person_set .option_aft {
		background-color: #5a97d4;
		color: #fff;
		font-weight: 500;
	}
	.m_accountSet .account_cont .person_inftro {
		width: 660px;
		height: 273px;
		margin: auto;
	}
	.m_accountSet .account_cont .person_inftro p {
		margin-left: 39px;
		padding: 13px 0;
	}
	.m_accountSet .account_cont .person_inftro .m_phone_btn,.m_eamil_btn,.m_user_btn,.m_user_btn,.m_pass_btn {
		color: #1376ce;
		font-style: normal;
		cursor: pointer;
	}
	.m_accountSet .account_cont .person_inftro .m_phone_btn {
		margin-left: 70px;
	}
	.m_accountSet .account_cont .person_inftro .m_yorn {
		margin-left: 20px;
	}
	.m_accountSet .account_cont .person_inftro .m_user_btn {
		margin-left: 76px;
	}
	.m_accountSet .account_cont .person_inftro .m_pass_btn {
		margin-left: 98px;
	}
</style>