<?php require_once( 'couch/cms.php' ); ?>
<!DOCTYPE html>

<head>
    <meta charset="utf-8">
    <title>Math I/O</title>

    <style>
        @import url(http://fonts.googleapis.com/css?family=Roboto:100,300,400,500);
        @import url("webfonts/Socialico/stylesheet.css");
        @import url("css/styleDesktop.css");
        @import url("css/DesktopHome.css");
    </style>
	<script class="jsbin" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
	<script src="js/jquery.js"></script>
    <script src="js/buildBoxes.js"></script>
    <script src="js/Boxes.js"></script>
    <script src="js/script.js"></script>
    <script src="js/home.js"></script>
    <script src="js/jquery.lazyload.min.js" type="text/javascript"></script>

</head>

<body style="position: absolute; top: 0px; left:0px; height:100%; width:100%; margin:0px">

    <div class="socialbar">
        <p><a style="background-color:blue" href="https://www.facebook.com/mathio">F</a><a style="background-color:red;" href="https://plus.google.com/b/100731948523284664244/100731948523284664244/posts">G</a><a style="background-color:#0084FF" href="https://twitter.com/math_io">L</a><a style="background-color:#FFBB11" href="http://blog.math-io.com">W</a>
        </p>
    </div>
    <iframe class="status" src="user/accountSummary.php"  seamless></iframe>
    <img alt="Options" class="options" src="ai/options.svg" onClick="options()">
    <img alt="Options" class="options2" src="ai/options2.png" onClick="searchIco()">
	<img alt="Search" class="options2 searchHome" src="resources/images/search2.png" onClick="homeSearch('')"><input class="searchBox" type="text" onKeyPress="homeSearch(event)"></input>
	<div class="optionsClose" onClick="options()">
       	<h2>Welcome</h2>
        <img alt="X" class="optionsX" src="resources/images/xAlpha.png">
    </div>
    <div style="float:left; width:calc(50% - 800px); height:100vh;"></div>
    <div class="topbar">
        <section>
            <h1>Math I/O&nbsp;&nbsp;&nbsp;</h1>
            <h1>|</h1>
            <div class="welcomeBox">
                <p class="welcomeSlide">Welcome</p>
            </div>
            <select onChange="smallNav(this)" class="miniNav">
              <option value="index.php" selected>Home</option>
              <option value="about.php">About</option>
              <option value="members.php">Members</option>
              <option value="lessons.html">Lessons</option>
			  <option value="gettingStarted.php">Getting started</option>
              <option value="contact.php">Contact us</option>
            </select>
<!--            <div class="accPlaceholder"></div>
-->
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
    <div class="optionsCont">
    	
    </div>
	<div class="container">
		<div style="background-color:#F44336; color:white; font-family:Roboto; width:100%; height:50px; padding-top:10px; font-size:24px; text-align:center;" >We won the Verizon Innovative App Challenge! Help us win the fan favorite <b>Text MATHIO2 to 22333</b>. <a href="http://appchallenge.tsaweb.org/vote/6345;" style="color: white !important;">http://appchallenge.tsaweb.org/vote/6345</a>
		</div>
		<iframe style="width:100%; height:800px;"; src="https://www.youtube.com/embed/QOU6XeuCc38" frameborder="0" allowfullscreen></iframe>
		<div class="loading">
        	<a href="http://math-io.com"><h1>Math I/O</h1></a> 
        	<p>Loading page...</p>
        	<video style="width:100%" loop>
        	    <source src="" type="video/mp4">
        	</video>
   		 </div>
		<div class="num">
        <figure>
            <img>
        </figure>
        <aside class="featured" style="position:relative; float:left;">
            <h1> Featured </h1>
        </aside>
        <cms:editable name='main_content' type='textarea'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        </cms:editable>
    </div>
    <footer style="text-align:center; background-color:#1d1d1d;">
        <p><span style="color:hsla(0,0%,61%,1.00)">© 2014 David Thames All Rights Reserved</span> | <a href="legal/privacyPolicy.php">Privacy Policy</a> | <a href="legal/TermsOfUse.php">Terms of Use</a> | <a href="legal/resources.php">Resources</a>
    </footer>
</div>
<div style="float:right; width:calc(50% - 800px); height:100vh;"></div>
<a href="#"><img alt="X" class="gameBox gameX" src="resources/images/xAlpha.png"></a>
<div class="gamebg"></div>
<iframe id="GameBox" allowtransparency="true" class='gameBox gameWindow' src="projects/game.html"></iframe>

<!--------GAME WINDOW-------->





    
    
</body>
<?php COUCH::invoke(); ?>