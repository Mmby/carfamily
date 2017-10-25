<template>
	<div class="download">
		<ul class="download_ul">
			<!--logo-->
			<li>
				
			</li>
			<li>车族手机版</li>
			<li>iphone | Android</li>
			<li>
				<a href="https://down.mumayi.com/908238">免费下载<span></span></a>
			</li>
		</ul>
		<ul class="download_ul">
			<!--logo-->
			<li>
				
			</li>
			<li>车族手机版</li>
			<li>iphone | Android</li>
			<li>
				<a href="https://down.mumayi.com/908238">免费下载<span></span></a>
				
				
			</li>
		</ul>
		<ul class="download_ul">
			<!--logo-->
			<li>
				
			</li>
			<li>车族手机版</li>
			<li>iphone | Android</li>
			<li>
				<a href="https://down.mumayi.com/908238">免费下载<span></span></a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"download",
		data(){
			return {

			}
		},
		methods:{
			
		}
	}
</script>

<style>
	div,ul,li,span{
		padding: 0;
		margin: 0;
	}
	ul,li{
		list-style: none;
	}
	.download{
		width: 236px;
		height: 338px;
		border: 1px solid #c5c5c5;
		overflow: hidden;
		background-color: white;
	}
	.download ul{
		width: 206px;
		height: 112px;
		margin-left: 16px;
		border-bottom: 1px solid #c5c5c5;
		position: relative;
		background: white;
	}
	.download_ul li:first-child{
		position: absolute;
		width: 52px;
		height: 52px;
		background-color: #03b5ef;
		background-image: url(../../assets/chezulogo.png);
		background-repeat: no-repeat;
		background-position: 50% 50%;
		border-radius: 6px;
		left: 16px;
		top: 20px;
		-webkit-box-reflect: below 3px linear-gradient(to top, rgba(0, 0, 0, 0.4) 5%, rgba(0,0,0,0) 30%);
	}
	.download_ul li:nth-child(2){
		font-size: 16px;
		line-height: 16px;
		font-weight: 700;
		position: absolute;
		left: 80px;
		top: 20px;
	}
	.download_ul li:nth-child(3){
		font-size: 12px;
		line-height: 12px;
		font-weight: 500;
		position: absolute;
		left: 80px;
		top: 43px;
	}
	.download_ul li:last-child{
		position: absolute;
		width: 93px;
		height: 25px;
		background-color: #03b5ef;
		font-size: 13px;
		line-height: 25px;
		color: white;
		font-weight: 500;
		text-indent: 13px;
		border-radius: 3px;
		left: 80px;
		top: 67px;
	}
	
	.download_ul li:last-child span{
		display: inline-block;
		width: 13px;
		height: 13px;
		background-color: #1f9ece;
		position: absolute;
		left: 70px;
		top: 5px;
		border-radius: 50%;
		background-image: url(../../assets/jiantou3.png);
		background-size: 13px;
		background-position: 50% 50%;
	}
	.download_ul a{
		color: white;
	}
</style>