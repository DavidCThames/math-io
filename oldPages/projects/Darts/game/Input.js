Game.timed = false;
Game.seconds;
Game.minutes;
Game.totalTime;
Game.timeRun;
Game.Start = function () {
    $('.input, #myCanvas, #End, #Menu, #timeInput, #timer, #exit, .window').hide();
    if (navigator.userAgent.indexOf("MSIE 8.0") != -1) {
        document.getElementById("NotSuported").hidden = false;
    } else {
        document.getElementById("NotSuported").hidden = true;
        window.addEventListener("click", Game.Responsive.start, true);
        Game.startEvents();
    }
};
Game.startEvents = function () {
    $('#Menu').show();
    $(".topic").after("<div id='choices' class='choices'>\
                        <div width='100px' height='25px' ; style='border:solid red'>3 times</div>\
                        <div width='100px' height='25px' ; style='border:solid blue'>9 times</div>\
                        <div width='100px' height='25px' style='border:solid green' class='timedbtn'>Timed</div>\
                    </div>");
    //Remove timed feature from tutorial level
    $('.choices').children()[2].remove()
    $(".timedbtn").after(Game.messages[0]);
    $(".topic").click(function () {
        $(this).next("#choices").show()
    });

    //Setting up hovers for menu comtrols
    $(".topic").hover(function () {},
        function () {
            var $a = $(this)
            setTimeout(function () {
                if ($a.next('.choices:hover').length == 0) {
                    $a.next('.choices').hide()
                }
            }, 100)
        }
    );
    $(".choices").hover(function () {},
        function () {
            $(this).hide()
        }
    );
    $(".timeInput").hover(function () {},
        function () {
            $(this).hide()
        }

    )
    $(".timedbtn").hover(
        function () {
            $(this).next(".timeInput").show()
        },
        function () {
            var $a = $(this)
            setTimeout(function () {
                if ($a.next('.timeInput:hover').length == 0) {
                    $a.next('.timeInput').hide();
                }
            }, 100)

        }
    )
    //-------------------------------

    $('.topic').on('click', function (event) {
        Game.Type = event.target.id.substring(0, event.target.id.length - 5);
        $("li").toggleClass('clicked', false);
        $(event.target).toggleClass('clicked');
        if (Game.Type == "LinearTransformations" || Game.Type == "QuadTransformations") {
            $(".choices > div:nth-child(1)").text("4 times");
            $(".choices > div:nth-child(2)").text("12 times");
        } else {
            $(".choices > div:nth-child(1)").text("3 times");
            $(".choices > div:nth-child(2)").text("9 times");
        }
    });
    $(".choices > div:nth-child(1)").on('click', function () {
        Game.GameStart((Game.Type == "LinearTransformations" || Game.Type == "QuadTransformations") ? 4 : 3)
    });
    $(".choices > div:nth-child(2)").on('click', function () {
        Game.GameStart((Game.Type == "LinearTransformations" || Game.Type == "QuadTransformations") ? 12 : 9)
    });

    $('#timeInput > div:nth-child(1)').on('click', function () {
        Game.timed = true;
        Game.totalTime = 120;
        Game.GameStart(1);
    })
    $('#timeInput > div:nth-child(2)').on('click', function () {
        Game.timed = true;
        Game.totalTime = 60;
        Game.GameStart(1);
    })
    $('#timeInput > div:nth-child(3)').on('click', function () {
        Game.timed = true;
        Game.totalTime = 30;
        Game.GameStart(1);
    })
};
Game.GameStart = function (times) {
    $(".topic, .choices > div").off();
    $('.choices, .timeInput > div').off().hide()
    var ntime = times;
    if (Game.timed) {
        Game.seconds = (Game.totalTime < 60) ? 30 : 0;
        Game.minutes = (Game.totalTime > 30) ? Game.totalTime / 60 : 0;
        $('#secOut').text((Game.seconds < 10) ? ("0" + String(Game.seconds)) : String(Game.seconds));
        $('#minOut').text(String(Game.minutes));
        $("#timer").show();
        $("#Score").hide();
        Game.timeRun = window.setInterval(Game.RunTimer, 1000);
    } else {
        $('#Score').show();
    }
    $('#Menu').hide();
    $('#myCanvas, #End, #exit').show();
    Game.PlayLevel(ntime);

};

