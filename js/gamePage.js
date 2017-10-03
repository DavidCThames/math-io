// JavaScript Document
function SetUp() {
	var id;
	if(window.location.hash)
		id = window.location.hash.split("#")[1];
	else id = 1;
	GameID = id;
	//.id, .title, .shortDesc, .longDesc, .spec, .math, .credits, .gamelink, .date, var color
	//title, about, img, color, href, date,
	var color = games[id].color;
	$(".title").html(games[id].title);
	$(".img").attr("src", games[id].href + "image.png")
	$(".shortDesc").html(games[id].shortDesc);
	$(".longDesc").html(games[id].longDesc);
	$(".spec").html(games[id].spec);
	$(".math").html(games[id].math);
	$(".credits").html(games[id].credits);
	$(".date").html(games[id].date);
	$("#gamelink").attr("href", games[id].href + "game/index.html");
	$("#gamelinkwindow").attr("href", games[id].href + "game/index.html");
	setup();
	
}


function setup() {
	if(window.innerWidth < 638) {
		$("#img").css("float", "none");
		$("#img").css("marginLeft", "auto");
		$("#img").css("marginRight", "auto");
		$("#desc").css("float", "none");
		$("#desc").css("marginLeft", "auto");
		$("#desc").css("marginRight", "auto");
	}
	else {
		$("#img").css("float", "left");
		$("#img").css("marginLeft", "5");
		$("#img").css("marginRight", "auto");
		$("#desc").css("float", "right");
		$("#desc").css("marginLeft", "auto");
		$("#desc").css("marginRight", "5");
	}
	$("#desc").css("background-color", games[GameID].color);
	$(".tabs").css("background-color", "hsl("  + invHue(games[GameID].color) + ")");
}

function activateTab(pageId) {
    var tabCtrl = document.getElementById('tabCtrl');
    var pageToActivate = document.getElementById("page" + pageId);
    for (var i = 0; i < tabCtrl.childNodes.length; i++) {
        var node = tabCtrl.childNodes[i];
        if (node.nodeType == 1) { /* Element */
    	    node.style.display = (node == pageToActivate) ? 'block' : 'none';
    	}
    }
	
	$(".tabOn").prop("class", "tabOff");
	$("#tab" + pageId).prop("class", "tabOn");
	/*$(".tabtext").css("color", "white");
	setTimeout(function() {
		$("#tab" + pageId).css("background-color", "white");
		$("#tab" + pageId + "text").css("color", "rgba(147,147,147,1.00)");
	}, 100);*/
}

function hexToHSL(color) { //converts hex color to HSV color
	//Convert hex  to decimal
	var r = parseInt(color.substr(1,2), 16); 
	var g = parseInt(color.substr(3,2), 16);
	var b = parseInt(color.substr(5,2), 16);
	//Calculate hue
	r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0;
    }else{
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }
	h = h * 360;
	s = s * 100;
	l = l * 100;

    return [h, s, l];
}

function HSLToColor(hsv) { //convert HSV array to color
	var color = hsv[0] + ", " + hsv[1] + "%, " + hsv[2] + "%";
	
	return color;
}

function invHue(color) { //inverts hue of hex color
	color = hexToHSL(color);
	var hue = color[0]
	hue = hue + 180;
	while (hue > 360) {
		hue = hue - 360;
	}
	color[0] = hue;
	
	return HSLToColor(color);
}