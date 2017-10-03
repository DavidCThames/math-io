// JavaScript Document
//For all pages except home

/* 
    Took out jQuery so i don't have to load that file -Brandon :)
*/

window.onscroll = function () {
    if (window.pageYOffset >= 75) {
        //		$(".topbar").css("top", "-150px");
		$(".topbar").css("top", "-150px")
		$(".topbar").css("opacity", "0")
		$(".topbar").css("transition-timing-function", "ease-in");
		document.getElementsByClassName("optionsClose")[0].style.position = "fixed"
		document.getElementsByClassName("optionsClose")[0].style.top = "0px"
    } else {
        //        $(".topbar").css("top", "0px");
		$(".topbar").css("top", "0px")
		$(".topbar").css("transition-timing-function", "ease-out");
		$(".topbar").css("opacity", "1")
		document.getElementsByClassName("optionsClose")[0].style.position = "absolute"
		document.getElementsByClassName("optionsClose")[0].style.top = "55px"
    }
}

addLoadEvent(function() {
	$(".smallNav2 a.first").html($("#title").html());
	
})