<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST'){
		$username = $_POST['username'];
		$name = $_POST['name'];

		setcookie('username', $username);
		setcookie('name', $name);
		header("Location: http://www.admin.math-io.com/home.php");
	}
?>