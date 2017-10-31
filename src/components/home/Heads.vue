<template>
	<!--首页头部-->
	<div class="w_heads">
		
		<!--收藏-->
		<div class="wrpa_heads_top">
			<div class="heads_top">
				<span><a href="###"><img src="../../assets/icon/aid.png"/>{{aid}}</a></span>
				<span><a href="###"><img class="emileImg" src="../../assets/icon/emile.png"/>{{emile}}</a></span>
				<span><a href="###"><img class="starImg" src="../../assets/icon/star.png"/>{{star}}</a></span>
			</div>
		</div>
		<div class="nav_insert">
			<img src="../../assets/nav_insert.png" />
			<div class="nav_insert_return"><img src="../../assets/cha.png" /></div>
		</div>
		<!--logo-->
		<div class="heads_title">
			
			
			<ul class="w_heads_inputs">
				<li><span class="w_heads_inputs_li">汽车美容</span></li>
				<li>汽车保养</li>
				<li>汽车团购</li>
			</ul>
			
			
			<img src="../../assets/logo.png" />
			<!--<div class="heads_title_city">
				<span id="heads_title_city">{{city}}</span>
				<span class="heads_switch_city">[切换城市]</span>
			</div>	-->

			<!--切换城市html的开始部分-->
			<div class="region">
				<div class="city">{{this.$store.state.homecity}}</div>
				<a href="javascript:;" class="citys">[切换城市]
					<div class="citys_box">
						<div class="city_title">
							<a href="javascript:;" class="switchCity actCity">按市切换</a>
							<a href="javascript:;" class="switchProvince">按省切换</a>
							<img class="deleteGg cityEnd" src="../../assets/cha.png" />
						</div>
						<div class="city_panel1">
							<div class="citys_sel">
								<div class="coreCitys">
									<h4>核心城市</h4>
									<p class="coreCitList">
										<a href="javascript:void(0)">北京</a>
										<a href="javascript:void(0)">上海</a>
										<a href="javascript:void(0)">天津</a>
										<a href="javascript:void(0)">重庆</a>
										<a href="javascript:void(0)">深圳</a>
										<a href="javascript:void(0)">济南</a>
										<a href="javascript:void(0)">广州</a>
										<a href="javascript:void(0)">长沙</a>
										<a href="javascript:void(0)">武汉</a>
									</p>
								</div>
								<div class="keyCities">
									<h4>重点城市</h4>
									<p class="keyCitList">
										<a href="javascript:void(0)" v-for="cit in citarr">{{cit}}</a>
									</p>
								</div>
							</div>
							<div class="pinySearCit">
								<p class="piny">
									<span v-for="pinyin in pinyins">{{pinyin}}</span>
								</p>
								<p class="keyCitCont">
									<a href="javascript:void(0)" v-for="val in pincity">{{val}}</a>
								</p>
							</div>
						</div>
						<div class="city_panel2">
							<div class="shengfenxuanze">
								<p class="provincesTitle">
									<a href="javascript:void(0)">北京</a>
									<a href="javascript:void(0)">上海</a>
									<a href="javascript:void(0)">天津</a>
									<a href="javascript:void(0)">重庆</a>
									<a href="javascript:void(0)" style="margin-right: 0;">深圳</a>
								</p>

								<div class="allprovinces">
									<a href="javascript:;">A <strong>安徽省</strong>(福州)</a>
									<a href="javascript:;">F <strong>福建省</strong>(福州)</a>
									<a href="javascript:;">G <strong>广东省</strong>(广州)</a>
									<a href="javascript:;">G <strong>广西</strong>(南宁)</a>
									<a href="javascript:;">G <strong>贵州省</strong>(贵阳)</a>
									<a href="javascript:;">G <strong>甘肃省</strong>(兰州)</a>
									<a href="javascript:;">H <strong>河南省</strong>(郑州)</a>
									<a href="javascript:;">H <strong>湖北省</strong>(武汉)</a>
									<a href="javascript:;">H <strong>湖南省</strong>(长沙)</a>
									<a href="javascript:;">H <strong>海南省</strong>(海口)</a>
									<a href="javascript:;">H <strong>河北省</strong>(石家庄)</a>
									<a href="javascript:;">H <strong>黑龙江</strong>(哈尔滨)</a>
									<a href="javascript:;">J <strong>江苏省</strong>(南京)</a>
									<a href="javascript:;">J <strong>江西省</strong>(南昌)</a>
									<a href="javascript:;">J <strong>吉林省</strong>(长春)</a>
									<a href="javascript:;">L <strong>辽宁省</strong>(沈阳)</a>
									<a href="javascript:;">N <strong>宁夏</strong>(银川)</a>
									<a href="javascript:;">N <strong>内蒙古</strong>(呼市)</a>
									<a href="javascript:;">Q <strong>青海省</strong>(西宁)</a>
									<a href="javascript:;">S <strong>山东省</strong>(济南)</a>
									<a href="javascript:;">S <strong>四川省</strong>(成都)</a>
									<a href="javascript:;">S <strong>山西省</strong>(太原)</a>
									<a href="javascript:;">Y <strong>云南省</strong>(昆明)</a>
									<a href="javascript:;">Z <strong>浙江省</strong>(杭州)</a>
								</div>
							</div>

							<div class="shengfenchengshi">
								<a href="javascript:void(0)">嘉峪关</a>
								<a href="javascript:void(0)">临夏</a>
								<a href="javascript:void(0)">兰州</a>
								<a href="javascript:void(0)">定西</a>
								<a href="javascript:void(0)">平凉</a>
								<a href="javascript:void(0)">威武</a>
								<a href="javascript:void(0)">张掖</a>
								<a href="javascript:void(0)">酒泉</a>
								<a href="javascript:void(0)">天水</a>
								<a href="javascript:void(0)">白银</a>
							</div>
						</div>
					</div>
				</a>
			</div>

			<!--切换城市html结束部分-->
			<div class="heads_hotCar">
				<div class="heads_hotCarr_car">
					<span class="car" v-for="i in car">{{i}}</span>
				</div>
				<div class="heads_search">
					<input class="heads_search_input" type="text" placeholder="搜索商户名,地址,服务等" />
					<input class="heads_search_btn" type="button" value="搜索" />
				</div>

			</div>
			<div class="heads_title_phone">
				<span>400-630-636</span><br />
				<span>每日9:00-21:00</span>
			</div>
		</div>
		<!--导航-->
		<div class="header_nav_wrap">
			<div class="header_nav_cont">
				<nav class="nav_l">
					<router-link to="/home" class="nav_l_a nav_l_a1">首页</router-link>
					<router-link to="/server" class="nav_l_a">服务</router-link>
					<router-link to="/merchant" class="nav_l_a">商家</router-link>
					<router-link to="/group" class="nav_l_a">团购</router-link>
					<router-link to="/shoppingmall" class="nav_l_a">商城</router-link>
					<router-link to="/community" class="nav_l_a">社区</router-link>
				</nav>
				<nav class="nav_r">
					<ul class="nav_rUl">
						<li class="shopcart">
							<a href="javascript:void(0)" class="shopcartLink nav_l_a">购物车<span>0</span></a>
							<em class="shopcarico"></em>
							<ul class="shopcarList">
								<li v-for="i in 5">
									<img src="../../assets/group1.png" alt="图片" width="81" height="49" />
									<div class="proDes">
										<p class="shopTitle">第三代全时科技数字轿车</p>
										<p class="shopPriceShow">
											<span class="carPrice">￥18</span>
											<a href="javascript:void(0);" class="removeGoods">删除</a>
										</p>
									</div>
								</li>
								<li class="seeShopcartLi">
									<button class="seeShopcart">查看我的购物车</button>
								</li>
							</ul>
						</li>
						<li class="recent">
							<a href="javascript:void(0);" class="recentLink nav_l_a">最近浏览</a>
							<em class="shopcarico"></em>
							<ul class="recentList">
								<li v-for="i in 5">
									<img src="../../assets/car2.png" alt="图片" width="81" height="49" />
									<div class="recproDes">
										<p class="recshopTitle">第三代全时科技数字轿车</p>
										<p class="recshopPriceShow">
											<span class="reccarPrice">￥18</span>
											<span class="recoriginalPrice">35</span>
										</p>
									</div>
								</li>
								<li class="removesee">
									<a href="javascript">清空最近浏览记录</a>
								</li>
							</ul>
						</li>
						<li class="mycenter">
							<a href="javascript:void(0);" class="mycenterLink nav_l_a">我的车族</a>
							<ul class="mycenterList">
								<li>
									<!--<a href="mycar">我的订单</a>-->
									<router-link to="/mycar">我的订单</router-link>
								</li>
								<li>
									<a href="javascript:void(0)">我的评价</a>
								</li>
								<li>
									<a href="###">我的收藏</a>
								</li>
								<li>
									<a href="###">车族余额</a>
								</li>
								<li>
									<a href="###">充值/提现</a>
								</li>
								<li>
									<a href="###">代金券</a>
								</li>
								<li>
									<a href="###">我的积分</a>
								</li>
								<li>
									<a href="###">帐户设置</a>
								</li>
							</ul>
						</li>
						<li class="head_hide">
							<a href="/login" class="login nav_l_a">登录</a>
						</li>
						<li class="register head_hide">
							<a href="/register" class="nav_l_a">注册</a>
						</li>
						
						
						<!--登录成功, 与退出-->
						
						<li class="head_show">
							<a href="/mycar/accountset" class="login nav_l_a" id="nav_name">{{username}}</a>
						</li>
						<li class="register head_show">
							<a href="###" class="nav_l_a nav_esc">退出</a>
						</li>




					</ul>
				</nav>
			</div>
		</div>
	</div>
