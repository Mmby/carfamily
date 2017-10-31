<template>
<!--最近浏览记录-->
	<div class="record">
		<div class="record_title">最近浏览过<span>清空</span></div>
		<ul>
			<li v-for="item in recordArr">
				<img src="../../assets/record/record1.png"/>
				<div class="record_cont">
					【2店通用】和平里4s仅1650元享原价3760元
				</div>
				<div class="record_buy">
					<span>
						27
					</span>人已购买
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"record",
		data(){
			return {
				recordArr:[1,2,3,4,5,6]
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
	.record{
		background-color: white;
		width: 236px;
		height: 378px;
		border: 1px solid #c5c5c5;
		overflow: hidden;
	}
	.record ul{
		margin-left: 15px;
		width: 221px;
	}
	.record ul li{
		width: 221px;
		height: 54px;
		margin-top: 27px;
		position: relative;
	}
	.record_title{
		font-size: 14px;
		line-height: 14px;
		font-weight: 800;
		text-indent: 15px;
		margin-top: 24px;
		
	}
	.record_title span{
		font-size: 12px;
		line-height: 14px;
		font-weight: 600;
		margin-left: 110px;
		color: #096edf;
	}
	/*.record ul li{
		position: absolute;
		background: pink;
	}*/
	.record ul li img{
		position: absolute;
		display: inline-block;
		width: 81px;
		height: 49px;
		top: 4px;
		
	}
	.record_cont{
		position: absolute;
		font-size: 12px;
		line-height: 16px;
		left: 90px;
		top: 0;
		width: 127px;
		color: #666666;
	}
	.record_buy{
		font-size: 12px;
		line-height: 18px;
		position: absolute;
		left: 90px;
		top: 41px;
		color: #666666;
	}
	.record_buy span{
		color: #d54242;
		font-size: 16px;
		line-height: 18px;
		font-weight: 800;
	}
</style>