<!--个人中心-->
<template>
	<div class="mycar">
		<div class="myCarcont">
			<div class="mycarTitle">
				<router-link to="/mycar">我的订单</router-link>
				<router-link to="/mycar/evaluationl">我的评价</router-link>
				<router-link to="/mycar/collect">我的收藏</router-link>
				<router-link to="/mycar/carbalance">车族余额</router-link>
				<router-link to="/mycar/recharge">充值/提现</router-link>
				<router-link to="/mycar">代金券</router-link>
				<router-link to="/mycar">我的积分</router-link>
				<router-link to="/mycar/accountset">账户设置</router-link>
			</div>
			<div class="mycarCont">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'mycar',
		mounted() {
			function chageBanner() {
				$(".mycarTitle a").each(function(i, e) {
					if(window.location.href == e.href) {
						e.style.zIndex = 15;
						e.style.borderBottom = "none";
						return;
					} else {
						e.style.zIndex = 5;
					}
				});
			}
			chageBanner();
//			$(".mycenterList li a").each(function(i,e){
//				if(window.location.href == e.href) {
//						e.style.zIndex = 15;
//						return;
//					} else {
//						e.style.zIndex = 5;
//					}
//			})
			$(".mycarTitle a").on("click", function() {
				$(this).css("z-index", "15").siblings().css("z-index", "5");
			})
		}
	}
</script>

<style>
	.mycar {
		width: 976px;
		margin: 10px auto 0;
	}
	
	.myCarcont {
		width: 716px;
	}
	
	.mycar .mycarTitle {
		width: 716px;
		font-size: 0;
		overflow: hidden;
		z-index: 10;
	}
	
	.mycar .mycarTitle a {
		position: relative;
		z-index: 5;
		float: left;
		font-size: 14px;
		color: #1978cf;
		line-height: 35px;
		padding: 0px 12px;
		border: 1px solid #c5c5c5;
		border-bottom: none;
		border-top-left-radius: 3px;
		border-top-right-radius: 3px;
		margin-right: 3px;
		background-color: #fff;
	}
	
	.mycarCont {
		z-index: 10;
		position: relative;
		top: -1px;
		left: -1px;
		background-color: #fff;
		border: 1px solid #ccc;
		box-shadow: 0 -1px 5px #CACACA;
		margin-bottom: 36px;
		z-index: 5;
	}
</style>