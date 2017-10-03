// JavaScript Document

function setBoxes() {
	if (notif.use == true) {
		$(".container > .num > figure > img").css("width", "100%");
		$(".container > .num > figure > img").prop("src", notif.img);
		$(".container > .num > figure").css("height", "35vw");
		$(".container > .num > figure > img").prop("alt", notif.alt);
	}
	else {
		$(".container > .num > figure").css("height", "0px");
		console.log('rm');
	}
    for (a = 3; a < games.length + 2; a++) {
        $(".container > .num > div:nth-child(" + a + ") > div > a > .slide > h2").html(games[a - 2].title);
        $(".container > .num > div:nth-child(" + a + ") > div > a > .slide > h3").html(games[a - 2].about);
        $(".container > .num > div:nth-child(" + a + ") > div > a > img.bkgrnd").attr("data-original", games[a - 2].img);
        $(".container > .num > div:nth-child(" + a + ") > div > a").prop("href", "#" + a + "," + games[a - 2].href);
        $(".container > .num > div:nth-child(" + a + ") > div > a > .color").css("background-color", games[a - 2].color);
		$(".container > .num > div:nth-child(" + a + ") > div > a > .curtain > .curColor").css("background-color", games[a - 2].color);
        if(games[a-2].beta)
            $(".container > .num > div:nth-child(" + a + ") > div").append("<img class='beta' src='resources/images/beta.png'>");
        //append <img class='beta' src='resources/images/beta.png'>
    }
    //featured box
	var a = featured.game
	$(".container > .num > .featured > h1").html(featured.header);
    $(".container > .num > .featured > div > a > .slide > h2").html(games[a].title);
    $(".container > .num > .featured > div > a > .slide > h3").html(games[a].about);
    $(".container > .num > .featured > div > a > img").attr("data-original", games[a].img);
	$(".container > .num > .featured > div > a").prop("href", "#" + a + "," + games[a].href);
    $(".container > .num > .featured > div > a > .color").css("background-color", games[a].color);
	$(".container > .num > .featured > div > a > .curtain > .curColor").css("background-color", games[a].color);
	setTimeout(function() {$("img.bkgrnd").lazyload({effect : "fadeIn"});}, 100);
    //resize
}

var boxPerRow = 4;
//var doneloading = false
function sizing() {
    var bwidth; //box width
    var bpx; //box pixels width
	var bwend; //ending string of box with in css
    setTimeout(function () {
        //flexable box width
        var cw = parseInt($(".container").width(), 10);
        if ((cw / 250) >= 4) {
            $(".container > .num > div").css("width", "25%");
            bwend = "%";
            bwidth = 25;
			boxPerRow = 4;
        } else {
            $(".container > .num > div").css("width", cw / Math.floor(cw / 250) + "px");
            bwend = "px";
            bwidth = cw / Math.floor(cw / 250);
			boxPerRow = (100 / bwidth);
        }
        $(".container > .num > div").css("height", $(".container > .num > div .box img.bkgrnd").css("height"));
    }, 0);
    setTimeout(function () {
        $(".featured").css("width", bwidth * 2 + bwend);
        $(".featured").css("height", $(".container > .num > div").height() * 2 + "px");
		//doneloading = true;
    }, 0);

}

function boxSelect(a) {
	return ".container > .num > :nth-child(" + a  + ")"
}

function gameFull() {
	if($(".gameWindow").width() < $("body").width()) {
		$(".gameBox").css("transition", "all 1s");
		$(".gameWindow").css("height", "100vh");
		$(".gameWindow").css("width", $("body").width());
		$(".gameWindow").css("left", 0);
		$(".gameWindow, .gameX").css("top", 0);
		$(".gameX, .gameFull").css("right", 0);
		$(".gameFull").css("bottom", 0);
	}
	else {
		$(".gameBox").css("transition", "all 1s");
		$(".gameWindow").css("height", "80%");
		$(".gameWindow").css("width", "1100px");
		$(".gameWindow").css("left", "calc(50% - 550px)");
		$(".gameWindow").css("top", "10%");
		$(".gameWindow").css("left", "calc(50% - 550px)");
		$(".gameWindow, .gameX").css("top", "10%");
		$(".gameX, .gameFull").css("right", "calc(50% - 550px)");
		$(".gameFull").css("bottom", "10%");
	}
}

