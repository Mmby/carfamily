<template>
	<div class="w_raffilesuccess">
		<div class="w_raffilesuccess_cont">
			<div class="w_raffilesuccess_contTop">
				<div class="w_raffilesuccess_title">
					<img src="../../assets/raffile/图层 376.png"/>
					<span class="w_raffilesuccess_suc">参与成功!</span>
					<span class="w_raffilesuccess_meituan">美团网让你美梦成真!</span>
				</div>
				<div class="w_raffilesuccess_show">
					<img src="../../assets/raffile/图层 358.png"/>
					<span>抽奖成功,祝您美梦成真!<a class="w_raffilesuccess_details" href="###">查看抽奖详情</a></span>
					<div class="w_raffilesuccess_phone">
						<img src="../../assets/raffile/图层 377.png"/>
						<span class="w_raffilesuccess_download">下载 <a class="w_raffilesuccess_details" href="###">车族网手机版</a>,抽奖结果轻松查看</span>
					</div>
				</div>
			</div>
			<div class="w_raffilesuccess_contCenter">
				<div class="w_raffilesuccess_Centertit">
					<span>绑定微博并关注,多获得一个抽奖账号(首次绑定有效)</span>
				</div>
				<ul class="w_raffilesuccess_weibo">
					<li class="w_raffilesuccess_check">
						<input type="checkbox" checked="checked" />
						<span>关注或收听美团,获取最新团购信息</span>
					</li>
					<li>
						<input type="checkbox" checked="checked" />
						<span>自动发布微博,邀请好友抽奖</span>
					</li>
					<li class="w_raffilesuccess_btn">
						<input class="xinlangbtn" type="button"  value="绑定新浪微博" />
						<input class="tengxunbtn" type="button"  value="绑定腾讯微博" />
					</li>
					<li>
						<span>提示:绑定微博后,可以用微博账号登录美团</span>
					</li>				
				</ul>
			</div>
			<!--邀请-->
			<div class="w_raffilesuccess_invite">
				<div class="w_raffilesuccess_Centertit">
					<span>邀请好友,获得更多抽奖号</span>
				</div>
				<ul class="w_raffilesuccess_code">
					<li class="w_raffilesuccess_codetit">
						<span>每成功邀请1名新用户参与,你就能获得1个新的抽奖号.</span>
					</li>
					<li class="w_raffilesuccess_codeqq">
						<img class="w_raffilesuccess_qq" src="../../assets/raffile/QQ.png"/>
						<div class="w_raffilesuccess_Msn">
							<span class="w_raffilesuccess_codemsn">这是你的专用邀请链接,请通过MSN或QQ发送给好友:</span>
							<input class="w_raffilesuccess_codeinput" type="text"placeholder="http://www"/>
							<input class="w_raffilesuccess_copy" type="button"  value="复制" />
						</div>
					</li>
					<li class="w_raffilesuccess_codeqq">
						<img class="xiang" src="../../assets/raffile/享.png"/>
						<span class="w_raffilesuccess_codemsn">分享抽奖活动给好友</span>
						<img class="w_raffilesuccess_car" src="../../assets/promotion1.png"/>
						<p class="w_raffilesuccess_introduce">美梦成真:第三取全时科技数字轿车,圈第三代科技轿车第三取全时科技数字轿车,圈第三代科技轿车第三取全时科技数字轿车,圈第三代科技轿车第三取全时科技数字轿车,圈第三代科技轿车第三取全时科技数字轿车,圈第三代科技轿车第三取全时科技数字轿车,圈第三代科技轿车第三取全时科技数字轿车,圈第三代科技轿车第三取全时科技数字轿车,圈第三代科技轿车第三取全时科技数字轿车,圈第三代科技轿车第三取全时科技数字轿车,圈第三代科技轿车第三取全时科技数字轿车,圈第三代科技轿车</p>
					</li>
					<li>
						<img class="w_raffilesuccess_links" src="../../assets/raffile/qqkongjian.png"/>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<style>
