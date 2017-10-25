<template>
	<!--register-->
	<div class="register111">
			<div class="register_con">
				<!--邮箱注册-->
				<div class="email_register">
					<div class="item">
						<label>邮箱：</label>
						<input type="text" class=""/>
						<span class="prompt prompt_msg">用于登录和找回密码,不会公开</span>
					</div>
					<div class="item">
						<label>用户名：</label>
						<input type="text" class=""/>
						<span class="prompt prompt_msg">4-16字符,不能以数字开头,一个汉字为两个字符</span>
					</div>
					<div class="item">
						<label>创建密码：</label>
						<input type="text" class=""/>
						<span class="prompt prompt_msg">6-32字符,可使用字母、数字及符号的任意组合</span>
					</div>
					<div class="item">
						<label>确认密码：</label>
						<input type="text" class=""/>
						<span class="prompt prompt_msg">请再次输入密码</span>
					</div>
					<div class="item address">
						<label>所在城市：</label>
						<p class="item_p">
							<select id="select_provice">
								<option>请选择...</option>
								<option v-for="item in adds">{{item}}</option>
							</select>
							<select id="select_city">
								<option>请选择...</option>
							</select>
						</p>
						<p class="item_p">
							<input type="checkbox" class="subscribe"/>
							<span class="text">订阅每日最新团购信息</span>
						</p>
						<em>订阅后将收到每日团购信息邮件（可随时退订）</em>
					</div>
					<div class="item vertify_code">
						<label>验证码：</label>
						<input type="text" class="vertify_number"/>
						<a href="#" id="check_code">2213</a>
						<span><a href="#" id="change_code">看不清楚? 换一张</a></span>
						<span class="prompt prompt_msg">请输入图片中的字符,不区分大小写</span>
					</div>
					<input type="button" value="同意以下协议并注册" class="buyc_btn"/>
					<a href="###" class="rules">《车族网用户协议》</a>
				</div>
				<!--邮箱注册结束-->
			</div>
	</div>
	<!--End register-->
</template>

<script>
	export default {
		name:"Emailregister",
		data(){
			return {
				adds:["北京","上海","天津","重庆","黑龙江","吉林","辽宁","河北","山东","山西","内蒙古","宁夏","甘肃","青海","新疆","西藏","陕西","河南"]
			}
		}
	}
</script>

<style>
	/*改变注册组件的导航模块颜色*/
	/*.register1_qie1,.register1_qie1 .register1_qie1_blo{
		background: #225a9a;
		
	}
	.register1_qie1 .registeraaa{
		color: white;
	}*/

	
	.register111 {
		width: 977px;
		height: 485px;
		background-color: white;
		margin:  auto;
		border: 1px solid #C5C5C5;
	}
	.register_con{
		width: 977px;
		height: 485px;
		background-color: white;
		margin:  auto;
	}
	.email_register {
		padding-top: 25px;
		
		width: 977px;
		height: 475px;
	}
	.email_register .item {
		width: 926px;
		margin: 0 auto 2px;
		overflow: hidden;
		zoom: 1;
		padding: 10px 0;
		color: #353535;
		font-size: 12px;
		background-color: #fef0e4;
	}
	.register_con .item label {
		float: left;
		line-height:28px;
		width: 110px;
		text-align: right;
		cursor: default;
	}
	.register_con .item input {
		float: left;
		width: 285px;
		height: 28px;
		border: 1px solid #c5c5c5;
		line-height: 28px;
	}
	.register_con .item .prompt_msg {
		float: left;
		color: #5E6871;
		padding: 0 14px 0 34px;
		line-height: 22px;
		border: 1px solid #d3edfb;
		margin-left: 5px;
		display: inline;
		background: #ebf7fe url(../../assets/register/notice.png) no-repeat 9px 2px;
	}
	.register_con .item_p {
		overflow: hidden;
		zoom: 1;
		margin-bottom: 19px;
		text-indent: 0;
	}
	.register_con .item select {
		float: left;
		width: 68px;
		height: 30px;
		border: 1px solid #C5C5C5;
	}
	.register_con .address input.subscribe {
		float: left;
		margin: 0 5px 0 110px;
		display: inline;
		width: 12px;
		height: 12px;
	}
	.register_con .address span {
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
	.register_con .address em {
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
	.register_con .item .vertify_number {
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
	.register_con .buyc_btn {
		cursor: pointer;
		display: block;
		width: 149px;
		height: 27px;
		line-height: 22px;
		margin-left: 137px;
		margin-top: 10px;
		color: #fff;
		font-weight: 500;
		background-color: #2870b2;
		border-top:2px solid #90c1e9;
		border-left: 2px solid #90c1e9;
		border-right: 2px solid #233753;
		border-bottom: 2px solid #233753;
	}
	.register_con .rules {
		display: block;
		margin: 12px 0 0 137px;
		color: #2807b2;
		font-size: 12px;
		
	}
	.register_con .rules:hover {
		text-decoration: underline;
	}
</style>