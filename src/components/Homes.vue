<template>
	<div class="home"> 
		<div class="home_left">
			<div class="home_left1"><commodity-class></commodity-class></div>
			<div class="home_left2"><home-swiper></home-swiper></div>
			
			

			
			<!--商家促销-->
			<promotion class="home_promotion"></promotion>
			<!--清洗美容-->
			<wash-beaut class="home_wash"></wash-beaut>
			<!--限时抢购-->
			<robbuy></robbuy>
			<!--广告-->
			<div class="homes_adver">
				<img src="../assets/homes_adver.jpg"/>
			</div>
			<!--热门评测-->
			<evaluating class="home_eva"></evaluating>
			<!--社区动态-->
			<state></state>
		</div>
		<div class="home_right">
			<add-store class="home_add_store"></add-store>
			<download></download>
			<!--热门专题-->
			<hots class="homes_hots"></hots>
			<ranking></ranking>
			<!-- 抽奖-->
			<lottery class="homes_lottery"></lottery>
			<!--咨询-->
			<refer></refer>
		</div>
		
	</div>
</template>

<script>
	import HomeSwiper from './home/HomeSwiper'
	import Promotion from './home/Promotion'
	import CommodityClass from './home/CommodityClass'
	import WashBeaut from './home/WashBeaut'
	import Robbuy from './home/Robbuy'
	import Evaluating from './home/Evaluating'
	import State from './home/State'
	import AddStore from './home/AddStore'
	import Download from './home/Download'
	import Hots from './home/Hots'
	import Ranking from './home/Ranking'
	import Refer from './home/Refer'
	import Lottery from './group/Lottery'
	export default {
		name:"Homes",
		components: {
			HomeSwiper,
			CommodityClass,
			Promotion,
			WashBeaut,
			Robbuy,
			Evaluating,
			State,
			AddStore,
			Download,
			Hots,
			Ranking,
			Lottery,
			Refer

		},
		data(){
			return {

			}
		},
		methods:{
			
		},
		mounted(){
			$(".w_navContL span").eq(0).css("background","#101f4b");
		}
	}
</script>

<style>

	.home{
		width: 977px;
		margin: 0 auto;
		padding-bottom: 28px;
		padding-top: 10px;
		position: relative;
	}
	.home_left{
		width: 723px;
	}
	.home_left1{
		margin-bottom: 11px;
		z-index: 20;
	}
	.home_left2{
		position: absolute;
		left: 192px;
		top: 10px;
		z-index: 1;
	}
	
	.home_left,.home_right{
		display: inline-block;
	}
	.homes_adver{
		width: 721px;
		border: 1px solid #c5c5c5;
		margin-bottom: 10px;
	}
	.home_wash{
		margin-bottom: 32px !important;
	}
	.home_eva{
		margin-bottom: 20px !important;
	}
	.home_right{
		float: right;
	}
	.home_add_store{
		margin-bottom: 11px;
	}
	.homes_hots{
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.homes_lottery{
		margin-top: 10px;
		margin-bottom: 11px;
	}
</style>