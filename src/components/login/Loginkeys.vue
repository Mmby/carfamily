<template>
	<div class="w_loginkeys">
		<div class="w_loginkeys_cont">
			<div class="w_loginkeys_title">
				<span>找回密码</span>
			</div>
			<div class="w_loginkeys_reply">
				<div class="w_loginkeys_replycont">
					<span>操作已成功! <a href="###">xushuang_0902@hotmail.com</a>,查阅来自车族网的邮件,点击邮件中的链接重设您的密码</span>
				</div>
				
			</div>
		</div>
	</div>
</template>

<style>
	@import url("../../css/public.css");
	.w_loginkeys{
		width: 977px;
		margin: auto;
		height: 386px;
	}
	.w_loginkeys_cont{
		width: 725px;
		height: 386px;
		margin-top: 10px;
		border: 1px solid #e9e9e9;
		line-height: 48px;
		background: white;
	}
	.w_loginkeys_title{
		width: 100%;
		height: 63px;
		font-size: 24px;
		background: #f6f6f6;
		border-bottom: 1px solid #e9e9e9;
		line-height: 63px;
	}
	.w_loginkeys_title>span {
		margin-left: 20px;
		font-weight: 800;
	}
	.w_loginkeys_reply{
		width: 100%;
	}
	.w_loginkeys_replycont{
		width: 650px;
		height: 78px;
		background:#ffffeb;
		border: 1px solid #e4e3d2; 
		text-align:left;
		font-size: 14px;
		margin-left: 32px;
		margin-top: 32px;
		padding-left: 20px;
		padding-top: 15px;
	}
	.w_loginkeys_replycont>span>a{
		color: red;
	}
</style>

<script>
	export default{
		name:'loginkeys'
	}
</script>

