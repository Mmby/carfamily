<template>
	<div class="m_morder">
		<div class="morder_cont">
			<div class="order_options">
				<span class="option_aft">全部</span>
				<span>未使用</span>
				<span>已过期</span>
				<span>已退款</span>
				<span>待评价</span>
				<span>美梦成真</span>
			</div>
			<div class="order_list">
				<table>
					
					
					
					
					<tr class="list_head">
						<th style="width: 280px;">团购项目</th>
						<th style="width: 50px;">数量</th>
						<th style="width: 90px;">金额</th>
						<th style="width: 112px;">订单状态</th>
						<th style="width: 126px;">操作</th>
					</tr>
					<tr class="buy_hide">
						<td class="list_title">
							<img :src="himg" alt="" /><span class="m_shops_title">{{hname}}</span>
						</td>
						<td><span>{{hbuynum}}</span></td>
						<td>¥<span>{{hmoney}}</span></td>
						<td><p class="whether_money">已付款</p><p class="m_order_intro">订单详情</p></td>
						<td class="m_shops_ope"><router-link to="/payment" class="m_shops_btn">退款</router-link><p class="m_order_remove">删除订单</p></td>
					</tr>
					<tr>
						<td class="list_title">
							<img src="../../assets/order/mcar1.png" alt="" /><span class="m_shops_title">新MinniCooper无伪装谍照新无伪装谍照伪装谍照伪装谍照</span>
						</td>
						<td><span>1</span></td>
						<td>¥<span>30</span></td>
						<td><p class="whether_money">未付款</p><p class="m_order_intro">订单详情</p></td>
						<td class="m_shops_ope"><router-link to="/payment" class="m_shops_btn">付款</router-link><p class="m_order_remove">删除订单</p></td>
					</tr>
					<tr>
						<td class="list_title">
							<img src="../../assets/order/mcar1.png" alt="" /><span class="m_shops_title">新MinniCooper无伪装谍照新无伪装谍照伪装谍照伪装谍照</span>
						</td>
						<td><span>1</span></td>
						<td>¥<span>30</span></td>
						<td><p class="whether_money">未付款</p><p class="m_order_intro">订单详情</p></td>
						<td class="m_shops_ope"><router-link to="/payment" class="m_shops_btn">付款</router-link><p class="m_order_remove">删除订单</p></td>
					</tr>
					
					
					
					
					</table>
				<div class="alert_remove">
					<div class="m_alert_top">
						<p class="m_remove_top">来自网页的消息</p><span class="m_remove_close">╳</span>
					</div>
					<div class="remove_open">
						<img src="../../assets/order/mquestion1.png" alt="" /><span class="m_remove_word">取消后该订单会消失,确认消失？</span>
					</div>
					<button class="m_remove_yes">确定</button><button class="m_remove_no">取消</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Morder",
		data(){
			return {
				himg:window.sessionStorage.bimg,
				hname:window.sessionStorage.bintro,
				hbuynum:window.sessionStorage.bnum,
				hmoney:window.sessionStorage.zongjine,
				hbuynum:window.sessionStorage.bnum,
				hbuynum:window.sessionStorage.bnum,
				hbuynum:window.sessionStorage.bnum
			}
		},
		mounted(){
			$(".order_options span").on("click",function() {
				$(this).addClass("option_aft").siblings().removeClass("option_aft");
			})
			
			$(".m_order_remove").on("click",function() {
				var _this=$(this);
				$(".alert_remove").fadeIn();
				$(".m_remove_yes").on("click",function() {
				_this.closest("tr").remove();
				$(".alert_remove").fadeOut();
			})
			})
			$(".m_remove_no").on("click",function() {
				$(".alert_remove").fadeOut();
			})
			$(".m_remove_close").on("click",function() {
				$(".alert_remove").fadeOut();
			})
			
			
		}
	}
</script>

