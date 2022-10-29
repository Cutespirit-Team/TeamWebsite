<?php 
session_start(); 
require_once "db_conn.php";

if (isset($_POST['email']) && isset($_POST['password'])
    && isset($_POST['name']) && isset($_POST['re_password'])) {

	function validate($data){
       $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}

	$email = validate($_POST['email']);
	$pass = validate($_POST['password']);
	$re_pass = validate($_POST['re_password']);
	$name = validate($_POST['name']);
    $time= date("Y/m/d");
	$user_data = 'email='. $email. '&name='. $name;
	if(strlen($pass)<8 or strlen($pass)>16){
      header('Location: http://saylove.cutespirit.org/upload_posts.php?id=$id&alert=密碼小於8或大於16');
      exit();
    }
    if(strlen($name)>16 or strlen($name)<=0){
        header('Location: http://saylove.cutespirit.org/upload_posts.php?id=$id&alert=姓名為空或過長');
        exit();
    }
    $illegal = array("=","#","!","｛","｝","：","+","-","/","&","'",'"',"^","%","$","or");
    for($i=0;$i<count($illegal);$i++){
        $email=str_replace($illegal[$i],"’",$email);
    }
    $illegal = array("=","'",'"',"^","%","$","or");
    for($i=0;$i<count($illegal);$i++){
        $pass=str_replace($illegal[$i],"’",$pass);
    }

	if (empty($email)) {
		header("Location: signup.php?error=電子郵件未填&$user_data");
	    exit();
	}else if(empty($pass)){
        header("Location: signup.php?error=密碼未填&$user_data");
	    exit();
	}
	else if(empty($re_pass)){
        header("Location: signup.php?error=確認密碼未填&$user_data");
	    exit();
	}

	else if(empty($name)){
        header("Location: signup.php?error=姓名未填&$user_data");
	    exit();
	}

	else if($pass !== $re_pass){
        header("Location: signup.php?error=密碼和確認密碼不相符&$user_data");
	    exit();
	}

	else{

		// hashing the password
        $pass = ($pass); //md5

	    $sql = "SELECT * FROM users WHERE Email='$email' ";
		$result = mysqli_query($conn, $sql);

		if (mysqli_num_rows($result) > 0) {
			header("Location: signup.php?error=用戶名被佔用請嘗試另一個&$user_data");
	        exit();
		}else {
           $sql2 = "INSERT INTO users(Email, password, name, registertime) VALUES('$email', '$pass', '$name', '$time')";
           $result2 = mysqli_query($conn, $sql2);
           if ($result2) {
           	 header("Location: index.php?success=您的帳戶已成功創建");
	         exit();
           }else {
	           	header("Location: index.php?error=發生未知錯誤&$user_data");
		        exit();
           }
		}
	}
	
}else{
	header("Location: index.php");
	exit();
}