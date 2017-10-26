<template>
	<div class="m_emailverify">
		<div class="emailverify_title">
			<h1>下一步请 : 请验证您的邮箱</h1>
		</div>
		<div class="emailverify_send">
			<p>我们发送了一封验证邮箱 <em>xushuang_0902@hotmail.com</em>，请到您的邮箱收信,并点击其中的链接验证您的邮箱。</p>
			<input type="button" value="去邮箱验证"  class="verify_btn"/>
		</div>
		<div class="verify_help">
			<h4>收不到邮件?</h4>
			<ul>
				<li>请检查你的垃圾箱或广告箱，邮件有可能被误以为垃圾或广告邮箱: 或选择<button>重发验证邮箱</button></li>
				<li>用您注册的邮箱账号向hi@mail.meituan.com发送一封任意内容的邮件，几分钟后即可直接登录车族网。</li>
				<li id="m_link">了解如何把车族网的邮件列为白名单</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Emailverify",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	@import url("../../css/public.css");
	.m_emailverify {
		width: 977px;
		height: 331px;
		margin:  auto;
		background-color: #fff;
		border: 1px solid #C5C5C5;
	}
	.m_emailverify .emailverify_title {
		width: 100%;
		height: 62px;
		line-height: 62px;
		border-bottom: 1px solid #C5C5C5;
		background-color: #f8f8f8;
	}
	.m_emailverify .emailverify_title h1 {
		text-indent: 21px;
		font-size: 25px;
		color: #2e3235;
		font-weight: 400;
	}
	.m_emailverify .emailverify_send {
		width: 777px;
		height: 95px;
		border: 1px solid #c5c5c5;
		background-color: #ffffeb;
		margin: 30px auto;
		font-size: 14px;
	}
	.m_emailverify .emailverify_send p {
		font-weight: 300;
		padding: 15px;
	}
	.m_emailverify .emailverify_send p em {
		font-style: normal;
		color: #a11212;
		font-weight: 600;
	}
	.m_emailverify .emailverify_send .verify_btn {
		cursor: pointer;
		display: block;
		width: 104px;
		height: 24px;
		line-height: 20px;
		color: #fff;
		font-weight: 500;
		font-size: 12px;
		background-color: #2870b2;
		border-top:2px solid #90c1e9;
		border-left: 2px solid #90c1e9;
		border-right: 2px solid #233753;
		border-bottom: 2px solid #233753;
		margin-left: 329px;
	}
	.m_emailverify .verify_help {
		width: 777px;
		height: 112px;
		margin: auto;
	}
	.m_emailverify .verify_help h4 {
		font-weight: 500;
		font-size: 14px;
		background: url(../../assets/register/notice2.png) no-repeat 0 3px;
		padding-left: 27px;
	}
	.m_emailverify .verify_help ul {
		margin-top: 16px;
		list-style-type: disc;
		padding-left: 20px;
	}
	.m_emailverify .verify_help ul li {
		list-style-type: disc;
		font-size: 12px;
		color: #666;
	}
	.m_emailverify .verify_help ul li button {
		color: #373737;
	}
	#m_link {
		color: #2870b2;
	}
	#m_link:hover {
		text-decoration: underline;
	}
</style>