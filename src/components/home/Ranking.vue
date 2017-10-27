<template>
	<div class="ranking">
		<!--热门排行榜-->
		<div class="ranking_title">热卖排行榜</div>
		<ul class="ranking_list">
			<li v-for="(item,index) in rankingArr">
				<div class="ranking_list_title">
					<span class="ranking_num">{{index+1}}</span>
					<span class="ranking_list_title1">【朝阳东四店】第三带全时轿车</span>
				</div>
				<div class="ranking_img">
					<img src="../../assets/ranking/ranking1.png"/>
				</div>
				<div class="ranking_price">
					¥<span>98</span>
				</div>
				<div class="ranking_hasbuy">
					每月<span>60</span>人已购买
				</div>
				
			</li>
			
		</ul>
		
	</div>
</template>

<script>
	export default {
		name:"ranking",
		data(){
			return {
				rankingArr:[1,2,3,4,5,6]
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.ranking{
		width: 236px;
		height: 558px;
		background: white;
		border: 1px solid #c5c5c5;
		overflow: hidden;
	}
	.ranking_title{
		font-size: 14px;
		font-weight: 800;
		line-height: 36px;
		margin-top: 5px;
		margin-left: 15px;
	}
	.ranking_list{
		margin-left:15px;
	}
	.ranking_list li{
		width: 221px;
		height: 103px;
		position: relative;
		
	}
	.ranking_list_title{
		font-size: 12px;
		line-height: 15px;
		height: 15px;
		position: absolute;
		left: 0;
		top: 14px;
		/*background: pink;*/
	}
	.ranking_list_title1{
		font-size: 12px;
		display: inline-block;
	}
	.ranking_list_title .ranking_num{
		text-align: center;
		display: inline-block;
		width: 15px;
		height: 15px;
		border-radius: 3px;
		background-color: #1376ce;
	}
	.ranking_img{
		position: absolute;
		width: 81px;
		height: 49px;
		left: 0;
		top: 42px;
	}
	.ranking_img img{
		width: 100%;
		height: 100%;
	}
	.ranking_price{
		font-size: 12px;
		font-weight: 700;
		color: #e93a44;
		line-height: 12px;
		position: absolute;
		left: 92px;
		top: 56px;
	}
	.ranking_hasbuy{
		font-size: 12px;
		line-height: 12px;
		color: #999999;
		position: absolute;
		top: 78px;
		left: 92px;
	}
</style>