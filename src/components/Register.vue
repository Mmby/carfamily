<template>
	<!--注册的主页面-->
	<div class="register1">
		
		<!--注册的小的导航条-->
		<div class="register1_nav">
			<div class="register1_qie register1_qie1 register_active"><router-link class="registeraaa" to="/register/">邮箱注册</router-link>
				<div class="register1_qie1_blo"></div>
			</div>
			<div class="register1_qie register1_qie2"><router-link class="registeraaa" to="/register/phone">手机注册</router-link>
				<div class="register1_qie1_blo"></div>
			</div>
			<div class="reg_log">
				已有车族账号?<a href="/login">登录</a>
			</div>
		</div>
		<router-view></router-view>
		<!--引入的小组件-->
		<!--<emailregister></emailregister>-->
	</div>
</template>

<script>
	import Emailregister from "./register/Emailregister"
	export default {
		name:"users",
		components: {
			Emailregister

		},
		mounted(){
			$(".register1_nav .register1_qie").click(function(){
				$(this).addClass("register_active").siblings().removeClass("register_active");
			})
		}
	}
</script>

<style>
	.register_active,.register_active .register1_qie1_blo{
		background: #225a9a !important;
	}
	.register_active .registeraaa{
		color: white !important;
	}
	.register1{
		width: 977px;
		margin: 0 auto;
		/*height: auto;*/
		padding-top: 20px;
		padding-bottom: 45px;
	}
	.register1_qie{
		width: 163px;
		height: 36px;
		position: relative;
		background: white;
		text-align: center;
		line-height: 36px;
		display: inline-block;
		font-size: 14px;
		font-weight: 800;
		
	}
	.register1_qie .registeraaa{
		color: black;
		width: 163px;
		height: 36px;
		display: inline-block;
	}
	.register1_qie1_blo{
		/*开始为透明色*/
		background: transparent;
	
		position:absolute;
		width: 5px;
		height:5px;
		transform: rotate(45deg);
		z-index: 10;
		left: 0;
		bottom: -2px;
		left: 80px;
	}
	.register1_nav{
		width: 100%;
		height: 36px;
		position: relative;
	}
	.register1_qie1{
		margin-left: 37px;
	}
	.register1_qie2{
		margin-left: 10px;
	}
	/*注册转登录的部分*/
	.reg_log{
		display: inline-block;
		font-size: 13px;
		position: absolute;
		left: 725px;
		top: 14px;
	}
	.reg_log a{
		text-indent: 7px;
		display: inline-block;
	}
</style>