<template>
	<!--foot-->
	<div class="m_foots"> 
		<div class="foots_cont">
			<div class="cont_all">
				<div class="cont_list">
					<h4>帮助中心</h4>
					<ul>
						<li><span class="rect"></span><a href="#">购买流程</a></li>
						<li><span class="rect"></span><a href="#">找回密码</a></li>
					</ul>
				</div>
				<div class="cont_list">
					<h4>官方微博</h4>
					<ul>
						<li><span class="rect"></span><a href="http://weibo.com/icarzoo">新浪微博</a></li>
						<li><span class="rect"></span><a href="http://e.t.qq.com/icarzoo">腾讯微博</a></li>
					</ul>
				</div>
				<div class="cont_list">
					<h4>商务合作</h4>
					<ul>
						<li><span class="rect"></span><a href="#">商户登录</a></li>
						<li><span class="rect"></span><a href="#">业务合作</a></li>
						<li><span class="rect"></span><a href="#">开放API&nbsp;</a></li>
					</ul>
				</div>
				<div class="cont_list list_right">
					<h4>关于我们</h4>
					<ul>
						<li><span class="rect"></span><a href="#">公司简介</a></li>
						<li><span class="rect"></span><a href="#">联系我们</a></li>
						<li><span class="rect"></span><a href="#">加入我们</a></li>
					</ul>
				</div>
				<div class="service">
					<span>客服电话(免长途费)</span>
					<em>4006-630-636</em>
				</div>
			</div>
			<div class="company">
				<a href="#">京ICP证110457号</a>
				<a href="#">京ICP备11014893号</a>
				<a href="#">北京双立人网络科技有限公司</a>
				<a href="#">版权所有Copyright©2011</a>
				<a href="#">iCarZoo.COM</a>
				<a href="#">All Rights Reserved</a>
			</div>
			<div class="foots_icon">
				<a href="http://www.hd315.gov.cn/beian/view.asp?bianhao=010202012080900003"><img src="../../assets/foots/image1.png"/></a>
				<a href="#"><img src="../../assets/foots/image2.png"/></a>
				<a href="#"><img src="../../assets/foots/image3.png"/></a>
				<a href="#"><img src="../../assets/foots/image4.png"/></a>
			</div>
			<div class="foots_link">
				<span>友情链接:</span>
				<a href="http://auto.qq.com/">腾讯汽车</a>
				<a href="http://auto.ifeng.com/">凤凰网汽车</a>
				<a href="https://www.msn.com/zh-tw/autos/">MSN汽车</a>
				<a href="http://www.touch-baby.cn/">北京团购网</a>
				<a href="https://hao.360.cn/">360网址导航</a>
				<a href="http://www.touch-baby.cn/">北京团购网</a>
				<a href="http://www.touch-baby.cn/">北京团购</a>
				<a href="https://www.duba.com/">金山网址导航</a>
				<a href="http://www.lvse.com/site/temi-com-cn-8940.html">特米购物</a>
				<a href="http://www.tuan800.com/">团购网站大全</a>
				<a href="https://www.114la.com/">114网址导航</a>
				<a href="https://www.114la.com/">114啦网址导航</a>
				<a href="http://www.tuan800.com/">团购大全</a>
				
			</div>
		</div>
	</div>
	<!--End foot-->
</template>

<script>
	export default {
		name:"foots",
		data(){
			return {
				
			}
		}		
	}
</script>

<style scoped>
	@import url("../../css/public.css");
	.m_foots {
		width: 100%;
		height: 343px;
		border-top: 5px solid #213f7b;
		text-align: center;
	}
	.foots_cont {
		width: 977px;
		height: 100%;
		margin: auto;
		position: relative;
	}
	.cont_all {
		width: 838px;
		height: 128px;
		margin-left: 71px;
		position: absolute;
		top: 11px;
	}
	.cont_list {
		width: 138px;
		height: 128px;
		border-left: 1px solid #bebebe;
		float: left;
		color: #3e4545;
	}
	.cont_list:after {
		content: "";
		display: block;
		clear: both;
	}
	.cont_list h4 {
		font-size: 14px;
		margin-top: 24px;
		line-height: 30px;
	}
	.cont_list ul li {
		font-size: 12px;	
		padding-bottom: 6px;
	}
	.cont_list ul li a {
		margin-left: 7px;
		color: #3e4545;
	}
	.cont_list ul li:hover a {
		text-decoration: underline;
		color: #0083c8;
	}
	.rect {
		display: inline-block;
		width: 6px;
		height: 6px;
		border: 1px solid #3e4545;
		transform: rotate(45deg);
	}
	.list_right {
		border-right: 1px solid #bebebe;
	}
	.service {
		padding: 10px 30px 10px 15px;
		background-color: #d1d1d1;
		position: absolute;
		right: 0;
		top: 35px;
		border-radius: 4px;
		display: inline;
		text-align: left;
	}
	.service span {
		color: #555;
		display: block;
		line-height: 16px;
	}
	.service em {
		font-size: 26px;
		line-height: 30px;
		color: #555;
		font-style: normal;
		font-weight: 500;
	}
	.company {
		width: 760px;
		position: absolute;
		top: 167px;
		left: 114px;
		
	}
	.company a {
		font-size: 12px;
		color: #6f6f6f;
	}
	.company a:hover {
		text-decoration: underline;
	}
	.foots_icon {
		position: absolute;
		top: 206px;
		left: 270px;
		font-size: 0;
		word-spacing: 10px;
	}
	.foots_link {
		position: absolute;
		top: 275px;
		left: 34px;
		text-align: left;
		font-size: 0;
		word-spacing: 12px;
		
	}
	.foots_link span{
		color: #8d8e90;
		font-size: 12px;
	}
	.foots_link a{
		font-size: 12px;
		color: #6f6f6f;
	}
	.foots_link a:hover {
		text-decoration: underline;
		color: #0083c8;
	}
</style>