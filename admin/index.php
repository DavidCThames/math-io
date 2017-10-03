<?php
	/*
	if ($_SERVER['REQUEST_METHOD']=='POST'){
		$username = htmlspecialchars($_POST['username']);
		$password = htmlspecialchars($_POST['password']);
		$okay = true;
		
		if (empty($username)){
			$okay = false;
		} else {
			if (!ctype_alnum($username)){
				$okay = false;
			} else {
				//all good
			}
		}

		if (empty($password)){
			$okay = false;
		} else {
			//good

		}
		if ($okay){
			$dbc = mysql_connect('localhost', 'project', 'B0bslayer') or die("Error: couldn't connect to server. ".mysql_error());
			mysql_select_db('admin');
			$query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
			$result = mysql_query($query);
			$rows = mysql_num_rows($result);
			if ($rows == 1){
				$results = mysql_fetch_assoc($result);
				$name = $results['name'];
				setcookie('name', $name);
				setcookie('username', $username);
			}
		}
		

	}

	if (isset($_COOKIE['username']) && isset($_COOKIE['name']) ){
		$loggedin = true;
	} else {
		$loggedin = false;
	}
	*/
?>
<html>
	<head>
		<meta charset = 'utf-8'>
		<title>Math-IO | Admin</title>
		
	</head>
	<body>

	
		<div id = 'login' style = 'padding:20px;margin-left:40%;margin-right:40%;border:1px solid black;'>
			<h3>Log In</h3>
			<form action = 'action_index.php' method = 'post'>
				Username: <input type = 'text' name = 'username'/><br><br>
				Password: <input type = 'password' name = 'password'/><br><br>
				<input type = 'submit' value = 'Log In'/>
			</form>
		</div>

	</body>
</html>