function checkGame() {
	if(window.location.hash) {
		var a = window.location.hash.split(","); //a[0] = box number, a[1] = link
		a[0] = a[0].substr(1, a[0].length - 1);
		console.log("Box: " + a[0]); 
		//animation {
		if($(".gameAnim").length == 0) {
			//create animation box
			$("body").append("<div class='gameAnim'></div>");
			$(".gameAnim").css("position", "absolute");
		}
		//original position
		setTimeout(function() {
		$(".gameAnim").css("transition", "all 0s");
			var boxLoc = $(boxSelect(a[0])).offset();
			$(".gameAnim").css("left", boxLoc.left);
			$(".gameAnim").css("top", boxLoc.top);

			$(".gameAnim").css("height", $(boxSelect(a[0])).css("height"));
			$(".gameAnim").css("width",$(boxSelect(a[0])).css("width"));
			$(".gameAnim").css("background-color",$(boxSelect(a[0]) + " .color").css("background-color"));
			setTimeout(function() {
				$(".gameAnim").css("display", "block");
				$(".gameAnim").css("transition", "all .05s");
				$(".gameAnim").css("opacity", 1)
				$(".gamebg").css("opacity", 0)
				$(".gamebg").css("height", "100%");
				$(".gamebg").css("display", "block");
				//step 2
				setTimeout(function() {
					$(".gameAnim, .gamebg").css("transition", "all .5s");
					$(".gamebg").css("opacity", 1);
					$(".gameAnim").css("width", "1100px")
					$(".gameAnim").css("height", "80%")
					$(".gameAnim").css("left", "calc(50% - 550px)")
					$(".gameAnim").css("top", (window.innerHeight / 10) + window.scrollY)
					setTimeout(function() {$(".gameAnim").css("display", "none");}, 1500)
				}, 100);
			}, 100);
		}, 100);
		
		setTimeout(function() {
		$(".gameBox").css("opacity", 0);
			$(".gameWindow").attr("src", a[1])
			$(".gameWindow").css("height", "80%");
			$(".gameX, .gameFull").css("height", "50px");
			$(".gameBox").css("display", "block");
		$(".gameBox").css("transition", "all .5s");
		setTimeout(function() {$(".gameBox").css("opacity", 1)}, 100);
		}, 1000);
	}
	else {
		$(".gameBox, .gamebg").css("transition", "all .1s");
		$(".gameBox, .gamebg").css("opacity", "0");
		setTimeout(function() {
			$(".gameBox, .gamebg").css("transition", "all 0s");
			$(".gameBox, .gamebg").css("height", "0%");
			$(".gameBox, .gamebg").css("display", "none");
		}, 100);
		
		//un-full screen
		$(".gameBox").css("transition", "all 1s");
		$(".gameWindow").css("height", "80%");
		$(".gameWindow").css("width", "1100px");
		$(".gameWindow").css("left", "calc(50% - 550px)");
		$(".gameWindow").css("top", "10%");
		$(".gameWindow").css("left", "calc(50% - 550px)");
		$(".gameWindow, .gameX").css("top", "10%");
		$(".gameX, .gameFull").css("right", "calc(50% - 550px)");
		$(".gameFull").css("bottom", "10%");
	}
}

window.onhashchange = checkGame;

window.onresize = sizing;

