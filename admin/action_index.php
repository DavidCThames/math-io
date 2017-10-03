<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST'){
		$username = htmlspecialchars($_POST['username']);
		$password = htmlspecialchars($_POST['password']);

		$dbc = mysql_connect('localhost', 'project', 'B0bslayer');
		mysql_select_db('admin');
		$sql = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
		$result = mysql_query($sql);
		$rows = mysql_num_rows($result);
		if ($rows != 1){
			header('Location: http://www.admin.math-io.com/');
		} else {
			$results = mysql_fetch_assoc($result);
			session_start();
			$_SESSION['username'] = $username;
			$_SESSION['name'] = $results['name'];
			setcookie('name', $results['name']);
			setcookie('username', $username);

			header('Location: http://www.admin.math-io.com/home.php');
		}
	}
?>