<?php require_once( '../couch/cms.php' ); ?>
<!doctype html>
<html><!-- InstanceBegin template="/Templates/legal.dwt" codeOutsideHTMLIsLocked="false" -->
<head>
<meta charset="utf-8">
<!-- InstanceBeginEditable name="doctitle" -->
<title>Math I/O</title>
<!-- InstanceEndEditable -->
<style>
	.container header {
	width: 100%;
	background-color:hsla(0,0%,87%,1.00);
	border-top:hsla(0,0%,71%,1.00) 1px solid;
	border-bottom:hsla(0,0%,71%,1.00) 1px solid;
	/*border-top: 1px solid black;
	border-bottom: 1px solid black;
	-webkit-box-shadow: inset 0px 0px 6px;
	box-shadow: inset 0px 0px 10px;*/
	text-align: center;
	/*	left: 50%; 
		top: -90px;
    	-webkit-transform: translate(-50%, 0); 
   		position: absolute;
	border-right: 10px  hsla(0,0%,100%,1.00) inset;
	border-left: 10px  hsla(0,0%,100%,1.00) inset;*/
	}
	.container h2 {
		font-family:"Roboto", "Helvetica Neue"; font-weight: 100;
		font-size:24px;
		color:hsla(0,0%,36%,1.00);
	}
	.container nav {
		float: left; 
		/*width:20%; 
		height:100%; 
		min-width:250px; 
		max-width:350px; */
		margin-right:50px;
		background-color:white;
		width:191px;
		height:100%;
	} 
	.container nav a {
		transition:all .2s;
		font-size: 25px;
		color:hsla(0,0%,61%,1.00);
		text-decoration:none;
		padding-top:10px;
		display:block;
	}
	.container nav td {
		transition:all .2s;
		border-bottom:solid 1px hsla(0,0%,71%,1.00);
		background-color:white;
	}
	.container nav td:hover {
		background-color:hsla(0,0%,71%,1.00);
	}
	.container nav td:hover a {
		color:white;
	}
	.container h1 {
		color:hsla(0,0%,23%,1.00);
		font-family:"Roboto", "Helvetica Neue"; font-weight: 100;
	}
	.container div h2 {
		color:hsla(0,0%,23%,1.00);
	}
	.container div p {
		color:hsla(0,0%,34%,1.00);
	}
</style>
<style>
@import url("../webfonts/stylesheet.css");
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

<body style="position: absolute; top: 0px; left:0px; height:100%; width:100%; margin:0px">

<header>
<nav class="smallBar">
	<a class="ico" href="../index.php"><img class="ico" src="../resources/images/favico.png"></a>
	<a class="title" href="../index.php"><h1>Math I/O</h1></a>
	<h2 class="top" onClick="pan(0, 0)"><img src="../resources/images/vAlpha.png"> Top</h2>
        <div class="smallNav2">
			<img src="../resources/images/vAlpha.png">
			<a class="first">Home</a>
        	<a href="../index.php">Home</a>
			<a href="../about.php">About</a>
			<a href="../members.php">Members</a>
			<a href="../lessons.html">Lessons</a>
			<a href="../gettingStarted.php">Getting started</a>
			<a href="../contact.php">Contact us</a>
        </div>
</nav>

<div class="socialbar">
    	<p><a href="http://facebook.com">F</a><a href="http://plus.google.com">G</a><a href="http://twitter.com">L</a></p>
</div>
<div class="topbar" style="opacity: 1;">
	<section>
		<a href="http://math-io.com"><h1>Math I/O</h1></a>
        <nav>
        	<table>
            <tr>
        		<td><a href="../index.php">Home</a><br></td>
            	<td><a href="../lessons.html">Lessons</a><br></td>
            </tr><tr>
            	<td><a href="../about.php">About</a><br></td>
            	<td><a href="../gettingStarted.php">Getting started</a><br></td>
            </tr><tr>
            	<td><a href="../members.php">Members</a><br></td>
            	<td><a href="../contact.php">Contact us</a><br></td>
            </tr>
            </table>
        </nav>
    </section>
</div>
</header>

