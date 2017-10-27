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
				<div v-for="item in gpclassArr" class="gp_cen_cont">
					<span>{{item.title}}</span>
					<span class="gp_cen_cont_num">(35)</span>
				</div>
				<!--点开出现的阴影框-->
				
				<div class="gp_cen_cont_cli">
					<span class="gp_cen_cont_all">全部</span>
					<span class="gp_cen_cont_class">
						团购车模
						<span class="gp_cen_cont_class_num">(8)</span>
					</span>
					<span class="gp_cen_cont_class">
						团购车模
						<span class="gp_cen_cont_class_num">(8)</span>
					</span>
				</div>
				
			</div>
			<div class="gp_center1 gp_wrap2">
				<div class="gp_cen_class">区域:</div>
				<div v-for="item in gpclassArr" class="gp_cen_cont">
					<span>{{item.title}}</span>
					<span class="gp_cen_cont_num">(35)</span>
				</div>
				<!--点开出现的阴影框-->
				
				<div class="gp_cen_cont_cli">
					<span class="gp_cen_cont_all">全部</span>
					<span class="gp_cen_cont_class">
						团购车模
						<span class="gp_cen_cont_class_num">(8)</span>
					</span>
					<span class="gp_cen_cont_class">
						团购车模
						<span class="gp_cen_cont_class_num">(8)</span>
					</span>
				</div>
			</div>
			<div class="gp_center1 gp_wrap3">
				<div class="gp_cen_class">分类:</div>
				<div v-for="item in gpclassArr" class="gp_cen_cont">
					<span>{{item.title}}</span>
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
				hotgp:["购车膜","团购车灯","雪铁龙夫","奥迪","高尔夫","雪铁龙","奥迪A1"],
				gpclassArr:[{title:"全部",cont:[]},{title:"汽车美容",cont:[]},{title:"汽车装饰",cont:[]},{title:"维修保养",cont:[]},{title:"汽车改装",cont:[]},{title:"抽奖",cont:[]}]
			}
		},
		methods:{
			
		}
	}
</script>

<style scoped>
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
		color: black;
		text-align: right;
		/*background-image: url(../../assets/gp/gp1.png);*/
		background-repeat: no-repeat;
		background-position: 17px 13px;
	}
	.gp_wrap1 .gp_cen_class{
		background-image: url(../../assets/gp/gp1.png);
	} 
	.gp_wrap2 .gp_cen_class{
		background-image: url(../../assets/gp/pg2.png);
	} 
	.gp_wrap3 .gp_cen_class{
		background-image: url(../../assets/gp/pg3.png);
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
		padding: 3px;
		font-size: 12px;
		line-height: 12px;
		margin: 5px;
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
</style>