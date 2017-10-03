<?php
	if ($_SERVER['REQUEST_METHOD']=='POST'){
		switch ($_POST['mode']){
			case 'newthread':
				$name = str_replace(' ', '_', $_POST['name']);
				$name = htmlspecialchars($name, ENT_QUOTES);
				$manager = $_POST['manager'];

				$dbc = mysql_connect('localhost', 'project', 'B0bslayer') or die("Error: couldn't connect to server. ".mysql_error());
				mysql_select_db('admin') or die("Error connecting to database".mysql_error());
				$query = "INSERT INTO threads (name, manager, subscribers) VALUES ('$name', '$manager', '$manager')";
				mysql_query($query) or die("Couldn't update database".mysql_error());
				header('location: http://www.admin.math-io.com/home.php');				
				break;

			case 'logout':
				session_destroy();
				unset($_COOKIE['username']);
				unset($_COOKIE['name']);
				header('location: http://www.math-io.com/');
				break;
		}	
	}
?>