<template>
	<!--register-->
	<div class="register111">
			<div class="register_con">
				<!--邮箱注册-->
				<div class="email_register">
					<div class="item">
						<label>邮箱：</label>
						<input type="text" class="email_input"/>
						<span class="prompt">用于登录和找回密码,不会公开</span>
						<span class="merr" style="display: none;">请填写正确邮箱地址</span>
						<span class="mok" style="display: none;">&nbsp;</span>
					</div>
					<div class="item">
						<label>用户名：</label>
						<input type="text" class="user_input"/>
						<span class="prompt">4-16字符,不能以数字开头,一个汉字为两个字符</span>
						<span class="merr" style="display: none;">请填写正确用户名</span>
						<span class="mok" style="display: none;">&nbsp;</span>
					</div>
					<div class="item">
						<label>创建密码：</label>
						<input type="password" class="pass_input"/>
						<span class="prompt">6-32字符,可使用字母、数字及符号的任意组合</span>
						<span class="merr" style="display: none;">请填写密码</span>
						<span class="mok" style="display: none;">&nbsp;</span>
					</div>
					<div class="item">
						<label>确认密码：</label>
						<input type="password" class="passes_input"/>
						<span class="prompt">请再次输入密码</span>
						<span class="merr" style="display: none;">请再次输入密码</span>
						<span class="mok" style="display: none;">&nbsp;</span>
					</div>
					<div class="item address">
						<label>所在城市：</label>
						<p class="item_p">
							<select id="select_provice">
								<option value="">请选择...</option>
								<option v-for="item in adds" :value="item">{{item}}</option>
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
						<input type="text" class="vertify_number "/>
						<a id="check_code"></a>
						<span><a id="change_code">看不清楚? 换一张</a></span>
						<span class="prompt">请输入图片中的字符,不区分大小写</span>
						<span class="merr" style="display: none;">请输入验证码</span>
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
				adds:["北京","上海","天津","重庆","沈阳","深圳","合肥","西安","郑州"]
			}
		},
		mounted(){
			
			//邮箱正则验证
			 var reg_email = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
			 var _this = this;
			 $(".email_input").on("focus",function() {
			 	var em_jg = reg_email.test($(".email_input").val());
			 	$(this).parent().css("background","#fef0e4");
			 	$(this).parent().children(".prompt").show();
			 	$(this).parent().children(".merr").hide();
			 	if (em_jg == true) {
			 		$(this).parent().children(".mok").show();
			 		$(this).parent().children(".merr").hide();
			 		$(this).parent().children(".prompt").hide();
			 	}else if (em_jg == false || $(this).val() == null ) {
			 		$(this).parent().children(".mok").hide();
			 		$(this).parent().children(".merr").show();
			 		$(this).parent().children(".prompt").hide();
			 	}
			 })
			 $(".email_input").on("blur",function() {
			 	var em_jg = reg_email.test($(".email_input").val());
			 	$(this).parent().css("background","#fff");
			 	$(this).parent().children(".merr").show();
			 	$(this).parent().children(".prompt").hide();
			 	if (em_jg == true) {
			 		$(this).parent().children(".mok").show();
			 		$(this).parent().children(".merr").hide();
			 		$(this).parent().children(".prompt").hide();
			 	}else if (em_jg == false || $(this).val() == null ) {
			 		$(this).parent().children(".mok").hide();
			 		$(this).parent().children(".merr").show();
			 		$(this).parent().children(".prompt").hide();
			 	}
			 })
			 //用户名正则验证
			 var reg_user = /^[\u4E00-\u9FA5A-Za-z_][\u4E00-\u9FA5a-zA-Z0-9_]{3,16}$/;
			 
			 $(".user_input").on("focus",function() {
			 	var us_jg = reg_user.test($(".user_input").val());
			 	$(this).parent().css("background","#fef0e4");
			 	$(this).parent().children(".prompt").show();
			 	$(this).parent().children(".merr").hide();
			 	if (us_jg == true) {
			 		$(this).parent().children(".mok").show();
			 		$(this).parent().children(".merr").hide();
			 		$(this).parent().children(".prompt").hide();
			 	}else if (us_jg == false || $(this).val() == null ) {
			 		$(this).parent().children(".mok").hide();
			 		$(this).parent().children(".merr").show();
			 		$(this).parent().children(".prompt").hide();
			 	}
			 })
			 $(".user_input").on("blur",function() {
			 	var us_jg = reg_user.test($(".user_input").val());
			 	$(this).parent().css("background","#fff");
			 	$(this).parent().children(".merr").show();
			 	$(this).parent().children(".prompt").hide();
			 	if (us_jg == true) {
			 		$(this).parent().children(".mok").show();
			 		$(this).parent().children(".merr").hide();
			 		$(this).parent().children(".prompt").hide();
			 	}else if (us_jg == false || $(this).val() == null ) {
			 		$(this).parent().children(".mok").hide();
			 		$(this).parent().children(".merr").show();
			 		$(this).parent().children(".prompt").hide();
			 	}
			 })
			 //密码验证 
			var reg_pas = /^[0-9a-zA-Z\._\$%&\*\!]{6,32}$/;
			
			$(".pass_input").on("focus",function() {
				var ps_jg = reg_pas.test($(".pass_input").val());
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
			//随机验证码
			function randomNum (a,b) {
				return Math.floor(Math.random()*(b-a+1)+a);
			}

			$(document).ready(function(){
				$("#check_code").text(randomNum(1000,9999));
			})
			$("#change_code").on("click",function() {
				$("#check_code").text(randomNum(1000,9999));
			})
			//验证码
			
			$(".vertify_number").on("focus",function() {
				var in_val = $(".vertify_number").val();
				var co_val = $("#check_code").text();
				$(this).parent().css("background","#fef0e4");
			 	$(this).parent().children(".prompt").show();
			 	$(this).parent().children(".merr").hide();
			 	if (in_val == co_val && in_val !== "") {
			 		$(this).parent().children(".mok").show();
			 		$(this).parent().children(".merr").hide();
			 		$(this).parent().children(".prompt").hide();
			 	}else if (in_val !== co_val || in_val == null) {
			 		$(this).parent().children(".mok").hide();
			 		$(this).parent().children(".merr").show();
			 		$(this).parent().children(".prompt").hide();
			 	}
			})
			$(".vertify_number").on("blur",function() {
				var in_val = $(".vertify_number").val();
				var co_val = $("#check_code").text();
				$(this).parent().css("background","#fff");
			 	$(this).parent().children(".merr").show();
			 	$(this).parent().children(".prompt").hide();
			 	if (in_val == co_val && in_val !== "") {
			 		$(this).parent().children(".mok").show();
			 		$(this).parent().children(".merr").hide();
			 		$(this).parent().children(".prompt").hide();
			 	}else if (in_val !== co_val || in_val == null) {
			 		$(this).parent().children(".mok").hide();
			 		$(this).parent().children(".merr").show();
			 		$(this).parent().children(".prompt").hide();
			 	}
			})
			
			//点击注册
			$(".buyc_btn").on("click",function() {
				
				
				
				
				var in_val = $(".vertify_number").val();
				var co_val = $("#check_code").text();
				var ps = $(".pass_input").val();
				var pses = $(".passes_input").val();
				var em_jg = reg_email.test($(".email_input").val());
				var us_jg = reg_user.test($(".user_input").val());
				var ps_jg = reg_pas.test($(".pass_input").val());
				//判断城市是否被选中
				var e_city = $("#select_provice").val();

				
			
				//下面是ajax成功才跳转
//				if (em_jg,us_jg,ps_jg == true && in_val == co_val && ps == pses) {
////					window.location.href = "/register/success"
//				}
//				var aaaa = "484545445";
//				document.cookie = "email = "+ aaaa +"; max-age=1000";
				if (em_jg== true && us_jg== true && ps_jg == true && in_val == co_val && ps == pses && e_city) {
					//执行ajax请求
//					window.location.href = "/register/success";
					$.ajax({
						type:"get",
						url:"http://localhost/chezuwang/carfamily/servers/index.php",
						async:true,
						dataType: "json",
						data: {
							act: "email",
							name: $(".user_input").val(),
							email: $(".email_input").val(),
							car: $("input[name=car]:checked").val(),
							password: $(".pass_input").val(),
							city: e_city
						},
						success:function(data){
							if(data.err == 0){
								//存在这个用户名
								alert("用户名已经存在")
								
							} else if(data.err == 1){
								//邮箱号已经被注册
								alert("该邮箱号已经被注册")
							} else if(data.err == 2){
								//注册成功
								//改变节点
								//有待添加
//								window.location.href = "/register/success";
								//改变邮箱值
								_this.$store.state.zhuceemail = data.email1;
								_this.$router.replace({ path: '/register/success' });

							}
							
						}
					});
				}else{
					//不对则刷新验证
					//每个里面家上下面的
					$("#check_code").text(randomNum(1000,9999));
					alert("请输入正确信息")
				}
				
				
			})
			
			
			
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
		height: 550px;
		background-color: white;
		margin: 0 auto;
		border: 1px solid #C5C5C5;
	}
	.register_con{
		width: 977px;
		height: 550px;
		background-color: white;
		margin: 0 auto;
		/*padding-bottom: 60px;*/
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
	.register_con .item .prompt {
		float: left;
		color: #5E6871;
		padding: 0 14px 0 34px;
		line-height: 22px;
		border: 1px solid #d3edfb;
		margin-left: 5px;
		background: #ebf7fe url(../../assets/register/notice.png) no-repeat 9px 2px;
	}
	.register_con .item .merr {
		color: #5E6871;
		padding: 0 14px 0 34px;
		line-height: 22px;
		border: 1px solid #d3edfb;
		display: inline-block;
		margin-left: 5px;
		background: #ebf7fe url(../../assets/register/err.png) no-repeat 9px 2px;
	}
	.register_con .item .mok {
		padding: 0 14px 0 10px;
		line-height: 22px;
		display: inline-block;
		margin-left: 5px;
		background: url(../../assets/register/yes.png) no-repeat 9px 2px;
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
		cursor: pointer;
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
		/*padding-bottom: 20px;*/
		
	}
	.register_con .rules:hover {
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