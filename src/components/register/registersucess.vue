<template>
	<div class="m_success">
		<div class="success_top">
			<img src="../../assets/register/yesm.png"/>
			<h2 class="top_title">恭喜,注册成功 !</h2>
		</div>
		<div class="success_intro">
			<p>
				您绑定的手机号: <em>1860199559</em>
			</p>
			<p>
				系统生成用户名: <em>1860199559</em>
				<router-link to="/mycar/accountset" class="person_cir"> 去个人中心修改 </router-link>
			</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"Registersucess",
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped>
	@import url("../../css/public.css");
	.m_success {
		width: 977px;
		height: 330px;
		margin: auto;
		background-color: #fff;
		border: 1px solid #c5c5c5;
	}
	.m_success .success_top {
		display: inline-block;
		width: 252px;
		height: 49px;
		font-size: 0;
		margin: 36px 0 0 319px;
	}
	.success_top .top_title {
		display: inline;
		font-size: 25px;
		line-height: 49px;
		margin-left: 30px;
	}
	.m_success .success_intro {
		width: 306px;
		font-size: 14px;
		margin: 12px auto 0;
	}
	.m_success .success_intro em {
		font-style: normal;
	}
	.m_success .success_intro .person_cir {
		margin-left: 36px;
		cursor: pointer;
		color: #0076cb;
	}
	.m_success .success_intro:hover .person_cir {
		text-decoration: underline;
	}
</style>