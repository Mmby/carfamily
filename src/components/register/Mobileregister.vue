<template>
	
	<div class="mobileRegister">
		<div class="email_register">
					<div class="item">
						<p class="item_p" style="padding: 10px 0 10px 0;">
							<label>手机号：</label>
							<input type="text" class="mob_input"/>
							<span class="prompt">用于登录和找回密码,不会公开</span>
							<span class="merr" style="display: none;">请填写正确手机号</span>
							<span class="mok" style="display: none;">&nbsp;</span>
						</p>
						<input type="button" class="get_note" value="免费获取短信验证码" >
					</div>
					<div class="item">
						<label>短信验证码：</label>
						<input type="text" class="dx_input"/>
						<span class="prompt">请输入收到的手机验证码</span>
					</div>
					<div class="item">
						<label>创建密码：</label>
						<input type="password" class="pass_input" />
						<span class="prompt">6-32字符,可使用字母、数字及符号的任意组合</span>
						<span class="merr" style="display: none;">请填写密码</span>
						<span class="mok" style="display: none;">&nbsp;</span>
					</div>
					<div class="item">
						<label>确认密码：</label>
						<input type="password" class="passes_input"/>
						<span class="prompt">请再次输入密码</span>
						<span class="merr" style="display: none;">两次密码不一致</span>
						<span class="mok" style="display: none;">&nbsp;</span>
					</div>
					<div class="e_hascar">
						<label>是否有车：</label>
						<label>
							<input type="radio" name="car" id="" value="有" checked/> 有车
						</label>
						<label>
							<input type="radio" name="car" id="" value="无"/> 无车
						</label>
					</div>
					
					<div class="e_buycar">
						<label>是否需要买车：</label>
						<label>
							<input type="radio" name="buycar" id="" value="" checked/> 有购车需求
						</label>
						<label>
							<input type="radio" name="buycar" id="" value=""/> 无购车需求
						</label>
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
		mounted(){
			//手机验证
			var reg_mob = /^[1|3|5|8][0-9]{10}$/;
			$(".mob_input").on("focus",function() {
				var mob_jg = reg_mob.test($(".mob_input").val());
				$(this).parent().css("background","#fef0e4");
				$(this).css("border","1px solid #ffa960");
				$(this).parent().children(".prompt").show();
			 	$(this).parent().children(".merr").hide();
			 	if (mob_jg == true) {
			 		$(this).parent().children(".mok").show();
			 		$(this).parent().children(".merr").hide();
			 		$(this).parent().children(".prompt").hide();
			 	}else if (mob_jg == false || $(this).val() == null ) {
			 		$(this).parent().children(".mok").hide();
			 		$(this).parent().children(".merr").show();
			 		$(this).parent().children(".prompt").hide();
			 	}
			})
			$(".mob_input").on("blur",function() {
				var mob_jg = reg_mob.test($(".mob_input").val());
				$(this).css("border","1px solid #c5c5c5");
				$(this).parent().css("background","white");
				$(this).parent().children(".merr").show();
			 	$(this).parent().children(".prompt").hide();
			 	if (mob_jg == true) {
			 		$(this).parent().children(".mok").show();
			 		$(this).parent().children(".merr").hide();
			 		$(this).parent().children(".prompt").hide();
			 	}else if (mob_jg == false || $(this).val() == null ) {
			 		$(this).parent().children(".mok").hide();
			 		$(this).parent().children(".merr").show();
			 		$(this).parent().children(".prompt").hide();
			 	}
			})
			//短信验证
			$(".dx_input").on("focus",function() {
				var dx_jg = $(".dx_input").val();
				$(this).parent().css("background","#fef0e4");
				$(this).css("border","1px solid #ffa960");
			})
			$(".dx_input").on("blur",function() {
				var dx_jg = $(".dx_input").val();
				$(this).parent().css("background","white");
				$(this).css("border","1px solid #c5c5c5");
			})
			//密码验证
			var reg_pas = /^[0-9a-zA-Z\._\$%&\*\!]{6,32}$/;
			
			$(".pass_input").on("focus",function() {
				var ps_jg = reg_pas.test($(".pass_input").val());
				$(this).css("border","1px solid #ffa960");
			 	$(this).parent().css("background","#fef0e4");
			 	$(this).parent().children(".prompt").show();
			 	$(this).parent().children(".merr").hide();
			 	if (ps_jg == true) {
			 		$(this).parent().children(".mok").show();
			 		$(this).parent().children(".merr").hide();
			 		$(this).parent().children(".prompt").hide();
			 	}else if (ps_jg == false || $(this).val() == null ) {
			 		$(this).parent().children(".mok").hide();
			 		$(this).parent().children(".merr").show();
			 		$(this).parent().children(".prompt").hide();
			 	}
			 })
			$(".pass_input").on("blur",function() {
				var ps_jg = reg_pas.test($(".pass_input").val());
			 	$(this).parent().css("background","#fff");
			 	$(this).css("border","1px solid #c5c5c5");
			 	$(this).parent().children(".merr").show();
			 	$(this).parent().children(".prompt").hide();
			 	if (ps_jg == true) {
			 		$(this).parent().children(".mok").show();
			 		$(this).parent().children(".merr").hide();
			 		$(this).parent().children(".prompt").hide();
			 	}else if (ps_jg == false || $(this).val() == null ) {
			 		$(this).parent().children(".mok").hide();
			 		$(this).parent().children(".merr").show();
			 		$(this).parent().children(".prompt").hide();
			 	}
			 })
			//再次确认密码
			$(".passes_input").on("focus",function() {
				var ps = $(".pass_input").val();
				var pses = $(".passes_input").val();
				$(this).parent().css("background","#fef0e4");
				$(this).css("border","1px solid #ffa960");
			 	$(this).parent().children(".prompt").show();
			 	$(this).parent().children(".merr").hide();
			 	if (ps == pses && pses !== "") {
			 		$(this).parent().children(".mok").show();
			 		$(this).parent().children(".merr").hide();
			 		$(this).parent().children(".prompt").hide();
			 	}else if (ps !== pses || $(this).val() == null) {
			 		$(this).parent().children(".mok").hide();
			 		$(this).parent().children(".merr").show();
			 		$(this).parent().children(".prompt").hide();
			 	}
			})
			$(".passes_input").on("blur",function() {
			 	var ps = $(".pass_input").val();
				var pses = $(".passes_input").val();
			 	$(this).parent().css("background","#fff");
			 	$(this).css("border","1px solid #c5c5c5");
			 	$(this).parent().children(".merr").show();
			 	$(this).parent().children(".prompt").hide();
			 	if (ps == pses && pses !== "") {
			 		$(this).parent().children(".mok").show();
			 		$(this).parent().children(".merr").hide();
			 		$(this).parent().children(".prompt").hide();
			 	}else if (ps !== pses || $(this).val() == null) {
			 		$(this).parent().children(".mok").hide();
			 		$(this).parent().children(".merr").show();
			 		$(this).parent().children(".prompt").hide();
			 	}
			 })
			//点击注册
			$(".buyc_btn").on("click",function() {
				var ps = $(".pass_input").val();
				var pses = $(".passes_input").val();
				var mob_jg = reg_mob.test($(".mob_input").val());
				var ps_jg = reg_pas.test($(".pass_input").val());
				console.log();
				if (mob_jg,ps_jg == true  && ps == pses) {
					
					//需要添加判断
					
					//需要添加判断
					//发送ajax请求
					$.ajax({
						type:"get",
						url:"http://localhost/chezuwang/carfamily/servers/index.php",
						async:true,
						dataType: "json",
						data: {
							act: "phone",
							phone: $(".mob_input").val(),
							car: $("input[name=car]:checked").val(),
							password: $(".pass_input").val(),
							
						},
						success:function(data){
							if(data.err == 0){
								//存在这个用户名
								alert("手机号已经被注册")
								
							} else if(data.err == 1){
								//注册成功, 会跳转首页
								alert("注册成功");
								window.location.href = "/register/mobsuccess"
							} 
							
						}
					});
					
				}
			})
			//倒计时
			$(".get_note").click(function(){
					$(".get_note").html("重新获取(30)");
					$(".get_note").attr("disabled","true");//不可以点
					var count =30;
					var timer=setInterval(function(){				
						count--;
						$(".get_note").val("重新获取("+count+")");
						if(count<=0){
							$(".get_note").val("重新获取");
							clearInterval(timer);
							count=30;
							$(".get_note").removeAttr("disabled");//可以点击
						}
					},1000)
					
				})
			
			
			
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
		height:450px;
		margin: auto;
		margin-bottom: 39px;
		border: 1px solid #C5C5C5;
		background: white;
	}
	.email_register {
		padding-top: 25px;
		width: 977px;
		height: 450px;
	}
	.email_register .item {
		width: 926px;
		margin: 0 auto 2px;
		overflow: hidden;
		zoom: 1;
		padding: 10px 0px;
		color: #353535;
		font-size: 12px;
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
		/*border: 1px solid #ffa960;*/
		line-height: 28px;
	}
	.mobileRegister .item .prompt {
		float: left;
		color: #5E6871;
		padding: 0 14px 0 34px;
		line-height: 22px;
		border: 1px solid #d3edfb;
		margin-left: 5px;
		display: inline;
		background: #ebf7fe url(../../assets/register/notice.png) no-repeat 9px 2px;
	}
	.mobileRegister .item .merr {
		color: #5E6871;
		padding: 0 14px 0 34px;
		line-height: 22px;
		border: 1px solid #d3edfb;
		display: inline-block;
		margin-left: 5px;
		background: #ebf7fe url(../../assets/register/err.png) no-repeat 9px 2px;
	}
	.mobileRegister .item .mok {
		padding: 0 14px 0 10px;
		line-height: 22px;
		display: inline-block;
		margin-left: 5px;
		background: url(../../assets/register/yes.png) no-repeat 9px 2px;
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
	/*是否有车*/
	.e_hascar{
		padding: 4px 0;
		color: #353535;
		font-size: 12px;
		margin-left: 70px;
	}
	.e_buycar{
		padding: 4px 0;
		color: #353535;
		font-size: 12px;
		margin-left: 43px;
	}
</style>