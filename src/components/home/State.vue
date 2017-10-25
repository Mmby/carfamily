<template>
	<div class="state">
		<div class="state_top">
			<div class="state_top_block"></div>
			<span class="state_top_text1">社区动态</span>
			<span class="state_top_text2">更多>></span>
		</div>
		<div class="state_bot">
			<ul>
				<li>
					<img src="../../assets/state1.png"/>
					<div><span>【嗮单贴】</span>这个可以有! 瑞虎升全车</div>
					<div><span>【嗮单贴】</span>来给爱车做个SPA 比亚迪</div>
					<div><span>【车族资讯】</span>通用拒绝提供点技术 PSA电</div>
				</li>
				<li>
					<img src="../../assets/state2.png"/>
					<div><span>【嗮单贴】</span>这个可以有! 瑞虎升全车</div>
					<div><span>【嗮单贴】</span>来给爱车做个SPA 比亚迪</div>
					<div><span>【车族资讯】</span>通用拒绝提供点技术 PSA电</div>
				</li>
				<li>
					<img src="../../assets/state2.png"/>
					<div><span>【嗮单贴】</span>这个可以有! 瑞虎升全车</div>
					<div><span>【嗮单贴】</span>来给爱车做个SPA 比亚迪</div>
					<div><span>【车族资讯】</span>通用拒绝提供点技术 PSA电</div>
				</li>
				<li>
					<img src="../../assets/state1.png"/>
					<div><span>【嗮单贴】</span>这个可以有! 瑞虎升全车</div>
					<div><span>【嗮单贴】</span>来给爱车做个SPA 比亚迪</div>
					<div><span>【车族资讯】</span>通用拒绝提供点技术 PSA电</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
		export default {
		name:"state",
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

<style>
	.state_top{
			width: 722px;
			height: 43px;
			border: 1px solid #c5c5c5;
			background-color: #ffffff;
			border-left: none;
			position: relative;
			font-size: 16px;
			color: #213f7b;
			line-height: 43px;
			
			/*margin-bottom: 10px;*/
			
		}
	.state_top_block{
		position: absolute;
		width: 4px;
		height: 43px;
		background: #213f7b;
		left: 0;
		top: 0;
		
	}
	.state_top_text1{
		font-weight: 800;
		padding-left: 16px;
	}
	.state_top_text2{
		padding-left: 575px;
		font-size: 13px;
	}
	ul,li{
		list-style: none;
	}
	.state_bot{
		background-color: #ffffff;
		width: 721px;
		height: 190px;
		border: 1px solid #c5c5c5;
		margin-top: 10px;
	}
	.state_bot ul{
		width: ;
		margin-top: 19px;
		background: pink;
	}
	.state_bot ul li{
		display: inline-block;
		margin-left: 11px;
		float: left;
		width: 349px;
		height: 75px;
		position: relative;
		
	}
	.state_bot ul li img{
		display: inline-block;
		/*position: absolute;
		left: 0;
		top: 3px;*/
		margin-top: 3px;
		float: left;
	}
	.state_bot ul li div{
		display: inline-block;
		width: 250px;
		/*background: gold;*/
		line-height: 25px;
		color: #626161;
		font-size: 12px;
		float: left;
	}
	.state_bot ul li div span{
		display: inline;
		padding-left: 5px;
		/*color: #626161;*/
		color: #005bac;
		
	}
	.state_bot ul li div:hover{
		color: red;
	}
</style>