<template>
	<div class="hots">
		<!--热门排行榜-->
		<div class="hots_title">热门专题</div>
		<ul class="hots_list">
			<li v-for="item in hotsArr">
				
				<div class="hots_img">
					<!--<img src="../../assets/hots/ranking1.png"/>-->
					<img src="../../assets/ranking/ranking1.png"/>
				</div>
				
				<div class="hots_list_title">
					<span>新奥迪7豪华版</span>
				</div>
				<div class="hots_list_cont">
					第三代全时科技数字桥
				</div>
				<div class="hots_hasbuy">
					<span>460</span>人已购买
				</div>
				
			</li>
			
		</ul>
		
	</div>
</template>

<script>
	export default {
		name:"hots",
		data(){
				return (
					{
					hotsArr:[1,2,3,4,5,6]
					}
				)
				
			}
		
	}
</script>

<style scoped>
	.hots{
		width: 236px;
		height: 376px;
		background: white;
		border: 1px solid #c5c5c5;
		overflow: hidden;
	}
	.hots_title{
		font-size: 14px;
		font-weight: 800;
		line-height: 36px;
		margin-top: 5px;
		margin-left: 15px;
	}
	.hots_list{
		margin-left:15px;
		width: 221px;
		height: 600px;
	}
	
	.hots_list li{
		width: 221px;
		height: 82px;
		position: relative;
	}
	.hots_img{
		position: absolute;
		left: 0;
		top: 15px;
	}
	.hots_img img{
		width: 81px;
		height: 49px;
	} 
	.hots_list_title{
		font-size: 14px;
		line-height: 14px;
		font-weight: 800px;
		position: absolute;
		left: 90px;
		top: 15px;
	}
	.hots_list_cont{
		font-size: 12px;
		line-height: 12px;
		position: absolute;
		left: 90px;
		top: 35px;
		color: #999999;
	}
	.hots_hasbuy{
		font-size: 12px;
		line-height: 12px;
		position: absolute;
		left: 90px;
		top: 51px;
		color: #999999;
	}
	.hots_hasbuy span{
		color: black;
		font-weight: 700;
	}
	
</style>