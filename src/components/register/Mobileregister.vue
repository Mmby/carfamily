<template>
	
	<div class="mobileRegister">
		<div class="email_register">
					<div class="item">
						<p class="item_p">
							<label>手机号：</label>
							<input type="text" class=""/>
							<span class="prompt prompt_msg">用于登录和找回密码,不会公开</span>
						</p>
						<a href="#" class="get_note">免费获取短信验证码</a>
					</div>
					<div class="item">
						<label>短信验证码：</label>
						<input type="text" class=""/>
						<span class="prompt prompt_msg">请输入收到的手机验证码</span>
					</div>
					<div class="item">
						<label>创建密码：</label>
						<input type="text" class="" />
						<span class="prompt prompt_msg">6-32字符,可使用字母、数字及符号的任意组合</span>
					</div>
					<div class="item">
						<label>确认密码：</label>
						<input type="text" class=""/>
						<span class="prompt prompt_msg">请再次输入密码</span>
					</div>
					<input type="button" value="同意以下协议并注册" class="buyc_btn"/>
					<a href="###" class="rules">《车族网用户协议》</a>
			</div>
	</div>
	
</template>

<script>
	export default {
		name:"Mobregister",
		data(){
			return {
				
			}
		},
		methods: {
        		al:function() {
        			
        		}
    }
		
		
	}
</script>

<style>
	/*改变注册组件的导航模块颜色*/
	/*.register1_qie2,.register1_qie2 .register1_qie1_blo{
		background: #225a9a;
	}
	.register1_qie2 .registeraaa{
		color: white;
	}*/

	
	.mobileRegister {
		width: 977px;
		height:358px;
		margin: auto;
		margin-bottom: 39px;
		border: 1px solid #C5C5C5;
		background: white;
	}
	.email_register {
		padding-top: 25px;
		width: 977px;
		height: 338px;
	}
	.email_register .item {
		width: 926px;
		margin: 0 auto 2px;
		overflow: hidden;
		zoom: 1;
		padding: 10px 0px;
		color: #353535;
		font-size: 12px;
		background-color: #fef0e4;
	}
	.mobileRegister .item label {
		float: left;
		line-height:28px;
		width: 110px;
		text-align: right;
		cursor: default;
	}
	.mobileRegister .item input {
		float: left;
		width: 285px;
		height: 28px;
		border: 1px solid #ffa960;
		line-height: 28px;
	}
	.mobileRegister .item .prompt_msg {
		float: left;
		color: #5E6871;
		padding: 0 14px 0 34px;
		line-height: 22px;
		border: 1px solid #d3edfb;
		margin-left: 5px;
		display: inline;
		background: #ebf7fe url(../../assets/register/notice.png) no-repeat 9px 2px;
	}
	.mobileRegister .item_p {
		overflow: hidden;
		zoom: 1;
		margin-bottom: 8px;
		text-indent: 0;
	}
	.mobileRegister .get_note {
		height: 24px;
		line-height: 24px;
		border: 1px solid #cecece;
		background-color: #f1f1f1;
		display: inline-block;
		padding: 0 20px;
		margin-left: 110px;
		color: #000;
	}
	.mobileRegister .get_note:hover {
		text-decoration: underline;
		color: blueviolet;
	}
	.mobileRegister .item select {
		float: left;
		width: 68px;
		height: 30px;
		border: 1px solid #C5C5C5;
	}
	.mobileRegister .address input.subscribe {
		float: left;
		margin: 0 5px 0 110px;
		display: inline;
		width: 12px;
		height: 12px;
	}
	.mobileRegister .address span {
		float: left;
	}
	#select_provice {
		width: 100px;
		padding: 5px 0;
	}
	#select_city {
		width: 100px;
		padding: 5px 0;
		margin-left: 5px;
	}
	.mobileRegister .address em {
		float: left;
		color: #989898;
		margin: -12px 0 0 109px;
		display: inline;
		font-style: normal;
	}
	.vertify_code a {
		float: left;
		line-height: 31px;
		color: #36272a;
		text-decoration: underline;
	}
	.mobileRegister .item .vertify_number {
		width: 114px;
		height: 22px;
		border: 1px solid #f74d44;
	}
	#check_code {
		background: rgb(153,153,153);
		width: 40px;
		color: rgb(255,255,255);
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
	.mobileRegister .buyc_btn {
		cursor: pointer;
		display: block;
		width: 149px;
		height: 27px;
		line-height: 22px;
		margin-top: 10px;
		margin-left: 137px;
		color: #fff;
		font-weight: 500;
		background-color: #2870b2;
		border-top:2px solid #90c1e9;
		border-left: 2px solid #90c1e9;
		border-right: 2px solid #233753;
		border-bottom: 2px solid #233753;
	}
	.mobileRegister .rules {
		display: block;
		margin: 12px 0 0 137px;
		color: #2807b2;
		font-size: 12px;
	}
	.mobileRegister .rules:hover {
		text-decoration: underline;
	}
</style>