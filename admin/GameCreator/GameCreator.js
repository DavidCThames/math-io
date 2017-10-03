// JavaScript Document
/*//HTML for index.html---------------------------------------------------------\/
	var templatefont = "'Roboto Thin'"
	var templateautoResize = "'iframe1'"
	var templatestr = '<!doctype html><html style="font-family: ' + templatefont + ';"><!-- InstanceBegin template="/Templates/template1.dwt" codeOutsideHTMLIsLocked="false" --><head><meta charset="utf-8"><!-- InstanceBeginEditable name="doctitle" --><title>Math I/O</title><!-- InstanceEndEditable --><!-- InstanceBeginEditable name="head" --><link href="../../webfonts/Roboto_Thin/stylesheet.css" rel="stylesheet" type="text/css"><!-- InstanceEndEditable --><link href="../../webfonts/Roboto_Thin/stylesheet.css" rel="stylesheet" type="text/css"><style>@import url("../../webfonts/Roboto_Thin/stylesheet.css");@import url("../../webfonts/Roboto_Regular/stylesheet.css");@import url("../../webfonts/Roboto_Light/stylesheet.css");@import url("../../webfonts/Socialico/stylesheet.css");@import url("../../css/styleDesktop.css");</style><script src="../../js/jquery.js"></script><!--<script src="../js/buildBoxes.js"></script>--><script src="../../js/Boxes.js"></script><script src="../../js/script.js"></script><script src="../../js/scriptOther.js"></script></head><body style="position: absolute; top: 0px; left:0px; height:100%; width:100%; margin:0px"><header><nav class="smallBar">    <section></section>	<a href="../../index.php"><div><h2>Home</h2></div></a>    <a href="../../about.php"><div><h2>About</h2></div></a>    <a href="../../games.html"><div><h2>Games</h2></div></a>    <a href="../../account.php"><div><h2>Accounts</h2></div></a>    <a href="../../contact.php"><div><h2>Contact us</h2></div></a>    <a href="../../mobile.html"><div><h2>Blog</h2></div></a>    <section></section></nav><div class="socialbar">    	<p><a href="http://facebook.com">F</a><a href="http://plus.google.com">G</a><a href="http://twitter.com">L</a></p></div><div class="topbar" style="opacity: 1;">	<section>		<a href="http://math-io.com"><h1>Math I/O</h1></a>        <nav>        	<table>            <tr>        		<td><a href="../../index.php">Home</a><br></td>            	<td><a href="../../account.php">Account</a><br></td>            </tr><tr>            	<td><a href="../../about.php">About</a><br></td>            	<td><a href="../../contact.php">Contact us</a><br></td>            </tr><tr>            	<td><a href="../../games.html">Search games</a><br></td>            	<td><a href="../../mobile.html">Blog</a><br></td>            </tr>            </table>        </nav>    </section></div></header><!-- InstanceBeginEditable name="EditRegion1" --><!-- InstanceEndEditable --></div></div><p></p><iframe id="iframe1" style="width: 100%; height:1000px; -webkit-box-shadow: inset 0px 0px 0px 0px rgba(255,255,255,1.00); box-shadow: inset 0px 0px 0px 0px rgba(255,255,255,1.00); margin-top: 150px;" src="game.html" frameborder="0" seamless scrolling="no" onLoad="autoResize(' + templateautoResize + ')" ></iframe></body><script src="../../js/template.js"></script><link rel="stylesheet" type="text/css" href="../../css/template.css"><!-- InstanceEnd --></html>'*/
//Html to create boxes.js-----------------------------------------------------\/
	var boxstr1 = 'games['
	var boxstr2 = '] = {    title:"'
	var boxstr3 = '",		about: "'
	var boxstr4 = '",		img: "'
	var boxstr5 = '",		color: "'
	var boxstr6 = '",		href: "'
	var boxstr7 = '",		date: '
	var boxstr8 = ',        beta: '
	var boxstr9 = ',	}'
