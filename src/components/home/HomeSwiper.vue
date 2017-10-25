<template>
	<div class="homeSwiper"> 
		<div class="content" style="left:0;">
			<div><img src="../../assets/car1.png"/></div>
			<div><img src="../../assets/car2.png"/></div>
			<div><img src="../../assets/car3.png"/></div>
			<div><img src="../../assets/car4.png"/></div>
			
			
		</div>
		<div class="pageDiv">
			<span class="active"></span>
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
</template>

<script>
	export default {
		name:"homeSwiper",
		data(){
			return {
				

				
			}
		},
		methods:{
			
		}
	}
	//轮播图效果	
	var num = 1;
	var timer = setInterval(function(){
		if (num > 3) {
			num = 1;
		}else{
			num++;
		}
		$(".content div").removeClass();
	$(".content div").eq(num).addClass("show").siblings().addClass("hide");
	$(".pageDiv span").eq(num - 1).addClass("active").siblings().removeClass("active")
	},2000);


</script>

<style scoped>
	img{
		vertical-align: top;
	}
	.homeSwiper{
		width: 529px;
		height: 265px;
		overflow: hidden;
		position: relative;
	}
	.homeSwiper .content{
		width:100%;
		height: 100%;
	}
	.homeSwiper .content img{
		width: 100%;
		height: 100%;
	}
	.homeSwiper .show{
		display: block;
	}
	.homeSwiper .hide{
		display: none;
	}
	/*.homeSwiper .pageDiv .active{
		background-color: ;
	}*/
	.homeSwiper .pageDiv{
		position: absolute;
		bottom: 6px;
		right: 35px;
	}
	.pageDiv span{
		display: inline-block;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		z-index: 100;
		background-color: white;
		text-indent: 20px;
	}
	.pageDiv .active{
		background-color:red !important;
		width: 10px;
		height: 10px;
		z-index: 100;
	}
</style>