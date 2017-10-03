<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Account Summery</title>

<style>
        @import url("../webfonts/Roboto_Thin/stylesheet.css");
        @import url("../webfonts/Roboto_Light/stylesheet.css");
        @import url("../webfonts/Roboto_Regular/stylesheet.css");
        @import url("../webfonts/Socialico/stylesheet.css");
        @import url("../css/styleDesktop.css");
    </style>
</head>

<body style="margin:0px">
<object type="image/svg+xml" data="../ai/accountSummery/accountSummery.svg" class="logo" style="width:100%;"></object>
<?php
header('P3P: CP="CAO PSA OUR"');
session_start();
if (isset($_POST['logout'])) {
	unset($_SESSION['username']);
	if (ini_get("session.use_cookies")) {
    	$params = session_get_cookie_params();
    	setcookie(session_name(), '', time() - 42000,
    	    $params["path"], $params["domain"],
    	    $params["secure"], $params["httponly"]
    	);
	}
	session_destroy();
}
if (isset($_SESSION['username'])) {

echo('<div class="expand">');
echo('	<div><p><span>17</span>&nbsp;&nbsp;&nbsp;&nbsp; students currently loged on</p></div>');
echo('    <input type="submit" value="Clear Logins" class="flush">');
echo('</div>');
 




$user_name = "mathio";
$password = "bobslayer";
$database = "members";
$server = "ninjacstudios.com";

$db_handle = mysql_connect($server, $user_name, $password);
$db_found = mysql_select_db($database, $db_handle);

class usr {
	//img - resources/user/[NAME]/ico.png
    var $name;
    var $teacher;
}

$curUsr = new usr; //TODO: set  user properties from database
	
if ($db_found) {
	//print "Database Found";
	$SQL = "SELECT * FROM users";
	$result = mysql_query($SQL);

	while ( $db_field = mysql_fetch_assoc($result) ) {
		if($db_field['username'] == $_SESSION['username']) {
			$curUsr->name = $db_field['name'];
		}
		/*print $db_field['id_user'] . "<BR>";
		print $db_field['name'] . "<BR>";
		print $db_field['email'] . "<BR>";
		print $db_field['username'] . "<BR>";*/

	}
	mysql_close( $db_handle );
}
else {
print "Database NOT Found";
}

echo('<div class="status">');
echo("<img onerror='backupimg(this)' src='../resources/user/" . $_SESSION['username'] . "/ico.png'>"); //TODO user uploads pic to /resources/user/[NAME]/ico.png
echo("<a class='acc' href='../dashboard.html' target='_parent'>" . $curUsr->name . "</a>");
echo("<form method='POST' action='status.php'><input type='submit' value='Logout' name='logout' class='logout' onClick=''></form>");
echo("</div>");
}
else {
	echo("<div class='expand'></div>");
	echo("<a class='in' href='../account.php' target='_parent'>Sign In</a>");
}
?>
</body>
</html>