//----------------------------------------------------------------------------/\
//Html to create page---------------------------------------------------------\/
	var pagestr1 = "<!doctype html><html style='height: 100%;'><head><meta charset='utf-8'><title>"
	var pagestr2 = "</title><script>var GameID = '";
	var pagestr3 = "';</script><style>@import url(http://fonts.googleapis.com/css?family=Roboto:100,300,400,500);h1 {	font-family: 'Roboto Thin';	color: white;	font-size: 2vw;	height: 10%;}p {	font-family: 'Roboto Light';}#desc p {	color: white;}.top {	overflow: hidden; 	max-width:1110px; 	margin-left:auto; 	margin-right:auto;	-webkit-box-shadow: 0px 0px 10px; 	box-shadow: 0px 0px 10px;	position:relative;	z-index:1000;}#img {	float: left;	height: 33.75vw;	min-height: 225px;	max-height: 375px;	width: calc(50% - 3px);	min-width: 300px;	/*max-width: 500px;	margin-right: 5px; 	margin-bottom: 5px; 	margin-top: 5px; 	border-style: ridge;*/ 	overflow-x: visible;}#desc {	float: right; 	height: 33.75vw; 	min-height: 225px; 	max-height: 375px; 	width: 50%; 	min-width: 300px; 	/*max-width: 500px; 	margin-left: 5px; 	margin-bottom: 5px; 	margin-top: 5px; 	margin-right:5px; */	text-align: center;	border-left: white dotted 3px}.summery {	height: 80%; 	/*border: thin solid rgba(144,144,144,1.00); 	-webkit-box-shadow: 0px 0px 15px; 	box-shadow: 0px 0px 10px;*/	overflow-y: auto;}#tabCtrl {	border: solid thin white; 	text-align: left; 	min-height: 300px; 	-webkit-box-shadow: 0px 0px 10px;	box-shadow: 0px 0px 10px;	position:relative;	z-index:10;}.tabs {	height:26px; 	width:97%;	padding-bottom:28px;	max-width:1100px;	margin-left:auto;	margin-right:auto;}.tabOn {	width: 30vw; 	max-width: 100px; 	float: left; 	border-top: thin solid rgba(144,144,144,1.00);	border-bottom: thin none rgba(144,144,144,1.00);	/*border-right: thin solid rgba(144,144,144,1.00); 	border-left: thin solid rgba(144,144,144,1.00);*/	cursor: pointer;	position:relative;		-webkit-box-shadow: 0px 10px 10px;	box-shadow: 0px -6px 10px;	background-color:white;	color:gray;	z-index:100;}.tabOff {	width: 30vw; 	max-width: 100px; 	float: left; 	border-top: thin solid rgba(144,144,144,1.00); 	border-bottom: thin none rgba(144,144,144,1.00); 	cursor: pointer;	position:relative;		border-right: thin solid rgba(144,144,144,1.00); 	border-left: thin solid rgba(144,144,144,1.00); 	background-color:hsla(0,0%,100%,0.4);	color:white;	z-index:1;	transition-property:all;	transition-duration:.2s;}.tabOff:hover {	background-color:white;	color: gray;}.footer {	border: solid thin white; 	text-align: left; 	min-height: 100px; 	-webkit-box-shadow: 0px 0px 10px;	box-shadow: 0px 0px 10px;	position:relative;	z-index:10;}input[value=Play] {	text-align: center;	background-color: rgba(9,145,0,1.00);	-webkit-box-shadow: 1px 1px 1px rgba(7,124,0,1.00);	box-shadow: 1px 1px 1px rgba(7,124,0,1.00);	border:0px;	min-width:20%;	min-height:35px;	cursor:pointer;	color:white;}input[value=Play]:hover {	background-color: rgba(7,124,0,1.00);}</style><script src='../../js/jquery.js'></script><script src='../../js/Boxes.js'></script><script>function setup() {	if(window.innerWidth < 638) {		$('#img').css('float', 'none');		$('#img').css('marginLeft', 'auto');		$('#img').css('marginRight', 'auto');		$('#desc').css('float', 'none');		$('#desc').css('marginLeft', 'auto');		$('#desc').css('marginRight', 'auto');	}	else {		$('#img').css('float', 'left');		$('#img').css('marginLeft', '5');		$('#img').css('marginRight', 'auto');		$('#desc').css('float', 'right');		$('#desc').css('marginLeft', 'auto');		$('#desc').css('marginRight', '5');	}	$('#desc').css('background-color', games["
	var pagestr3_1 = "].color);	$('.tabs').css('background-color', 'hsl('  + invHue(games["
	var pagestr3_2 = "].color) + ')');}function activateTab(pageId) {    var tabCtrl = document.getElementById('tabCtrl');    var pageToActivate = document.getElementById('page' + pageId);    for (var i = 0; i < tabCtrl.childNodes.length; i++) {        var node = tabCtrl.childNodes[i];        if (node.nodeType == 1) { /* Element */    	    node.style.display = (node == pageToActivate) ? 'block' : 'none';    	}    }		$('.tabOn').prop('class', 'tabOff');	$('#tab' + pageId).prop('class', 'tabOn');	/*$('.tabtext').css('color', 'white');	setTimeout(function() {		$('#tab' + pageId).css('background-color', 'white');		$('#tab' + pageId + 'text').css('color', 'rgba(147,147,147,1.00)');	}, 100);*/}function hexToHSL(color) {	var r = parseInt(color.substr(1,2), 16); 	var g = parseInt(color.substr(3,2), 16);	var b = parseInt(color.substr(5,2), 16);	r /= 255, g /= 255, b /= 255;    var max = Math.max(r, g, b), min = Math.min(r, g, b);    var h, s, l = (max + min) / 2;    if(max == min){        h = s = 0;    }else{        var d = max - min;        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);        switch(max){            case r: h = (g - b) / d + (g < b ? 6 : 0); break;            case g: h = (b - r) / d + 2; break;            case b: h = (r - g) / d + 4; break;        }        h /= 6;    }	h = h * 360;	s = s * 100;	l = l * 100;    return [h, s, l];}function HSLToColor(hsv) { 	var color = hsv[0] + ', ' + hsv[1] + '%, ' + hsv[2] + '%';		return color;}function invHue(color) { 	color = hexToHSL(color);	var hue = color[0];	hue = hue + 180;	while (hue > 360) {		hue = hue - 360;	}	color[0] = hue;		return HSLToColor(color);}</script></head><body style='min-height: 100%;' onResize='setup()' onLoad='setup()'><div class='top' style=''> <!-- centers two top boxes if page is thin --><div  id='img' style=''> <!-- top left box --><img src='"
	var pagestr4 = "' style='width:100%; height:100%'>	</div><div id='desc' style=''>	<!-- top right box -->	<table  style='height: 99%'width='100%' border='0'>		<tr>			<td style='height: 10%'><h1 style='height: 10%'>"
	var pagestr5 = "</h1></td>		</tr>		<tr>			<td style='height: 80%'>				<div class='summery' style=''>					<p style='width: 80%; margin-left: auto; margin-right: auto; height: 80%;'>					"
	var pagestr6 = "</p>				</div>				<a target='' id='gamelink' href='game/index.html'><input type='button' value='Play'>  </input></a>			</td>		</tr>	</table></div></div><div style='margin-left: auto; margin-right: auto; text-align: center; width: 100%; min-width: 300px; max-width:1110px'>	<!-- bottom box -->	<div class='st-container'>    </div>    	<div class='tabs' style=''> <!--contains tabs-->                	<div id='tab1' class='tabOn' style='' onClick='activateTab(1)'>				<p id='tab1text' class='tabtext' style=''>Description</p>			</div>                    	<div id='tab2' class='tabOff' style='' onClick='activateTab(2)'> 				<p id='tab2text' class='tabtext' style=''>Specifications</p> 			</div>						<div id='tab3' class='tabOff' style='' onClick='activateTab(3)'> 				<p id='tab2text' class='tabtext' style=''>Math</p> 			</div>						<div id='tab4' class='tabOff' style='' onClick='activateTab(4)'> 				<p id='tab2text' class='tabtext' style=''>Credits</p> 			</div>        </div>    <div id='tabCtrl' style=''>      <div id='page1' style='display: block; height: 100%; '><p>"
	var pagestr7 = "</p></div>      <div id='page2' style='display: none; height:100%'><p>"
	var pagestr8 = '</p></div>	  <div id="page3" style="display: none; height:100%"><p>'
	var pagestr9 = '</p></div>	 <div id="page4" style="display: none; height:100%"><p>'
	var pagestr10 = '</p></div>    </div>		<div class="tabs"> </div>	<div class="footer">		<p><a href="../legal/legal.html" target="_parent">Legal Stuff</a> | <a href="../../privacyPolicy.html" target="_parent">Privacy Policy</a> | <a href="../../termsOfUse.html" target="_parent">Terms of Use</a></p>		<p>© 2014 Math I/O LLC. All Rights Reserved</p>	</div></div></body></html>'
	//--------------------------------------------------------------------------------/\
	
	
	function page(i) {
		if(i == "0") {
			i = parseInt(document.getElementsByClassName("open")[0].id.substr(3, 1))
			if(i < 4) 
				i++;
			i = i.toString();
		}
		if(i == 4) {
			var name = document.getElementById("name").value;
			var id = document.getElementById("id").value;
			var img = document.getElementById("image").value;
			var color = document.getElementById("color").value;
			var summery = document.getElementById("desc").value;
			var desc = document.getElementById("summery").value;
			var spec = document.getElementById("spec").value;
			var math = document.getElementById("math").value;
			var credits = document.getElementById("credits").value;
			var folder = document.getElementById("link").value;
			var href = "projects/" + document.getElementById("link").value
			var date = document.getElementById("date").value;
			var beta = document.getElementById("beta").checked;
			
			document.getElementById("boxes").innerHTML = boxstr1 + id + boxstr2 + name + boxstr3 + id + boxstr3_1 + id + boxstr3_2 + summery + boxstr4 + "resources/images/" + img + boxstr5 + color + boxstr6 + href + "/index.html" + boxstr7 + date + boxstr8 + beta + boxstr9;
			//document.getElementById("template").innerHTML = templatestr;
			document.getElementById("linkCopy").innerHTML = href;
			document.getElementById("linkCopy2").innerHTML = href;
			document.getElementById("page").value = pagestr1 + "Math I/O | " + name + pagestr2 + id + pagestr3 + "../../resources/images/" + img + pagestr4 + name + pagestr5 + summery + pagestr6 + desc + pagestr7 + spec  + pagestr8 + math + pagestr9 + credits + pagestr10;
			document.getElementById("gameFile").innerHTML = "4. Put the game as index.html in projects/" + folder + "/game/"
		}
		try {
			document.getElementsByClassName("open")[0].className = "closed";
		} catch(i){}
		document.getElementById("sec" + i).className = "open";
		document.getElementsByClassName("on")[0].className = "off";
		document.getElementById("n" + i).className = "on";
	}