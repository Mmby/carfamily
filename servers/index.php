<?php
	// 指定允许其他域名访问  
header('Access-Control-Allow-Origin:*');  
// 响应类型  
header('Access-Control-Allow-Methods:POST');  
// 响应头设置  
header('Access-Control-Allow-Headers:x-requested-with,content-type'); 

//天才第一步, 链接数据库
	$link = mysqli_connect("localhost", "root", "", "mycar");
	//设置编码格式
	mysqli_query($link, "set names utf8");
	//设置时区
	date_default_timezone_set("PRC");
//			if($link){
//			echo "数据库连接成功";
//		}else{
//			echo "数据库链接失败";
//		}
	//设置编码格式
	mysqli_query($link, "set names utf8");
	//设置时区
	date_default_timezone_set("PRC");
//	$query = "INSERT INTO selllist(id,name,type,intro,price1,price2,hasnum,buynum,pic,type2) VALUES (NULL,'车爵士镀膜','汽车美容','【东城区】车族价仅988元, 即可享受原价1456元的精洗内室套餐!服务项目繁多',1456,988,25,10,'picnum3','车身美容')";
//	$query = "INSERT INTO selllist(id,name,type,intro,price1,price2,hasnum,buynum,pic,type2) VALUES (NULL,'梦工厂四轮定位','维修保养','【朝阳区】车族价仅365元, 即可享受原价800元的玻璃修复套餐!服务项目繁多',800,365,1386,583,'picnum2','轮胎养护')";
//	//执行
//	mysqli_query($link, $query);
//	$id = mysqli_insert_id($link);
//	if($id > 0){
//		  //数据库创建留言成功
//				echo "成功";
//			}else{
//				echo "插入失败";
//			}
	$act = $_GET["act"];
	//根据接口标识执行不同的功能
	switch($act){
		case:
		break;	
		case:
		break;
		case:
		break;
		case:
		break;
		default:
		break;		
	
	}


	
?>