import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // 定义状态
  state: {
   		homecity:"北京",
   		pincity:["北京", "保定", "包头", "本溪", "白城", "白山", "蚌埠", "滨州", "百色", "北海", "巴中", "毕节", "保山", "宝鸡", "白银"],
   		pinyincity:{
					A:["安宁","安庆","鞍山","安顺","安阳"],
					B:["白山","白城","白银","巴中","宝鸡","北海","北京","博乐","本溪"],
					C:["常熟","常州","潮州","承德","成都","城固","赤壁","赤水","楚雄","从化","慈溪","滁州"],
					D:["大理","大连","丹东","丹阳","大庆"],
					E:["恩施","鄂尔多斯"],
					F:["阜阳","抚州","抚顺"],
					G:["高邮","巩义","广州","桂林","贵阳"],
					H:["海口","海门","海门","邯郸"],
					J:["江阴","嘉兴","济南"],
					K:["开封","昆山","昆明"],
					L:["兰州","廊坊","临夏"],
					N:["南昌","南京","南通"],
					M:["马鞍山","牡丹江","勉县"],
					P:["平凉","莆田","濮阳"],
					Q:["齐齐哈尔","泉州","秦皇岛"],
					R:["日照","乳山","如皋"],
					S:["三门峡","三亚","三明"],
					T:["塔城","太原","泰州","唐山"],
					W:["芜湖","温州","武汉"],
					X:["信阳","仙桃","西昌"],
					Y:["延安","宜昌","扬州"],
					Z:["漳州","张家界","郑州"]
<<<<<<< HEAD
				},
		//团购也定义的数组初始
		groupList:{},
		//定义接口
		type1:"",
		type2:"",
		city:"",
		groupsort:"id"
		//图片

=======
				}
>>>>>>> 8d841bf7a1a3d74248772c76274491a6c82b1d0c
  },
  mutations:{
  	
  }
})

export default store