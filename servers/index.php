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
//	date_default_timezone_set("PRC");
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
//	获取接口
	$act = $_GET["act"];
	//获取type
//	$type1 = $_GET["type1"];
//	$type2 = $_GET["type2"];
//	$city1 = $_GET["city1"];
//	$groupsort = $_GET["groupsort"];
	

	//根据接口标识执行不同的功能
	switch($act){
		case "search":
			$startpage = $_GET["startpage"];
			$type1 = $_GET["type1"];
			$type2 = $_GET["type2"];
			$city = $_GET["city"];
			$groupsort = $_GET["groupsort"];
			$startIndex = ($startpage-1)*10;
			//查询数据库数据 加载数据 初始化
			//首先判断是type1类型还是type2类型
			if($type2){
				//为二级type类型
				//继续判断城市
				if($city){
					//有城市选项
					$query = "SELECT * FROM selllist WHERE type2 = '{$type2}' AND city = '{$city}' ORDER BY {$groupsort} LIMIT {$startIndex},10";
			        $result = mysqli_query($link, $query);
					$arr = [];   //储存查询出来的值
			
					while($row = mysqli_fetch_assoc($result)){
					//$arr[] = 或者0
						array_push($arr,$row);
					}
					//判断有几页
					$query = "SELECT count(id) FROM selllist WHERE type2 = '{$type2}' AND city = '{$city}'";
					$result = mysqli_query($link, $query);
					//以索引数组输出
					$count = mysqli_fetch_row($result)[0];
					
				}else{
					//没有城市选项
					$query = "SELECT * FROM selllist WHERE type2 = '{$type2}' ORDER BY {$groupsort} LIMIT {$startIndex},10";
			        $result = mysqli_query($link, $query);
					$arr = [];   //储存查询出来的值
			
					while($row = mysqli_fetch_assoc($result)){
					//$arr[] = 或者0
						array_push($arr,$row);
					}
					//判断有几页
					$query = "SELECT count(id) FROM selllist WHERE type2 = '{$type2}'";
					$result = mysqli_query($link, $query);
					//以索引数组输出
					$count = mysqli_fetch_row($result)[0];
				}
				
			}else{
				//为一级type类型
				if($type1){
					//查询的是1级type
					if($city){
						//有城市选项
						$query = "SELECT * FROM selllist WHERE type1 = '{$type1}' AND city = '{$city}' ORDER BY {$groupsort} LIMIT {$startIndex},10";
				        $result = mysqli_query($link, $query);
				        $arr = [];   //储存查询出来的值
			
						while($row = mysqli_fetch_assoc($result)){
						//$arr[] = 或者0
							array_push($arr,$row);
						}
				        $query = "SELECT count(id) FROM selllist WHERE type1 = '{$type1}' AND city = '{$city}'";
						$result = mysqli_query($link, $query);
						//以索引数组输出
						$count = mysqli_fetch_row($result)[0];
					}else{
						//没有城市选项
						$query = "SELECT * FROM selllist WHERE type1 = '{$type1}' ORDER BY {$groupsort} LIMIT {$startIndex},10";

			            $result = mysqli_query($link, $query);
						$arr = [];   //储存查询出来的值
			
						while($row = mysqli_fetch_assoc($result)){
						//$arr[] = 或者0
							array_push($arr,$row);
						}
						$query = "SELECT count(id) FROM selllist WHERE type1 = '{$type1}'";
						$result = mysqli_query($link, $query);
						//以索引数组输出
						$count = mysqli_fetch_row($result)[0];
					}
				}else{
					//查询所有的type类型
					if($city){
					//有城市选项
						$query = "SELECT * FROM selllist WHERE city = '{$city}' ORDER BY {$groupsort} LIMIT {$startIndex},10";
				        $result = mysqli_query($link, $query);
				        $arr = [];   //储存查询出来的值
				
						while($row = mysqli_fetch_assoc($result)){
						//$arr[] = 或者0
							array_push($arr,$row);
						}
				        $query = "SELECT count(id) FROM selllist WHERE city = '{$city}'";
						$result = mysqli_query($link, $query);
						//以索引数组输出
						$count = mysqli_fetch_row($result)[0];
					}else{
						//没有城市选项
						$query = "SELECT * FROM selllist ORDER BY {$groupsort} LIMIT {$startIndex},10";
			            $result = mysqli_query($link, $query);
						$arr = [];   //储存查询出来的值
			
						while($row = mysqli_fetch_assoc($result)){
						//$arr[] = 或者0
							array_push($arr,$row);
						}
						$query = "SELECT count(id) FROM selllist";
						$result = mysqli_query($link, $query);
						//以索引数组输出
						$count = mysqli_fetch_row($result)[0];
					}
				}
				
			}

			$pageNum = ceil($count/10); //向上取整的方法 ceil();
			
			$resultArr = ["err"=>1,"msglist"=>$arr,"countPage"=>$pageNum];
			echo json_encode($resultArr);
			break;
			

			
		break;	
		case "email":
			$name = $_GET["name"];
			$email = $_GET["email"];
			$car = $_GET["car"];
			$password = $_GET["password"];
			$city = $_GET["city"];
			//首先判断用户列表是不是存在这个用户名
			$query = "SELECT count(id) FROM userlist WHERE name = '{$name}'";
			$result = mysqli_query($link, $query);
			//以索引数组输出
			$count = mysqli_fetch_row($result)[0];
			if($count > 0){
				//存在这个用户名
				$arr = ["err"=>0];
				echo json_encode($arr);   // 将数组转化为json, 返回给前端
			}else{
				//再判断邮箱号是否被注册
				$query = "SELECT count(id) FROM userlist WHERE email = '{$email}'";
				$result = mysqli_query($link, $query);
				//以索引数组输出
				$count = mysqli_fetch_row($result)[0];
				if($count > 0){
					//存在这个邮箱号
					$arr = ["err"=>1];
					echo json_encode($arr);   // 将数组转化为json, 返回给前端
				}else{
					//不存在,允许注册
					$query = "INSERT INTO userlist(id,name,email,car,password,city) VALUES (null,'{$name}','{$email}','{$car}','{$password}','{$city}')";
					mysqli_query($link, $query);
					$arr = ["err"=>2,"name1"=>$name,"email1"=>$email];
					echo json_encode($arr);   // 将数组转化为json, 返回给前端
				}
			}
			
			
			
		break;
		case "phone":
			$phone = $_GET["phone"];
			
			$car = $_GET["car"];
			$password = $_GET["password"];
			//首先判断手机号是否存在
			$query = "SELECT count(id) FROM userlist WHERE phone = '{$phone}'";
			$result = mysqli_query($link, $query);
			//以索引数组输出
			$count = mysqli_fetch_row($result)[0];
			if($count > 0){
				//存在这个手机号
				$arr = ["err"=>0];
				echo json_encode($arr);   // 将数组转化为json, 返回给前端
			}else{
				//允许注册
				$query = "INSERT INTO userlist(id,name,phone,car,password) VALUES (null,'{$phone}','{$phone}','{$car}','{$password}')";
				mysqli_query($link, $query);
				$arr = ["err"=>1,"phone1"=>$phone];
				echo json_encode($arr);   // 将数组转化为json, 返回给前端
				
			}
			
			
		break;
		case "login1":
			$name = $_GET["name"];
			$passWord = $_GET["passWord"];
			//首先判断是不是存在该用户名
			$query = "SELECT count(id) FROM userlist WHERE name = '{$name}'";
			$result = mysqli_query($link, $query);
			//以索引数组输出
			$count = mysqli_fetch_row($result)[0];
			if($count){
				//存在
				//查询密码
				$query = "SELECT password FROM userlist WHERE name = '{$name}'";
				$result = mysqli_query($link, $query);
				$password111 = mysqli_fetch_row($result)[0];
				if($passWord == $password111){
					echo '{"err":1}';
				}else{
					echo '{"err":2}';
				}
			}else{
				//不存在
				echo '{"err":0}';
			}
		break;
//		case:
//		break;
		default:
		break;		
	
	}


////改
//$query = "UPDATE selllist SET pic='/static/wash4.png' WHERE pic='picnum3'";
//mysqli_query($link, $query);

	
?>