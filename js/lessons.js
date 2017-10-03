// JavaScript Document

//- URL Parameters ------------------------------------------------------------
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function updateUrlParameter(param, paramVal){
	var url = window.location.href;
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";
    if (additionalURL) {
        tempArray = additionalURL.split("&");
        for (i=0; i<tempArray.length; i++){
            if(tempArray[i].split('=')[0] != param){
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }

    var rows_txt = temp + "" + param + "=" + paramVal;
	history.pushState(null, null, baseURL + "?" + newAdditionalURL + rows_txt);
	checkSubject();
    return baseURL + "?" + newAdditionalURL + rows_txt;
}

function removeUrlParameter(param){
	var url = window.location.href;
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";
    if (additionalURL) {
        tempArray = additionalURL.split("&");
        for (i=0; i<tempArray.length; i++){
            if(tempArray[i].split('=')[0] != param){
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }
    }

	history.pushState(null, null, baseURL + "?" + newAdditionalURL);
    return baseURL + "?" + newAdditionalURL;
}

//- Subject -----------------------------------------------------------------
function checkSubject() {
	if(getUrlParameter("subject") != null) {
		var subject = getUrlParameter("subject");
		var lesson = getUrlParameter("lesson");

		$(".container header h1.subject").html($(".sideCard h2." + subject).html());
		$(".sideCard h2").css("color", "#616161");
		$(".sideCard h2." + subject).css("color", "#E91E63");
		
		$(".lessons .lCardComing").remove()
		$(".lessons .lCard").css("display", "none");
		if($(".lessons .lCard.sub" + subject)[0] != null) {
			$(".lessons .lCard.sub" + subject).css("display", "block");
			$(".ng-scope").css("min-height", $(".lessons").height() + 110);
		}
		else
			$(".lessons").append("<h1 class='lCardComing'>Coming Soon...</h1>");
	}
	else {
		updateUrlParameter("subject", $($(".sideCard h2")[0]).prop("class"));
	}
}

var app = angular.module('myApp', []);

//- Lesson -----------------------------------------------------------------
app.controller('userCtrl', ['$scope',function($scope) {
  $scope.age = 24;
}]);

function loadLesson(title) {
	$(".lessonTrans .lContent").load("lessons/" + title + ".html", function() {MathJax.Hub.Queue(["Typeset",MathJax.Hub])});
	$(".lessonTrans .lGames").load("lessons/" + title + "_games.html", function() {
		$(".lessonTrans .lGames").prepend("<h1>Games</h1>"); 
		MathJax.Hub.Queue(["Typeset",MathJax.Hub])
	});
}


function findLesson(lesson) {
	var subject = getUrlParameter("subject");
	return $(".lCard.sub" + subject + "#" + lesson);
}

function checkLesson() {
	if(getUrlParameter("lesson") != null) {
		var lesson = getUrlParameter("lesson");
		if(findLesson(lesson)[0] != null)
			animateOpening(findLesson(lesson)[0]);
		else {
			removeUrlParameter("lesson");
			if($(".lessonTrans").height() != 0)
				animateClosing();
		}
	}
	else if($(".lessonTrans").height() != 0)
		animateClosing();
		
}

function animateClosing() {
	removeUrlParameter("lesson");
	$(".lessonTrans").css("height", ($(".container").height() - 100 + 21) + "px").css("min-height", "auto");
	$(".lessonTrans").animate({
		height: '0px',
		top: '100%'	
	}, 400, "easeInCubic");
	$(".lessonTrans").css("box-shadow", "0px 3px 30px #858585");
	$($(".container header h1")[1]).animate({
		left: '0px',
		opacity: '0'
	}, 500);
	
	$($(".container header h1")[0]).animate({
		left: '330px',
		opacity: '1'
	}, 500);
	$(".container header img").animate({
		left: '-100px',
		opacity: '0'
	}, 500);
	setTimeout(function() {
		$(".container header .back").remove();
		$(".container header img").remove(); 
		$(".lessonTrans .lContent").html("");
		$(".lessonTrans .lGames").html("");
	}, 500);
}

function animateOpening(lesson) {
	var loc = $(lesson).offset();
	loc.top-= $(".container").offset().top;
	loc.left-= $(".container").offset().left;
	var size = {
		width: $(lesson).width() + 10,
		height: $(lesson).height() + 10
	}
	var maxHeight = ($(".container").height() - 100 + 21) + "px";
	var title = {
		full: $(lesson).children("h3").html(),
		id: lesson.id
	}
	
	//Open box
	$('.lessonTrans').attr('style', '');
	$(".lessonTrans").css("opacity", "0");
	$(".lessonTrans").css("top", loc.top).css("left", loc.left).width(size.width).height(size.height);
	$(".lessonTrans").animate({opacity: '1'}, 200);
	$(".lessonTrans").animate({
		width: '100%',
		height: maxHeight,
		top: '100px',
		left: '0px'
	}, 900, "easeInOutCubic");
	setTimeout(function() {$(".lessonTrans").css("box-shadow", "0px 0px 0px #858585");}, 800);
	setTimeout(function() {
		$(".lessonTrans").css("height", "auto").css("min-height", "calc(100% - 100px)");
		$(".lessonTrans .lContent").css("min-height", $(".lessonTrans").height());
		loadLesson(title.id);
	}, 1500);
	
	//Title Bar
	setTimeout(function() {
		$(".container header").append("<h1 class='back' style='left:0px; opacity:0'>" + title.full + "</h1>");
		$($(".container header h1")[1]).animate({
			left: '330px',
			opacity: '1'
		}, 500);
		$($(".container header h1")[0]).animate({
			left: '660px',
			opacity: '0'
		}, 500);
	}, 400)
	//Back(appear)
	setTimeout(function() {
		$(".container header").append("<img src='resources/materialIcons/ic_arrow_back_white_18px.svg' style='opacity:0; left:-100px;'>")
		$(".container header img").animate({
			left: '50px',
			opacity: '1'
		}, 500);
		$(".container header img").on("click", function() {
			animateClosing();
		})
	}, 400);
}


//- Events ---------------------------------------------------------------------------
window.onpopstate = function() {
	checkSubject();
	checkLesson();
}
window.onload = function() {
	checkSubject();
	checkLesson();

	$(".sideCard h2").on("click", function() {
		updateUrlParameter("subject", $(this).prop("class"));
	});
	
	$(".lCard").on("click", function() {
		updateUrlParameter("lesson", $(this).prop("id"));
		animateOpening(this);
	});
	
	$(window).resize(function () {
		$(".lessonTrans .lContent").css("min-height", $(".lessonTrans").height());
		$(".ng-scope").css("min-height", $(".lessons").height() + 110);
	});
}