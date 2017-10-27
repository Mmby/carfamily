<template>
	<div id="app">
		<heads></heads>
		<!--<publicheader></publicheader>-->
		<!--<promotion></promotion>
		<wash-beaut></wash-beaut>
		<robbuy></robbuy>
		<evaluating></evaluating>
		<state></state>-->
		<!--<record></record>-->
		<!--<ranking class="app_product"></ranking>-->
		<!--<shopping-cart></shopping-cart>-->
		<div class="app_cont">
		
			<router-view></router-view>
		</div>
		
		<foots></foots>
		<!--<download></download>-->
		<!--<commodity-class></commodity-class>-->
		
	</div>
</template>

<script>

import CommodityClass from './components/home/CommodityClass'
import HomeSwiper from './components/home/HomeSwiper'
import Heads from './components/home/Heads'
import Homes from './components/Homes'
import Foots from './components/foots/Foots'
import Promotion from './components/home/Promotion'
import WashBeaut from './components/home/WashBeaut'
import Robbuy from './components/home/Robbuy'
import Evaluating from './components/home/Evaluating'
import State from './components/home/State'
//import GpClass from './components/goup/GpClass'
import ShoppingCart from './components/shopping/ShoppingCart'
//import Publicheader from './components/Publicheader'



	export default {
		name: 'app',
		components: {
			Homes,
			Heads,
			CommodityClass,
			HomeSwiper,
			Foots,
			Promotion,
			WashBeaut,
			Robbuy,
			Evaluating,
			State,
//			GpClass,
			ShoppingCart
//			,
//			Publicheader

		},
		mounted(){

		}
	}
</script>

<style>
	div,p,img,li,ul,h1,h2,h3,h4,a{
		padding: 0;
		margin: 0;
	}
	.app_product{
		margin-left: 100px;
	}
	ul,li{
		list-style: none;
	}
	img{
		vertical-align: top;
	}
	a{
		text-decoration: none;
	}
	.nav_active{
		background: #101f4b;
		color: red;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		min-width: 1000px;
		
		/*text-align: center;
		color: #2c3e50;*/
		
	}
	.app_cont{
		background: #e9e9e9;
	}
</style>