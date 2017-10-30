<template>
	<div class="w_Merchantorder1">
		<div class="w_Merchantorder">
			<div class="w_Mer_title">
				<span class="w_Mer_titles">商户订单管理</span>
				<div class="w_Mer_mes">
					<img src="../../assets/icon/图层 363 副本 5.png" />
					<span class="w_Mer_close">已结算订单</span>
					<img src="../../assets/icon/图层 363 副本 6.png" />
					<span class="w_Mer_pay">已付款订单</span>
					<img src="../../assets/icon/图层 363 副本 6.png" />
					<span class="w_Mer_pay">退出商家管理系统</span>
				</div>
			</div>
			<div class="w_Mer_cont">
				<div class="w_Mer_cont_title">
					<span><img src="../../assets/icon/图层365.png"/>订单号</span>
					<input type="text" />
					<span>消费码</span>
					<input type="text" />
					<span>验证码</span>
					<input class="w_Mer_code" type="text" />
					<span><a href="#" id="check_code">2213</a></span>
					<a href="###" class="w_Mer_refresh">点击刷新</a>
					<button class="w_Mer_codebtn"><a href="###">点击查询</a></button>
				</div>
				<img src="../../assets/icon/images/2-商户查询订单_03.jpg" />
			</div>
		</div>
	</div>
</template>
<style>
	.w_Merchantorder1{
		padding-top: 10px;
		padding-bottom: 36px;
	}
	.w_Merchantorder {
		width: 977px;
		height: 1000px;
		margin: auto;
		background: white;
	}
	
	.w_Mer_title {
		width: 977px;
		height: 37px;
		background:#e9e9e9;
	}
	
	.w_Mer_titles {
		display: inline-block;
		background: white;
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		border: 1px solid #c5c5c5;
		border-bottom: none;
		width: 115px;
		height: 37px;
		font-size: 14px;
		text-align: center;
		line-height: 37px;
		color: #535455;
	}
	
	.w_Mer_mes {
		display: inline-block;
		font-size: 12px;
		position: relative;
		/*background: palegoldenrod;*/
		left: 580px;
	}
	
	.w_Mer_mes img {
		margin-top: 4px;
	}
	
	.w_Mer_close {
		color: #386bb2;
	}
	
	.w_Mer_pay {
		color: #535455;
	}
	/*内容*/
	
	.w_Mer_cont {
		width: 977px;
		height: 965px;
		/*background: red;*/
		border: 1px solid #c5c5c5;
	}
	
	.w_Mer_cont_title {
		margin-top: 22px;
		font-size: 12px;
		color: #535455;
	}
	
	.w_Mer_cont_title input {
		width: 177px;
		height: 19px;
		margin-left: 8px;
	}
	
	.w_Mer_cont_title>span {
		margin-left: 20px;
	}
	
	.w_Mer_code {
		width: 80px !important;
	}
	
	.w_Mer_refresh {
		color: #095987;
		font-weight: 800;
		margin-left: 7px;
	}
	
	#check_code {
		background: rgb(153, 153, 153);
		width: 40px;
		color: rgb(255, 255, 255);
		padding: 0 10px;
		font-style: italic;
		font-size: 15px;
		margin-left: -12px;
		border-radius: 5px;
	}
	
	.w_Mer_codebtn {
		background: #3b6bb1;
		border-radius: 5px;
		margin-left: 5px;
	}
	
	.w_Mer_codebtn>a {
		color: white;
		font-weight: 800;
	}
	
	.w_Mer_cont>img {
		display: block;
		margin-top: 20px;
		margin-left: 30px;
	}
</style>

<script>
	export default {
		name: 'Merchantorder',
		mounted() {
			$('.w_Mer_refresh').on('click', function() {
				var val = parseInt(Math.random() * (9999 - 1000 + 1) + 1000);
				$('#check_code').text(val);
			})
			$('.w_Mer_codebtn').on('click', function() {
				var a = $("#check_code").html();
				var b = $(".w_Mer_code").val();
				if(a == b) {
					alert("查询成功")
				} else {
					alert("请输入正确验证码")
				}
			})
		}
	}
</script>