<style>
	
	/**/
	.buy_hide img{
		width: 75px;
		height: 45px;
	}
	.m_shops_title{
		
	}
	/**/
	.m_morder {
		width: 977px;
		height: 600px;
		margin: auto;
	}
	.m_morder .morder_cont {
		width: 718px;
		height: 557px;
	}
	.m_morder .morder_cont .order_options {
		width: 660px;
		height: 34px;
		margin: auto;
		padding-top: 30px;
		font-size: 0;
		border-bottom: 1px solid #dcdcdc;
	}
	.m_morder .morder_cont .order_options span {
		display: inline-block;
		font-size: 12px;
		padding: 5px 8px 4px 8px;
		color: #1978cf;
		cursor: pointer;
	}
	.m_morder .morder_cont .order_options .option_aft {
		background-color: #5a97d4;
		color: white;
	}
	.m_morder .morder_cont .order_list {
		width: 660px;
		height: 461px;
		margin: 10px auto 0;
		border: 1px solid #e5e5e5;
		font-size: 12px;
		text-align: center;
		vertical-align: middle;
		position: relative;
	}
	 table {
		border-collapse: collapse;
	}
	tr {
		border-bottom: 1px dashed #c5c5c5;
	}
	.m_morder .morder_cont .order_list .list_head {
		height: 35px;
		background-color: #f7f7f7;
		border-bottom: 1px solid #C5C5C5;
		border-collapse: collapse;
	}
	.m_morder .morder_cont .order_list .list_title {
		text-align: left;
		position: relative;
		padding: 12px 0 12px 10px;
	}
	.m_morder .morder_cont .order_list .list_title .m_shops_title {
		display: inline-block;
		height: 30px;
		width: 194px;
		position: absolute;
		top: 10px;
		left: 90px;
		color: #646464;
	}
	.m_morder .morder_cont .order_list .whether_money {
		color: #646464;
	}
	.m_morder .morder_cont .order_list .m_order_intro,.m_order_remove {
		color: #1978cf;
		cursor: pointer;
	}
	.m_morder .morder_cont .order_list .m_shops_btn {
		cursor: pointer;
		background-color: #5a97d4;
		color: #fff;
		outline: none;
		border-width: 0;
		border-radius: 0;
		padding: 2px 4px;
	}
	.m_morder .morder_cont .order_list .alert_remove {
		width: 345px;
		height: 182px;
		border: 1px solid #213f7b;
		box-shadow:  0 0 3px 3px #b2b2b3;
		background-color: #FFFFFF;
		position: absolute;
		left: 190px;
		top: 96px;
		display: none;
	}
	.m_morder .morder_cont .order_list .alert_remove .m_alert_top {
		width: 345px;
		height: 34px;
		background-color: #213f7b;
		line-height: 34px;
		text-align: left;
		position: relative;
	}
	.m_morder .morder_cont .order_list .alert_remove .m_alert_top .m_remove_top {
		display: inline-block;
		padding-left: 16px;
		color: #fff;
		font-size: 20px;
	}
	.m_morder .morder_cont .order_list .alert_remove .m_remove_close {
		width: 28px;
		height: 28px;
		line-height: 28px;
		background-color: #193166;
		position: absolute;
		font-size: 10px;
		color: #FFFFFF;
		cursor: pointer;
		right: 4px;
		bottom: 0;
		text-align: center;
	}
	.m_morder .morder_cont .order_list .alert_remove .remove_open {
		width: 281px;
		height: 33px;
		line-height: 33px;
		margin: 30px auto 26px;
		font-size: 15px;
	}
	.m_morder .morder_cont .order_list .alert_remove .remove_open .m_remove_word {
		padding-left: 18px;
	}
	.m_morder .morder_cont .order_list .alert_remove button {
		width: 69px;
		height: 35px;
		background-color: #315aac;
		color: #fff;
		outline: none;
		border-width: 0;
		font-size: 14px;
		font-weight: 500;
		margin: 0 11px;
		cursor: pointer;
	}
</style>