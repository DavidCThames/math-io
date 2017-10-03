<?php
header('P3P: CP="CAO PSA OUR"');
session_start();
?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Account summary</title>

<style>
    @import url("../webfonts/stylesheet.css");
    @import url("../webfonts/Socialico/stylesheet.css");
	@import url("../css/styleDesktop.css");
</style>

<style>
	
	body {
		margin:0px;
	}
	.container {
		width:100%;
		max-width: 350px;
		text-align:center;
		font-family:Roboto;
		font-weight:300;
		margin-top:0;
	}
	h1 {
		color:#4D4D4D;
		margin:0px;
		width:100%;
		font-size:60px;
		font-family:Roboto;
		font-weight:100;
	}
	a, input[type=submit] {
		margin:0px;
		width:100%;
		color:white;
		font-size:36px;
		font-family:Roboto;
		font-weight:300;
		background-color:#2373FF;
		border:#2373FF solid thick;
		padding-top:20px;
		padding-bottom:20px;
		text-shadow:0px 0px 10px #454545;
		text-decoration:none;
		display:block;
		transition:all .3s;
		box-sizing:border-box;
		cursor:pointer;
	}
	a:hover, input[type=submit]:hover {
		background: none;
		text-shadow:none;
	}
	h3 {
		color:#4D4D4D;
		margin:0px;
		width:100px;
		height:85px;
		font-size:60px;
		font-family:Roboto;
		font-weight:300;
		border:solid thin #5A5A5A;
		box-shadow:0px 0px 10px;
		margin-left:125px;
		margin-top:40px;
		margin-bottom:20px;
		
	}
	p {
		color:#4D4D4D;
		margin:0px;
		width:100%;
		font-size:36px;
		font-family:Roboto;
		font-weight:300;
		margin-bottom:30px;
	}
	
	a.account {
		background-color:#2373FF;
		border:#2373FF solid thick;
	}
	a.account:hover {
		background: none;
		color:#2373FF;
	}
	
	a.clear {
		background-color:#3BFF3B;
		border:#3BFF3B solid thick;
	}
	a.clear:hover {
		background: none;
		color:#3BFF3B;
	}
	
	a.logout {
		background-color:#B83B3B;
		border:#B83B3B solid thick;
	}
	a.logout:hover {
		background: none;
		color:#B83B3B;
	}
	
	/*login*/
	p.lable {
		margin-top:30px;
		margin-bottom:10px;
	}
	
	input.signin {
		background-color:#2373FF;
		border:#2373FF solid thick;
	}
	input.signin:hover {
		background: none;
		color:#2373FF;
	}
	
	a.create {
		background-color:#3BFF3B;
		border:#3BFF3B solid thick;
	}
	a.create:hover {
		background: none;
		color:#3BFF3B;
	}
	
	form {
		width:100%;
	}
	input[type=password], input[type=text] {
		width:90%;
		font-size:36px;
		outline:none;
		border:none;
		text-align:center;
		font-family:Roboto;
		font-weight:300;
		background: bottom left linear-gradient(#a9a9a9, #a9a9a9) no-repeat, bottom center linear-gradient(#a9a9a9, #a9a9a9) repeat-x, bottom right linear-gradient(#a9a9a9, #a9a9a9) no-repeat;
    	background-size: 2px 10px, 2px 2px, 2px 10px;
		margin-bottom:5px;
	}
	select {
		height:50px;
		text-align:center;
		font-size:36px;
		font-family:Roboto;
		font-weight:300;
		outline:none;
		border:none;
	}
	
	div .select {
		width:100%;
		border-bottom:2px solid #a9a9a9;
		border-top:2px solid #a9a9a9;
	}
</style>

<script type="text/javascript" src="../js/jquery.js"></script>
<script type="text/javascript">
	function logout() {
		window.location = "logout.php";
	}
	function clear() {
		$.post("accountSummary.php", { clear: "clear"} );
		setTimeout(location.reload(), 3000);
	}
</script>
</head>

<body style="margin:0px">
<h1 class="comingSoon"><br>Coming Soon...</h1>
<?php
if (isset($_POST['clear'])) {
	$db_username = "mathio";
	$db_password = "bobslayer";
	$db_database = "members";
	$db_server = "ninjacstudios.com";
	
	$db_handle = mysql_connect($db_server, $db_username, $db_password);
	$db_found = mysql_select_db($db_database, $db_handle);
	
	$username = $_SESSION['username'];
	$time = time();
	$time = date('Y-m-d H:i:s', $time);
	if($_SESSION['teacher'] == true) {
		mysql_query("UPDATE users SET cur_students=0
			WHERE username='$username'");
		mysql_query("UPDATE users SET last_clear='$time'
			WHERE username='$username'");
	}
}
if (isset($_SESSION['username'])) {
  
  /*echo('<div class="expand">');
  echo('	<div><p><span>17</span>&nbsp;&nbsp;&nbsp;&nbsp; students currently loged on</p></div>');
  echo('    <input type="submit" value="Clear Logins" class="flush">');
  echo('</div>');*/
  
  
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
	  var $cur_students;
  }
  
  $curUsr = new usr; //TODO: set  user properties from database
	  
  if ($db_found) {
	  //print "Database Found";
	  $SQL = "SELECT * FROM users";
	  $db_result = mysql_query($SQL);
  
	while ( $db_field = mysql_fetch_assoc($db_result) ) {
		if($db_field['username'] == $_SESSION['username']) {
			if(
			  ($_SESSION['teacher'] && $_SESSION['teacher_key'] == $db_field['teacher_key']) || 
			  (!$_SESSION['teacher'] && $_SESSION['login_time'] > strtotime($db_field['last_clear']))) {
				  
				$curUsr->name = $db_field['name'];
				$curUsr->cur_students = $db_field['cur_students'];
			}
			else {
				echo('<script>logout()</script>');
			}
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
  
  $userfound = true;
/*  echo('<div class="status">');
  echo("<img onerror='backupimg(this)' src='../resources/user/" . $_SESSION['username'] . "/ico.png'>"); //TODO user uploads pic to /resources/user/[NAME]/ico.png*/
  $curUsr->name;
/*  echo("<a class='acc' href='../dashboard.html' target='_parent'>" . $curUsr->name . "</a>");
  echo("<form method='POST' action='status.php'><input type='submit' value='Logout' name='logout' class='logout' onClick=''></form>");
  echo("</div>");*/
}
else {
	$userfound = false;
/*	echo("<div class='expand'></div>");
	echo("<a class='in' href='../account.php' target='_parent'>Sign In</a>");*/
}
?>




	<?php
if($userfound) {
	echo ('
		<div class="container">
			<img src="../ai/userDefault-01.svg">
			<h1>' . $curUsr->name . '</h1>
			<a class="account" href="../account.php" target="_parent">Account</a>
	');
	if($_SESSION['teacher'] == true) echo('
			<div>
				<h3>' . $curUsr->cur_students . '</h3>
				<p>Current students logged in </p>
			</div>
			<a class="clear" href="javascript:clear()" target="_parent">Clear Logins</a>
	');
	echo ('
			<a class="logout" href="logout.php">Logout</a>
		</div>
	');
}
else {
	echo ('
		<div class="container">
			<img src="../ai/userDefault-01.svg">
			<h1>Sign In</h1>
			<form id="form1" name="form1"  action="../account.php" method="post" target="_parent">
				<p class="lable">Type</p>
				<div class="select">
				<select name="teacher">
					<option value="student">Student</option>
					<option value="teacher">Teacher</option>
				</select>
				</div>
				<p class="lable">Username</p>
				<input type="text" required="required"  name="user">
				<p class="lable">Password</p>
				<input type="password" required="required"  name="pass">
				<br>
				<input class="signin" type="submit" value="Log In">
			</form>
			<a class="create" href="../account.php#create" target="_parent">Create Account</a>
		</div>
	
	
	');
}
?>