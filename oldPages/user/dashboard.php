<!doctype html>
<html><!-- InstanceBegin template="/Templates/desktop.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="utf-8">
<!-- InstanceBeginEditable name="doctitle" -->
    <title>Math I/O</title>
    <style>
        .container {
            overflow-x: hidden;
        }
        .container header {
            width: 110%;
            position: relative;
            left: -5%;
            background-color: hsla(0, 0%, 87%, 1.00);
            margin: 0px;
            padding-top: 1px;
            padding-bottom: 1px;
            text-align: center;
            box-shadow: black 0px 0px 5px inset;
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
            font-family:"Roboto"; font-weight: 300;
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
        input[type=submit].flush,
        a.flush {
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
            font-family:"Roboto"; font-weight: 300;
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
        input[type=email] {
            height: 1.5vw;
            line-height: 1.5vw;
            font-size: 1vw;
            font-family:"Roboto"; font-weight: 300;
            text-align: center;
        }
        .buy .studentNum {
            background-color: white;
            border: black 2px solid;
            min-height: 2vw;
            font-size: 1vw;
            font-family:"Roboto"; font-weight: 300;
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
            content: "Comming soon...";
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
            background-image: url(../resources/images/blackstripe.png)
        }
    </style>
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
	}?>
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
@import url("../webfonts/Socialico/stylesheet.css");
@import url("../css/styleDesktop.css");
</style>
<link href="../webfonts/Socialico/stylesheet.css" rel="stylesheet" type="text/css">
<script src="../js/jquery.js"></script>
<!--<script src="../js/buildBoxes.js"></script>-->
<script src="../js/Boxes.js"></script>
<script src="../js/script.js"></script>
<script src="../js/scriptOther.js"></script>
<!-- InstanceBeginEditable name="head" -->
<!-- InstanceEndEditable -->

</head>

<body style="position: absolute; top: 0px; left:0px; width:100%; margin:0px">

<header>
<nav class="smallBar">
	<img class="options" src="../ai/options.svg" onClick="options()">
	<a class="ico" href="../index.html"><img class="ico" src="../resources/images/favico.png"></a>
	<a class="title" href="../index.html"><h1>Math I/O</h1></a>
	<h2 class="top" onClick="pan(0, 0)"><img src="resources/images/vAlpha.png"> Top</h2>
        <div class="smallNav2">
			<img src="resources/images/vAlpha.png">
			<a class="first">Home</a>
        	<a href="index.html">Home</a>
			<a href="about.html">About</a>
			<a href="http://blog.math-io.com">Blog</a>
			<a href="account.php">Account</a>
			<a href="gettingStarted.html">Getting started</a>
			<a href="contact.html">Contact us</a>
        </div>
</nav>
<div class="optionsClose" onClick="options()">
   	<h2>Welcome</h2>
    <img class="optionsX" src="../resources/images/xAlpha.png">
</div>

<div class="socialbar">
    	<p><a style="background-color:blue" href="https://www.facebook.com/ninjacstudiosmathio">F</a><a style="background-color:red" href="http://plus.google.com">G</a><a style="background-color:#0084FF" href="https://twitter.com/math_io">L</a><a style="background-color:#FFBB11" href="http://blog.math-io.com">W</a></p>
</div>
<iframe class="status" src="user/accountSummary.php" seamless></iframe>
<div class="topbar" style="opacity: 1;">
	<img class="options" src="ai/options.svg" onClick="options()">
	<section>
		<a href="http://math-io.com"><h1>Math I/O</h1></a>
		<!-- InstanceBeginEditable name="PageTitle" -->		
		<h1 id="page">Home</h1>
        <!-- InstanceEndEditable -->
		<div class="smallNav2 miniNav">
			<img src="resources/images/vAlpha.png">
			<a class="first">Home</a>
        	<a href="index.html">Home</a>
			<a href="about.html">About</a>
			<a href="http://blog.math-io.com">Blog</a>
			<a href="account.php">Account</a>
			<a href="gettingStarted.html">Getting started</a>
			<a href="contact.html">Contact us</a>
        </div>
        <nav>
        	<table>
            <tr>
        		<td><a href="index.html">Home</a><br></td>
            	<td><a href="account.php">Account</a><br></td>
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
        <a href="javascript:clear()" class="flush"> Click here to reset logins <span>&nbsp;0&nbsp;</span></a>
        <a href="logout.php" class="logout">Click here to logout</a>
        <header style="margin-top:4vw;">
            <h1>Account</h1>
        </header>
        <div class="account">
            <div class="info">
                <h2>Change Info</h2>
                <form action="../checkuser.php" method="post">
                    <label style='display: block; width: inherit; text-align: center;'>Username:</label>
                    <input style="width: 90%;" type="text">
                    </br>
                    </br>
                    <label style='display: block; width: inherit; text-align: center;'>Password:</label>
                    <input style="width: 90%;" type="password">
                    </br>
                    </br>
                    <label style='display: block; width: inherit; text-align: center;'>Student Password:</label>
                    <input style="width: 90%;" type="password">
                    </br>
                    </br>
                    <label style='display: block; width: inherit; text-align: center;'>Email:</label>
                    <input style="width: 90%;" type="email">
                    </br>
                    </br>
                    <label style='display: block; width: inherit; text-align: center;'>Phone:</label>
                    <input style="width: 90%;" type="text">
                    </br>
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
                                <img src="../resources/images/check.png">
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
            <a href="../accDel.html">Deleat account</a>
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
                    <li>Comming soon...</li>
                    <li>Comming soon...</li>
                    <li>Comming soon...</li>
                    <li>Comming soon...</li>
                    <li>Comming soon...</li>
                    <li>Comming soon...</li>
                    <li>Comming soon...</li>
                    <li>Comming soon...</li>
                </ul>
            </div>
        </div>


        <!-- InstanceEndEditable -->
	<footer style="text-align:center;">
			<p><span style="color:hsla(0,0%,61%,1.00)">© 2014 Math I/O LLC. All Rights Reserved</span> | <a href="legal/legal.html">Legal Stuff</a> | <a href="privacyPolicy.html">Privacy Policy</a> | <a href="termsOfUse.html">Terms of Use</a></p>
		</footer>
</div>
<div style="float:right; width:calc(50% - 800px); height:100vh;"></div>
	<!-- InstanceBeginEditable name="bodyEnd" -->






    <!-- InstanceEndEditable -->
</body>
<!-- InstanceEnd --></html>