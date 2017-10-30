<template>
		<div class="w_lotterys">
			<!--参与成功组件-->
			<div class="lotterys_cont">
				<raffilesuccess></raffilesuccess>
			</div>
			<!--右侧-->
			<div class="w_lotterys_right">
				<!--客服-->
				<mcarserve></mcarserve>
				<!--热门专题-->
				<hots class="w_lotterys_hot"></hots>
			</div>
		</div>
</template>

<script>
	import Raffilesuccess from './raffile/Raffilesuccess'
	import Mcarserve from './mycar/Mycarserve'
	import Hots from './home/Hots'
	export default{
		name:"Lotterys",
		components:{
			Raffilesuccess,
			Mcarserve,
			Hots
		}
	}
</script>

<style scoped>
	.w_lotterys{
		width: 977px;
		margin: 0 auto;
		position: relative;
	}
	.w_lotterys_right{
		position:absolute;
		left:740px;
		top: 40px;
	}
	.w_lotterys_hot{
		margin-top: 10px;
	}
</style>