<div class="container">
	<!--Warning: do not use div here-->
	<!-- InstanceBeginEditable name="Header" -->
	<header><h1>Privacy Policy</h1></header>
	<!-- InstanceEndEditable -->
	<div style="max-width:1000px; margin-left:auto; margin-right:auto; margin-top:20px;">
    <nav style="">
		<table width="100%" border="0">
			<tr><td><a class="tab2" href="privacyPolicy.php">Privacy Policy</a></td></tr>
			<tr><td><a class="tab3" href="TermsOfUse.php">Terms of Use</a></td></tr>
			<tr><td><a class="tab4" href="resources.php">Resources</a></td></tr>
		</table>

    </nav>
	<div style="padding-left:241px; ">
    <!-- InstanceBeginEditable name="body" -->
    <style>.tab2 {font-weight:bold;}</style>
    <cms:editable name='Purpose' type='richtext'>
    
	<p>This policy describes How  Math I/O LLC uses, collects, discloses, and stores users&rsquo; information. For further  question on our policies please contact us.</p>
	<h2>Collection  and Use of Personal Information</a></h2>
	<ul>
		<li><p>Personal information is data that can be used to uniquely  identify or contact a single person. </p></li>
		<li><p>When you sign up for a teacher account on Math I/O, we may  ask for your name, email address, and other additional information. We use this  information to provide the best possible service. This information is securely  stored on our servers, and it is not shared with any third parties. </p></li>
<!--		<li><p>All payment is run through Amazon Payments, a service of  Amazon Payments, Inc. We do not collect users&rsquo; payment information. <a href="https://payments.amazon.com/help/Personal-Accounts/Privacy-Security/Privacy-Notice">Click here to view their policy. </a></p></li>-->
		<li><p>If you have an account linked to a techer, the teachers linked to your account may be able to access your login details and data from the  games that you have played. </p></li>
		<li><p>We use information to improve our products and services. We  may use your information to make our website and services better. We might use  your information to customize your experience with us. </p></li>
	</ul>
	<h2>Security</h2>
	<ul>
		<li><p>We try, to the best of  our ability, to keep any information collected secure, but the Internet is not 100% secure so use caution when  putting information on the internet </p></li>
		<li><p>We reserve the right to keep any personal information  collected as long as it is necessary or relevant for the practices described in  this Policy. </p></li>
	</ul>
	<h2>Cookies</h2>
	<ul>
		<li><p>This site may use cookies to improve the users experience on  this website. </p></li>
		<li><p>Cookies also may be used to store login sessions on Math I/O. </p></li>
	</ul>
	<h2>Minors</h2>
	<ul>
		<li><p>We do not knowingly ask  anyone under 13 years old for any personal information. All personal  information is collected from the instructor and a login is generated for the  students.</p></li>
	</ul>
	<h2>Disclosure to Third Parties</h2>
	<ul>
		<li><p>All personal information collected for use on the Math I/O  website is kept confidential. No personal information is sold, traded, or  distributed to other agencies or organizations, except in the case of legal  requirement, such as a subpoena, or government investigation. </p></li>
		<li><p>We may share non-personal information with third parties who  perform services on our behalf. For example, we may share information with a  vendor who conducts a satisfaction survey on our behalf, in order to improve  our site. </p></li>
	</ul>
	<p>&nbsp;</p>
	<h2>Policy Changes</h2>
	<ul>
		<li><p>We may change our privacy  policy at any time. All users will be notified of these changes as required by  law and the policy will be updated on our website. Please check our site periodically for updates. </p></li>
	</ul>
	<h2>Questions or Concerns</h2>
	<ul>
		<li><p>For questions please contact us as detailed on the <a href="http://math-io.com/contact.html">Contact Us</a> page. </p></li>
	</ul>
    </cms:editable>
    <!-- InstanceEndEditable -->
	</div>
	</div>
	<!-- InstanceBeginEditable name="footer" -->
	<footer style="text-align:center; background-color:#1d1d1d;">
			<p><span style="color:hsla(0,0%,61%,1.00)">© 2014 Math I/O LLC. All Rights Reserved</span> | <a href="legal/legal.html">Legal Stuff</a> | <a href="privacyPolicy.php">Privacy Policy</a> | <a href="termsOfUse.html">Terms of Use</a>
		</footer>
	<!-- InstanceEndEditable -->
</div>
</body>
<!-- InstanceEnd --></html>
<?php COUCH::invoke(); ?>