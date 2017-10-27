<template>
	<div class="m_accountSet">
		<div class="account_cont">
			<div class="account_person">
				<div class="person_set">
					<span class="option_aft jbxx">基本信息</span>
					<span class="yjdy">邮件订阅</span>
					<span class="shdz">收货地址</span>
				</div>
				<!--基本信息-->
				<div class="person_inftro">
					<p>手机号: <span>186****9559</span><span class="m_phone_btn">更换</span></p>
					<p>邮&nbsp;&nbsp;&nbsp;&nbsp;箱: <span>biehongli@163.com</span><span class="m_yorn">未验证，<em class="m_eamil_btn">立即验证/修改邮箱</em></span></p>
					<p>用户名: <span>biehongli</span><span class="m_user_btn">修改</span></p>
					<p>密&nbsp;&nbsp;&nbsp;&nbsp;码: <span>******</span><span class="m_pass_btn">修改</span></p>
				</div>
				<!--邮箱订阅设置-->
				<div class="em_sets" style="display: none;">
					<div class="sets_top"><input type="radio" name="1" class="top_inp" checked/>按以下方式接收邮件</div>
					<div class="user_email">接收邮箱: <span class="us_em">czhang@icarzoo.com</span></div>
					<div class="em_fre">邮件频率<input type="radio" name="2"/><span>每天1封</span><input type="radio" name="2"/><span>每周1封</span><input type="radio" name="2"/><span>每月2封</span></div>
					<div class="sets_no"><input type="radio" name="1" class="no_inp"/>我不想接收任何邮件</div>
					<div class="sets_btn"><button class="sbc_btn">保存</button></div>
				</div>
				<!--收货地址-->
				<div class="m_Shipping" style="display: none;">
					<div class="add_address">
						<span style="cursor: pointer;" class="tjxdz">添加新地址</span>
					</div>
					<div class="address_list" style="display: none;">
						<div class="m_district"><span class="m_red">*</span> 所在地区:<v-distpicker class='m_add_list'></v-distpicker></div>
						<div class="m_street"><span class="m_red">*</span> 街道地址:<input type="text" class="street_input"/></div>
						<div class="m_postal"><span class="m_red">*</span> 邮政编码:<input type="" class="postal_input"/><a href="http://http://www.yb21.cn/" class="m_cx">邮编查询>></a></div>
						<div class="m_name"><span class="m_red">*</span> 收货人姓名:<input type="" class="name_input"/></div>
						<div class="m_phone"><span class="m_red">*</span> 电话号码:<input type="text" class="phone_input"/></div>
						<div class="m_btn"><button class="bc_btn">保存</button><span class="qx">取消</span></div>
					</div>
				</div>
			</div>
			
			<!--更换手机号-->
			<div class="change_mob">
				<div class="m_alert_top">
					<p class="m_remove_top">更换手机号</p><span class="m_remove_close">╳</span>
				</div>
		        <p class="mc_mob"><span>更换手机号 </span><input type="text" class="mob_input"/></p>
		        <p class="mc_neb"><span>新手机号 </span><input type="text" class="neb_input"/></p>
		        	<p class="mc_btn"><button class="hq_btn">获取验证码</button><span class="btn_ts">(将发送到新手机上)</span></p>
		        	<p class="mc_code"><span class="word">验证码 </span><input type="text" class="code_input"/></p>
		        	<span class="mc_notice">注意: 绑定新手机号将会清空所有已绑定的手机号哦</span>
		        <p class="mc_bot"><button class="bot_btn">绑定</button><span class="bot_qx">取消</span></p>
			</div>
			<!--更换用户名-->
			<div class="change_name">
				<div class="m_alert_top">
					<p class="m_remove_top">修改用户名</p><span class="m_remove_close">╳</span>
				</div>
				<p class="cn_dqm">当前用户名<span class="dqm_name">biehongli</span></p>
				<p class="cn_xin">新的用户名<input type="text" class="xin_input"/></p>
				<p class="xin_ts">以中文或英文字母开头，限4-15个字符，一个汉字为两个字符</p>
				<p class="mc_bot"><button class="bot_btn">绑定</button><span class="bot_qx">取消</span></p>
			</div>
			<!--修改密码-->
			<div class="change_pass">
				<div class="m_alert_top">
					<p class="m_remove_top">修改密码</p><span class="m_remove_close">╳</span>
				</div>
				<p class="cp_dqm">当前密码<input type="text" class="dam_input"/></p>
				<p class="cp_qrm">确认密码<input type="text" class="qrm_input"/></p>
				<p class="cp_ts">新密码至少6个字符，最多32个字符</p>
				<p class="cp_xmm">密码<input type="text" class="xmm_input"/></p>
				<p class="mc_bot"><button class="bot_btn">绑定</button><span class="bot_qx">取消</span></p>
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
			//收货地址设置
			$(".shdz").on("click",function() {
				$(".m_Shipping").show();
				$(".person_inftro").hide();
				$(".em_sets").hide();
				$(".change_mob").hide();
				$(".change_name").hide();
				$(".change_pass").hide();
				$(".tjxdz").on("click",function() {
					$(".address_list").show();
					$(this).css("color","#666666");
				})
				$(".qx").on("click",function() {
					$(".address_list").hide();
					$(".tjxdz").css("color","#1978cf");
				})
			})
			$(".yjdy").on("click",function() {
				$(".em_sets").show();
				$(".m_Shipping").hide();
				$(".person_inftro").hide();
				$(".change_mob").hide();
				$(".change_name").hide();
				$(".change_pass").hide();
			})
			$(".sbc_btn").on("click",function() {
					alert("保存成功");
				})
			$(".jbxx").on("click",function() {
				$(".m_Shipping").hide();
				$(".person_inftro").show();
				$(".em_sets").hide();
			})
			//更改手机号
			$(".m_phone_btn").on("click",function() {
				$(".change_mob").show();
			})
			$('.m_remove_close').on("click",function() {
				$(".change_mob").hide();
			})
			$(".bot_qx").on("click",function() {
				$(".change_mob").hide();
			})
			//更改用户名
			$(".m_user_btn").on("click",function() {
				$(".change_name").show();
			})
			$(".m_remove_close").on("click",function() {
				$(".change_name").hide();
			})
			$(".bot_qx").on("click",function() {
				$(".change_name").hide();
			})
			//修改密码
			$(".m_pass_btn").on("click",function() {
				$(".change_pass").show();
			})
			$(".m_remove_close").on("click",function() {
				$(".change_pass").hide();
			})
			$(".bot_qx").on("click",function() {
				$(".change_pass").hide();
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
		position: relative;
	}
	.m_accountSet .account_cont .account_person {
		width: 718px;
		height: 336px;
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
	/*基本信息*/
	.m_accountSet .account_cont .person_inftro {
		width: 660px;
		height: 273px;
		margin: auto;
		display: none;
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
	/*邮箱订阅设置*/
	.m_accountSet .account_cont .account_person .em_sets {
		width: 660px;
		margin: auto;
		font-size: 14px;
	}
	.m_accountSet .account_cont .account_person .em_sets .sets_top {
		padding: 26px 0 13px 4px;
	}
	.m_accountSet .account_cont .account_person .em_sets .user_email,.em_fre {
		padding: 13px 0 13px 48px;
	}
	.m_accountSet .account_cont .account_person .em_sets .em_fre input {
		margin-left: 20px;
	}
	.m_accountSet .account_cont .account_person .em_sets .sets_no {
		padding: 13px 0 13px 4px;
	}
	.m_accountSet .account_cont .account_person .em_sets .sbc_btn {
		width: 60px;
		height: 30px;
		background-color: #346aee;
		color: #fff;
		font-size: 16px;
		margin: 13px 0 0 4px;
		border: 1px solid #224684;
		outline: none;
	}
	/*收货地址*/
	.m_accountSet .account_cont .account_person .m_Shipping .add_address {
		width: 658px;
		height: 42px;
		line-height: 42px;
		background-color: #f4f4f4;
		margin: 14px auto 0;
		border: 1px solid #E8E8E8;
	}
	.m_accountSet .account_cont .account_person .m_Shipping .add_address span {
		padding: 0 0 0 14px;
		color: #0076cb;
		font-size: 14px;
		font-weight: 400;
	}
	.m_accountSet .account_cont .account_person .m_Shipping .address_list {
		width: 658px;
		margin: auto;
		border-left: 1px solid #C5C5C5;
		border-right: 1px solid #C5C5C5;
		border-bottom: 1px solid #C5C5C5;
	}
	.m_accountSet .account_cont .account_person .m_Shipping .address_list .m_district {
		padding: 26px 0 0 25px;
	}
	.m_accountSet .account_cont .account_person .m_Shipping .address_list .m_district .m_add_list {
		display: inline;
		margin-left: 21px;
	}
	.m_accountSet .account_cont .account_person .m_Shipping .address_list .m_street,.m_postal,.m_phone {
		padding: 13px 0 0 25px;
	}
	
	.m_accountSet .account_cont .account_person .m_Shipping .address_list .m_name {
		padding: 13px 0 0 16px;
	}
	.m_accountSet .account_cont .account_person .m_Shipping .address_list .m_btn {
		padding: 23px 0 20px 100px;
	}
	.m_accountSet .account_cont .account_person .m_Shipping .address_list .postal_input,.name_input,.phone_input {
		width: 130px;
		height: 30px;
	}
	.m_accountSet .account_cont .account_person .m_Shipping .address_list .postal_input,.phone_input,.street_input {
		margin-left: 21px;
	}
	.m_accountSet .account_cont .account_person .m_Shipping .address_list .name_input {
		margin-left: 14px;
	}
	.m_accountSet .account_cont .account_person .m_Shipping .address_list .street_input {
		width: 490px;
		height: 30px;
	}
	.m_accountSet .account_cont .account_person .m_Shipping .address_list .m_cx {
		color: #1978cf;
		font-size: 12px;
		margin-left: 10px;
		cursor: pointer;
	}
	.m_accountSet .account_cont .account_person .m_Shipping .address_list .m_red {
		color: #c8161d;
		font-size: 18px;
	}
	.m_accountSet .account_cont .account_person .m_Shipping .address_list .bc_btn {
		background-color: #3b6bb1;
		color: #fff;
		width: 60px;
		height: 30px;
		outline: none;
		font-size: 14px;
		cursor: pointer;
	}
	.m_accountSet .account_cont .account_person .m_Shipping .address_list .qx {
		color: #1978cf;
		margin-left: 16px;
		font-size: 14px;
		cursor: pointer;
	}
	/*更换手机号*/
	.m_accountSet .account_cont .change_mob {
		width: 419px;
		height: 397px;
		background-color: #fff;
		box-shadow: 0 0px 8px #bababa;
		position: absolute;
		left: 222px;
		top: 100px;
		display: none;
	}
	.m_accountSet .account_cont .change_mob  .m_alert_top {
		width: 418px;
		height: 34px;
		background-color: #213f7b;
		line-height: 34px;
		text-align: left;
		position: relative;
	}
	.m_accountSet .account_cont .change_mob .m_alert_top .m_remove_top {
		display: inline-block;
		padding-left: 16px;
		color: #fff;
		font-size: 20px;
	}
	.m_accountSet .account_cont .change_mob .m_alert_top .m_remove_close {
		width: 28px;
		height: 28px;
		line-height: 28px;
		background-color: #193166;
		position: absolute;
		font-size: 10px;
		color: #FFFFFF;
		cursor: pointer;
		right: 4px;
		bottom: 0;
		text-align: center;
	}
	.m_accountSet .account_cont .change_mob .mc_mob {
		font-size: 14px;
		padding: 46px 0 13px 30px;
	}
	.m_accountSet .account_cont .change_mob .mc_mob .mob_input {
		width: 232px;
		height: 30px;
	}
	.m_accountSet .account_cont .change_mob .mc_neb {
		font-size: 14px;
		padding: 13px 0px 13px 45px;
	}
	.m_accountSet .account_cont .change_mob .mc_neb .neb_input {
		width: 232px;
		height: 30px;
	}
	.m_accountSet .account_cont .change_mob .mc_btn {
		padding: 13px 0 0 106px;
	}
	.m_accountSet .account_cont .change_mob .mc_btn .hq_btn {
		width: 90px;
		height: 26px;
	}
	.m_accountSet .account_cont .change_mob .mc_btn .btn_ts {
		font-size: 12px;
		color: #989898;
		margin-left: 12px;
	}
	.m_accountSet .account_cont .change_mob .mc_code {
		font-size: 14px;
		padding: 13px 0 0 60px;
	}
	.m_accountSet .account_cont .change_mob .mc_code .code_input {
		width: 100px;
		height: 30px;
	}
	.m_accountSet .account_cont .change_mob .mc_notice {
		padding: 13px 0 0 106px;
		font-size: 12px;
		color: #989898;
	}
	.m_accountSet .account_cont .change_mob .mc_bot {
		padding: 13px 0 0 106px;	
	}
	.m_accountSet .account_cont .change_mob .bot_btn {
		width: 76px;
		height: 34px;
		background-color: #3071b9;
		color: #fff;
		outline: none;
		font-size: 16px;
		cursor: pointer;
	}
	.m_accountSet .account_cont .change_mob .bot_qx {
		margin-left: 10px;
		color: #096edf;
		cursor: pointer;
	}
	/*更换用户名*/
	.m_accountSet .account_cont .change_name {
		width: 505px;
		height: 302px;
		background-color: #fff;
		box-shadow: 0 0px 8px #bababa;
		position: absolute;
		left: 160px;
		top: 100px;
		display: none;
	}
	.m_accountSet .account_cont .change_name .m_alert_top {
		width: 505px;
		height: 34px;
		background-color: #213f7b;
		line-height: 34px;
		text-align: left;
		position: relative;
	}
	.m_accountSet .account_cont .change_name .m_alert_top .m_remove_top {
		display: inline-block;
		padding-left: 16px;
		color: #fff;
		font-size: 20px;
	}
	.m_accountSet .account_cont .change_name .m_alert_top .m_remove_close {
		width: 28px;
		height: 28px;
		line-height: 28px;
		background-color: #193166;
		position: absolute;
		font-size: 10px;
		color: #FFFFFF;
		cursor: pointer;
		right: 4px;
		bottom: 0;
		text-align: center;
	}
	.m_accountSet .account_cont .change_name .cn_dqm {
		padding: 46px 0 15px 46px;
		font-size: 14px;
	}
	.m_accountSet .account_cont .change_name .cn_dqm .dqm_name {
		margin-left: 22px;
	}
	.m_accountSet .account_cont .change_name .cn_xin {
		padding: 10px 0 15px 46px;
		font-size: 14px;
	}
	.m_accountSet .account_cont .change_name .xin_input {
		width: 232px;
		height: 30px;
		margin-left: 18px;
	}
	.m_accountSet .account_cont .change_name .xin_ts {
		padding: 0 0 0 130px;
		font-size: 12px;
		color: #989898;
		font-weight: 500;
	}
	.m_accountSet .account_cont .change_name .mc_bot {
		padding: 30px 0 0 120px;	
	}
	.m_accountSet .account_cont .change_name .bot_btn {
		width: 76px;
		height: 34px;
		background-color: #3071b9;
		color: #fff;
		outline: none;
		font-size: 16px;
		cursor: pointer;
	}
	.m_accountSet .account_cont .change_name .bot_qx {
		margin-left: 10px;
		color: #096edf;
		cursor: pointer;
	}
	/*修改密码*/
	.m_accountSet .account_cont .change_pass {
		width: 418px;
		height: 339px;
		background-color: #fff;
		box-shadow: 0 0px 20px #bababa;
		position: absolute;
		left: 160px;
		top: 100px;
		display: none;
	}
	.m_accountSet .account_cont .change_pass .m_alert_top {
		width: 418px;
		height: 34px;
		background-color: #213f7b;
		line-height: 34px;
		text-align: left;
		position: relative;
	}
	.m_accountSet .account_cont .change_pass .m_alert_top .m_remove_top {
		display: inline-block;
		padding-left: 16px;
		color: #fff;
		font-size: 20px;
	}
	.m_accountSet .account_cont .change_pass .m_alert_top .m_remove_close {
		width: 28px;
		height: 28px;
		line-height: 28px;
		background-color: #193166;
		position: absolute;
		font-size: 10px;
		color: #FFFFFF;
		cursor: pointer;
		right: 4px;
		bottom: 0;
		text-align: center;
	}
	.m_accountSet .account_cont .change_pass .cp_dqm {
		padding: 42px 0 13px 62px;
		font-size: 14px;
	}
	.m_accountSet .account_cont .change_pass .dam_input,.qrm_input {
		margin-left: 10px;
		width: 232px;
		height: 30px;
	}
	.m_accountSet .account_cont .change_pass .cp_qrm {
		padding: 13px 0 13px 62px;
		font-size: 14px;
	}
	.m_accountSet .account_cont .change_pass .cp_ts {
		font-size: 12px;
		color: #898888;
		padding: 0 0 13px 126px;
	}
	.m_accountSet .account_cont .change_pass .cp_xmm {
		padding: 0 0 0px 90px;
		font-size: 14px;
	}
	.m_accountSet .account_cont .change_pass .xmm_input {
		margin-left: 10px;
		width: 232px;
		height: 30px;
	}
	.m_accountSet .account_cont .change_pass .mc_bot {
		padding: 30px 0 0 126px;	
	}
	.m_accountSet .account_cont .change_pass .bot_btn {
		width: 76px;
		height: 34px;
		background-color: #3071b9;
		color: #fff;
		outline: none;
		font-size: 16px;
		cursor: pointer;
	}
	.m_accountSet .account_cont .change_pass .bot_qx {
		margin-left: 10px;
		color: #096edf;
		cursor: pointer;
	}
</style>