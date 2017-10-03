window.onresize = startup;
function startup() {
	if (window.innerWidth > "1080") {
		document.getElementById("tabCenter").style.top = "123px";
		document.getElementById("body").style.backgroundSize = "auto 810px"
	}
	else {
		document.getElementById("tabCenter").style.top = "11vw";
		document.getElementById("body").style.backgroundSize = "auto 75vw";
	}
}

function link(a) {
	window.location.href = "../../" + a  + ".html";
}

function tabMouse(a) {
	document.getElementById(a).style.backgroundImage = "url(../../resources/images/selection.png)"
}

function tabOutMouse(a) {
	document.getElementById(a).style.backgroundImage = ""
}

function autoResize(id){
    var newheight;
    var newwidth;

    if(document.getElementById){
        newheight=document.getElementById(id).contentWindow.document .body.scrollHeight;
        newwidth=document.getElementById(id).contentWindow.document .body.scrollWidth;
    }

    document.getElementById(id).height= (newheight) + "px";
    document.getElementById(id).width= (newwidth) + "px";
}