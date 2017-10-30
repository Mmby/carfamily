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
				<img src="../../assets/icon/图层 338.png"/>
				<!--<span class="login_links"><a href="/login/phone">手机动态码登录</a></span>-->
				<span class="login_links"><router-link to="/login/phone">手机动态码登录</router-link></span>
			</div>
			<div class="log_msg">
				<span>账号:</span>
				<input type="text" placeholder="手机号/用户名/邮箱" class="login_login1"/><br />
				<span>密码:</span>
				<input class="mima" type="password"/>
				<span class="forget"><a href="/register/find">忘记密码?</a></span>
			</div>
			<div class="log_btn">
				<input type="checkbox" checked />
				<span>记住账号</span>
				<input type="checkbox" />
				<span>下次自动登录</span><br />
				<input class="log_btna" type="button"  value="登录" />
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
						<li class="collaborate_imgLf"><img src="../../assets/icon/images/qq.jpg"/></li>
						<li><img src="../../assets/icon/images/weibo_04.jpg"/></li>
						<li><img src="../../assets/icon/images/360_06.jpg"/></li>
						<li><img src="../../assets/icon/images/tuan800_08.jpg"/></li>
					</ul>
					<ul class="collaborate_imgR">
						<li class="collaborate_imgLf"><img src="../../assets/icon/images/zhifubao_03.jpg"/></li>
						<li><img src="../../assets/icon/images/baidu_06.jpg"/></li>
						<li><img src="../../assets/icon/images/baidu_06.jpg"/></li>
						<li><img src="../../assets/icon/images/shoujizhifu_10.jpg"/></li>
					</ul>
				</div>
			</div>
			
		</div>
		
	</div>
</template>

<style scoped>
	.w_login{
		width:977px;
		height:385px;
		margin: auto;
		/*margin-top:12px;*/
		border: 1px solid #c6c6c6;
	}
	.login_title{
		width: 100%;
		height: 60px;
		background:#f7f7f7;
		line-height:57px;
		border-bottom:1px solid #c6c6c6;
	}
	.login_lg{
		font-size: 24px;
		font-weight:800;
		margin-left:20px;
		float: left;
		margin-top:3px ;
	}
	.login_reg{
		height: 50px;
		font-size:14px ;
		margin-left:11px;
		float: left;
		margin-top:8px;
	}
	.login_skip{
		height: 50px;
		font-size:14px;
		margin-left:16px;
		float: left;
		margin-top:8px;	
	}
	.login_links>a,.login_skip>a{
		color: #1c75c9;
	}
	.log_btna{
		width: 76px;
		height: 29px;
		background: #296fb4;
		margin-top:30px;
		color:#fcfaff;
	}
	/*左*/
	.login_left{
		width: 700px;
		height: 324px;
		background:#FFFFFF;
		float: left;
		border-right:1px solid #c6c6c6;
	}
	/*手机登录*/
	.login_Mobilelogin{
		margin-left: 238px;
		margin-top: 36px;
		font-size: 16px;
	}
	.login_Mobilelogin>a{
		color: #1c75c9;
	}
	.login_Mobilelogin>img{
		margin-top: 5px;
	}
	.log_msg{
		/*background: red;*/
		margin-top:15px;
		margin-left: 63px;
		font-size: 14px;
	}
	.log_msg>input{
		width: 245px;
		height: 24px;
		margin-left: 12px;
	}
	.mima{
		margin-top: 20px;
	}
	.forget{
		margin-left: 10px;
	}
	.forget>a{
		color: #1e7add;
	}
	/*按钮*/
	.log_btn{
		width: 245px;
		height: 76px;
		margin-left: 108px;
		margin-top: 26px;
		/*background: red;*/
		font-size: 13px;
		color: #88888a;
	}
	.log_btn>span{
		margin-right: 20px;
	}
	
	/*右*/
	.login_right{
		width: 276px;
		height: 324px;
		background:#FFFFFF;
		float: right;
	}
	.right_hint{
		width: 107px;
		height: 68px;
		/*background: red;*/
		margin-top: 23px;
		margin-left: 21px;
	}
	.right_hint>span{
		font-size: 14px;
		color: #232426;
	}
	.right_hint button{
		width: 107px;
		height: 32px;
		font-size:14px;
		background: #ededed;
		margin-top:16px;
		color: #232426;
	}
	/*合作*/
	.collaborate{
		width: 220px;
		height: 183px;
		margin-top: 18px;
		margin-left: 21px;
		font-size: 14px;
		color: #232426;
	}
	.collaborate_img{
		width: 220px;
		height: 153px;
		margin-top: 15px;
	}
	.collaborate_img>ul>li{
		margin-top:9px ;
	}
	.collaborate_imgLf{
		margin-top:0 !important;
	}
	.collaborate_imgL{
		float: left;
	}
	.collaborate_imgR{
		float: right;;
	}
	
</style>


<script>
	export default {
		name:"Login",
		data(){
			return {
				num:'123'
			}
		},
		methods:{
			
		},
		mounted(){
			var _this=this;
			$(".log_btna").click(function(){
				 if($(".login_login1").val()){
				 	if($(".mima").val()){
				 		
				 		//发送ajax请求
				 		$.ajax({
						type:"get",
						url:"http://localhost/chezuwang/carfamily/servers/index.php",
						async:true,
						dataType: "json",
						data: {
							act:"login1",
							name:$(".login_login1").val(),
							passWord:$(".mima").val()
						},
						success:function(data){
							if (data.err == 1) {
//								alert("登录成功");
								//页面跳转
								//让首页出现
								window.sessionStorage.username = $(".login_login1").val();
								window.sessionStorage.passwordA = "aaaa";
								
								$(".head_hide").addClass("head_hide1").removeClass("head_show1");
								$(".head_show").addClass("head_show1").removeClass("head_hide1");
								$("#nav_name").html($(".login_login1").val());
								_this.$router.replace({ path: '/' });
								
							}else if(data.err == 2){
								alert("密码不正确,请输入正确的密码");
							}else if(data.err == 0){
								alert("不存在这个用户名");
							}
							
						}
					});
				 		
				 		
				 	}else{
				 		alert("请输入密码")
				 	}
				 }else{
				 	alert("请输入账号");
				 }
			})
		}
	}
</script>

