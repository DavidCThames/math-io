<?php require_once( 'couch/cms.php' ); ?>
<!doctype html>
<html><!-- InstanceBegin template="/Templates/desktop.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="utf-8">
<!-- InstanceBeginEditable name="doctitle" -->
	<title>Math I/O</title>
	<span style="display:none;" id="title">About</span>
    
    
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
		<h1 id="page">Members</h1>
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
    <style>
	.container {
		background-color:#ececec;
	}

		.eList {
			margin-left:auto;
			margin-right:auto;
			height: 400px;
			border-bottom:solid 1px #878787;
			text-align:center;
			width:auto;
		}
		
		.eList.i3 {
			height: 600px;
		}
		.eList.i0 {
			height: 220px;
			background: linear-gradient( rgba(33, 150, 243, .5), rgba(33, 150, 243, .5) ), /* bottom, image */ url(resources/images/members/MathIOAppGroup.jpg);
			background-position:bottom;
			background-size:100vw;
			color:white;
		}
		.margin0 {
			width:calc(50% - 5 * 145px + 50px);
			height:calc(100% - 46px);
			float:left;
		}
		.margin1 {
			width:calc(50% - 3 * 145px);
			height:100%;
			float:left;
		}
		.margin2 {
			width:calc(50% - 2 * 145px);
			height:100%;
			float:left;
		}
		.margin3 {
			width:calc(50% - 5 * 145px);
			height:100%;
			float:left;
		}
		
		.eBox {
			width:250px;
			float:left;
			margin:20px;
		}
		
		.i0 .eBox {
			margin:10px;
		}
		
		
		.eList.i0  .img {
			width:100px;
			height:100px;
			background-size: auto 100px !important;
			border-color:white;
		}
		
		.eList.managers {
			height:400px;
		}
		.eList.leaders {
			height:250px;
		}
		
		.eList  h3 {
			font-family:"Roboto", "Helvetica Neue"; font-weight: 300;
			font-size:24px;
			width:100%;
			margin:0px;
			margin-top:10px;
		}
		.eList  p {
			font-family:"Roboto", "Helvetica Neue"; font-weight: 300;
			font-size:15px;
			width:100%;
			margin:0px;
		}
		.eList  .img {
			border:solid 1px #878787;
			border-radius:50%;
			height:140px;
			width:140px;
			margin-top:2.5px;
			margin-left:20px;
			margin-right:20px;
			background:url(../resources/images/user.png) center;
			background-size:auto 142px !important; 
			background-position:center !important; 
			margin-left:auto;
			margin-right:auto;
			/*float: left;
			height: 140px;
			width: 140px;
			margin-top: 2.5px;
			margin-left: 20px;
			margin-right: 20px;
			background: url(resources/images/user.png) center;
			background-size: auto 140px !important; 
			background-position:center !important;*/
		}
	
	
	
	</style>
    
    <cms:editable name='Purpose' type='textarea'>
        
        <div class="eList i1">
        	<div class="margin1"></div>
        	<div class="eBox">
            	<div class="img" style="background:url(resources/images/members/MathIO-010.jpeg);"></div>
                <h3>David Thames</h3>
                <p>Co-Founder, Lead Programmer</p>
                <p>davidc.thames@math-io.com</p>
                <br>
                <p><i>Worked together with Brandon to create Math I/O. He is also the webmaster and a lead programmer</i></p>
            </div> 
            <div class="eBox">
                <div class="img" style="background:url();"></div>
                <h3>Brandon Rozek</h3>
                <p>Co-Founder, Lead Programmer</p>
                <p>brandonrozek@math-io.com</p>
                <br>
                <p><i>Started Math I/O. He is also a lead programmer in the development of new games.</i></p>
            </div>
                <div class="eBox">
                    <div class="img" style="background:url(resources/images/members/MathIO-006.jpeg);"></div>
                    <h3>Noah Miller</h3>
                    <p>Manager & Physicist</p>
                    <p>noah.miller@math-io.com</p>
                    <br>
                    <p><i>Manages the team and assists with the physics of games and helps to develop them.</i></p>
                </div>
            <div class="margin"></div>
        </div>
        
        
		 <div class="eList i2">
        	<div class="margin2"></div>
            <div class="eBox">
                <div class="img" style="background:url(resources/images/members/MathIO-004.jpeg);"></div>
                <h3>Stephen Shamaiengair</h3>
                <p>Lead Programmer</p>
                <p> </p>
                <br>
                <p><i>Joined the Math I/O team shortly after it began and continues to lead the development of new games.</i></p>
            </div>
            <div class="eBox">
                <div class="img" style="background:url(resources/images/members/MathIO-007.jpeg);"></div>
                <h3>Josh Peterson</h3>
                <p>Lead Programmer</p>
                <p>josh.peterson@math-io.com</p>
                <br>
                <p><i>Lead progammer on the development of new games.</i></p>
            </div>
            <div class="margin"></div>
        </div>
        
        
        <div class="eList i3">
        	<div class="margin3"></div>
            <div class="eBox">
                <div class="img" style="background:url(resources/images/members/MathIO-011.jpeg);"></div>
                <h3>Jack Schumann</h3>
                <p>Programmer</p>
                <p> </p>
                <br>
                <p><i>Plays a major part in the development of new Games.</i></p>
            </div>
            <div class="eBox">
                <div class="img" style="background:url(resources/images/members/MathIO-008.jpeg);"></div>
                <h3>Matthew Daniel</h3>
                <p>Game Developer</p>
                <p> </p>
                <br>
                <p><i>Creates and develops new Games.</i></p>
            </div>
            <div class="eBox">
                <div class="img" style="background:url();"></div>
                <h3>Jonathan Choi</h3>
                <p>Game Developer</p>
                <p>jonathan_choi@math-io.com</p>
                <br>
                <p><i>Creates and develops new Games.</i></p>
            </div>
            <div class="eBox">
                <div class="img" style="background:url(resources/images/members/MathIO-013.jpeg);"></div>
                <h3>Tim Felbinger</h3>
                <p>Graphic Designer</p>
                <p>tim.felbinger@math-io.com</p>
                <br>
                <p><i>Photography and Graphic Design.</i></p>
            </div>
            <div class="eBox">
                <div class="img" style="background:url(resources/images/members/MathIO-012.jpeg);"></div>
                <h3>Maddy Larrieu</h3>
                <p>Does things</p>
                <p></p>
                <br>
                <p><i></i></p>
            </div>
            <div class="margin"></div>
        </div>
    
    
    </cms:editable>
    

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
<?php COUCH::invoke(); ?>