/*	@import url("../../css/public.css");*/
	.w_raffilesuccess{
		width: 977px;
		height: 1254px;
		margin:auto;
		padding-top: 30px;
		padding-bottom: 30px;
	}
	.w_raffilesuccess_cont{
		width: 718px;
		height: 1254px;
		background: white;
		margin-top: 10px;
		border: 1px solid #c7c7c7;
	}
	/*上部展示*/
	.w_raffilesuccess_contTop{
		width: 718px;
		height: 560px;
		/*background: red;*/
	}
	.w_raffilesuccess_title{
		margin-top: 24px;
		margin-left: 30px;
	}
	.w_raffilesuccess_title>img{
		width: 80px;
		height: 80px;
		margin-left: 44px;
	}
	.w_raffilesuccess_show{
		width: 657px;
		height: 365px;
		margin-left: 29px;
		margin-top: 12px;
		text-align: center;
	}
	.w_raffilesuccess_show>span{
		display: block;
		margin-top: 32px;
	}
	.w_raffilesuccess_details{
		color: #1978cf;
	}
	.w_raffilesuccess_phone{
		margin-top: 23px;
	}
	.w_raffilesuccess_phone>img{
		margin-top: 4px;
	}
	.w_raffilesuccess_suc{
		display: inline-block;
		font-size: 28px;
		font-weight: 800;
		color: red;
		margin-top: 40px;
		margin-left: 22px;
	}
	.w_raffilesuccess_meituan{
		font-size: 28px;
		color: #636363;
		margin-left:15px ;
	}
	/*绑定微博*/
	.w_raffilesuccess_contCenter{
		width: 657px;
		height: 176px;
		margin-left: 30px;
	}
	.w_raffilesuccess_Centertit{
		background: #eef7fe;
		font-size: 14px;
		font-weight: 600;
		padding-left: 16px;
		line-height: 38px;
	}
	.w_raffilesuccess_weibo{
		width: 657px;
		height: 139px;
		padding-left: 32px;
	}
	.w_raffilesuccess_weibo>li>span{
		color: #656565;
		font-size: 14px;
	}
	.w_raffilesuccess_check{
		margin-top: 10px;
	}
	.w_raffilesuccess_btn{
		margin-top:14px ;
		margin-bottom: 10px;
	}
	.w_raffilesuccess_btn>input{
		font-size: 14px;
		width: 122px;
		background: #1978cf;
		color: #ffffff;
		border-radius:5px ;
	}
	.tengxunbtn{
		margin-left: 15px;
	}
	/*邀请*/
	.w_raffilesuccess_invite{
		width: 657px;
		height:458px;
		/*background: pink;*/
		margin-left: 30px;
	}
	.w_raffilesuccess_code{
		padding-left: 14px;
	}
	.w_raffilesuccess_codetit{
		font-size: 14px;
		margin-top: 10px;
	}
	.w_raffilesuccess_codeqq{
		margin-top: 17px;
	}
	.w_raffilesuccess_codemsn{
		font-size: 14px;
		color: #1978cf;
		font-weight: 500;
	}
	.w_raffilesuccess_codeinput{
		width: 253px;
	}
	.w_raffilesuccess_qq{
		width: 50px;
		height: 50px;
		display: inline-block;
	}
	.w_raffilesuccess_Msn{
		display: inline-block;
		width: 366px;
		height: 50px;
		margin-left: 5px;
	}
	.w_raffilesuccess_codeinput{
		height: 23px;
		border: 1px solid #1978cf;
		text-indent: 5px;
	}
	.w_raffilesuccess_copy{
		width: 56px;
		height: 26px;
		background: #1978cf;
		border-radius: 5px;
		color: #FFFFFF;
	}
	/*享*/
	.xiang{
		width: 50px;
		height: 50px;
		border: 1px solid #cbcbcb;
	}
	.w_raffilesuccess_car{
		width: 148px;
		height: 82px;
		display: block;
		margin-left: 65px;
	}
	.w_raffilesuccess_introduce{
		font-size: 11px;
		margin-left: 65px;
		line-height:18px ;
	}
	.w_raffilesuccess_links{
		width: 453px;
		height: 22px;
		margin-left: 67px;
		margin-top: 24px;
	}
</style>

<script>
	export default {
		name:'Raffilesuccess',
	}
	
</script>

