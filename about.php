<?php require_once( 'couch/cms.php' ); ?>
<!doctype html>
<html><!-- InstanceBegin template="/Templates/desktop.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="utf-8">
<!-- InstanceBeginEditable name="doctitle" -->
    <title>Math I/O | About</title>
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
<style>
	@import url(css/about.css);
</style>
<script>
	function showE() {
		$('.employees').css("height", "700px");
		$('.EHidden').addClass("EHide");
		$('.EHidden').removeClass("EHidden");
			$('.ETop .XECard').css("height", "75px");
			$('.ETop .XECard').css("box-shadow", "#434343 0px 0px 0px");
			$('.ETop ').css("box-shadow", "#434343 0px 2px 10px");
		//$('.XECard').css("transition-delay", "0s");
		setTimeout(function() {$('.ECard').addClass('EHover');}, 100);
		$('.employees .show').css("display", "none");
		//setTimeout(window.scroll(0, $('.container').height() + 150), 1000);
		//setTimeout(console.log($('.container').height() + 150), 1000);
	}
	function hideE() {
		$('.employees').css("height", "400px");
		$('.EHide').addClass("EHidden");
		$('.EHide').removeClass("EHide");
		setTimeout(function() {
			$('.ETop .XECard').css("height", "125px");
			$('.ETop .XECard').css("box-shadow", "#434343 0px 2px 15px");
			$('.ETop ').css("box-shadow", "#434343 0px 0px 0px");
		}, 500);
		//$('.XECard').css("transition-delay", "0s");
		$('.ETop').removeClass('EHover');
		$('.employees .show').css("display", "block");
	}
</script>
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
		<h1 id="page">About</h1>
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
        <div class="box contents">
        	<div>
        		<h3 onClick="pan(0, 460);">Purpose</h3>
            	<h3 onClick="pan(0, 820);">Beginnings</h3>
        		<h3 onClick="pan(0, 1510);">Description</h3>
            	<h3 onClick="pan(0, 2215);">Employees</h3>
				<h3 onClick="pan(0, 2610);">Press</h3>
            	<h3 onClick="pan(0, 3305);">Legal</h3>
        	</div>
        </div>
        
		<div class="box purpose" id="purpose">
            <cms:editable name='Purpose' type='richtext'>
        	<h2>Purpose</h2>
            <p>
				Many kids, when they are younger, find that they learn math best from games found across the internet, but as they get older, the focus of their learning moves away from the games, into worksheets and lectures. They then learn to associated these things with work, rather than puzzles or games, and have trouble understanding the concepts without good graphical representations of them. The games we create are targeted towards high school kids to provide them a fun and interactive way to learn the complex concepts taught in high school math classes. 
            </p>
            </cms:editable>
        </div>
        
        <div class="box beginnings" id="beginnings">
            <cms:editable name='Beginnings' no_xss_check='1' type='textarea' >
                <h2>Our Beginnings</h2>
                <p>
                We began when our high school math teacher, Jonathan Upperman, inspired Brandon Rozek to create new games for high school math classes. Brandon started working on what is now Darts, but he realized that he could not finish the game on his own, so he asked David Thames to help him on the project. Over the following months, we continued to search for more coders to recruit. By the next year we gained eight other people to make up the group we are today and were quickly and efficiently developing more games.</p>
                <img src="resources/images/P1030317.JPG">
            </cms:editable>    
        </div>

            <div class="box description" id="description"><div>
                <cms:editable name='main_content' type='richtext'>
                    <h2>Description</h2>
                    <p>
                        We are a small, but quickly expanding, group of programmers, designers, and mathmeticians that develop fun, educational games. These games give students a deeper understanding of topics by visualizing them through the games' graphics and interactive elements. 
                    </p>
                </cms:editable>
            </div></div>


        <div class="box employees" id="employees">
        <h2>Members</h2>
        <div>
                <cms:editable name='Employees' no_xss_check='1' type='textarea' >
                <div class="eList managers">
                    <div class="margin1"></div>
                    <div class="eBox">
                        <div class="img" style="background:url(resources/images/members/MathIO-010.jpeg);"></div>
                        <h3>David Thames</h3>
                        <p>Co-Founder, Team Leader, & Programmer</p>
                        <br>
                        <p><i>Started Math I/O. He manages the team and is also the webmaster and a lead programmer</i></p>
                    </div> 
                    <div class="eBox">
                        <div class="img" style="background:url(resources/images/MathIO-012.png);"></div>
                        <h3>Brandon Rozek</h3>
                        <p>Co-Founder & Programmer</p>
                        <br>
                        <p><i>Started Math I/O. He is also a lead programmer in the development of new games.</i></p>
                    </div>
                        <div class="eBox">
                            <div class="img" style="background:url(resources/images/members/MathIO-006.jpeg);"></div>
                            <h3>Noah Miller</h3>
                            <p>Manager & Physicist</p>
                            <br>
                            <p><i>Manages the team and assists with the physics of games and helps to develop them.</i></p>
                        </div>
                    <div class="margin"></div>
                </div>
            </cms:editable>

            <a href="members.php"><h2 class="show" onClick="">Show All</h2></a>

        </div>
    </div>

        <div class="box press" id="press">
            <cms:editable name='Press' type='richtext'>
                <h2>Press &amp; Teachers </h2>
                <div class="flex">
                    <!--<div class="card"> 
                        <img src="resources/images/user.png">
                        <div class="text">
                            <p>Jamestown High School</p>
                            <p>
                            "<i>TODO</i>"</br>
                            -Teacher
                        </p>
                        </div>
                    </div>

                    <div class="card"> 
                        <img src="resources/images/user.png">
                        <div class="text">
                        <p>School</p>
                        <p>
                            "<i>TODO</i>"</br>
                            -Teacher
                        </p>
                        </div>
                    </div>-->
                    <div class="card" onClick="link('http://wydaily.com/2014/11/07/get-schooled-jamestown-high-math-students-program-video-games-to-teach-math-skills?cat=get-schooled%2F')"> 
                        <img src="http://wydaily.com/wp-content/uploads/2014/09/GetSchooledIan.jpg">
                        <div class="text">
                        <p>Williamsburg Yorktown Daily | Get Schooled: Jamestown High Math Students Program Video Games to Teach Math Skills</p>
                        <p>
                            <i>"A group of Jamestown High students are helping their peers strengthen their mathematics skills, but instead of using flash cards and worksheets, they use computer games..."</i></br>
                            -Ian Bricky
                        </p>
                        </div>
                    </div>
                </div>
            </cms:editable>

        </div>

        <div class="box legal" id="legal">
            <cms:editable name='Legal' no_xss_check='1' type='textarea'>
                <h2>Legal Stuff</h2>
                <div class="flex">	
                    <a href="legal/privacyPolicy.php" class="card" style="background-color:#9F48FF"> 
                        <h3>Privacy Policy</h3>
                    </a>

                    <a href="legal/TermsOfUse.php" class="card" style="background-color:#FF4447"> 
                        <h3>Terms of Use</h3>
                    </a>

                    <a href="legal/legal.html" class="card" style="background-color:hsla(28,100%,63%,1.00)"> 
                        <h3>Summary</h3>
                    </a>
                </div>
            </cms:editable>
        </div>


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