Game.RunTimer = function () {
    if (arguments[0] == true) {
        window.clearInterval(Game.timeRun);
    } else if (arguments[0] == false) {
        Game.timeRun = window.setInterval(Game.RunTimer, 1000);
    } else {
        Game.totalTime -= 1;
        Game.seconds = Game.totalTime - Math.floor(Game.totalTime / 60) * 60;
        Game.minutes = Math.floor(Game.totalTime / 60);
        $('#secOut').text((Game.seconds < 10) ? ("0" + String(Game.seconds)) : String(Game.seconds));
        $('#minOut').text(String(Game.minutes));
        if (Game.totalTime === 0) {
            Game.totalTime = undefined;
            window.clearInterval(Game.timeRun);
            Game.Reset(true);
        }
    }
};
Game.PreventAlpha = function (e) {
    if (e.keyCode == 13) {
        $('.Submit').click();
    }
    var acceptChars = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', '-', '.'];
    var acceptCodes = [0, 13, 8, 37, 38, 39, 40, 33, 34];
    if (e.shiftKey) {
        e.preventDefault();
    } else {
        if (acceptChars.indexOf(String.fromCharCode(e.which)) === -1 && acceptCodes.indexOf(e.which) === -1) {
            e.preventDefault();
        }
    }
};
Game.Exit = function () {
    Game.lineDrawn = false;
    if (Game.Type == "QuadTransformations") {
        divType = "StandardQuad";
    } else if (Game.Type == "LinearTransformations") {
        divType = "Linear";
    } else {
        divType = Game.Type;
    }
    if (arguments.length === 0) {
        Game.RunTimer(true);
        $('#End').after(Game.messages[1]);
        $('#quit').on('click', function () {
            Game.Exit(true);
        })
        $('#resume').on('click', function () {
            Game.Exit(false);
        })
        $('#myCanvas').hide();
        if (Game.Type == "Tutorial" && Game.SubLevel == 1) {
            $(Game.tutorialMsg[tcount - 1].highlight).css("outline", "none");
            $('#tdiv').hide()
            tcount = 0;

        }
        $('#' + divType).hide();
    } else {
        if (arguments[0]) {
            $('.msg').remove();
            $('#exit').off();
            $('.Submit').off();
            Game.PlayLevel(0);
        }
        if (!arguments[0]) {
            $('.msg').remove();
            Game.RunTimer(false);
            $('#myCanvas').show();
            $('#' + divType).show();
        }
        $('#quit').off();
        $('#resume').off();
    }
};
Game.Check = function () {
    $('.Submit, input, #exit').off()
    var result;
    Game.lineDrawn = true;
    switch (Game.Type) {
    case "Tutorial":
        Game.TutorialEquation(Game.LastX);
        result = (Game.TutorialEquation(Game.LastX) == Game.LastY) ? true : false;
        break;
    case "Coordinate":
        result = (Game.Fix($('#X0').val()) == Game.LastX && Game.Fix($('#Y0').val()) == Game.LastY) ? true : false;
        break;
    case "Linear":
        Game.LinearEquation(Game.LastX);
        result = (Game.LinearEquation(Game.LastX) == Game.LastY && Game.LinearEquation(Game.LastX2) == Game.LastY2) ? true : false;
        break;
    case "SimpleQuad":
        Game.SimpleQuadEquation(Game.LastX);
        setTimeout(function () {
            var Placeholder = "";
            delete Placeholder;
        }, 100)
        result = (Game.SimpleQuadEquation(Game.LastX) == Game.LastY) ? true : false;
        break;
    case "StandardQuad":
        Game.StandardQuadEquation(Game.LastX);
        setTimeout(function () {
            var Placeholder = "";
            delete Placeholder;
        }, 100)
        result = (Game.StandardQuadEquation(Game.LastX) == Game.LastY && Game.StandardQuadEquation(Game.LastX2) == Game.LastY2) ? true : false;
        break;
    case "GeneralQuad":
        Game.GenearalQuadEquation(Game.LastX);
        setTimeout(function () {
            var Placeholder = "";
            delete Placeholder;
        }, 100)
        result = (Game.GenearalQuadEquation(Game.LastX) == Game.LastY && Game.GenearalQuadEquation(Game.LastX2) == Game.LastY2) ? true : false;
        break;
    case "ZeroQuad":
        Game.ZeroQuadEquation(Game.LastX);
        setTimeout(function () {
            var Placeholder = "";
            delete Placeholder;
        }, 100)
        result = (Game.ZeroQuadEquation(Game.LastX) == Game.LastY && Game.ZeroQuadEquation(Game.LastX2) == Game.LastY2) ? true : false;
        break;
        //For transformations checks if transformations values are correct
    case "LinearTransformations":
        switch (Game.SubLevel % 4) {
        case 1:
            result = (Game.Fix($('#b2').val()) == Game.LinearTransformations.VerticalShift) ? true : false;
            break;
        case 2:
            result = (Game.Fix($('#h').val()) == Game.LinearTransformations.HorizontalShift) ? true : false;
            break;
        case 3:
        case 0:
            Game.tLinearEquation(Game.LastX3);
            result = (Game.tLinearEquation(Game.LastX3) == Game.LastY3 && Game.tLinearEquation(Game.LastX4) == Game.LastY4) ? true : false;
            break;
        }
        $('#Linear').replaceWith(Game.messages[4]);
        break;
    case "QuadTransformations":
        switch (Game.SubLevel % 4) {
        case 1:
            result = (Game.Fix($('#k').val()) == Game.Quad.VerticalShift) ? true : false;
            $('#StandardQuad').replaceWith(Game.messages[5]);
            break;
        case 2:
            result = (Game.Fix($('#h').val()) == Game.Quad.HorizontalShift) ? true : false;
            $('#StandardQuad').replaceWith(Game.messages[5]);
            break;
        case 3:
            result = (Game.Fix($('#k').val()) == Game.Quad.VerticalShift && Game.Fix($('#h').val()) == Game.Quad.HorizontalShift) ? true : false;
            $('#StandardQuad').replaceWith(Game.messages[5]);
            break;
        case 0:
            result = (Game.Fix($('#k').val()) == Game.Quad.VerticalShift &&
                Game.Fix($('#h').val()) == Game.Quad.HorizontalShift &&
                Game.Fix($('#a').val()) == Game.plot.Quadratic.a) ? true : false;
            $('#StandardQuad').replaceWith(Game.messages[5]);
            break;
        }
        break;
    }
    Game.Responsive.drawLine();
    Game.afterLevel(result);
};
Game.afterLevel = function (win) {
    $('#exit, .input').hide();
    $('.Shifts').remove();
    if (win) {
        Game.Score += 10;
        $('#End').after(Game.messages[2]);
    } else {
        Game.Score -= 5;
        $('#End').after(Game.messages[3]);
    }
    $('#reset').click(function () {
        Game.Reset();
    });
    $('#Score p').text("Score: " + Game.Score);
    $("#" + Game.Type + ".input input[type=text]").val("")
};
Game.Reset = function () {
    Game.lineDrawn = false;
    myGraph.reset();
    $('.msg').remove();
    Game.SubLevel += 1;
    if (Game.timed) {
        if (Game.totalTime == undefined) {
            Game.ntimes = 0;
            $('.input').hide();
            Game.timed == false;
        } else {
            Game.ntimes = 1;
        }
    } else {
        Game.ntimes -= 1;
    }
    Game.PlayLevel(Game.ntimes);
};

