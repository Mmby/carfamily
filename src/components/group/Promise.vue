<template>
	<div class="w_promise">
		<div class="w_promise_title">
			<span>车族网承诺</span>
		</div>
		<div class="w_promise_img">
			<img src="../../assets/icon/images/1-团购_2013.7.6(1)_03.jpg"/>
		</div>
		<div class="w_promise_bottom">
			<span class="w_promise_left">7天退款</span>
			<span class="w_promise_center">品质保证</span>
			<span class="w_promise_right">过期退款</span>
		</div>
	</div>
</template>

<style>
	@import url("../../css/public.css");
	.w_promise{
		width: 236px;
		height: 105px;
		background-color: white;
		border: 1px solid #c5c5c5;
	}
	.w_promise_title{
		width: 100%;
		height: 40px;
		background: #f9f9f9;
		text-align: center;
		line-height: 40px;
		font-size: 18px;
		color: #034886;
		font-weight: 900;
	}
	.w_promise_bottom{
		font-size: 12px;
		color: #034886;
		font-weight: 500;
		background-color: white;
	}
	.w_promise_left{
		margin-left:18px;
	}
	.w_promise_center{
		margin-left:28px;
	}
	.w_promise_right{
		margin-left:28px;
	}
</style>

<script>
	export default {
		name:"Promise",
		data(){
			return {
			}
		},
		methods:{		
		},
		created:function(){	
		}
	}
</script>

