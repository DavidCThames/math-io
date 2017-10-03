<?php
	if ($_SERVER['REQUEST_METHOD'] == 'POST'){
		//posting event
		$date = $_POST['date'];
		$time = $_POST['time'];
		$location = htmlspecialchars($_POST['location'], ENT_QUOTES);
		$host = $_POST['host'];
		$title = htmlspecialchars($_POST['title'], ENT_QUOTES);
		$description = htmlspecialchars($_POST['description'], ENT_QUOTES);

		$dbc = mysql_connect('localhost', 'project', 'B0bslayer') or die("Error connecting to server. ".mysql_error());
		mysql_select_db('admin') or die("Error connecting to database. ".mysql_error());
		$query = "INSERT INTO calendar (date, time, location, host, title, description) VALUES ('$date', '$time', '$location', '$host', '$title', '$description')";
		mysql_query($query) or die("Error updating database. ".mysql_error());
		header('location: http://www.admin.math-io.com/calendar/');
	}
?>