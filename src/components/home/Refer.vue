<template>
	<div class="refer">
		<div class="refer_title">
			<span class="refer_title_til">车族咨询</span>
			<span class="refer_title_more">更多>></span>
		</div>
		<ul>
			<li v-for="item in referArr">
				<div>驾考新规月1日实施 项目更注重实际操作</div>
				<div>2012-12-24</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"refer",
		data(){
			return {
				referArr:[1,2,3,4,5]
			}
		}
	}
</script>

<style>
	.refer{
		background: url(referbg.jpg);
		width: 238px;
		height: 390px;
		overflow: hidden;
	}
	.refer_title{
		height: 58px;
		width: 100%;
		padding-top: 3px;
		line-height: 58px;
	}
	.refer_title_til{
		font-size: 16px;
		font-weight: 700;
		color: black;
		text-indent: 15px;
		display: inline-block;
	}
	.refer_title_more{
		display: inline-block;
		font-size: 12px;
		color: #1b5495;
		text-indent: 100px;
		font-weight: 600;
	}
	.refer ul li{
		height: 64px;
		padding-left: 26px;
		padding-right: 23px;
		padding-bottom: 21px;
		line-height: 22px;
		font-size: 12px;
		color: black;
	}
</style>