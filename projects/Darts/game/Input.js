Game.timed;
Game.seconds;
Game.minutes;
Game.totalTime;
Game.timeRun;
Game.Start = function () {
    Game.Type = "Tutorial";
    $('.input').hide();
    $('#myCanvas').hide();
    $('#End').hide();
    $('#Menu').hide();
    $('#timeInput').hide();
    $("#timer").hide();
    $('#exit').hide();
    if (navigator.userAgent.indexOf("MSIE 8.0") != -1) {
        document.getElementById("NotSuported").hidden = false;
    } else {
        document.getElementById("NotSuported").hidden = true;
        window.addEventListener("click", Game.Responsive.start, true);
        Game.startEvents();
    }
};
Game.startEvents = function () {
    $('.logo').show();
    $('#Menu').show();
    $('#Play').on('click', Game.GameStart);
    $('.topic').on('click', function (event) {
        Game.Type = event.target.id.substring(0, event.target.id.length - 5);
        $("li").toggleClass('clicked', false);
        $(event.target).toggleClass('clicked');
        if (Game.Type == "LinearTransformations" || Game.Type == "QuadTransformations") {
            $("#nchoice option:nth-child(1)").val("4").text("4 times");
            $("#nchoice option:nth-child(2)").val("8").text("8 times");
            $("#nchoice option:nth-child(3)").val("12").text("12 times");
        } else {
            $("#nchoice option:nth-child(1)").val("3").text("3 times");
            $("#nchoice option:nth-child(2)").val("6").text("6 times");
            $("#nchoice option:nth-child(3)").val("9").text("9 times");
        }
    });
    $("#nchoice").on('change', Game.TimeSet);
};
Game.GameStart = function () {
    $(".topic").off();
    $('#Play').off();
    $('#nchoice').off();
    var ntime = $('#nchoice').val() == "time" ? 1 : Number($('#nchoice').val());
    Game.totalTime = undefined;
    if (Game.timed) {
        Game.seconds = Number($('#sec').val());
        Game.minutes = Number($('#min').val());
        Game.totalTime = Game.seconds + Game.minutes * 60;
        $('#secOut').text((Game.seconds < 10) ? ("0" + String(Game.seconds)) : String(Game.seconds));
        $('#minOut').text(String(Game.minutes));
        $("#timer").show();
        Game.timeRun = window.setInterval(Game.RunTimer, 1000);
    }
    $('.logo').hide();
    $('#Menu').hide();
    $('#myCanvas').show();
    $('#End').show();
    $('#exit').show();
    Game.PlayLevel(ntime);
};
Game.TimeSet = function () {
    Game.totalTime = undefined;
    if (isNaN($("#nchoice").val())) {
        Game.timed = true;
        $("label").before(Game.messages[0]);
    } else {
        $("#timeInput").remove();
        Game.timed = false;
    }
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
            window.clearInterval(Game.timeRun);
            Reset(true);
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
        $('#' + divType).hide();
    } else {
        if (arguments[0] == true) {
            $('.msg').remove();
            $('.Submit').off();
            Game.PlayLevel(0);
        }
        if (arguments[0] == false) {
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
    $('.Submit').off()
    $('input').off();
    $('#exit').off();
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
        result = (Game.SimpleQuadEquation(Game.LastX) == Game.LastY) ? true : false;
        break;
    case "StandardQuad":
        Game.StandardQuadEquation(Game.LastX);
        result = (Game.StandardQuadEquation(Game.LastX) == Game.LastY && Game.StandardQuadEquation(Game.LastX2) == Game.LastY2) ? true : false;
        break;
    case "GeneralQuad":
        Game.GenearalQuadEquation(Game.LastX);
        result = (Game.GenearalQuadEquation(Game.LastX) == Game.LastY && Game.GenearalQuadEquation(Game.LastX2) == Game.LastY2) ? true : false;
        break;
    case "ZeroQuad":
        Game.ZeroQuadEquation(Game.LastX);
        result = (Game.ZeroQuadEquation(Game.LastX) == Game.LastY && Game.ZeroQuadEquation(Game.LastX2) == Game.LastY2) ? true : false;
        break;
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
    case "QuadTransformations": //Finish! [On #4]
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
    $('#exit').hide();
    $('.input').hide();
    $('.Shifts').remove();
    if (win) {
        Game.Score += 10;
        $('#End').after(Game.messages[2]);
        $('#reset').click(function () {
            Game.Reset(true);
        });
    } else {
        Game.Score -= 5;
        $('#End').after(Game.messages[3]);
        $('#reset').click(function () {
            Game.Reset(false);
        });
    }
};
Game.Reset = function (win) {
    Game.lineDrawn = false;
    myGraph.reset();
    $('.msg').remove();
    Game.SubLevel += 1;
    if (Game.timed) {
        if (Game.totalTime == 0) {
            Game.ntimes = 0;
            $('.input').hide();
            Game.timed == false;
        } else if (Game.totalTime == undefined) {
            Game.ntimes -= 1;
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
    m = Game.Fix($("#m1").val());
    b = Game.Fix($("#b1").val());
    Game.plot.Linear.mTop = m;
    Game.plot.Linear.mBottom = 1;
    Game.plot.Linear.b = b;
    myGraph.drawEquation(function (x) {
        return m * x + b;
    }, 'red');
    return m * goal + b;
};
Game.LinearEquation = function (goal) {
    rise = Game.Fix($('#rise').val());
    run = Game.Fix($('#run').val());
    b = Game.Fix($('#b2').val());
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
        m = (Game.plot.Linear.mTop / Game.plot.Linear.mBottom)
        h = Game.Fix($('#h').val());
        b = Game.plot.Linear.b
        b2 = Game.Fix($('#b').val());
        myGraph.drawEquation(function (x) {
            return m * (x + h) + b + b2;
        }, 'red');
        return m * (goal + h) + b + b2;
    }
    if (Game.SubLevel % 4 == 0) {
        m = Game.Fix($('#m').val());
        h = Game.Fix($('#h').val());
        b = Game.plot.Linear.b
        b2 = Game.Fix($('#b').val());
        myGraph.drawEquation(function (x) {
            return m * (x + h) + b + b2;
        }, 'red');
        return m * (goal + h) + b + b2;
    }
}
Game.SimpleQuadEquation = function (goal) {
    h = Game.Fix($('#h1').val());
    k = Game.Fix($('#k1').val());
    myGraph.drawEquation(function (x) {
        return ((x - h) * (x - h)) + k;
    }, 'red');
    return ((goal - h) * (goal - h)) + k;
};
Game.StandardQuadEquation = function (goal) {
    a = Game.Fix($('#a').val());
    h = Game.Fix($('#h2').val());
    k = Game.Fix($('#k2').val());
    myGraph.drawEquation(function (x) {
        return a * ((x - h) * (x - h)) + k;
    }, 'red');
    return a * ((goal - h) * (goal - h)) + k;
};
Game.GenearalQuadEquation = function (goal) {
    a = Game.Fix($('#a2').val());
    b = Game.Fix($('#b3').val());
    c = Game.Fix($('#c').val());
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