Game.Fix = function (str) {
    if (isNaN(str)) {
        if (str.indexOf('/') != -1) {
            return Number(str.substring(0, str.indexOf('/'))) / Number(str.substring(str.indexOf('/') + 1));
        }
    } else {
        return Number(str);
    }
};
Game.TutorialEquation = function (goal) {
    var m = Game.Fix($("#m1").val());
    var b = Game.Fix($("#b1").val());
    Game.plot.Linear.mTop = m;
    Game.plot.Linear.mBottom = 1;
    Game.plot.Linear.b = b;
    myGraph.drawEquation(function (x) {
        return m * x + b;
    }, 'red');
    return m * goal + b;
};
Game.LinearEquation = function (goal) {
    var rise = Game.Fix($('#rise').val());
    var run = Game.Fix($('#run').val());
    var b = Game.Fix($('#b2').val());
    Game.plot.Linear.mTop = rise;
    Game.plot.Linear.mBottom = run;
    Game.plot.Linear.b = b;
    myGraph.drawEquation(function (x) {
        return (rise / run) * x + b;
    }, 'red');
    return (rise / run) * goal + b;
};
Game.tLinearEquation = function (goal) {
    if (Game.SubLevel % 4 == 3) {
        var m = (Game.plot.Linear.mTop / Game.plot.Linear.mBottom)
        var h = Game.Fix($('#h').val());
        var b = Game.plot.Linear.b
        var b2 = Game.Fix($('#b').val());
        myGraph.drawEquation(function (x) {
            return m * (x + h) + b + b2;
        }, 'red');
        return m * (goal + h) + b + b2;
    }
    if (Game.SubLevel % 4 == 0) {
        var m = Game.Fix($('#m').val());
        var h = Game.Fix($('#h').val());
        var b = Game.plot.Linear.b
        var b2 = Game.Fix($('#b').val());
        myGraph.drawEquation(function (x) {
            return m * (x + h) + b + b2;
        }, 'red');
        return m * (goal + h) + b + b2;
    }
}
Game.SimpleQuadEquation = function (goal) {
    var h = Game.Fix($('#h1').val());
    var k = Game.Fix($('#k1').val());
    myGraph.drawEquation(function (x) {
        return ((x - h) * (x - h)) + k;
    }, 'red');
    return ((goal - h) * (goal - h)) + k;
};
Game.StandardQuadEquation = function (goal) {
    var a = Game.Fix($('#a').val());
    var h = Game.Fix($('#h2').val());
    var k = Game.Fix($('#k2').val());
    myGraph.drawEquation(function (x) {
        return a * ((x - h) * (x - h)) + k;
    }, 'red');
    return a * ((goal - h) * (goal - h)) + k;
};
Game.GenearalQuadEquation = function (goal) {
    var a = Game.Fix($('#a2').val());
    var b = Game.Fix($('#b3').val());
    var c = Game.Fix($('#c').val());
    myGraph.drawEquation(function (x) {
        return a * (x * x) + b * x + c;
    }, 'red');
    return a * (goal * goal) + b * goal + c;
};
Game.ZeroQuadEquation = function (goal) {
    var X1 = Game.Fix($('#X1').val());
    var X2 = Game.Fix($('#X2').val());
    myGraph.drawEquation(function (x) {
        return (x - X1) * (x - X2);
    }, 'red');
    return (goal - X1) * (goal - X2);
};
$(document).ready(Game.Start);