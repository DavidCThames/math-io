<!DOCTYPE html>
<html>

<head>
<style>
@import url("../webfonts/stylesheet.css");
@import url("../webfonts/Roboto_Light/stylesheet.css");
@import url("../webfonts/Roboto_Regular/stylesheet.css");
body {
	height: 150px;
	width: 300px;
	margin:0px;
	overflow:hidden;
	font-family:"Roboto"; font-weight: 300;
	color:rgba(96,96,96,1.00);
	padding-left: 10px;
	height:190px;
}
body > div.main {
	height: 150px;
	width: 300px;
	padding:20px;
	padding-top:10px;
	transition:all 1s;
}
body:hover div.main {
	
	-webkit-box-shadow:0px 0px 10px rgba(96,96,96,1.00);
	box-shadow:0px 0px 10px rgba(96,96,96,1.00);
	background-color:white;
}
img {
	width:75px;
	margin-left:62.5px;
	background: url(../resources/images/user.png);
	background-size:contain;
}
h2 {
	width:100%;
	text-align:center;
	color:rgba(96,96,96,1.00);
	font-family:"Roboto"; font-weight: 300;
	text-decoration:none;
	font-weight:100;
	margin:0px;	
}

input[type=submit], a {
	outline:none;
	border: none;
	font-family:"Roboto"; font-weight: 300;
	color:rgba(96,96,96,1.00);
	box-shadow:0px 0px 5px rgba(96,96,96,1.00), 0px 0px 0px #00D3FF inset, 0px 0px 0px red inset, 0px 0px 0px green inset;
	background-color:white;
	font-size:1.2em;
	transition:all .4s ease-in-out;
	display:block;
	text-decoration:none;
	text-align:center;
	margin-bottom:5px;
	cursor:pointer;
	white-space: normal;
}
.status input[type=submit], a {
	width: 150px;
	margin-left:25px;
}
.expand input[type=submit] {
	width: 80px;
	height:60px;
	margin-left:10px;
}
a.in {
	float:left;
	width: 150px;
	margin-top:60px;
}
.expand p {
	padding:10px;
	text-align:right;
	box-sizing:border-box;
	width:150px;
	margin:0px;
}
.expand span {
	font-size:30px;
	font-weight:bold;
	box-shadow:0px 0px 5px rgba(96,96,96,1.00);
}
a.acc:hover{
	box-shadow:0px 0px 5px rgba(96,96,96,1.00), 0px -30px 0px #00D3FF inset, 0px 0px 0px red inset, 0px 0px 0px green inset;
	color:white;
}
a.in:hover{
	box-shadow:0px 0px 5px rgba(96,96,96,1.00), 0px -30px 0px #00D3FF inset, 0px 0px 0px red inset, 0px 0px 0px green inset;
	color:white;
}
input[type=submit].logout:hover{
	box-shadow:0px 0px 5px rgba(96,96,96,1.00), 0px 0px 0px #00D3FF inset, 0px -30px 0px red inset, 0px 0px 0px green inset;
	color:white;
}
input[type=submit].flush:hover{
	box-shadow:0px 0px 5px rgba(96,96,96,1.00), 0px 0px 0px #00D3FF inset, 0px 0px 0px red inset, 0px -60px 0px green inset;
	color:white;
}
.status {
	float:left;
	width:200px;
}
.expand {
	height:100%;
	float:left;
	/*display:none;*/
	visibility:collapse;
  	opacity:0;
  	transition:visibility 0s linear 1s,width 0s linear 1s,opacity 1s linear;
	width: 0px;
	z-index:0;
}
body:hover .expand{
	visibility:visible;
	/*display:block;*/
	opacity:1;
	transition-delay:0s;
	width: 100px;
}
</style>
<script src="../js/jquery.js"></script>
<script>/*
	function expand() {
		$('.expand').css('opacity', '1'); 
		$('.expand').css('pointer-events', 'all'); 
		$('body > div').addClass('expanded'); 
	}
	function shrink(obj, event) {
		//this is the original element the event handler was assigned to
   		var e = event.toElement || event.relatedTarget;

		//check for all children levels (checking from bottom up)
		while(e && e.parentNode && e.parentNode != window) {
    		if (e.parentNode == obj||  e == obj) {
        		if(e.preventDefault) e.preventDefault();
        		return false;
    		}
   			e = e.parentNode;
		}

		//Do something u need here
		$('.expand').css('opacity', '0');
		$('.expand').css('pointer-events', 'none'); 
		$('body > div').removeClass('expanded'); 
	}*/
	
	function backupimg(a) {
		console.log("img")
		a.src = "../resources/images/user.png";
	}
</script>
</head>

<body>
<div class="main"> 

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

</div>
</body>
</html>