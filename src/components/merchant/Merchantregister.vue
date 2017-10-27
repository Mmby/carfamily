<template>
	<div class="w_Merchantregister">
		<div class="w_Merchantregister_img">
			<img src="../../assets/icon/images/1-商户登录口_03.jpg"/>
		</div>
		<div class="w_Merchantregister_input">
			<img src="../../assets/icon/images/1-商户登录口_06.jpg"/>
			<span class="w_Mer_user">用户名 / 邮箱 / 手机号:</span>
			<input class="w_Mer_input" type="text"/>
			<span class="w_Mer_user">密&nbsp;&nbsp;&nbsp;&nbsp;码:</span>
			<input class="w_Mer_input" type="password"/>
			<span class="w_Mer_user">验证码:</span>
			<input class="w_Mer_code" type="text"/>
			<span><a href="#" id="check_code">2213</a></span>
			<a href="###" class="w_Mer_refresh">点击刷新</a>
			<span class="w_Mer_forget" ><a  href="###">忘记密码?</a></span>
			<button class="w_Mer_btn">登录</button>
		</div>
	</div>
</template>

<style>
	#check_code {
		background: rgb(153, 153, 153);
		width: 40px;
		color: rgb(255, 255, 255);
		padding: 0 10px;
		font-style: italic;
		font-size: 15px;
		margin-left: 5px;
		border-radius: 5px;
	}
	.w_Merchantregister{
		width: 975px;
		height: 542px;
		background:white;
		margin: auto;
		border: 1px solid #c6c6c6;
	}
	.w_Merchantregister_img{
		width: 200px;
		height: 542px;
		float: left;
	}
	.w_Merchantregister_input{
		float: right;
		width:312px;
		height: 389px;
		background: #f1fbfe;
		margin-top:90px;
		margin-right: 132px;
		font-size: 14px;
	}
	.w_Merchantregister_input>img{
		margin-top: 26px;
		margin-left: 28px;
	}
	.w_Mer_user{
		display: block;
		margin-top: 17px;
		margin-left: 31px;
	}
	.w_Mer_input{
		margin-left: 32px;
		height: 30px;
		width: 187px;
	}
	.w_Mer_code{
		margin-left: 32px;
		height: 30px;
		width:115px;
	}
	.w_Mer_refresh{
		color: #095987;
		font-weight: 800;
	}
	.w_Mer_forget{
		display: block;
		margin-left: 32px;
		margin-top: 14px;
	}
	.w_Mer_forget>a{
		color: #095987;
		font-weight: 800;;
	}
	.w_Mer_btn{
		width: 118px;
		height: 38px;
		background: #3b6bb1;
		margin-left:32px ;
		margin-top: 14px;
		color:white;
		font-weight: 800;
	}
</style>

<script>
	export default{
		name:'Merchantregister'
	}
</script>

