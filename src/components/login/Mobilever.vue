<template>
	<!--登录title-->
	<div class="w_login">
		<div class="login_title">
			<span class="login_lg">登录</span>
			<span class="login_reg">尚未注册?</span>
			<span class="login_skip"><a href="/register">免费注册</a></span>
		</div>

		<div class="login_left">
			<div class="login_Mobilelogin">
				<img src="../../assets/icon/图层 347.png" />
				<span class="login_links"><router-link to="/login">普通方式登录</router-link></span>
			</div>
			<div class="log_msg">
				<span>手机号:</span>
				<input type="text" placeholder="手机号/用户名/邮箱" />
				<span class="w_login_hints"><img src="../../assets/icon/images/2_1手机动态_提示_03.jpg"/>用于登录和找回密码,不会公开</span>
				<div class="login_dynamic_button">
					<input type="button" class="login_dynamic" value="免费获取手机动态码" />
					<span class="login_dynamic_hints">已发送,1分钟后可重新获取</span>
				</div>
				<span>动态码:</span>
				<input class="mima" type="text" />
				<span class="w_login_hints"><img src="../../assets/icon/images/2_1手机动态_提示_03.jpg"/>请输入收到的手机动态码</span>
				<!--	<span class="forget"><a href="###">忘记密码?</a></span>-->
			</div>
			<div class="log_btn">
				<input class="log_checkbox" type="checkbox" checked />
				<span>记住手机</span>
				<br />
				<a href="###"><input class="log_btna" type="button" value="登录" /></a>
			</div>
		</div>
		<div class="login_right">
			<div class="right_hint">
				<span>尚未注册?</span>
				<a href="/register"><button>免费注册</button></a>
			</div>
			<div class="collaborate">
				<span>用合作网站账号登录</span>
				<div class="collaborate_img">
					<ul class="collaborate_imgL">
						<li class="collaborate_imgLf"><img src="../../assets/icon/images/qq.jpg" /></li>
						<li><img src="../../assets/icon/images/weibo_04.jpg" /></li>
						<li><img src="../../assets/icon/images/360_06.jpg" /></li>
						<li><img src="../../assets/icon/images/tuan800_08.jpg" /></li>
					</ul>
					<ul class="collaborate_imgR">
						<li class="collaborate_imgLf"><img src="../../assets/icon/images/zhifubao_03.jpg" /></li>
						<li><img src="../../assets/icon/images/baidu_06.jpg" /></li>
						<li><img src="../../assets/icon/images/baidu_06.jpg" /></li>
						<li><img src="../../assets/icon/images/shoujizhifu_10.jpg" /></li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
	.w_login {
		width: 977px;
		height: 385px;
		margin: auto;
		/*margin-top:12px;*/
		border: 1px solid #c6c6c6;
	}
	
	.login_title {
		width: 100%;
		height: 60px;
		background: #f7f7f7;
		line-height: 57px;
		border-bottom: 1px solid #c6c6c6;
	}
	
	.login_lg {
		font-size: 24px;
		font-weight: 800;
		margin-left: 20px;
		float: left;
		margin-top: 3px;
	}
	
	.login_reg {
		height: 50px;
		font-size: 14px;
		margin-left: 11px;
		float: left;
		margin-top: 8px;
	}
	
	.login_skip {
		height: 50px;
		font-size: 14px;
		margin-left: 16px;
		float: left;
		margin-top: 8px;
	}
	
	.login_links>a,
	.login_skip>a {
		color: #1c75c9;
	}
	
	.log_btna {
		margin-left: 20px;
		width: 76px;
		height: 29px;
		background: #296fb4;
		margin-top: 30px;
		color: #fcfaff;
		font-weight: 800;
	}
	/*左*/
	
	.login_left {
		width: 700px;
		height: 324px;
		background: #FFFFFF;
		float: left;
		border-right: 1px solid #c6c6c6;
	}
	/*手机登录*/
	
	.login_Mobilelogin {
		margin-left: 260px;
		margin-top: 36px;
		font-size: 16px;
	}
	
	.login_Mobilelogin>a {
		color: #1c75c9;
	}
	
	.login_Mobilelogin>img {
		margin-top: 5px;
	}
	
	.log_msg {
		/*background: red;*/
		margin-top: 15px;
		margin-left: 63px;
		font-size: 14px;
	}
	
	.log_msg>input {
		width: 245px;
		height: 24px;
		margin-left: 12px;
		display: inline-block;
	}
	
	.mima {
		margin-top: 20px;
	}
	
	.forget {
		margin-left: 10px;
	}
	
	.forget>a {
		color: #1e7add;
	}
	/*按钮*/
	
	.log_btn {
		width: 245px;
		height: 76px;
		margin-left: 108px;
		margin-top: 26px;
		/*background: red;*/
		font-size: 13px;
		color: #88888a;
	}
	
	.log_btn>span {
		margin-right: 20px;
	}
	
	.log_checkbox {
		margin-left: 20px;
	}
	/*右*/
	
	.login_right {
		width: 276px;
		height: 324px;
		background: white;
		float: right;
	}
	
	.right_hint {
		width: 107px;
		height: 68px;
		/*background: red;*/
		margin-top: 23px;
		margin-left: 21px;
	}
	
	.right_hint>span {
		font-size: 14px;
		color: #232426;
	}
	
	.right_hint button {
		width: 107px;
		height: 32px;
		font-size: 14px;
		background: #ededed;
		margin-top: 16px;
		color: #232426;
	}
	/*合作*/
	
	.collaborate {
		width: 220px;
		height: 183px;
		margin-top: 18px;
		margin-left: 21px;
		font-size: 14px;
		color: #232426;
	}
	
	.collaborate_img {
		width: 220px;
		height: 153px;
		margin-top: 15px;
	}
	
	.collaborate_img>ul>li {
		margin-top: 9px;
	}
	
	.collaborate_imgLf {
		margin-top: 0 !important;
	}
	
	.collaborate_imgL {
		float: left;
	}
	
	.collaborate_imgR {
		float: right;
		;
	}
	/*动态按钮*/
	
	.login_dynamic {
		display: inline-block;
		width: 130px !important;
		height: 30px !important;
		border-radius: 5px;
		background: #f2f2f2;
		margin-top: 20px;
		border: 1px solid #c6c6c6;
		text-align: center;
		margin-left: 62px !important;
	}
	
	.w_login_hints {
		width: 197px;
		height: 28px;
		font-size: 12px;
		background: #e5f5ff;
		line-height: 28px;
		color: #666666;
		border: 1px solid #a4dbfe;
		display: inline-block;
		position: relative;
	}
	
	.w_login_hints>img {
		margin-top: 6px;
		margin-left: 7px;
	}
	
	.login_dynamic_hints {
		color: #656565;
		display: none;
		float: right;
		margin-top: 25px;
		margin-right: 250px;
	}
	
	.login_dynamic_button {}
</style>

<script>
	export default {
		name: "Mobilever",
		mounted() {
			$(".login_dynamic").click(function() {
				$(".login_dynamic_hints").css("display", "block");
				$(".login_dynamic").html("重新获取(5)");
				$(".login_dynamic").attr("disabled", "true"); //不可以点
				var count = 5;
				var timer = setInterval(function() {
					count--;
					$(".login_dynamic").val("重新获取(" + count + ")");
					if(count <= 0) {
						$(".login_dynamic").val("重新获取");
						clearInterval(timer);
						count = 5;
						$(".login_dynamic").removeAttr("disabled"); //可以点击
						$(".login_dynamic_hints").css("display", "none");
					}
				}, 1000)
			})
		}
	}
</script>