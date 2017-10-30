<template>
	<div class="addStore">
		<!--添加我的店-->
		<div id="addStore">
			<span>添加我的店</span>
		</div>
		<!--广告-->
		<div class="add_layout">
			<img src="../../assets/荣威550.jpg"/>
		</div>
		<div class="add_layout">
			<img src="../../assets/野马V6.jpg"/>
		</div>
	</div>
</template>

<script>
		export default {
			name:"addStore",
			data(){
				return {
	
				}
			},
			methods:{
				
			}
	}
</script>

<style scoped>
	
	.addStore{
		width: 238px;
		
	}
	#addStore{
		width: 236px;
		height: 48px;
		border: 1px solid #c5c5c5;
		background: white;
		background-image: url(../../assets/加号.png);
		background-position: 15px 16px;
		background-repeat: no-repeat;
		background-size: 17px;
		color: #005bac;
		font-size: 18px;
		line-height: 48px;
		text-indent: 41px;
		
	}
	.add_layout{
		width: 236px;
		height: 96px;
		border: 1px solid #c5c5c5;
		margin-top: 10px;
	}
</style>