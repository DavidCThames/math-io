<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>User Status</title>
</head>

<body>
<?php
$user_name = "mathio";
$password = "bobslayer";
$database = "members";
$server = "ninjacstudios.com";

mysql_connect($server, $user_name, $password);
	$db_found = mysql_select_db($database);
	
if ($db_found) {

print "Database Found";

}
else {

print "Database NOT Found";

}

$img = "../resources/images/box.png";
echo '<img src="' . $img . '">';
echo "Hello world!<br>";
echo "I'm about to learn PHP!<br>";
echo "This", " string", " was", " made", " with multiple parameters.";
?>  
</body>
</html>