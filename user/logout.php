<?php 
	session_start();
	if (isset($_SESSION['username'])) {
	if($_SESSION['teacher'] == false) {
		//remove one student login
		$db_username = "mathio";
		$db_password = "bobslayer";
		$db_database = "members";
		$db_server = "ninjacstudios.com";
	
		$db_handle = mysql_connect($db_server, $db_username, $db_password);
		$db_found = mysql_select_db($db_database, $db_handle);
		
		$SQL = "SELECT * FROM users";
		$db_result = mysql_query($SQL);
		
		while ( $db_field = mysql_fetch_assoc($db_result) ) {
			  if($db_field['username'] == $_SESSION['username']) {
					$username = $_SESSION['username'];
					$cur_students = $db_field['cur_students'] - 1;
			  }
		}
		
		mysql_query("UPDATE users SET cur_students=$cur_students
			WHERE username='$username'");
	}
	//logout
	unset($_SESSION['username']);
	unset($_SESSION['loggedin']);
	unset($_SESSION['login_time']);
	unset($_SESSION['teacher']);
	if (ini_get("session.use_cookies")) {
    	$params = session_get_cookie_params();
    	setcookie(session_name(), '', time() - 42000,
    	    $params["path"], $params["domain"],
    	    $params["secure"], $params["httponly"]
    	);
	}
	session_destroy();
}
echo('<script>window.location.replace("accountSummary.php")</script>')
?>