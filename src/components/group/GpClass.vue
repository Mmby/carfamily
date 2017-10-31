<template>
	<div class="gp_class">
		<!--团购的关键词-->
		<div class="gp_top">
			<div>热门团购: </div>
			<ul>
				<li v-for="item in hotgp">{{item}}</li>
			</ul>
		</div>
		<!--中间部分-->
		<div class="gp_center">
			<div class="gp_center1 gp_wrap1">
				<div class="gp_cen_class">分类:</div>
				<div class="gp_cen_cont gp_click1 gp_click1_all">全部
				<span class="gp_click1"></span>
				</div>
				<div v-for="item in gpclassArr" class="gp_cen_cont">
					<span class="gp_click1">{{item}}</span>
					<span class="gp_cen_cont_num">(++)</span>
				</div>
				<!--点开出现的阴影框-->
				
				<div class="gp_cen_cont_cli gp_cen_cli1">
					<span class="gp_cen_cont_class gp_cen_cli2"  v-for="item in gpclassobj[gpselect]">
						<span class="gp_ji2">{{item}}</span>
						<span class="gp_cen_cont_class_num">(++)</span>
					</span>
				</div>
				
			</div>
			<!--第二个选择城市-->
			<div class="gp_center1 gp_wrap2">
				<div class="gp_cen_class">区域:</div>
				<div class="gp_cen_cont gp_click1 gp_click1_all">全部
					
				</div>
				<div v-for="item in gpcityArr" class="gp_cen_cont">
					<span class="gp_click1">{{item}}</span>
					<span class="gp_cen_cont_num">(++)</span>
				</div>
				<!--点开出现的阴影框-->
				
				<!--<div class="gp_cen_cont_cli gp_cen_cli1">
					<span class="gp_cen_cont_class gp_cen_cli2" v-for="item in gpcityobj[gpselect1]">
						<span class="gp_ji2">{{item}}</span>
						<span class="gp_cen_cont_class_num">(++)</span>
					</span>
				</div>-->
			</div>
			<!--第三个选择热门-->
			<div class="gp_center1 gp_wrap3">
				<div class="gp_cen_class">热门:</div>
				<div v-for="item in hotgp" class="gp_cen_cont gp_cen_hot">
					<span>{{item}}</span>
					<span class="gp_cen_cont_num">(35)</span>
				</div>
			</div>
		</div>
		<!--第三个-->

		<!--下面排序方式-->
		<div class="gp_foot">
			<!--排序方式按钮-->
			<ul class="gp_foot_ul">
				<li class="bgcl">默认排序:</li>
				<li class="click_t">销量 <img src="../../assets/gp/pg_jian.png" class="be_b" /><img src="../../assets/gp/pg_jian.png" class="af_t" style="display: none;"/></li>
				<li class="click_h">价格 <img src="../../assets/gp/pg_jian.png" class="be_o"/><img src="../../assets/gp/pg_jian.png" class="af_o" style="display: none;"/></li>
				<li class="click_i">折扣 <img src="../../assets/gp/pg_jian.png" class="be_t"/><img src="../../assets/gp/pg_jian.png" class="af_p" style="display: none;"/></li>
				<li class="click_s">发布时间 <img src="../../assets/gp/pg_jian.png" class="be_s"/><img src="../../assets/gp/pg_jian.png" class="af_s" style="display: none;"/></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name:"gpClass",
		data(){
			return {
				gpClass:[],
				
				gpselect:"",
				gpselect1:"",
				picnum1:'/static/group1.png',
				picnum2:'/static/group2.png',
				picnum3:'/static/wash4.png',

				//热门
				
				hotgp:["购车膜","团购车灯","雪铁龙夫","奥迪","高尔夫","雪铁龙","奥迪A1"],
				gpclassArr:["汽车美容","汽车装饰","维修保养","汽车改装","抽奖"],
				gpcityArr:["北京","上海","郑州"],
				gpcityobj:{北京:["东城区","西城区","朝阳区","丰台区","海定区","昌平区","大西区"]},
				gpclassobj:{
					汽车美容:["汽车清洗","车身美容","车内美容"],汽车装饰:["汽车贴膜","底盘装甲"],维修保养:["汽车保养","轮胎养护"],汽车改装:[],抽奖:[]
				}
			}
		},
		methods:{
			
		},
		mounted(){
			var _this = this;
			
			$(function(){
				//点击页码
//				$(document).on("click",".pg_page a",function() {
//					var page = $(this).text();
//					//alert(page);
//	//				loadLi(page);
//				});


				loadli(1);
				function loadli(startpage){
						$.ajax({
							type: "get",
							url: "http://localhost/chezuwang/carfamily/servers/index.php",
							dataType: "json",
							data: {
								act: "search",
								type1:_this.$store.state.type1,
								type2:_this.$store.state.type2,
								city:_this.$store.state.city,
								groupsort:_this.$store.state.groupsort,
								startpage:startpage
								
							},
							success: function(data) {
								if(data.err){
								

									$(".group_l").empty();//清空
									for (var i = data.msglist.length-1; i >= 0; i--) {				creatLi(data.msglist[i].pic,data.msglist[i].name,data.msglist[i].intro,data.msglist[i].price1,data.msglist[i].price2,data.msglist[i].buynum,data.msglist[i].id);}
									//页码部分
									var countPage = data.countPage;
									$(".gp_page").empty();
									for (var i=0;i<countPage;i++) {
									$(".gp_page").append("<a href='javascript:void(0)'>"+(i+1)+"</a>");
									}
									//给当前页码添加状态
									var curpage = startpage - 1;
									$(".gp_page a").eq(curpage).addClass("cur");
								}
								
								
								
							}	
							//成功回调结束部分

						});
				
					
					}	//loadli函数结束部分
				//点击页码
				

			
			
			
			  
			//分类点击全部
			$(".gp_wrap1 .gp_cen_cont").click(function(){
				$(this).css("background","#225a9a").siblings().css("background","white");
				$(this).addClass("gp_white").siblings().removeClass("gp_white");
				_this.gpselect = $(this).children(".gp_click1").html();
				//下面重置
				$(this).nextAll().children(".gp_cen_cli2").css("background","white").removeClass("gp_white");

				//重置热门搜索
				$(".gp_wrap3 .gp_cen_hot").removeClass("gp_white").css("background","white");
				_this.$store.state.type1 = $(this).children(".gp_click1").html();
				_this.$store.state.type2 = "";
				//ajax请求
				
				loadli(1);
	
				
			})
			//点击type1类型结束部分
			$(document).on("click",".gp_page a",function() {
					var page111 = $(this).html();
				
					loadli(page111);
			});

			//函数
			function creatLi(pic,name,intro,price1,price2,buynum,myattr) {
				var oLi = $("<div class='productaa productLi'><div class='product_img'><img  src="+pic+"><div class='product_img_intro'>北京朝阳区朝阳北路白家楼村29号(白家楼桥西北角)</div></div><div class='product_title'>"+name+"</div><div class='product_intro'>"+intro+"</div><ul class='product_price'><li>¥"+price2+"</li><li>门店价: ¥"+price1+"</li></ul><div class='product_patch1'></div><div class='product_patch2'><span></span></div><div class='product_patch3'></div><div class='product_patch4'></div><div class='product_look' myattr= "+ myattr + ">去看看</div><div class='product_buy'><span>"+buynum+"</span> 已经购买<div></div>");
				//从前面追加
				$(".group_l").prepend(oLi);
			}
			//函数结束部分
			$(document).on("click",".gp_cen_cli2",function(){
				$(this).css("background","#225a9a").siblings().css("background","white");
				$(this).addClass("gp_white").siblings().removeClass("gp_white");
				_this.$store.state.type2 = $(this).children(".gp_ji2").html();
				//二级类型数据交互
				loadli(1);		
			})
			//城市类型选择
			//不分城市
			$(".gp_click1_all").click(function(){
				_this.$store.state.city = "";
				loadli(1);
			})
			//第二个
			$(".gp_wrap2 .gp_cen_cont").click(function(){
				$(this).css("background","#225a9a").siblings().css("background","white");
				$(this).addClass("gp_white").siblings().removeClass("gp_white");
				_this.gpselect1 = $(this).children(".gp_click1").html();
				//选中城市1
				_this.$store.state.city = $(this).children(".gp_click1").html();
				//下面重置
				$(this).nextAll().children(".gp_cen_cli2").css("background","white").removeClass("gp_white");
				//ajax请求
//				$.ajax({
//					type: "get",
//					url: "http://localhost/chezuwang/carfamily/servers/index.php",
//				
//					data: {
//						act: "search3",
//						type1:_this.$store.state.type1,
//						type2:_this.$store.state.type2,
//						city1:_this.$store.state.city1,
//						groupsort:_this.$store.state.groupsort
//
//					},
//					success: function(data) {
//						
//					}
//				});	

				loadli(1);
			})
			//点击城市结束
			//热门 第三个的点击交互事件
			$(".gp_wrap3 .gp_cen_hot").click(function(){
				$(this).css("background","#225a9a").siblings().css("background","white");
				$(this).addClass("gp_white").siblings().removeClass("gp_white");
				//清除第一个的样式
//				$(".gp_center1 span").css("background","white").removeClass("gp_white");
				_this.gpselect = "";
				$(".gp_wrap1 .gp_cen_cont").css("background","white");
				$(".gp_wrap1 .gp_cen_cont").removeClass("gp_white");
				$(".gp_wrap1 .gp_click1_all").css("background","#225a9a").addClass("gp_white");
				//发送ajax请求
				
				
				
			})
			//热门点击事件结束
			
			
			$(document).on("click",".product_look",function(){
				
				//去看看传值;
				//ajax获取产品id
				var bbb =  $(this).attr("myattr");
//				alert(bbb);
				$.ajax({
							type: "get",
							url: "http://localhost/chezuwang/carfamily/servers/index.php",
							dataType: "json",
							data: {
								act :"id",
								id1:bbb
								
							},
							success: function(data) {
								//获取返回值
								
								window.sessionStorage.bjiage2 = data.msglist[0].price2;
								window.sessionStorage.bjiage1 = data.msglist[0].price1;
								window.sessionStorage.bname = data.msglist[0].name;
								window.sessionStorage.bintro = data.msglist[0].intro;
								window.sessionStorage.bhasbuy = data.msglist[0].buynum;
								window.sessionStorage.bimg = data.msglist[0].pic;
								
							}	
							//成功回调结束部分

						});
				
				
				
				window.location.href = "/detailpage";
				
//				_this.$router.replace({ path: '/detailpage' })
				
			})
			
			
			
			
		})
		var s=1;
		//点击箭头转向
		$(".click_t").on("click",function() {
			s++;
			if (s%2 == 0) {
				$(".af_t").show();
				$(".be_b").hide();
			}else {
				$(".af_t").hide();
				$(".be_b").show();
			}
			
		})
		$(".click_h").on("click",function() {
			s++;
			if (s%2 == 0) {
				$(".af_o").show();
				$(".be_o").hide();
			}else {
				$(".af_o").hide();
				$(".be_o").show();
			}
		})
		$(".click_i").on("click",function() {
			s++;
			if (s%2 == 0) {
				$(".af_p").show();
				$(".be_t").hide();
			}else {
				$(".af_p").hide();
				$(".be_t").show();
			}
			
		})
		$(".click_s").on("click",function() {
			s++;
			if (s%2 == 0) {
				$(".af_s").show();
				$(".be_s").hide();
			}else {
				$(".af_s").hide();
				$(".be_s").show();
			}
		})
		$(".gp_foot_ul li").on("click",function() {
			$(this).addClass("bgcl").siblings().removeClass("bgcl");
		})
			
			
			
			
			
			
	}
		
}	
</script>
<style>
	/*二级点的东东*/
	.gp_cen_cont_class{
		z-index: 100;
	}
	/*点击颜色为白色*/
	.gp_white{
		color: white !important;
		font-weight: 700;
	}
	.gp_white span{
		color: white !important;
		font-weight: 700;
	}
	.gp_class{
		width: 974px;
		border: 1px solid #c5c5c5;
		background-color: white;
		/*background: #005BAC;*/
	}
	.gp_class .gp_top{
		width: 974px;
		height: 34px;
		background: white !important;
		border-bottom:1px solid #c5c5c5;
		line-height: 34px;
		font-size: 12px;
	}
	.gp_top div{
		display: inline-block;
		width: 80px;
		text-align: right;
	}
	.gp_top ul{
		display: inline-block;
	}
	.gp_top ul li{
		display: inline-block;
		color: #225a9a;
		text-indent: 16px;
	}

	.gp_top ul li:hover{
		text-decoration: underline;
	}
	.gp_top ul li:nth-child(2){
		color: red;
	}
	.gp_center1 .gp_cen_class{
		display: inline-block;
		width: 77px;
		line-height: 43px;
		height: 43px;
		/*background: pink !important;*/
		color: black;
		text-align: right;
	/*	background-image: url(../../assets/gp/gp1.png);*/
		background-repeat: no-repeat !important;
		background-position: 17px 13px !important;
	}
	.gp_wrap1 .gp_cen_class{
		background-image: url(../../assets/gp/gp1.png) !important;
	} 
	.gp_wrap2 .gp_cen_class{
		background-image: url(../../assets/gp/pg2.png) !important;
	} 
	.gp_wrap3 .gp_cen_class{
		background-image: url(../../assets/gp/pg3.png) !important;
	} 
	.gp_center1 .gp_cen_cont{
		display: inline-block;
		font-size: 12px;
		color: #225a9a;
		margin-right: 6px;
		padding: 3px;
		/*background: #000000;*/
	}
	.gp_center1 .gp_cen_cont .gp_cen_cont_num{
		color: grey;
	}
	/*分类点开出现的部分*/
	.gp_cen_cont_cli{
		width: 875px;
		
		background-color: #efeff0;
		margin-left: 77px;
	}
	.gp_cen_cont_cli span{
		display: inline-block;
		/*padding: 3px;*/
		font-size: 12px;
		line-height: 12px;
		margin: 4px;
	}
	.gp_cen_cont_class_num{
		margin-left: 0 !important;
		padding-left: 0 !important;
		color: grey;
		/*margin-right: 0 !important;*/
	}
	.gp_foot{
		height: 31px;
		background-color: #f7f7f7;
	}
	.gp_foot ul{
		/*width: 328px;*/
		/*height: 19px;*/
		border: 1px solid #e8e8e8;
		display: inline-block;
		margin-left: 18px;
		margin-top: 3px;
	}
	.gp_foot ul li{
		display: inline-block;
		text-align: center;
		padding: 0 10px;
		line-height: 19px !important;
		font-size: 12px;
		height: 19px;
		border-left: 1px solid #e8e8e8;
		color: black;
		font-weight: 500;
		cursor: pointer;
	}
	.gp_foot ul li:first-child{
		border-left:none;
	}
	.gp_foot ul li img{
		margin-top: 3px;
	}
	.gp_cen_cont_class{
		display: inline-block;
	}
	.gp_foot .af_t,.af_o,.af_p,.af_s {
		transform: rotate(180deg);
	}
	.bgcl {
		background-color: #eccddf;
	}
	
	
	
</style>