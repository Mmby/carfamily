<template>
	<div class="m_mycarNav">
		<div class="mycarNav_cont">
			<ul>
				<li >我的订单</li>
				<li>我的评价</li>
				<li>我的收藏</li>
				<li>车族余额</li>
				<li>充值/提现</li>
				<li>代金券</li>
				<li>我的积分</li>
				<li class="m_mycarNav_sty">账户设置</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Mcarnav",
		mounted(){
			$(".mycarNav_cont ul li").on("click",function() {
				$(this).addClass("m_mycarNav_sty").siblings().removeClass("m_mycarNav_sty");
			})
		}
	}
</script>

<style>
	@import url("../../css/public.css");
	.m_mycarNav {
		width: 977px;
		height: 35px;
		margin: 10px auto 0;
	}
	.m_mycarNav .mycarNav_cont {
		width: 718px;
		height: 35px;
	}
	.m_mycarNav .mycarNav_cont ul {
		width: 718px;
		height: 35px;
	}
	.m_mycarNav .mycarNav_cont ul li {
		padding: 7px 12px;
		float: left;
		border-top: 1px solid #c5c5c5;
		border-left: 1px solid #c5c5c5;
		border-right: 1px solid #c5c5c5;
		text-align: center;
		margin-right: 4px;
		font-size: 14px;
		border-top-left-radius: 4px;
		border-top-right-radius: 4px;
		color: #1978cf;
		cursor: pointer;
		box-shadow:1px 1px 3px #e8e8e8 inset; 
		font-weight: 400;
		border-bottom: 1px solid #c5c5c5;
	}
	.m_mycarNav .mycarNav_cont .m_mycarNav_sty {
		color: #535455;
		font-weight: bold;
		border-bottom: 1px solid #FFFFFF;
	}
	.m_mycarNav .mycarNav_cont ul li:hover {
		color: #535455;
		font-weight: bold;
	}
</style>