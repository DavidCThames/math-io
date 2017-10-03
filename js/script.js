// JavaScript Document
var panning

function pan(x, y) {
	var x0 = window.scrollX;
	var y0 = window.scrollY;
	
	panning = setInterval(function() {
	
		//find new x cord
		if(Math.abs(x0 - x) < 10)
			x0 = x
		//move
		else
			x0 += (x - x0) * .05;
			
		//find new y cord
		if(Math.abs(y0 - y) < 10)
			y0 = y
		else
			y0 += (y - y0) * .05;
			
		scroll(y0, y0)
		
		//if at the end stop
		if(x0 == x && y0 == y)
			window.clearInterval(panning);
	}, 10);
}

function link(loc) {
	window.location.href=loc;
}
//Welcome Slide
function smallNav(name) {
	window.location = name.options[name.selectedIndex].value
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

function miniNav() {
	if($(".container").width() < 1000) {
		$(".miniNav").css("display", "block");
		$(".topbar nav").css("display", "none");
	}
	else {
		$(".miniNav").css("display", "none");
		$(".topbar nav").css("display", "block");
	}
}

function options() {
	if($(".status").css("left") == "0px") {
		$(".status").css("left", "-360px");
		$(".optionsClose").css("left", "-360px");
		$(".status").css("transition-timing-function", "ease-in");
		$(".optionsClose").css("transition-timing-function", "ease-in");
		$("#bar1").css("transform", "rotate(90deg)")
	}
	else {
		/*if(a == 0) 
			$(".optionsClose").css("top", 55);
		else
			$(".optionsClose").css("top", 0);*/
		$(".status").css("left", "0px");
		$(".optionsClose").css("left", "0px");
		$(".status").css("transition-timing-function", "ease-out");
		$(".optionsClose").css("transition-timing-function", "ease-out");
	}
}

jQuery.expr[':'].focus = function( elem ) {
  return elem === document.activeElement && ( elem.type || elem.href );
};

function searchIco() {
	$(".options2.searchHome").css("display", "block");
	$(".searchBox").css("display", "block");
	setTimeout(function() {
		$(".options2.searchHome").css("opacity", "1");
		$(".searchBox").css("opacity", "1");
		$(".searchBox").css("width", "400px");
	}, 100);
	$(".searchBox").focus();
	$(".searchBox").focusout(function(e) {
		setTimeout(function() {
			if(!$(".searchBox").is(":focus")) {
			$(".options2.searchHome").css("opacity", "0");
			$(".searchBox").css("opacity", "0");
			$(".searchBox").css("width", "50px");
			setTimeout(function() {
			$(".options2.searchHome").css("display", "none");
			$(".searchBox").css("display", "none");
			$(".searchBox").off();
			}, 1000);
			}
		}, 500);
	});
	
}

function homeSearch(e) {
	if (e.keyCode == 13 || e === '') {
		document.location = "games.html#" + $(".searchBox").val();
     }
}

function rmcouch() {
	$("div > div > center > a").html("")
}

addLoadEvent(rmcouch);
addLoadEvent(miniNav);
addLoadEvent(function() {
	$(window).resize(miniNav);
});
//check if mobile
/*(function (a, b) {
    if(window.location.hash.substring(1).toLowerCase() == "desktop" ) {
    }
    else {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) window.location = b
        }})(navigator.userAgent || navigator.vendor || window.opera, 'http://math-io.com/mobile.html');*/