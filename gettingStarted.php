<?php require_once( 'couch/cms.php' ); ?>
<!doctype html>
<html><!-- InstanceBegin template="/Templates/desktop.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="utf-8">
<!-- InstanceBeginEditable name="doctitle" -->
<style>
	@import url("css/gettingStarted.css");
</style>
	<title>Math I/O | Getting started</title>
	<span style="display:none;" id="title">Getting started</span>

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
		<h1 id="page">Getting started</h1>
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
    <h1 class="comingSoon">Coming Soon...</h1>
	<div class="scrollNotif" data-0="opacity:1; !display:block;" data-100="opacity:0; display:block;">
		<p>scroll for more</p>
		<!--<img src="resources/images/scroll.png">-->
		<img src="resources/images/scroll.png">
	</div>
	
    <div class="window">
		<div class="box contents">
        	<div>
        		<h3 onClick="pan(0, 650);">Teacher</h3>
            	<h3 onClick="pan(0, 1350);">Student</h3>
        		<h3 onClick="pan(0, 2050);">Payment</h3>
            	<h3 onClick="pan(0, 2750);">Create an Account</h3>
				<h3 onClick="pan(0, 3650);">Learn</h3>
            	<h3 onClick="pan(0, 4348);">Play</h3>
        	</div>
        </div>
        
        
        <!------------------------------------->
        
		<div class="box purpose">
        	<cms:editable name='Purpose' type='textarea'>
                <div id="overview" class="panle title">
                    <h1> Overview </h1>
                </div>
                <div id="teacher" class="panle">
                    <div class="center">
                    <img
                        src="resources/images/marketing/teacher_1.png" 
                        data-400="top:100px;"
                        data-1250="top:850px;"
                    >
                    <img
                        src="resources/images/marketing/teacher_2.png"
                        data-400="opacity:0; top:100px;"
                        data-600="opacity:1; top:275px;"
                        data-1250="top:850px;"
                    >
                    <h1>Teacher</h1>
                    <!--<p>The teacher can create account that allowes him or her to monitor the progress and developments of students through the games on Math I/O.</p>-->
                    </div>
            </cms:editable>
		</div>
        
        <!------------------------------------->
        
		<div id="student" class="panle">
        	<cms:editable name='student' type='textarea'>
                <div class="center">
                <img
                    src="resources/images/marketing/student_1.png" 
                    data-200="opacity:0;top:-400px;"
                    data-700="opacity:0; top:-400px;"
                    data-1100="opacity:1; top:100px;"
                >
                <img
                    src="resources/images/marketing/student_2.png"
                    data-200="opacity:0; top:-400px;"
                    data-700="opacity:0; top:-400px;"
                    data-1100="opacity:0; top:100px;"
                    data-1300="opacity:1;"
                }
                <h1>Student</h1>
                    <!--<p>
                        The student can create an account to track his or her own development and can attach the account to a teacher's account to allow the teacher to also see the students development.
                    </p>-->
                </div>
            </cms:editable>
		</div>
        
        <!------------------------------------->
        
		<div id="payment" class="panle">
        	<cms:editable name='payment' type='textarea'>
                <div class="center">
                <h1>Payment</h1>
                <p>Math I/O is free for all students and teacher. The only source of money for Math I/O is ads, which go directly into the hosting of our website because we believe in making education free and open to everyone.</p>
                <!--<p>You can pay through credit, debit, or PayPal.
                <table style="margin-top:100px;" border="1" bordercolor="#FFFFFF" cellspacing="0">
                    <tr>
                        <th scope="col">Account Type</th>
                        <th scope="col">Price</th>
                    </tr>
                    <tr>
                        <td>Teacher</td>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <td>10 Students</td>
                        <td>$7</td>
                    </tr>
                    <tr>
                        <td>20 Students</td>
                        <td>$10</td>
                    </tr>
                    <tr>
                        <td>50 Students</td>
                        <td>$20</td>
                    </tr>
                </table>-->
    
    
                <img 
                    data-bottom-top="opacity:0; top:200px;" 
                    data-top="opacity:1; top:-400px;" 
                    class="card" src="resources/images/marketing/payment.png">
                </div>
            </cms:editable>
		</div>
        
        <!------------------------------------->
        
		<div id="overview" class="panle title">
            <cms:editable name='overview' type='textarea'>
                <h1> Get Started </h1>
            </cms:editable>
		</div>
        
        <!------------------------------------->
        
		<div id="account" class="panle">
        	<cms:editable name='account' type='textarea'>
                <h1>Create an Account</h1>
                <div class="create box">
                    <div>
                    <h3>After creating an account press back in your browser to return to this page and continue.</h3>
                    <form action="account.php" method="post">
                    <label style='display: block; width: inherit; text-align: center;'>Username:</label>
                        <input type="text" required="required" style="width: 90%;">
                        </br></br>
                    <label style='display: block; width: inherit; text-align: center;'>Password:</label>
                        <input type="password" required="required" style="width: 90%;">
                        </br></br>
                    <label style='display: block; width: inherit; text-align: center;'>Student Password:</label>                   <input type="password" required="required" style="width: 90%;">
                        </br></br>
                    <label style='display: block; width: inherit; text-align: center;'>Email:</label>
                        <input type="email" required="required" style="width: 90%;">
                        </br></br>
                    <label style='display: block; width: inherit; text-align: center;'>Phone:</label>
                        <input required="required"  style="width: 90%;" type="text">
                        </br></br>
                    
                    <input type="submit" value='Create'>
                    </form>
                    </div>
                </div>
            </cms:editable>
		</div>
		<!--<div id="buy" class="panle">
			<object type="image/svg+xml" data="ai/buy.svg" class="logo">
				<a src="buy.html">Buy</a>
			</object>
		</div>-->
        
        <!------------------------------------->
        
		<div id="learn" class="panle">
            <cms:editable name='learn' type='textarea'>
                <h1>Learn</h1>
                <div>
                    <input id="btnTutorial" type="button" value="Tutorial" onClick="link('tutorial.html')">
                    <input id="btnAbout" type="button" value="About" onClick="link('about.html')">
                    <input id="btnLegal" type="button" value="Legal" onClick="link('legal/legal.html')">
                </div>
                <object type="image/svg+xml" data="ai/questionMark.svg" class="logo" style="width:25vw; height:550px; float:right;"
                    data-bottom-top="opacity:0; transform:rotate(180deg)" 
                    data-200-top="opacity:1; transform:rotate(0deg);" 
                >
                    Your browser does not support SVG
                </object>
        	</cms:editable>       
        </div>
        
        
        <!------------------------------------->
        
        
		<div id="play" class="panle">
            <cms:editable name='play' type='textarea'>
                <object type="image/svg+xml" data="ai/playBG/playBG.svg" class="logo" style=" position:absolute; top:0px; left:0px; z-index:-1;"></object>
                <h1>Play</h1>
                <div>
                    <input id="btnTutorial" type="button" value="Play" onClick="link('index.html')">
                    <input id="btnAbout" type="button" value="Search Games" onClick="link('games.html')">
                </div>
            </cms:editable>
		</div>
	</div>
    
    
    
    

	<!-- InstanceEndEditable -->
	<footer style="text-align:center;">
			<p><span style="color:hsla(0,0%,61%,1.00)">© 2014 David Thames All Rights Reserved</span> | <a href="legal/privacyPolicy.php">Privacy Policy</a> | <a href="legal/TermsOfUse.php">Terms of Use</a> | <a href="legal/resources.php">Resources</a>
		</footer>
</div>
<!--<div style="float:right; width:calc(50% - 800px); height:100vh;"></div>-->
	<!-- InstanceBeginEditable name="bodyEnd" -->
    <script type="text/javascript" src="js/skrollr.min.js"></script>
	<script type="text/javascript">
	var s = skrollr.init();
	</script>
	<!-- InstanceEndEditable -->
</body>
<!-- InstanceEnd --></html>
<?php COUCH::invoke(); ?>