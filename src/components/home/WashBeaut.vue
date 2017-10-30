<template>
	<div class="washBeautiful">
		<div class="washBeautiful_top">
			<div class="washBeautiful_top_block"></div>
			<span class="washBeautiful_top_text1">清洗美容</span>
			<span class="washBeautiful_top_text2">更多>></span>
		</div>
		<div class="wash_bot">
			<div class="wash_bot_l">
				<ul>
					<li v-for="item in washbotArr">{{item}}</li>
				</ul>
				
			</div>
			<ul class="wash_bot_r">
				<li><img src="../../assets/wash2.png"/></li>
				
				<li>
					<img src="../../assets/wash3.png"/>
					<div class="wash_bot_text">第三代全时科技,全新奥迪7豪华版</div>
					<div class="wash_bot_price">
						<span class="wash_price1">门店价 &nbsp;
							<span  class="wash_price1_a">¥120</span>
						</span>
						<span class="wash_price2">¥60</span>
					</div>
				</li>
				<li>
					<img src="../../assets/wash4.png"/>
					<div class="wash_bot_text">第三代全时科技,全新奥迪7豪华版</div>
					<div class="wash_bot_price">
						<span class="wash_price1">门店价 &nbsp;
							<span  class="wash_price1_a">¥120</span>
						</span>
						<span class="wash_price2">¥60</span>
					</div>
				</li>
				<li>
					<img src="../../assets/wash5.png"/>
					<div class="wash_bot_text">第三代全时科技,全新奥迪7豪华版</div>
					<div class="wash_bot_price">
						<span class="wash_price1">门店价 &nbsp;
							<span  class="wash_price1_a">¥120</span>
						</span>
						<span class="wash_price2">¥60</span>
					</div>
				</li>
				<li>
					<img src="../../assets/wash6.png"/>
					<div class="wash_bot_text">第三代全时科技,全新奥迪7豪华版</div>
					<div class="wash_bot_price">
						<span class="wash_price1">门店价 &nbsp;
							<span  class="wash_price1_a">¥120</span>
						</span>
						<span class="wash_price2">¥60</span>
					</div>
				</li>
			</ul>
		</div>
		<img src="../../assets/wash1.png" class="washBeautiful_oimg"/>
	</div>
</template>

<script>
	export default {
		name:"washBeaut",
		data(){
			return {
				washbotArr:["汽车美容","汽车装饰","维修保养","汽车改装","内饰用品","外饰装潢","维修保养","汽车改装","汽车美容","汽车装饰","维修保养","汽车改装","内使用品","外饰装潢","维修保养","汽车改装","汽车美容","汽车装饰","维修保养","汽车改装"]
			}
		},
		methods:{
			
		}
			

	}
	
	
</script>

<style scoped>
	ul,li,div,p,img{
		padding: 0;
		margin: 0;
	}
	ul,li{
		list-style: none;
	}
	.washBeautiful{
		position: relative;
	}
	.washBeautiful_oimg{
		position: absolute;
		left: 0;
		bottom: 0;
		width: 176px;
		height: 117px;
	}
	.washBeautiful_top{
		width: 722px;
		height: 43px;
		border: 1px solid #c5c5c5;
		background: #ffffff;
		border-left: none;
		position: relative;
		font-size: 16px;
		color: #213f7b;
		line-height: 43px;
		
		/*margin-bottom: 10px;*/
		
	}
	.washBeautiful_top_block{
		position: absolute;
		width: 4px;
		height: 43px;
		background: #213f7b;
		left: 0;
		top: 0;
		
	}
	.washBeautiful_top_text1{
		font-weight: 800;
		padding-left: 16px;
	}
	.washBeautiful_top_text2{
		padding-left: 575px;
		font-size: 13px;
	}
	.wash_bot{
		
		width: 723px;
		/*height: 356px;*/
	}
	.wash_bot:after{
		content: "";
		display: block;
		clear: both;
	}
	/*左边部分*/
	.wash_bot_l{
		width: 174px;
		height: 344px;
		padding-top: 10px;
		margin-top: 10px;
		border: 1px solid #c5c5c5;
		background: #ffffff;
		
		float: left;
	}
	.wash_bot_l li{
		
		display: inline-block;
		width: 77px;
		padding-left: 10px;
		float: left;
		font-size: 12px;
		line-height: 22px;
		color: #565353;
	}
	.wash_bot_l li:hover{
		text-decoration: underline;
	}
	.wash_bot_r{
		/*width: 700px;*/
		/*width: 560px;*/
		height: 356px;
		font-size: 13px ;
	}
	.wash_bot_r img{
		vertical-align: top;
	}
	.wash_bot_r li:first-child{
		margin-left: 6px;
		/*margin-top: 10px;*/
		float: left;
		border: 1px solid #c5c5c5;
		width: auto;
		height: 171;
	}
	.wash_bot_r li:first-child img{
		margin: 0;
		width: 357px;
		height: 171px;
	}
	/*重复的样式*/
	.wash_bot_r li{
		background: #ffffff;
		/*width: 174px;*/
		width: 174px;
		height: 171px;
		margin-top: 10px;
		margin-left: 6px;
		border:1px solid #c5c5c5;
		/*background: yellow;*/
		/*display: inline-block;*/
		float: left;
		
	}
	.wash_bot_r:after{
		content:"";
		display: block;
		clear: both;
	}
	.wash_bot_r li img{
		margin: 3px;
	}
	.wash_bot_text{
		color: #565353;
		padding-left: 7px;
		padding-right: 7px;
		padding-top: 5px;
		
	}
	.wash_bot_price{
		padding-left: 7px;
	}
	.wash_price1{
		color:#8c8a8a;
		font-size: 13px;
	}
	.wash_price2{
		float: right;
		margin-right: 8px;
		color: #e40d1a;
		margin-left: 5px;
		font-size: 14px;
	}
	.wash_price1 .wash_price1_a{
		font-size: 10px !important;
		color: #8c8a8a;
	}
	.wash_bot_text:hover{
		color: #005ea7;
		text-decoration: underline;
	}
</style>