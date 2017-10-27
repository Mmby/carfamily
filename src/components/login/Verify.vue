<template>
	<div class="W_verify">
		<div class="w_verify1">
			<!--头部-->
			<div class="verify_title">
				<span>找回密码</span>
			</div>
			<!--内容-->
			<div class="verify_cont">
				<span>手机号:</span>
				<input class="verify_phone" type="text" placeholder="手机号/用户名/邮箱" /><br />
				<span>动态码:</span><input class="verify_dynamicCode" type="text" />
				<a href="#" id="check_code">2213</a>
				<span><a href="###" id="change_code">看不清楚?换一张</a></span><br />
				<a href="/register/set"><button class="verify_reg" >登录</button></a>
				<!--<input class="verify_reg" type="button" value="登录" />-->
			</div>
		</div>
		
	</div>
</template>

<style scoped>
	@import url("../../css/public.css");
	.W_verify {
		width: 977px;
		margin: auto;
		height: 386px;
	}
	
	.w_verify1 {
		width: 725px;
		height: 386px;
		/*background: red;*/
		border: 1px solid #e9e9e9;
		line-height: 63px;
		background-color: white;
	}
	
	.verify_title {
		width: 100%;
		height: 63px;
		font-size: 24px;
		background: #f6f6f6;
		border-bottom: 1px solid #e9e9e9;
	}
	
	.verify_title>span {
		margin-left: 20px;
		font-weight: 800;
	}
	
	.verify_cont {
		margin-top: 35px;
		/*background: palegoldenrod;*/
		margin-left: 30px;
		
	}
	
	.verify_phone {
		width: 244px;
		height: 24px;
		margin-left: 11px;
	}
	
	.verify_dynamicCode {
		width: 116px;
		height: 24px;
		margin-left: 16px;
	}
	
	.verify_reg {
		background: #2870b2;
		width: 75px;
		height: 27px;
		margin-left: 67px;
		margin-top: 26px;
		color: white;
		font-weight: 700;
	}
	
	/*模糊验证*/
	
	#check_code {
		background: rgb(153, 153, 153);
		width: 40px;
		color: rgb(255, 255, 255);
		padding: 0 10px;
		font-style: italic;
		font-size: 15px;
		margin-left: 10px;
		border-radius: 5px;
	}
	
	#change_code {
		font-size: 12px;
		margin-left: 5px;
	}
</style>

<script>
	export default {
		name: "Verify",
		data() {
			return {

			}
		},
		methods: {
			
		},
		created: function() {}
	}
</script>