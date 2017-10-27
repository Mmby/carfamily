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
				<div class="gp_cen_cont gp_click1 gp_click1_all">全部</div>
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
				<div class="gp_cen_cont gp_click1 gp_click1_all">全部</div>
				<div v-for="item in gpcityArr" class="gp_cen_cont">
					<span class="gp_click1">{{item}}</span>
					<span class="gp_cen_cont_num">(++)</span>
				</div>
				<!--点开出现的阴影框-->
				
				<div class="gp_cen_cont_cli gp_cen_cli1">
					<span class="gp_cen_cont_class gp_cen_cli2" v-for="item in gpcityobj[gpselect1]">
						<span class="gp_ji2">{{item}}</span>
						<span class="gp_cen_cont_class_num">(++)</span>
					</span>
				</div>
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
				<li>默认排序:</li>
				<li>销量 <img src="../../assets/gp/pg_jian.png"/> </li>
				<li>价格 <img src="../../assets/gp/pg_jian.png"/></li>
				<li>折扣 <img src="../../assets/gp/pg_jian.png"/></li>
				<li>发布时间 <img src="../../assets/gp/pg_jian.png"/></li>
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
			//分类点击全部
			$(".gp_wrap1 .gp_cen_cont").click(function(){
				$(this).css("background","#225a9a").siblings().css("background","white");
				$(this).addClass("gp_white").siblings().removeClass("gp_white");
				_this.gpselect = $(this).children(".gp_click1").html();
				//下面重置
				$(this).nextAll().children(".gp_cen_cli2").css("background","white").removeClass("gp_white");
				//重置热门搜索
				$(".gp_wrap3 .gp_cen_hot").removeClass("gp_white").css("background","white");
				
			})
//			$(".gp_wrap1 .gp_click1").click(function(){
//				_this.gpselect = $(this).html();
//			})
			$(document).on("click",".gp_cen_cli2",function(){
				$(this).css("background","#225a9a").siblings().css("background","white");
				$(this).addClass("gp_white").siblings().removeClass("gp_white");
			})
			
			//第二个
			$(".gp_wrap2 .gp_cen_cont").click(function(){
				$(this).css("background","#225a9a").siblings().css("background","white");
				$(this).addClass("gp_white").siblings().removeClass("gp_white");
				_this.gpselect1 = $(this).children(".gp_click1").html();
				//下面重置
				$(this).nextAll().children(".gp_cen_cli2").css("background","white").removeClass("gp_white");
			})
			
			//热门
			$(".gp_wrap3 .gp_cen_hot").click(function(){
				$(this).css("background","#225a9a").siblings().css("background","white");
				$(this).addClass("gp_white").siblings().removeClass("gp_white");
				//清除第一个的样式
//				$(".gp_center1 span").css("background","white").removeClass("gp_white");
				_this.gpselect = "";
				$(".gp_wrap1 .gp_cen_cont").css("background","white");
				$(".gp_wrap1 .gp_cen_cont").removeClass("gp_white");
				$(".gp_wrap1 .gp_click1_all").css("background","#225a9a").addClass("gp_white");
			})

		}
	}
</script>

<style scoped>
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
</style>