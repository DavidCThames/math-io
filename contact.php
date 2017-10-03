<?php require_once( 'couch/cms.php' ); ?>
<!doctype html>
<html><!-- InstanceBegin template="/Templates/desktop.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="utf-8">
<!-- InstanceBeginEditable name="doctitle" -->
    <title>Math I/O | Contact us</title>
	<span style="display:none;" id="title">Contact us</span>
    <style>
        .container > nav div {
            width: 33.33%;
            /*width: 25%;*/
            padding: 0px;
            float: left;
            overflow: hidden;
            height: 100%;
            text-align: center;
			transition:all .2s;
        }
        .container > nav img {
            width: 100%;
            height: 100%;
            -webkit-filter: blur(0px);
            -moz-filter: blur(0px);
            -o-filter: blur(0px);
            -ms-filter: blur(0px);
            filter: blur(0px);
            transition: all .5s;
            border: none;
        }
        .container nav {
            padding: 20%;
            padding-top: 50px;
            padding-bottom: 50px;
            background-color: rgba(87, 87, 87, 1.00);
            height: 400px;
            background: url(resources/images/social/social.jpg) fixed;
			background-position:top;
            background-repeat: no-repeat;
            background-size: cover;
        }
        .container > nav > section {
            height: 50%;
            background-color: rgba(0, 0, 0, 1.00);
        }
        .container > nav img + h2 {
            padding-top: 20%;
            color: rgba(255, 255, 255, 1.00);
            font-size: 36px;
            transition-property: all;
            transition-duration: .5s;
            text-shadow: 0px 0px 10px black;
            opacity: 0;
            position: relative;
            top: -100%;
        }
        .container > nav h1 {
            padding-top: 5%;
            color: rgba(24, 136, 255, 1.00);
            transition-property: all;
            transition-duration: .5s;
            font-size: 50px;
            font-family:"Roboto", "Helvetica Neue"; font-weight: 100;
        }
		.container > nav div:hover {
			box-shadow:#727272 0px 0px 5px;
			z-index:2;
			position:relative
		}
        .container > nav div:hover img {
            -webkit-filter: blur(3px);
            -moz-filter: blur(3px);
            -o-filter: blur(3px);
            -ms-filter: blur(3px);
            filter: blur(3px);
            filter: url(css/blur.svg#blur);
        }
        .container > nav div:hover h2 {
            opacity: 1;
        }
        .container > nav p {
            padding-top: 25%;
            color: rgba(255, 255, 255, 1.00);
            transition-property: all;
            transition-delay: 0s;
            transition-duration: .5s;
            text-shadow: 0px 0px 10px black;
            opacity: 0;
            position: relative;
            top: -150%;
        }
        .container > nav div:hover p {
            opacity: 1;
            transition-delay: .5s;
        }
        .container > section {
            padding: 20%;
            padding-top: 50px;
            padding-bottom: 50px;
			background-color:#ececec;
            /*background-color: rgba(64, 163, 255, 1.00);*/
            height: 600px;
            border: 0px solid rgba(0, 0, 0, 0.00);
        }
		.container > section > h1 {
			text-align:center;
		}
		.container > section > a {
			text-decoration:none;
		}
		.card {
			background-color:white;
			box-shadow:0px 3px 10px rgba(0, 0, 0, .5);
			border-radius:3px;
			padding:5px;
			text-align:center;
			margin:20px;
			cursor:pointer;
			transition:box-shadow .2s;
		}
		.card:hover {
			box-shadow:0px 6px 20px rgba(0, 0, 0, .5);
		}
		.card h2 {
			color:#dddddd;
			margin-top:0px;
		}
		.card p {
			color:#dddddd;
			margin-top:0px;
		}
    </style>
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
		<h1 id="page">Contact us</h1>
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
		<section>
            <h1>Email us!</h1>
            <a href="mailto:support@math-io.com">
                <div class="card" style="background-color:#E91E63">
                <cms:editable name='EmailSupport' type='richtext'>
                    <h2> Support@math-io.com </h2>
                    <p>Have an issue or found a bug in a game? Contact our support email for solutions or bug fixes.</p>
                </cms:editable>
                </div>
            </a> 
            <a href="mailto:info@math-io.com">
                <div class="card" style="background-color:#2196F3">
                <cms:editable name='EmailInfo' type='richtext'>
                    <h2> Info@math-io.com </h2>
                    <p>Have a suggestion or want to talk to us about business? Contact the info email to have a conversation with the people that run Math I/O.</p>
                </cms:editable>
                </div>
            </a>
            <a href="about.php#employees">
                <div class="card" style="background-color:#009688">
                <cms:editable name='EmailMembers' type='richtext'>
                    <h2> Members </h2>
                    <p>Want to get in touch with a specific member? Click here to see all of our members and their emails.</p>
                </cms:editable>
                </div>
            </a>
        </section>

        <nav>
            <section>
            <cms:editable name='Social' type='textarea'>
                <div style="background-color:white">
                    <h1>Social</h1>
                </div>
                <a href="mailto:support@math-io.com">
                    <div>
                        <img src="resources/images/social/email.png">
                        <h2>Email</h2>
                        <p>support@math-io.com</p>
                    </div>
                </a>
                <a href="http://blog.math-io.com">
                    <div>
                        <img src="resources/images/social/wordpress.png">
                        <h2>Blog</h2>
                    </div>
                </a>
            </section>
            <section>
                <a href="https://www.facebook.com/ninjacstudiosmathio">
                    <div>
                        <img src="resources/images/social/facebook.png">
                        <h2>Facebook</h2>
                    </div>
                </a>
                <a href="https://twitter.com/math_io">
                    <div>
                        <img src="resources/images/social/twitter.png">
                        <h2>Twitter</h2>
                    </div>
                </a>
                <a href="https://plus.google.com/b/100731948523284664244/100731948523284664244/posts">
                    <div>
                        <img src="resources/images/social/google.png">
                        <h2>Google+</h2>
                    </div>
                </a>
            </cms:editable>
            </section>
        </nav>
        




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