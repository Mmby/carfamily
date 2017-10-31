<template>
	<div class="m_mrecharge">
		<div class="mrecharge_cont">
				<div class="person_set">
					<span class="mword">充值</span>
					<span class="words">小提示: 账户充值，手机抢购更便捷!</span>
				</div>
				<router-link to="/mycar/carbalance" class="m_cont_examine">查看车族余额</router-link>
				<div class="person_inftro">
					<span class="mbefore">充值金额</span>
					<input type="text" class="sr_money"/> 元
					<span class="money_hint" style="display: none;">充值金额不能为空</span>
					<router-link to="" class="myes_btn">确定，去付款</router-link>
				</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Mrecharge",
		mounted() {
			var _this = this;
			var reg_money = /^[0-9][0-9]{0,99999}$/;
			$(".sr_money").on("focus",function() {
				var cz_money = $(".sr_money").val();
				var yz_money = reg_money.test(cz_money);
				if (yz_money == false) {
					$(".money_hint").show();
				}
			})
			$(".sr_money").on("blur",function() {
				var cz_money = $(".sr_money").val();
				var yz_money = reg_money.test(cz_money);
				if (yz_money == false) {
					$(".money_hint").show();
				}else if(yz_money == true) {
					$(".money_hint").hide();
				}
			})
			$(".myes_btn").on("click",function() {
				var cz_money = $(".sr_money").val();
				var yz_money = reg_money.test(cz_money);
				if (yz_money == false){
					alert("请输入正确金额");
				}else if (yz_money == true){
//					alert("充值成功");
					var fff = (window.sessionStorage.cunmoney - 0) + (cz_money - 0);
					//发送ajax请求
					$.ajax({
							type: "get",
							url: "http://localhost/chezuwang/carfamily/servers/index.php",
							dataType: "json",
							data: {
								act :"addmoney",
								money:fff,
								name:window.sessionStorage.cunname
								
							},
							success: function(data) {
								//获取返回值
								if(data.err){
									window.sessionStorage.cunmoney = fff;
									window.location.href = "/mycar/carbalance";
								}
								
							}	
							//成功回调结束部分

						});
				
					
					
					
					
					
					
				}
			})
			
			$(".m_cont_examine").click(function(){
				window.location.href = "/mycar/carbalance";
			})
			
		}
	}
</script>

<style>
	.m_mrecharge {
		width: 977px;
		height: 557px;
		margin: auto;
	}
	.m_mrecharge .mrecharge_cont {
		width: 714px;
		height: 557px;
		position: relative;
		background-color: #FFF;
	}
	.m_mrecharge .mrecharge_cont .person_set {
		width: 660px;
		height: 35px;
		margin: 26px auto 0;
		border-bottom: 1px solid #C5C5C5;
	}
	.m_mrecharge .mrecharge_cont .person_set .mword {
		font-size: 25px;
		font-weight: 400;
	}
	.m_mrecharge .mrecharge_cont .person_set .words {
		font-size: 14px;
		padding-left: 10px;
	}
	.m_mrecharge .mrecharge_cont .m_cont_examine {
		position: absolute;
		top: 40px;
		right: 36px;
		color: #3574d2;
		font-size: 14px;
		cursor: pointer;
		font-weight: 500;
	}
	.m_mrecharge .mrecharge_cont .person_inftro .mbefore {
		font-size: 14px;
		padding-right: 12px;
	}
	.m_mrecharge .mrecharge_cont .person_inftro .sr_money {
		width: 230px;
		height: 30px;
		border: 1px solid #fa6760;
	}
	.m_mrecharge .mrecharge_cont .person_inftro .money_hint {
		width: 120px;
		height: 30px;
		margin-left: 8px;
		background-color: #fff1f1;
		border: 1px solid #ffbebe;
		font-size: 12px;
		text-align: right;
		line-height: 30px;
		padding-right: 8px;
		padding-left: 5px;
		display: inline-block;
		background: url(../../assets/register/err.png) no-repeat 1px 6px;
	}
	.m_mrecharge .mrecharge_cont .person_inftro .myes_btn {
		display: block;
		margin: 15px 0 0 70px;
		width: 130px;
		height: 30px;
		padding: 8px 0 0 0;
		border-radius: 5px;
		border: 1px solid #224887;
		font-size: 14px;
		background-color: #4c76b3;
		color: #fff;
		outline: none;
		text-align: center;
	}
	.m_mrecharge .mrecharge_cont .person_inftro {
		width: 660px;
		height: 273px;
		margin: 22px auto 0;
	}
	.m_mrecharge .mrecharge_cont .person_inftro .person_inftro_eval {
		font-size: 14px;
		color: #6e6e6e;
		line-height: 40px;
	}
</style>