window.onload = function () {
	setTimeout("loadingFail()", 5000);
    $(".container > .num > div").append("<div class='box'><a href='#'><div class='curtain'><div class='curColor'></div></div></img><img onload='buildwait(this)' class='bkgrnd' data-original='resources/images/grid3.png' src='resources/images/placeholder.jpg'></img><div class='color'></div><div class='slide'><h2>Nothing Here Yet</h2><h3>Coming soon...</h3><section>Play</section></input></div></a> </div>");
    //featured
    $(".featured").append("<div class='box'><a href='#'><div class='curtain'><div class='curColor'></div></div><img class='bkgrnd' onload='buildwait(this)' src='resources/images/placeholder.jpg'></img><div class='color'></div><div class='slide'><h2>Nothing Here Yet</h2><h3>Coming soon...</h3><section>Play</section></input></div></a> </div>");
	
	
	var q = 0;
	var image = new Array
	$(".container > .num > .featured > div > a > .curtain").css("animation", "swipeRight 0s cubic-bezier(0.6,0,0.4,1) forwards")
	$(".container > .num > .featured > div > a > .curtain").css("transition", "none");
	$(".container > .num > .featured > div > a > .curtain").css("box-shadow", "0px 0px 0px black");
	for(a = 0; a <= 4; a++) {
		image[a] = new Image()
		image[a].src = games[a].img
		$(".container > .num > div:nth-child(" + (a + 2) + ") > div > a > .curtain").css("animation", "swipeRight 0s cubic-bezier(0.6,0,0.4,1) forwards")
		$(".container > .num > div:nth-child(" + (a + 2) + ") > div > a > .curtain").css("transition", "none");
		$(".container > .num > div:nth-child(" + (a + 2) + ") > div > a > .curtain").css("box-shadow", "0px 0px 0px black");
	}
		
		var testimg = setInterval(function() {
			if(q == 1) {
				console.log("not cached");
				$(".loading video").get(0).play();
				$(".loading  video").css("opacity", "1");
				$(".loading  p").css("opacity", "1");
			}
			else 
				console.log("cached");
			var compimg = 0;
			for(a = 1; a <= 4; a++) {
				if(image[a].complete)
					compimg++;
			}
			if(compimg >= 4) {
				lScrnHide();
				clearInterval(testimg);
			}
			q++
		}, 100);
		
	setBoxes();
	
}

var lazyre;
var boxnum = 0;
var toprow = 0;
var test = new Array;
var testn = 0;
function buildwait(obj) {
	sizing()
	if($(obj).attr("id") == "1") {
		$(obj).parent("a").children(".curtain").addClass("shown");
		var a = $(".shown");
		setTimeout(function() {a.css("display", "none")},2000);
	}
	else {
		$(obj).attr("id", "1");
	}
	/*if($(".loading").css("opacity") == 1) {
	window.scroll(0, 0)
	boxnum++;
	test[testn] = obj;
	testn++
	var s1 = ".container > .num > div:nth-child("
	var s2 = ") > div > a > img.bkgrnd"
	if($(obj)[0] == $(s1 + "3" + s2)[0] || $(obj)[0] == $(s1 + "4" + s2)[0] || $(obj)[0] == $(s1 + "5" + s2)[0] || $(obj)[0] == $(s1 + "6" + s2)[0])
		toprow++
	if(boxnum == $(".container").children("div").length) {
		setBoxes();
		lazyre = setInterval(function(){lazy()}, 100)
	}
	
	if((parseInt($(".container").width(), 10)/250) > 4) {
	if(boxnum >= $(".container").children("div").length + 4 && toprow >= 8) {
		lScrnHide();
		boxnum = "-1000";
	}
	}
	else if(boxnum >= $(".container").children("div").length + (parseInt((($(".container").width()/250) - 2), 10) * 2) && toprow >= (parseInt((($(".container").width()/250) - 2), 10) * 4)){
		lScrnHide();
		boxnum = "-1000";
	}
	}*/
}

/*function lazy() {
	var gamenum = games.length + 1;
	if(doneloading ) {
		clearInterval(lazyre);
		$("img.bkgrnd").lazyload({effect : "fadeIn"});
	}
}*/

function loadingFail() {
	if($(".loading").css("opacity") != 0)
		$(".loading").append(
			"<div class='LoadingFail'><p>This is taking longer than usual. Click here to manualy close loading screen.</p></br></br></br><input type='button' value='Hide loading screen' onClick='lScrnHide()'></div>"
		);
}

function lScrnHide(){
	$(".loading").css("opacity", 0);
	$(".num").css("opacity", 1);
	WelcomeSlide();
	$(".loading").css("pointer-events", "none"); $(".loading").remove();
	setTimeout(function() { 
		$(".loading").css("pointer-events", "none"); $(".loading").remove();
		checkGame();
	}, 2000);
	window.scroll(0, 1000)
	setTimeout(window.scroll(0, 0), 100);
	
}

function is_cached(src) {
    var image = new Image();
    image.src = src;

    return image.complete;
}

function WelcomeSlide() {
	console.log("hi");
	$(".welcomeSlide").css("left", "25px");
	setTimeout(function() {
		
		$(".welcomeSlide").css("opacity", "1");
	}, 1000)
}