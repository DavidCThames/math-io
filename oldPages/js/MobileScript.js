window.onload = function () {
    /*if(localStorage.getItem("scrollTip") != "false") {
				document.getElementById("scrollTip").style.opacity = 1;
			}*/
    setTimeout(function () {
        $(".loading").css("opacity", 0);
        $(".loading").css("pointer-events", "none");
    }, 600)

}
var waiting = false;
/*$('html').mousewheel(function (event) {
    if (waiting != true) {
        if (event.deltaY <= -1) {
            waiting = true;
            console.log(event.deltaY);
            for (var a = 1; a <= 5; a++) {
                var oldr = "st-control-" + a
                var b = a + 1
                var newr = "st-control-" + b
                console.log(oldr);
                if ($('#' + oldr).is(':checked')) {
                    console.log(a);
                    document.getElementById(oldr).checked = false;
                    if (a < 5)
                        document.getElementById(newr).checked = true;
                    else
                        document.getElementById("st-control-1").checked = true;
                    setTimeout(function () {
                        waiting = false
                    }, 500);
                    return false;
                }
            }
        }
        if (event.deltaY >= 1) {
            waiting = true;
            console.log(event.deltaY);
            for (var a = 1; a <= 5; a++) {
                var oldr = "st-control-" + a
                var b = a - 1
                var newr = "st-control-" + b
                console.log(oldr);
                if ($('#' + oldr).is(':checked')) {
                    console.log(a);
                    document.getElementById(oldr).checked = false;
                    if (a > 1)
                        document.getElementById(newr).checked = true;
                    else
                        document.getElementById("st-control-5").checked = true;
                    setTimeout(function () {
                        waiting = false
                    }, 500);
                    return false;
                }
            }
        }
    }
});
$(document).keydown(function (event) {
    if (waiting != true) {
        if (event.keyCode == 40 || event.keyCode == 39) {
            waiting = true;
            for (var a = 1; a <= 5; a++) {
                var oldr = "st-control-" + a
                var b = a + 1
                var newr = "st-control-" + b
                if ($('#' + oldr).is(':checked')) {
                    document.getElementById(oldr).checked = false;
                    if (a < 5)
                        document.getElementById(newr).checked = true;
                    else
                        document.getElementById("st-control-1").checked = true;
                    setTimeout(function () {
                        waiting = false
                    }, 500);
                    return false;
                }
            }
        } else if (event.keyCode == 38 || event.keyCode == 37) {
            waiting = true;
            for (var a = 1; a <= 5; a++) {
                var oldr = "st-control-" + a
                var b = a - 1
                var newr = "st-control-" + b
                if ($('#' + oldr).is(':checked')) {
                    document.getElementById(oldr).checked = false;
                    if (a > 1)
                        document.getElementById(newr).checked = true;
                    else
                        document.getElementById("st-control-5").checked = true;
                    setTimeout(function () {
                        waiting = false
                    }, 500);
                    return false;
                }
            }
        }
    }
});*/