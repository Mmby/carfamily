<template>
	<div class="eva">
		<div class="eva_top">
			<div class="eva_top_block"></div>
			<span class="eva_top_text1">热门评测</span>
			<span class="eva_top_text2">更多>></span>
		</div>
		<div class="eva_bot">
			<ul class="eva_bot_l">
				<li>
					<img src="../../assets/eva1.png" class="eva_bot_img"/>
					<span class="eva_title">北京博瑞奔驰</span>
					<span class="eva_cont">这款全新的奥迪豪华版价格还行, 打算明天去买辆, 就电脑上查看有关这车的信息...</span>
					<img src="../../assets/eva_hot.png" class="eva_bot_icon"/>
				</li>
				<li></li>
				<li>
					<img src="../../assets/eva2.png" class="eva_bot_img"/>
					<span class="eva_title">百得利奥迪</span>
					<span class="eva_cont">这款全新的奥迪7价格还行, 明天入手</span>
					<img src="../../assets/eva_hot.png" class="eva_bot_icon"/>
				</li>
			</ul>
			<ul class="eva_bot_r">
				<li>
					<img src="../../assets/eva3.png" class="eva_bot_img"/>
					<span class="eva_title">亚之杰伯乐</span>
					<span class="eva_cont">这款奥迪非常的豪华,我很喜欢!</span>
					<img src="../../assets/eva_hot.png" class="eva_bot_icon"/>
				</li>
				<li></li>
				<li>
					<img src="../../assets/eva4.png" class="eva_bot_img"/>
					<span class="eva_title">试驾很舒适</span>	
					<span class="eva_cont">今天试驾非常的完美, 改天攒钱就买一辆!</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
		export default {
		name:"evaluating",
		data(){
			return {

			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	div,img,li,ul{
		padding: 0;
		margin: 0;
	}
	.eva_top{
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
	.eva_top_block{
		position: absolute;
		width: 4px;
		height: 43px;
		background: #213f7b;
		left: 0;
		top: 0;
		
	}
	.eva_top_text1{
		font-weight: 800;
		padding-left: 16px;
	}
	.eva_top_text2{
		padding-left: 575px;
		font-size: 13px;
	}
	ul,li{
		list-style: none;
	}
	
	.eva_bot{
		width: 721px;
		height: 196px;
		border: 1px solid #c5c5c5;
		margin-top: 10px;
		background-color: #ffffff;
	}
	.eva_bot_l{
		width: 360px;
		height: 196px;
		display: inline-block;
		border-right: 1px solid #c5c5c5;
		position: relative;
		float: left;
	}
	.eva_bot_r{
		width: 360px;
		height: 196px;
		display: inline-block;
		position: relative;
		float: left;
	}
	.eva_bot ul li:nth-child(2){
		height: 1px;
		width: 339px;
		background: #c5c5c5;
		position: absolute;
		top: 99px;
		left: 10px;
	}
	
	.eva_bot ul li:first-child{
		width: 342px;
		height: 59px;
		/*background: pink;*/
		position: absolute;
		top: 24px;
		left: 10px;
	}
	.eva_bot ul li:last-child{
		width: 342px;
		height: 59px;
		/*background: pink;*/
		position: absolute;
		bottom: 14px;
		left: 10px;
	}
	.eva_title{
		display: inline-block;
		position: absolute;
		top: 4px;
		left: 73px;
		line-height: 18px;
		font-size: 14px;
		color: #005ea7;
		width: 269px;
	}
	.eva_cont{
		display: inline-block;
		position: absolute;
		width: 269px;
		top: 22px;
		left: 73px;
		font-size: 13px;
		line-height: 20px;
		color: #8c8a8a;	
	}
	.eva_title:hover{
		color: red;
		text-decoration: underline;
	}
	ul li .eva_bot_img{
		display: inline-block;
		width:51px;
		height: 51px;
		position: absolute;
		top: 0;
		left: 2px;	
	}
	.eva_bot_icon{
		display: inline-block;
		position: absolute;
		left: 44px;
		bottom: 48px;
	}
</style>