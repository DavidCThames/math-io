<?php
	session_start();
	if (!isset($_SESSION['loggedin']) || $_SESSION['loggedin'] == false) {	
			//print 'Logged in!';
			header("Location: account.php");
		exit();
	}

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
		
		/* echo('<div class="expand">');
		echo('	<div><p><span>17</span>&nbsp;&nbsp;&nbsp;&nbsp; students currently loged on</p></div>');
		echo('    <input type="submit" value="Clear Logins" class="flush">');
		echo('</div>'); */
		
		
		$user_name = "mathio";
		$password = "bobslayer";
		$database = "members";
		$server = "ninjacstudios.com";
		
		$db_handle = mysql_connect($server, $user_name, $password);
		$db_found = mysql_select_db($database, $db_handle);
		
		class usr {
			//img - resources/user/[NAME]/ico.png
			var $name;
			var $email;
			var $phone;
			var $teacher;
			var $cur_students;
			var $students;
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
					  $curUsr->username = $db_field['username'];
					  $curUsr->cur_students = $db_field['cur_students'];
					  $curUsr->email = $db_field['email'];
					  $curUsr->phone = $db_field['phone'];
					  $curUsr->students = $db_field['students'];
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
<!doctype html>
<html><!-- InstanceBegin template="/Templates/desktop.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="utf-8">
<!-- InstanceBeginEditable name="doctitle" -->
    <title>Math I/O | Account</title>
	<span style="display:none;" id="title">Account</span>
    <style>
        .container {
            overflow-x: hidden;
        }
        .container header {
            width: 110%;
            position: relative;
            left: -5%;
            background-color: white;
            margin: 0px;
            padding-top: 1px;
            padding-bottom: 1px;
            text-align: center;
            box-shadow: black 0px 0px 7px inset;
        }
		.container h2 {
			color:white;
		}
		.container h1 {
			font-weight:300;
			font-size:2.5em;
			margin-top:10px;
			margin-bottom:10px;
		}
        input[type=submit],
        input[type=button],
		a.flush {
            text-align: center;
            background-color: rgba(9, 145, 0, 1.00);
            -webkit-box-shadow: 1px 1px 1px rgba(7, 124, 0, 1.00);
            box-shadow: 1px 1px 1px rgba(7, 124, 0, 1.00);
            border: 0px;
            min-width: 6vw;
            min-height: 2vw;
            line-height: 1.5vw;
            font-size: 1vw;
            font-family:"Roboto", "Helvetica Neue"; font-weight: 300;
            color: white;
            cursor: pointer;
            margin-bottom: 50px;
        }
        input[type=submit]:hover,
        input[type=button]:hover,
		a.flush:hover,
		a.logout:hover {
            background-color: rgba(7, 124, 0, 1.00);
        }
        a.flush {
			text-decoration: none;
			padding-top:1.3vw;
			text-align:center;
			display:block;
            min-height: 4vw;
            font-size: 2vw;
            width: calc(50% - 1px);
            margin: 0px;
            float: left;
            position: relative;
            border-right: solid thin hsla(0, 0%, 58%, 1.00);
            margin-top: 2px;
			box-sizing:border-box;
        }
        .container .logout {
			text-decoration: none;
			text-align:center;
			display: block;
            margin-top: 2px;
            position: relative;
            float: left;
            width: 50%;
            height: 4vw;
            background-color: rgba(9, 145, 0, 1.00);
            -webkit-box-shadow: 1px 1px 1px rgba(7, 124, 0, 1.00);
            box-shadow: 1px 1px 1px rgba(7, 124, 0, 1.00);
            line-height: 1.5vw;
            font-size: 2vw;
            font-family:"Roboto", "Helvetica Neue"; font-weight: 300;
            color: white;
            padding: 1px;
            padding-top: 1.3vw;
            box-sizing: border-box;
        }
        .container .flush > span {
            background-color: white;
            border: black solid 1px;
            box-shadow: black 0px 0px 5px;
            box-sizing: border-box;
            color: black;
        }
        .container > div {
            text-align: center;
        }
        .container > div.account > div {
            float: left;
            width: 50%;
            text-align: center;
            padding-right: 10%;
            padding-left: 10%;
            box-sizing: border-box;
            height: 500px;
            overflow: hidden;
            position: relative;
        }
        .container .account {
            overflow: hidden;
            background-color: hsla(211, 100%, 62%, 1.00);
        }
        .container > div.account > div.info {
            border-right: gray 1px solid;
            width: calc(50% - 1px);
        }
        input[type=text],
        input[type=password],
        input[type=email],
		input[type=tel] {
			margin-bottom:13px;
            height: 1.5vw;
            line-height: 1.5vw;
            font-size: 1vw;
            font-family:"Roboto", "Helvetica Neue"; font-weight: 300;
            text-align: center;
        }
        .buy .studentNum {
            background-color: white;
            border: black 2px solid;
            min-height: 2vw;
            font-size: 1vw;
            font-family:"Roboto", "Helvetica Neue"; font-weight: 300;
            text-align: center;
            box-sizing: border-box;
            -webkit-box-shadow: 1px 1px 1px rgba(7, 124, 0, 1.00);
            box-shadow: 1px 1px 1px rgba(7, 124, 0, 1.00);
            padding: 1px;
        }
        .buy img {
            height: 2vw;
            box-sizing: border-box;
            -webkit-box-shadow: 1px 1px 1px rgba(7, 124, 0, 1.00);
            box-shadow: 1px 1px 1px rgba(7, 124, 0, 1.00);
            margin-top: 4px;
        }
        .buy input {
            margin: 0px;
        }
        .container > div.account > a {
            margin-top: 510px;
            text-decoration: none;
            display: block;
            margin-bottom: 50px;
            transition: all .5s;
            max-width: 200px;
            height: 25px;
            margin-left: auto;
            margin-right: auto;
            text-align: center;
        }
        .container > div.account > a:hover {
            background-color: hsla(209, 100%, 55%, 1.00);
            color: white;
        }
        .container .stats {
            overflow: hidden;
            background-color: hsla(354, 100%, 62%, 1.00);
            position: relative;
        }
        .stats ul {
            width: 50%;
            padding: 0px;
            margin: 0px;
            list-style: none;
            height: 100%;
            overflow: auto;
            padding: left: 10%;
            padding-right: 10%;
            box-sizing: border-box;
        }
        .stats li {
            width: 25%;
            height: 0;
            padding-bottom: 25%;
            float: left;
            background-size: 100% auto;
            display: block;
            background-color: rgba(42, 135, 250, 1.00);
            border: white 1px solid;
            box-sizing: border-box;
        }
        .soon > div {
            -webkit-filter: blur(2px);
            -moz-filter: blur(2px);
            -o-filter: blur(2px);
            -ms-filter: blur(2px);
            filter: blur(2px);
        }
        .soon:after {
            content: "Coming soon...";
            padding-top: 20%;
            box-sizing: border-box;
            color: white;
            text-shadow: 0px 0px 5px hsla(0, 0%, 0%, 1.00);
            font-size: 36px;
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            z-index: 10;
            background-color: rgba(0, 0, 0, 0);
            background-image: url(resources/images/blackstripe.png)
        }
    </style>
	<script type="text/javascript">

	function logout() {
		window.location.href = "user/logout.php";
	}
	function clear() {
		$.post("user/accountSummary.php", { clear: "clear"} );
		setTimeout(location.reload(), 3000);
	}
	</script>
    <script>
        window.onload = function () {
            for (a = 1; a < games.length; a++) {
                $(".container > .stats ul > li:nth-child(" + a + ")").html(games[a].title);
                $(".container > .stats ul > li:nth-child(" + a + ")").css("background", "url(" + games[a].img + ")");
                //append <img class='beta' src='resources/images/beta.png'>
            }
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
	<a class="ico" href="index.html"><img class="ico" src="resources/images/favico.png"></a>
	<a class="title" href="index.html"><h1>Math I/O</h1></a>
	<h2 class="top" onClick="pan(0, 0)"><img src="resources/images/vAlpha.png"> Top</h2>
        <div class="smallNav2">
			<img src="resources/images/vAlpha.png">
			<a class="first">Home</a>
        	<a href="index.html">Home</a>
			<a href="about.html">About</a>
			<a href="http://blog.math-io.com">Blog</a>
			<a href="lessons.html">Lessons</a>
			<a href="gettingStarted.html">Getting started</a>
			<a href="contact.html">Contact us</a>
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
		<h1 id="page">Account</h1>
        <!-- InstanceEndEditable -->
		<div class="smallNav2 miniNav">
			<img src="resources/images/vAlpha.png">
			<a class="first">Home</a>
        	<a href="index.html">Home</a>
			<a href="about.html">About</a>
			<a href="http://blog.math-io.com">Blog</a>
			<a href="lessons.html">Lessons</a>
			<a href="gettingStarted.html">Getting started</a>
			<a href="contact.html">Contact us</a>
        </div>
        <nav>
        	<table>
            <tr>
        		<td><a href="index.html">Home</a><br></td>
            	<td><a href="lessons.html">Lessons</a><br></td>
            </tr><tr>
            	<td><a href="about.html">About</a><br></td>
				<td><a href="gettingStarted.html">Getting started</a><br></td>
            </tr><tr>
				<td><a href="http://blog.math-io.com">Blog</a><br></td>
				<td><a href="contact.html">Contact us</a><br></td>
            </tr>
            </table>
        </nav>
    </section>
</div>
</header>

<div class="container">
	<!--Warning: do not use div here-->
    <!-- InstanceBeginEditable name="body" -->
        <a href="javascript:clear()" class="flush"> Click here to reset logins <span><?php echo $curUsr->cur_students; ?>/<?php echo $curUsr->students; ?></span></a>
        <a href="user/logout.php" class="logout">Click here to logout</a>
        <header style="margin-top:4vw;">
            <h1>Account</h1>
        </header>
        <div class="account">
            <div class="info">
                <h2>Change Info</h2>
                <form action="checkuser.php" method="post">
					<label style='display: block; width: inherit; text-align: center;'>Full Name:</label>
                    <input style="width: 90%;" type="text" value="<?php echo $curUsr->name; ?>"/>
                    </br>
                    <label style='display: block; width: inherit; text-align: center;'>Username:</label>
                    <input style="width: 90%;" type="text" value="<?php echo $curUsr->username; ?>"/>
                    </br>
                    <label style='display: block; width: inherit; text-align: center;' >Password:</label>
                    <input style="width: 90%;" type="password"/>
                    </br>
                    <label style='display: block; width: inherit; text-align: center;'>Student Password:</label>
                    <input style="width: 90%;" type="password"/>
                    </br>
                    <label style='display: block; width: inherit; text-align: center;'>Email:</label>
                    <input style="width: 90%;" type="email" value="<?php echo $curUsr->email; ?>"/>
                    </br>
                    <label style='display: block; width: inherit; text-align: center;'>Phone:</label>
                    <input style="width: 90%;" type="tel" value="<?php echo $curUsr->phone; ?>"/>
                    </br>

                    <input type="submit" value='Save'>
                </form>
            </div>
            <div class="buy soon">
                <div>
                    <h2>Buy</h2>
                    <table border="0" align="center" cellpadding="0" cellspacing="0">
                        <tr>
                            <td>
                                <input type="button" value="Teacher">
                            </td>
                            <td>
                                <img src="resources/images/check.png">
                            </td>
                        </tr>
                        <tr>
                            <td>
                                </br>
                            </td>
                            <td>
                                </br>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="button" value="Students">
                            </td>
                            <td>
                                <div class="studentNum">20</div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <a href="accDel.html">Deleat account</a>
        </div>
        <header>
            <h1>Statistics</h1>
        </header>
        <div class="stats soon">
            <div>
                <div id="piechart" style="width: 50%; height: 500px; float:left;"></div>
                <ul style="float:left">
                    <li>EQ Boat</li>
                    <li>Speed Transformations</li>
                    <li>Darts</li>
                    <li>Theta</li>
                    <li>Coming soon...</li>
                    <li>Coming soon...</li>
                    <li>Coming soon...</li>
                    <li>Coming soon...</li>
                    <li>Coming soon...</li>
                    <li>Coming soon...</li>
                    <li>Coming soon...</li>
                    <li>Coming soon...</li>
                </ul>
            </div>
        </div>


        <!-- InstanceEndEditable -->
	<footer style="text-align:center;">
			<p><span style="color:hsla(0,0%,61%,1.00)">© 2014 David Thames All Rights Reserved</span> | <a href="legal/legal.html">Legal Stuff</a> | <a href="privacyPolicy.html">Privacy Policy</a> | <a href="TermsOfUse.html">Terms of Use</a></p>
		</footer>
</div>
<!--<div style="float:right; width:calc(50% - 800px); height:100vh;"></div>-->
	<!-- InstanceBeginEditable name="bodyEnd" -->






    <!-- InstanceEndEditable -->
</body>
<!-- InstanceEnd --></html>