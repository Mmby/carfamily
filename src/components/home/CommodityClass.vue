<template>
	<div class="wrap_class"> 
		<h2>全部商品分类</h2>
		<ul>
			<li v-for="(item,index) in classArr"> <span class="class_span1"></span> <span class="class_text">{{item}}</span>  <span class="class_span2"></span>
				
				<div class="class_show">
					<p v-for="a in liArr[index]">
					<span class="show_title">{{a.name}}</span>	
					<span v-for="b in a.cont" class="show_cont">{{b}}</span>
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name:"commodityClass",
		data(){
			return ({
				classArr:["汽车美容","汽车装饰","维修保养","汽车改装","内饰用品","外饰装潢","汽车配件"],
				liArr:[[{name:"汽车清洗",cont:["洗车","人工洗车","洗车卡"]},{name:"车身美容",cont:["打蜡","封釉","镀膜","镀晶","抛光"]},{name:"车内美容",cont:["内饰清洗","空调清洗","真皮座椅保养","高温消毒"]}],
				[{name:"汽车贴膜",cont:["全车贴膜","前档贴膜","车身贴膜"]},{name:"底盘装甲",cont:["汉高","伍尔特","3M","大能"]},{name:"汽车内饰",cont:["地板胶","座套","扶手箱","方向盘把套"]}],
				[{name:"汽车保养",cont:["发动机维护","机油更换","三滤更换","安全监测"]},{name:"汽车维修",cont:["车身凹陷修复","钣金喷漆","玻璃修复"]},{name:"汽车配件",cont:["机油滤","空气滤","燃油滤","火花塞","喇叭","刹车片","刹车盘","减震器"]}],
				[{name:"车外改装",cont:["车身改色贴膜","车灯改装","更换大灯总成","轮毅️改色"]},{name:"车内改装",cont:["音响改装","DVD导航一体机","隔音"]}],
				[{name:"汽车用品",cont:["嵌入式导航","安全预警仪","行车记录仪","倒车雷达","车载电源","车载吸尘器"]},{name:"美容用品",cont:["车用香水","车用炭包","空气净化"]},{name:"安全用品",cont:["儿童安全座椅","应急救援","自驾照明","车衣"]}],
				[{name:"车外改装",cont:["车身改色贴膜","车灯改装","更换大灯总成","轮毅️改色"]},{name:"车内改装",cont:["音响改装","DVD导航一体机","隔音"]}],
				[{name:"经典品牌",cont:["强生","3M","雷明","龟牌","量子"]},{name:"金牌品牌",cont:["爱尔行","车友汇","庆红"]}]]
			,
			arr1:["aaa","bbb"]
				
			})
		},
		methods:{
			
		}
//		,
//		created:function(){
//
//			})

	}
</script>

<style scoped>
	h2,ul,li,p{
		margin: 0;
		padding: 0;
	}
	ul,li{
		list-style: none;
	}
	.wrap_class{
		width: 179px;
		height: 261px;
		border: 2px solid #213f7b;
	}
	.wrap_class h2{
		width: 100%;
		line-height: 40px;
		color: white;
		font-size: 18px;
		font-weight: 700;
		background-color: #213f7b;
		text-indent: 22px;
	}
	.wrap_class ul{
		background-color: #fafafa;
	}
	.wrap_class li{
		line-height: 30px;
		height: 30px;
		border-bottom: 1px solid white;
		list-style: none;
		position: relative;
	}
	.wrap_class li:first-child{
		line-height: 33px;
		height: 33px;
	}
	.wrap_class li:last-child{
		
		height: 31px;
		border: none;
	}
	.class_span1{
		width: 2px;
		height: 2px;
		background-color: #213f7b;
		display: inline-block;
		position: absolute;
		top: 15px;
		left: 9px;
	}
	.class_text{
		position: absolute;
		left: 20px;
		color: black;
	}
	.class_span2{
		width: 3px;
		height: 3px;
		display: inline-block;
		border-top: 1px solid #213f7b;
		border-right: 1px solid #213f7b;
		border-left: 1px solid transparent;
		border-bottom: 1px solid transparent;
		transform: rotate(45deg);
		position: absolute;
		right: 15px;
		top: 12px;
	}
	/**/
	.wrap_class li:hover{
		background-color: #ffffff;
		border: 1px solid #dddddd;
	}
	.wrap_class li:hover .class_text{
		background-color: #ffffff;
		z-index: 20;
		text-decoration: underline;
		color: #213f7b;;
	}
	.wrap_class li:hover .class_show{
		display: block;
	}
	.wrap_class li div{
		position: absolute;
		left: 177px;
		top: -30px;
		width: 480px;
		background: white;
		display: none;
		border: 1px solid #dddddd;
	}
	.show_title{
		color: #2f5cb7;
		font-size: 12px;
		display: inline-block;
		height: 100% !important;
		line-height: 22px;
		text-decoration: underline;
		width: 68px;
		text-align: center;
	}
	.class_show{
		z-index: 10;
	}
	.class_show p{
		margin: 6px;
		text-align: left;
		border-bottom: 1px solid #dddddd;
	}
	.class_show p:last-child{
		border-bottom: none;
	}
	.show_cont{
		
		font-size: 12px;
		padding-left: 8px;
		color: #666666;
		height: 12px;
		line-height: 12px;
		display: inline-block;
		margin: 8px;
		
		border-left:1px solid #cccccc;
	}
	.show_cont:hover{
		text-decoration: underline;
	}
</style>