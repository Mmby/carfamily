<template>
	<div class="w_verifyMobile">
		<div class="w_verifyMobile_cont">
			<div class="verifyMobile_title">
				<span>重设密码</span>
			</div>
			<div class="verifyMobile_cont">
				<span>短信验证:</span>
				<input class="verifyMobile_phone" type="text"  /> 
				<span class="verifyMobile_error"><img src="../../assets/icon/错误.png"/>请输入你收到的短信中的验证码</span>
				<br />
				<span>创建密码:</span>
				<input class="verifyMobile_CreatePassword" type="text"/>
				<br/>
				<span>确认密码:</span>
				<input class="verifyMobile_phone" type="text"/>
				<br/>
				<span class="verifyMobile_dynamicCodehint">验证码:</span><input class="verifyMobile_dynamicCode" type="text" />
				<a href="#" id="check_code">2213</a>
				<span><a href="###" id="change_code">看不清楚?换一张</a></span><br />
				<a href="/register/change"><button  class="verifyMobile_reg" >查询密码</button></a>
			</div>
		</div>
	</div>
</template>

<style>
	@import url("../../css/public.css");
	/*总体*/
	.w_verifyMobile {
		width: 977px;
		margin: auto;
		height: 386px;
		
	}
	/*内容*/
	.w_verifyMobile_cont {
		background: white;
		width: 725px;
		height: 386px;
		margin-top: 10px;
		border: 1px solid #e9e9e9;
		line-height: 48px;
	}
	/*头部*/
	.verifyMobile_title {
		width: 100%;
		height: 63px;
		font-size: 24px;
		background: #f6f6f6;
		border-bottom: 1px solid #e9e9e9;
		line-height: 63px;
	}
	.verifyMobile_title>span {
		margin-left: 20px;
		font-weight: 800;
	}
	/*下部内容*/
	.verifyMobile_cont {
		margin-top: 13px;
		margin-left: 30px;
	}
	/*输入框*/
	.verifyMobile_phone {
		width: 244px;
		height: 22px;
		margin-left: 11px;
	}
	.verifyMobile_dynamicCode {
		width: 116px;
		height: 24px;
		margin-left: 16px;
	}
	.verifyMobile_error{
		border: 1px solid #ffc1cb;
		padding-top: 6px;
		padding-bottom: 4px;
		padding-left: 10px;
		padding-right: 10px;
		color: #696468;
		font-size:12px;
		background: #feeeee;
	}
	.verifyMobile_error>img{
		position:relative;
		top: 17px;
		right:2px ;
	}
	.verifyMobile_dynamicCodehint{
		margin-left: 15px;
	}
	.verifyMobile_reg{
		background: #2870b2;
		width: 92px;
		height: 27px;
		margin-left: 80px;
		margin-top:10px;
		color: white;
	}
	.verifyMobile_CreatePassword{
		width: 244px;
		height: 22px;
		margin-left: 11px;
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
		name: "verifyMobile"	,
	}
	methods: {
//		var reg = document.getElementsByClassName("verifyMobile_reg")[0];
//			reg.onclick = function() {
//			alert("1")
//		}
	}
	
</script>