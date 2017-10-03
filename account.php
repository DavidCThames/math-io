<?php
			session_start();
			//print 'username' . $_SESSION['username'];
			if ($_SESSION['loggedin'] == true) {	
				if($_SESSION['teacher'] == true) {
					//print 'Logged in!';
					header("Location: dashboard.php");
				}
				else {
					header("Location: index.html#");
				}
				exit();
			}
			
			//---------Teacher Login--------------------------------------------
			if ( isset( $_POST['teacher'] ) && $_POST['teacher'] == "teacher") { 
				$db_username = "mathio";
				$db_password = "bobslayer";
				$db_database = "members";
				$db_server = "ninjacstudios.com";
	
				$db_handle = mysql_connect($db_server, $db_username, $db_password);
				$db_found = mysql_select_db($db_database, $db_handle);
				
				$username = mysql_real_escape_string($_POST['user']);
				$password = mysql_real_escape_string($_POST['pass']);
			
				if ($db_found) {
					//print "Database Found";
					$SQL = "SELECT * FROM users";
					$db_result = mysql_query($SQL);
	
					while ( $db_field = mysql_fetch_assoc($db_result) ) {
						if($db_field['username'] == $username) {
							if($db_field['password'] == crypt($password, "$1$qrandomq")) {
								$teacher_key = md5(rand());
								$_SESSION['teacher_key'] = $teacher_key;
								mysql_query("UPDATE users SET teacher_key='$teacher_key'
											WHERE username='$username'");
								$_SESSION['loggedin'] = true;
								$_SESSION['username'] = $username;
								$_SESSION['teacher'] = true;
								//print 'Logged in!';
								header("Location: dashboard.php");
								exit();
							}
							break;
						}
						/*print $db_field['id_user'] . "<BR>";
						print $db_field['name'] . "<BR>";
						print $db_field['email'] . "<BR>";
						print $db_field['username'] . "<BR>";
						print $db_field['password'] . "<BR>";*/
						//print $password . ":";
						//print crypt($password, "$1$qrandomq") . "<BR>";
					}
					mysql_close( $db_handle );
				}
				else {
					print 'connection Error!';
				}
			}
			
			//---------Student Login--------------------------------------------
			else if ( isset( $_POST['teacher'] ) && $_POST['teacher'] == "student") { 
				$db_username = "mathio";
				$db_password = "bobslayer";
				$db_database = "members";
				$db_server = "ninjacstudios.com";
	
				$db_handle = mysql_connect($db_server, $db_username, $db_password);
				$db_found = mysql_select_db($db_database, $db_handle);
				
				$username = mysql_real_escape_string($_POST['user']);
				$password = mysql_real_escape_string($_POST['pass']);
			
				if ($db_found) {
					//print "Database Found";
					$SQL = "SELECT * FROM users";
					$db_result = mysql_query($SQL);
	
					while ( $db_field = mysql_fetch_assoc($db_result) ) {
						if($db_field['username'] == $username) {
							if($db_field['student_password'] == crypt($password, "$1$qrandomq")) {
								if($db_field['cur_students'] < ($db_field['students'] - 1)) {
									if(strtotime($db_field['member_exp']) > time()) {
										$cur_students = $db_field['cur_students'] + 1;
										mysql_query("UPDATE users SET cur_students=$cur_students
											WHERE username='$username'");
										$_SESSION['login_time'] = time();
										$_SESSION['loggedin'] = true;
										$_SESSION['username'] = $username;
										$_SESSION['teacher'] = false;
										//print 'Logged in!';
										header("Location: index.html#");
										exit();
									}
									else {
										print '<script>alert("Teachers membership has expired!");</script>';
									}
								}
								else {
									print '<script>alert("Too many students logged on!");</script>';
								}
							}
							break;
						}
						/*print $db_field['id_user'] . "<BR>";
						print $db_field['name'] . "<BR>";
						print $db_field['email'] . "<BR>";
						print $db_field['username'] . "<BR>";
						print $db_field['password'] . "<BR>";*/
						//print $password . ":";
						//print crypt($password, "$1$qrandomq") . "<BR>";
					}
					mysql_close( $db_handle );
				}
				else {
					print '<script>alert("connection Error!");</script>';
				}
			
			}
			
			//---------Create Account--------------------------------------------
			else if (isset($_POST['create'])) {
				$db_username = "mathio";
				$db_password = "bobslayer";
				$db_database = "members";
				$db_server = "ninjacstudios.com";
	
				$db_handle = mysql_connect($db_server, $db_username, $db_password);
				$db_found = mysql_select_db($db_database, $db_handle);
			
				if ($db_found) {
					//read passed variables
					$name = mysql_real_escape_string($_POST['name']);
					$email = mysql_real_escape_string($_POST['email']);
					$phone = mysql_real_escape_string($_POST['phone']);
					$username = mysql_real_escape_string($_POST['username']);
					$pass = crypt(mysql_real_escape_string($_POST['pass']), "$1$qrandomq");
					$studentPass = crypt(mysql_real_escape_string($_POST['studentPass']), "$1$qrandomq");
					
					//check if user exists
					$SQL = "SELECT * FROM users";
					$db_result = mysql_query($SQL);
					$in_use = false;
					while ( $db_field = mysql_fetch_assoc($db_result) ) {
						if($db_field['username'] == $username) {
							$in_use = true;
							echo "<script>alert('Username in use!');</script>";
						}
						if($db_field['email'] == $email) {
							$in_use = true;
							echo "<script>alert('Email in use!');</script>";
						}
					}
							
					//create
					if(!$in_use) 
						mysql_query("INSERT INTO users (name, email, phone_number, username, password, student_password) 
						VALUES ('$name', '$email', '$phone', '$username', '$pass', '$studentPass')");
				}
				else {
					print 'connection Error!';
				}
			}
?>
<!doctype html>
<html><!-- InstanceBegin template="/Templates/desktop.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="utf-8">
<!-- InstanceBeginEditable name="doctitle" -->
    <title>Math I/O | Account</title>
	<span style="display:none;" id="title">Account</span>
	<h1 style="display:none" id="title">Account</h1> 
	<style>
		body {
			height:100vh !important; 
			font-family:"Roboto", "Helvetica Neue"; font-weight: 300;
			color:hsla(0,0%,20%,1.00)
		}
		div {
			text-align: center;
		}
		.container {
			background-image: url(resources/images/laptop.jpg);
			background-repeat: no-repeat;
			background-size: cover;
			min-height:calc(100% - 150px);
			height: auto !important; 
			overflow:hidden;
		}
		.space {
			height:10vh;
		}
		input[type=text], input[type=password], input[type=email] {
			height:1.5vw;
			line-height:1.5vw;
			font-size:1vw;
			font-family:"Roboto", "Helvetica Neue"; font-weight: 300;
		}
		.box {
			top: 200px; 
			min-height:20%; 
			min-width:400px; 
			margin-left: auto; 
			margin-right: auto; 
			width: 40%; 
			-webkit-box-shadow: 0px 0px 10px rgba(91,91,91,1.00); 
			box-shadow: 0px 0px 10px rgba(91,91,91,1.00); 
			overflow:hidden;
			background-color:hsla(0,0%,100%,0.51);
		}
		.login {
			float:left;
			width:50%;
			border-right:1px hsla(0,0%,47%,1.00) solid;
		}
		.student {
			border-bottom: 1px hsla(0,0%,47%,1.00) solid;
		}
		.create {
			float:left;
			width:49%;
			position:relative;
		}
		input[type=submit], input[type=button], button  {
			text-align: center;
			background-color: rgba(9,145,0,1.00);
			-webkit-box-shadow: 1px 1px 1px rgba(7,124,0,1.00);
			box-shadow: 1px 1px 1px rgba(7,124,0,1.00);
			border:0px;
			min-width:6vw;
			min-height:2vw;
			line-height:1.5vw;
			font-size:1vw;
			font-family:"Roboto", "Helvetica Neue"; font-weight: 300;
			color:white;
			cursor:pointer;
		}
		input[type=submit]:hover, input[type=button]:hover, button:hover  {
			background-color: rgba(7,124,0,1.00);
		}
		.create > div {
			display:none;
			opacity:0;
			transition: display 0s linear 0s, opacity .5s linear .5s; 
		}
		.create > input[type=button] {
			margin-top: 255px;
			opacity:100;
			transition: display .5s linear 0s, opacity 0.5s linear; 
			position:absolute;
			z-index:10;
			width: 70%;
			left:15%;
		}
	</style>
	<script>
		window.onload = function() {
			if(window.location.hash.substr(1) == "create")
				createAcc();
		}
		function createAcc() {
			 
			$('.create > input[type=button]').css('opacity', '0'); 
			$('.create > div').css('display', 'block')
			setTimeout(function() {$('.create > input[type=button]').css('display', 'none')}, 500)
			setTimeout(function() {$('.create > div').css('opacity', '100')}, 10)
		}
	</script>
<!-- InstanceEndEditable -->
<style>
@import url(http://fonts.googleapis.com/css?family=Roboto:100,300,400,500);
@import url("webfonts/Socialico/stylesheet.css");
@import url("css/styleDesktop.css");
</style>
<link href="webfonts/Socialico/stylesheet.css" rel="stylesheet" type="text/css">
<script src="js/jquery.js"></script>
<script src="js/script.js"></script>
<script src="js/scriptOther.js"></script>
<!-- InstanceBeginEditable name="head" -->


<!-- InstanceEndEditable -->

</head>

<body style="position: absolute; top: 0px; left:0px; width:100%; margin:0px">
<header>
<nav class="smallBar">
	<img class="options" src="ai/options.svg" onClick="options()">
	<a class="ico" href="index.php"><img class="ico" src="resources/images/favico.png"></a>
	<a class="title" href="index.php"><h1>Math I/O</h1></a>
	<h2 class="top" onClick="pan(0, 0)"><img src="resources/images/vAlpha.png"> Top</h2>
        <div class="smallNav2">
			<img src="resources/images/vAlpha.png">
			<a class="first">Home</a>
        	<a href="index.php">Home</a>
			<a href="about.php">About</a>
			<a href="members.php">Members</a>
			<a href="lessons.html">Lessons</a>
			<a href="gettingStarted.php">Getting started</a>
			<a href="contact.php">Contact us</a>
        </div>
</nav>
<div class="optionsClose" onClick="options()">
   	<h2>Welcome</h2>
    <img class="optionsX" src="resources/images/xAlpha.png">
</div>

<div class="socialbar">
    	<p><a style="background-color:blue" href="https://www.facebook.com/mathio">F</a><a style="background-color:red" href="https://plus.google.com/b/100731948523284664244/100731948523284664244/posts">G</a><a style="background-color:#0084FF" href="https://twitter.com/math_io">L</a><a style="background-color:#FFBB11" href="http://blog.math-io.com">W</a></p>
</div>
<iframe class="status" src="user/accountSummary.php" seamless></iframe>
<div class="topbar" style="opacity: 1;">
	<img class="options" src="ai/options.svg" onClick="options()">
	<section>
		<a href="http://math-io.com"><h1>Math I/O</h1></a>
		<!-- InstanceBeginEditable name="PageTitle" -->		
		<h1 id="page">Login</h1>
        <!-- InstanceEndEditable -->
		<div class="smallNav2 miniNav">
			<img src="resources/images/vAlpha.png">
			<a class="first">Home</a>
        	<a href="index.php">Home</a>
			<a href="about.php">About</a>
			<a href="members.php">Members</a>
			<a href="lessons.html">Lessons</a>
			<a href="gettingStarted.php">Getting started</a>
			<a href="contact.php">Contact us</a>
        </div>
        <nav>
        	<table>
            <tr>
        		<td><a href="index.php">Home</a><br></td>
            	<td><a href="lessons.html">Lessons</a><br></td>
            </tr><tr>
            	<td><a href="about.php">About</a><br></td>
				<td><a href="gettingStarted.php">Getting started</a><br></td>
            </tr><tr>
				<td><a href="members.php">Members</a><br></td>
				<td><a href="contact.php">Contact us</a><br></td>
            </tr>
            </table>
        </nav>
    </section>
</div>
</header>

<div class="container">
	<!--Warning: do not use div here-->
    <!-- InstanceBeginEditable name="body" -->
    	<div style="width:100%; height:calc(100% - 150px); position:fixed; left:0px; top:150px; background:hsla(0,0%,100%,.8); z-index:1000000000; padding-top:10%; box-sizing:border-box; font-size:100px; color:rgba(87,87,87,1.00); font-weight:100;">Coming Soon...</div> 
		<div class="space"></div>
        <div class="box" style="">
			<div class="login">
				<div class="student">
					<h2>Student Login</h2>
					<form name='stulog' action=".php" method="post">
					<label style='display: block; width: inherit; text-align: center;'>Username:</label>
                    	<input required="required"  name="user" style="width: 90%;" type="text">
						</br></br>
					<label style='display: block; width: inherit; text-align: center;'>Password:</label>
                    	<input required="required"  name="pass" style="width: 90%;" type="password">
						</br></br>
					<button  name="teacher" type="submit" value='student'>Log In</button>
					</form>
					</br>
				</div>
				<div class="teacher">
					<h2>Teacher Login</h2>
					<form name='teachlog' action=".php" method="post">
					<label style='display: block; width: inherit; text-align: center;'>Username:</label>
                    	<input required="required"  name="user" style="width: 90%;" type="text">
						</br></br>
					<label name="pass" style='display: block; width: inherit; text-align: center;'>Password:</label>
                    	<input required="required"  name="pass" style="width: 90%;" type="password">
						</br></br>
					<button  name="teacher" type="submit" value='teacher'>Log In</button>
					</form>
					</br>
				</div>
			</div>
			<div class="create">
				<input type="button" value="Create Account" onClick="createAcc()">
				<div>
				<h2>Create Account</h2>
				<form action=".php" method="post">
                <label style='display: block; width: inherit; text-align: center;'>Student/Teacher</label>                   
					<input type="" required="required" style="width: 90%;" name="studentPass">
					</br></br>
				<label style='display: block; width: inherit; text-align: center;'>Full Name:</label>
                    <input type="text" required="required" style="width: 90%;" name="name">
					</br></br>
				<label style='display: block; width: inherit; text-align: center;'>Username:</label>
                    <input type="text" required="required" style="width: 90%;" name="username">
					</br></br>
				<label style='display: block; width: inherit; text-align: center;'>Password:</label>
                    <input type="password" required="required" style="width: 90%;" name="pass">
					</br></br>
				<label style='display: block; width: inherit; text-align: center;'>Email:</label>
                    <input type="email" required="required" style="width: 90%;" name="email">
					</br></br>
				<label style='display: block; width: inherit; text-align: center;'>Phone:</label>
                    <input required="required"  style="width: 90%;" type="text" name="phone">
					</br></br>
				
				<input type="submit" value='Create' name='create'>
				</form>
				</div>
			</div>
				
        </div>
		<div class="space"></div>
        <!-- InstanceEndEditable -->
	<footer style="text-align:center;">
			<p><span style="color:hsla(0,0%,61%,1.00)">© 2014 David Thames All Rights Reserved</span> | <a href="legal/privacyPolicy.php">Privacy Policy</a> | <a href="legal/TermsOfUse.php">Terms of Use</a> | <a href="legal/resources.php">Resources</a>
		</footer>
</div>
<!--<div style="float:right; width:calc(50% - 800px); height:100vh;"></div>-->
	<!-- InstanceBeginEditable name="bodyEnd" -->
    
    
    
    
    

	<!-- InstanceEndEditable -->
</body>
<!-- InstanceEnd --></html>