</template>
<style scoped>
	/*添加的显示隐藏开始部分*/
	.head_hide1{
		display: none;
	}
	.head_show1{
		display: inline-block;
	}
	
	/*添加的隐藏开始部分*/
	.w_heads {
		width: 100%;
		/*height:182px;*/
		/*border: 1px solid #fff;*/
		/*background:#fdfdfd;*/
		background: white;
		/*border: 1px solid #dfdfdf;*/
		
	}
	
	.wrpa_heads_top {
		width: 100%;
		background: #fafafa;
		border-bottom: 1px solid #dfdfdf;
		border-top: 1px solid #dfdfdf;
	}
	/*切换省份颜色*/
	
	.city_panel2 a {
		color: black;
	}
	/*切换城市开始部分*/
	
	.region {
		display: inline-block;
		vertical-align: bottom;
		margin-bottom: 10px;
	}
	
	.region .city {
		font-size: 16px;
		font-weight: 800;
	}
	
	.region .citys {
		font-size: 12px;
		color: rgb(42, 78, 145);
		position: relative;
		z-index: 100;
	}
	
	.citys_box {
		display: none;
		position: absolute;
		z-index: 10;
		top: 20px;
		left: -8px;
		/*width: 558px;*/
		/*height: 375px;*/
		background-color: #fff;
		border: 2px solid #213f7b;
		font-size: 0;
	}
	
	.citys_box .city_title {
		padding: 10px;
		background-color: #2e5497;
		font-size: 14px;
	}
	
	.city_title a {
		margin-left: 24px;
		color: #21a1fb;
	}
	
	a.actCity {
		color: #fff;
		text-decoration: underline;
	}
	
	.city_panel1 {
		display: block;
	}
	
	.citys_sel {
		font-size: 12px;
		padding: 23px 5px 14px;
		border-bottom: 1px solid #cacaca;
	}
	
	.coreCitys {
		margin-bottom: 30px;
	}
	
	.coreCitys h4 {
		margin-left: 25px;
		margin-right: 27px;
		font-size: 14px;
		color: rgb(51, 51, 51);
		display: inline-block
	}
	
	.coreCitList {
		display: inline-block;
		word-break: break-all;
	}
	
	.coreCitList a {
		font-size: 14px;
		font-weight: 100;
		color: #666;
		margin-right: 13px;
	}
	
	.keyCities h4 {
		float: left;
		margin-left: 25px;
		margin-right: 27px;
		font-size: 14px;
		color: rgb(51, 51, 51);
	}
	
	.keyCitList {
		padding-left: 112px;
		word-break: keep-all;
		font-size: 0;
	}
	
	.keyCitList a {
		display: inline-block;
		font-size: 14px;
		font-weight: 100;
		color: #666;
		margin-right: 14px;
		margin-bottom: 10px;
	}
	
	.piny {
		margin-top: 10px;
		margin-bottom: 12px;
		padding: 0 40px;
	}
	
	.piny span {
		padding: 0 6px;
		font-size: 14px;
		color: #000;
		font-weight: 800;
	}
	
	.keyCitCont {
		font-size: 14px;
		padding: 0 40px 20px;
		word-break: keep-all;
	}
	
	.keyCitCont a {
		display: inline-block;
		color: #333;
		line-height: 16px;
		padding: 0 6px;
	}
	
	.city_panel2 {
		display: none;
		font-size: 10px;
		padding: 25px 13px;
	}
	
	.provincesTitle {
		width: 630px;
		margin-bottom: 18px;
	}
	
	.provincesTitle a {
		font-size: 14px;
		font-weight: 800;
		margin-right: 92px;
	}
	
	.allprovinces {
		border-bottom: 1px solid #000;
		padding-bottom: 13px;
		font-size: 0;
	}
	
	a.proart {
		background-color: #5ba9f3;
		color: #fff;
	}
	
	.allprovinces a {
		box-sizing: border-box;
		display: inline-block;
		text-align: left;
		line-height: 26px;
		padding-left: 1px;
		text-decoration: underline;
		width: 110px;
		height: 26px;
		font-size: 14px;
		margin-right: 15px;
		margin-bottom: 8px;
	}
	
	.shengfenchengshi {
		/*display: none;*/
		padding: 0 39px;
		margin-top: 29px;
		font-size: 0;
	}
	
	.shengfenchengshi a {
		font-size: 14px;
		margin-right: 15px;
	}
	/*切换城市结束部分*/
	/*nav加粗效果*/
	
	.nav_l_a {
		font-weight: 800 !important;
		z-index: 100;
	}
	
	.nav_l .nav_l_a:hover {
		text-decoration: underline;
	}
	
	.heads_top {
		width: 977px;
		height: 32px;
		margin: 0 auto;
		font-size: 12px;
		line-height: 32px;
	}
	
	.heads_top span {
		/*width: 66px;*/
		margin-left: 12px;
		padding-left: 12px;
		border-left: 1px solid #666666;
		float: right;
		line-height: 12px;
		margin-top: 10px;
	}
	
	.heads_top span:last-child {
		border-left: none;
	}
	
	.heads_top>span>a {
		color: #666666;
	}
	
	.heads_top>span>a>img {
		margin-right: 4px;
	}
	
	.starImg {
		margin-top: -1px;
	}
	
	.emileImg {
		margin-top: 2px;
	}
	
	.heads_title {
		margin: 0 auto;
		margin-top: 12px;
		width: 977px;
		height: 86px;
		/*background-color:#ffffff;*/
		position: relative;
	}
	/*电话号码*/
	
	.heads_title_phone {
		top: 22px;
		position: absolute;
		right: 0;
	}
	
	.heads_title_phone>span:nth-child(1) {
		font-size: 22px;
		font-weight: 600;
		color: #213d7c;
	}
	
	.heads_title_phone>span:nth-child(2) {
		font-size: 10px;
		color: #6f6d6e;
	}
	/*搜索框上面的搜索字*/
	
	.heads_hotCarr_car {
		position: absolute;
		top: 0;
		left: 290px;
	}
	
	.heads_hotCarr_car>span {
		border-right: 1px solid #656565;
		display: inline-block;
		padding-left: 10px;
		padding-right: 10px;
		font-size: 12px;
		line-height: 12px !important;
		height: 12px !important;
		color: #656565;
	}
	
	.heads_hotCarr_car>span:last-child {
		border-right: none;
	}
	/*切换城市*/
	
	.heads_title_city {
		height: 24px;
		position: absolute;
		left: 174px;
		top: 35px;
	}
	
	#heads_title_city {
		display: block;
		font-size: 16px;
		margin-bottom: 4px;
		line-height: 16px;
		font-weight: 800;
	}
	
	.heads_switch_city {
		/*display: block;*/
		font-size: 12px;
		line-height: 12px;
		color: #2a4e91;
	}
	/*输入框*/
	
	.heads_search {
		/*width: 371px;*/
		font-size: 0;
		/*background: green;*/
		position: absolute;
		left: 300px;
		top: 26px;
	}
	
	.heads_search_input {
		width: 310px;
		height: 34px;
		/*margin-top:6px;*/
		border: 3px solid #213d7c;
		text-indent: 10px;
	}
	
	.heads_search_btn {
		padding-left: 7px;
		width: 55px;
		height: 42px;
		background: #213d7c;
		border: none;
		color: #fbfdff;
		font-size: 14px;
		font-weight: 700;
		position: absolute;
		top: 0;
		left: 316px;
	}
	/*导航部分*/
	
	.header_nav_wrap {
		width: 100%;
		height: 40px;
		background-color: #213f7b;
		border-bottom: 1px solid #1a3265;
	}
	
	.header_nav_cont {
		width: 976px;
		margin: 0 auto;
	}
	
	.header_nav_cont .nav_l {
		float: left;
		font-size: 0px;
	}
	
	.header_nav_cont .nav_l a {
		display: inline-block;
		text-align: center;
		width: 74px;
		line-height: 40px;
		color: #fff;
		font-weight: 300;
		font-size: 14px;
	}
	
	.header_nav_cont .nav_r {
		float: right;
		font-size: 0px;
	}
	
	.nav_r .nav_rUl {
		/*overflow: hidden;*/
		list-style: none;
	}
	
	.nav_r .nav_rUl>li {
		float: left;
		background: url(../../assets/icon/shopping1.png) no-repeat;
		background-size: 1px 12px;
		background-position: right center;
		position: relative;
		z-index: 50 !important;
	}
	
	.nav_r .nav_rUl>li>a {
		display: inline-block;
		color: #fff;
		font-size: 12px;
		border: 1px solid transparent;
		line-height: 40px;
		font-weight: 100;
	}
	/*hover出现下划线*/
	
	.nav_rUl>li>a:hover {
		text-decoration: underline;
	}
	
	.shopcart {
		position: relative;
	}
	
	.shopcart:hover .shopcartLink {
		border-bottom: none !important;
		border-color: #ddd !important;
		background-color: #fff !important;
		color: #213f7b;
		font-weight: 300;
		background-position: 12px 14px !important;
		z-index: 1000;
	}
	
	.shopcartLink span {
		position: absolute;
		display: none;
		top: -6px;
		right: 30px;
		text-align: center;
		font-size: 12px;
		line-height: 15px;
		border-radius: 6px;
		width: 27px;
		height: 15px;
		background-color: red;
	}
	
	.shopcart:hover .shopcarList {
		display: block;
	}
	
	.shopcart:hover .shopcarico {
		border-top: 4px solid #213F7B;
	}
	
	li.bNo {
		background: none !important;
	}
	
	.seeShopcartLi:hover {
		background-color: #fff !important;
	}
	
	.seeShopcart {
		outline: none;
		cursor: pointer;
		display: block;
		width: 98px;
		height: 28px;
		border: none;
		background-color: #005bac;
		border-radius: 3px;
		font-weight: 100;
		margin: 0 auto;
	}
	
	.nav_r .shopcart .shopcartLink {
		position: relative;
		z-index: 60;
		padding: 0 28px 0 38px;
		background: url(../../assets/icon/shopping1.png) no-repeat;
		background-position: 12px 14px;
	}
	/*重点修改对象*/
	
	.shopcartLink:hover {
		background: url(../../assets/icon/shopping2.png) no-repeat !important;
	}
	
	.recent:hover {
		background-image: none !important;
	}
	
	.recent:hover .recentLink {
		border-bottom: none;
		background-color: #fff;
		border-color: #d0d2d6 !important;
		color: #213f7b;
		font-weight: 400;
	}
	
	.recent:hover .shopcarico {
		border-top-color: #213F7B;
	}
	
	.recent:hover .recentList {
		display: block;
	}
	
	.mycenter:hover {
		background-image: none !important;
	}
	
	.mycenter:hover .mycenterList {
		display: block;
	}
	
	.mycenter:hover .mycenterLink {
		left: -1px;
		right: 0px;
		border-bottom: none;
		border-color: #eee;
		color: #213f7b;
		font-weight: 500;
		background-color: #fff;
	}
	
	.mycenterList {
		display: none;
		list-style-type: none;
		position: absolute;
		top: 40px;
		left: -1px;
		border: 1px solid #eee;
		background-color: #fff;
		width: 76px;
	}
	
	.mycenterList li {
		font-size: 12px;
		padding: 8px 0;
		padding-left: 12px;
		color: rgb(102, 102, 102);
	}
	
	.mycenterList li:hover {
		/*	background-color: #eee;*/
	}
	
	.mycenterList li a {
		color: #666;
	}
	
	.recentLink {
		position: relative;
		left: -1px;
		z-index: 0;
		padding: 0 28px 0 14px;
	}
	
	.recentList {
		display: none;
		position: absolute;
		z-index: -1;
		top: 40px;
		right: 1px;
		border: 1px solid #ddd;
		padding: 22px 0 15px;
		background-color: #fff;
	}
	
	.recentList>li {
		overflow: hidden;
		padding: 13px 12px;
		width: 195px;
	}
	
	.recentList>li:hover {
		/*	background-color: #eee;*/
	}
	
	.recentList>li>.recproDes {
		display: inline-block;
		margin-left: 11px;
		width: 96px;
	}
	
	.removesee {
		display: inline-block;
		width: 100%;
		text-align: center;
	}
	
	.removesee a {
		font-size: 12px;
		color: #234994;
	}
	
	.removesee:hover {
		background-color: #fff !important;
	}
	
	.recproDes p {
		float: right;
		width: 96px;
	}
	
	.recshopTitle {
		color: #666;
		font-size: 12px;
	}
	
	.recshopPriceShow span {
		font-size: 12px;
		display: inline-block;
	}
	
	.reccarPrice {
		color: red;
		font-weight: 600;
	}
	
	.recoriginalPrice {
		margin-left: 14px;
		color: #666;
		text-decoration: line-through;
	}
	
	.mycenterLink {
		left: -1px;
		position: relative;
		z-index: 500;
		padding: 0 14px;
	}
	
	.login {
		padding: 0 14px;
	}
	
	.register {
		padding-left: 14px;
		background-image: none !important;
	}
	/*购物车*/
	
	.shopcarList {
		display: none;
		position: absolute;
		z-index: 0;
		top: 40px;
		left: -117px;
		border: 1px solid #ddd;
		padding: 22px 0 15px;
		background-color: #fff;
	}
	
	.shopcarList>li {
		overflow: hidden;
		padding: 13px 12px;
		width: 195px;
	}
	
	.shopcarList>li:hover {
		background-color: #eee;
	}
	
	.shopcarList>li>img {
		display: inline-block;
		vertical-align: top;
	}
	
	.shopcarList p {
		float: right;
		width: 96px;
	}
	
	.proDes {
		display: inline-block;
		margin-left: 11px;
		width: 96px;
	}
	
	.shopTitle {
		color: #666;
		font-size: 12px;
	}
	
	.shopPriceShow .carPrice {
		font-size: 12px;
		color: red;
		font-weight: 600;
		float: left;
	}
	
	.shopPriceShow .removeGoods {
		color: #005bac;
		font-size: 14px;
		line-height: 14px;
		float: right;
	}
	
	.shopcarico {
		position: absolute;
		z-index: 100;
		right: 17px;
		top: 18px;
		display: inline-block;
		border: 4px solid transparent;
		border-top: 4px solid #eee;
		cursor: pointer;
	}
	/*a.navActive {
		background-color: #101f4b;
	}*/
	
	a.searchLink {
		background-color: #264787;
	}
	/*广告*/
	
	.nav_insert {
		margin: 0 auto;
		width: 977px;
		border: 1px solid gainsboro;
		position: relative;
	}
	
	.nav_insert_return {
		width: 25px;
		height: 25px;
		position: absolute;
		right: 10px;
		top: 10px;
		z-index: 1000;
	}
	
	.nav_insert_return img {
		width: 100%;
	}
	/*改变导航条颜色*/
	
	.nav_l .router-link-active {
		background: #101f4b !important;
	}
	
	/*.nav_l_a1 {
		background: #101f4b;
	}*/
	
	.pinyAct {
		background: blue;
	}
	
	.w_heads_inputs {
		width: 369px;
		height: 100px;
		background: whitesmoke;
		position:absolute;
		left: 300px;
		top: 68px;
		border: 1px solid gray;
		font-size: 14px;
		text-indent:12px;
		line-height: 25px;
		display: none;
		z-index: 5;
	}
</style>
<script>
	export default {
		name: "head",
		data() {
			return {
				aid: "帮助",
				emile: "订阅",
				star: "收藏夹",
				city: "北京",
				car: ["高尔夫", "雪铁龙", "奥迪", "玛莎拉蒂", "兰博基尼", "拖拉机"],
				show: true,
				pinyins: ["A", "B", "C", "D", "E", "F", "G", "H", "G", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
				n: "s",
				citarr: ["保定", "长春", "成都", "大连", "东莞", "鄂州", "福州", "佛山", "贵阳 ", "哈尔滨", "杭州", "合肥", "呼市", "海口", "嘉兴", "金华", "昆明", "兰州", "廊坊", "南昌", "南京", "南宁", "南通", "宁波", "泉州", "青岛", "沈阳", "石家庄", "绍兴", "苏州", "太原", "温州", "潍坊", "无锡", "徐州", "西安", "厦门", "孝感", "西宁", "烟台", "银川", "淄博", "中山", "珠海", "郑州"],
				bol:"true"

			}
		},
		methods: {
			none: function() {
				this.show = false
			}
		},
		created: function() {},
		computed: {
			homecity() {
				return this.$store.state.homecity
			},

			pincity() {
				return this.$store.state.pincity
			},
			username(){
				return this.$store.state.username
			}

		},
		mounted() {
			var _this = this;
			
			
			
			$(".nav_insert_return").click(function() {
				$(".nav_insert").css("display", "none")
			})
			//			$(".w_navContL span").click(function(){
			//				$(".w_navContL span").css("background","#213f7b")
			//				$(this).css("background","#101f4b");
			//			})
			//切换城市效果
			var _this = this;
			$(".citys").on("click", function(e) {
				$(".citys_box").toggle();
				$(document).one("click", function() {
					$(".citys_box").hide();
				});
				e.stopPropagation();
			});
			$(".citys_box").on("click", function(e) {
				e.stopPropagation();
			});
			$(".cityEnd").on("click", function() {
				$(".citys_box").hide();
			})

			$(".piny span").on("click", function() {
				$(this).addClass("pinyAct").siblings().removeClass("pinyAct");
			})
			$(".switchCity").on("click", function() {
				$(this).addClass("actCity").siblings().removeClass("actCity");
				$(".city_panel1").css("display", "block")
				$(".city_panel2").css("display", "none")
			})
			$(".switchProvince").on("click", function() {
				$(this).addClass("actCity").siblings().removeClass("actCity");
				$(".city_panel1").css("display", "none")
				$(".city_panel2").css("display", "block")
			})
			$(".allprovinces a").on("click", function() {
				$(".shengfenchengshi").css("display", "block");
				$(this).addClass("proart").siblings().removeClass("proart");
			})

//			$(".nav_l a").click(function() {
//				$(".nav_l a").removeClass("nav_l_a1");
//			})


			$(".nav_l a").click(function() {
				$(".nav_l a").removeClass("nav_l_a1");
			})
                           
			$(".city_panel1 a").on("click", function() {
				console.log($(this).html())
				_this.$store.state.homecity = $(this).html();
				$(".citys_box").css("display", "none");

			})
			$(".city_panel2 a").on("click", function() {
				_this.$store.state.homecity = $(this).children("strong").html();
				$(".citys_box").css("display", "none");
			})
			$(".shengfenchengshi a").on("click", function() {
				_this.$store.state.homecity = $(this).html();
				$(".citys_box").css("display", "none");
			})
			$(".provincesTitle a").on("click", function() {
				_this.$store.state.homecity = $(this).html();
				$(".citys_box").css("display", "none");
			})
			$(".piny span").click(function() {
				var aaa = $(this).html();

				_this.$store.state.pincity = _this.$store.state.pinyincity[aaa];
			})
			$(".keyCitCont a").click(function() {
				_this.$store.state.homecity = $(this).html();
			})

			//搜索框搜索联想
			$(".heads_search_input").focus(function() {
				$(".w_heads_inputs").css("display", "block");
				$(".w_heads_inputs_li").click(function(){
//					alert(1)
				})
			})
			$(".heads_search_input").blur(function() {
				$(".w_heads_inputs").css("display", "none")
			})
			
			
			
			//判断是否登录
			if(window.sessionStorage.passwordA){
				_this.$store.state.username = window.sessionStorage.username;
				//有名字已经登录
				$(".head_hide").addClass("head_hide1").removeClass("head_show1");
				$(".head_show").addClass("head_show1").removeClass("head_hide1");
			}else{
				
				$(".head_show").addClass("head_hide1").removeClass("head_show1");
				$(".head_hide").addClass("head_show1").removeClass("head_hide1");
				//清除缓存
				window.sessionStorage.passwordA = "";
			}
			
			//点击退出
			$(".nav_esc").click(function(){
				window.sessionStorage.passwordA = "";
				$(".head_show").addClass("head_hide1").removeClass("head_show1");
				$(".head_hide").addClass("head_show1").removeClass("head_hide1");
				window.location.href="/";
			})
		}
	}
</script>