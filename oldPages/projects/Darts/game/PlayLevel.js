var tcount = 1;

var tfunction = function (e) {
    e.keyCode = e.keyCode || null
    if (e.keyCode == 32 && Game.tutorialMsg[tcount] != null) {
        try {
            $(Game.tutorialMsg[tcount - 1].highlight).css("outline", "none");
        } catch (e) {}
        $("#ttext").html(Game.tutorialMsg[tcount].text);
        $(Game.tutorialMsg[tcount].highlight).css("outline", "yellow solid 3px");
        $('#tspace').text("Press space to continue")
        if (tcount == 4) {
            $("#Tutorial #m1").removeAttr('disabled');
            $('#Tutorial #m1').on('change', tfunction)
            window.removeEventListener('keyup', tfunction, true)
            $('#tspace').text("Enter value")
        }
        tcount++;
    } else if (tcount == 5 && $('#Tutorial #m1').val() == "1") {
        try {
            $(Game.tutorialMsg[tcount - 1].highlight).css("outline", "none");
        } catch (e) {}
        $("#ttext").html(Game.tutorialMsg[tcount].text);
        $(Game.tutorialMsg[tcount].highlight).css("outline", "yellow solid 3px");
        tcount++;
        $("#Tutorial #m1").prop("disabled", "true").off('change', tfunction)
        $("#Tutorial #b1").removeAttr('disabled').on('change', tfunction);
    } else if (tcount == 6) {
        try {
            $(Game.tutorialMsg[tcount - 1].highlight).css("outline", "none");
        } catch (e) {}
        $("#ttext").html(Game.tutorialMsg[tcount].text);
        $(Game.tutorialMsg[tcount].highlight).css("outline", "yellow solid 3px");
        tcount++;
        if ($('#Tutorial #b1').val() == "1") {
            $('#Tutorial .Submit').show();
            $("#Tutorial #b1").prop("disabled", "true").off('change', tfunction)
            $('#tspace').text("Press submit")
        }
    }
}


Game.PlayLevel = function (ntimes) {
    Game.ntimes = ntimes;
    if (Game.ntimes == 0) {
        $('#End').after("<div id='endText' class='msg'>\
                            <h1> Your Score: " + Game.Score + "</h1>\
                            <input type='submit' id='Last' value='Finish'/>\
                        </div>");
        $('#Score').hide();
        if (Game.timed) {
            Game.timed = false;
            $('#timer').hide();
        }
        $('#timer').hide();
        Game.Responsive.canvas()
        $('#Last').on('click', function () {
            $('#endText').remove();
            myGraph.reset();
            Game.Score = 0;
            $('#Score p').text("Score: 0")
            Game.SubLevel = 1;
            $('#myCanvas, .input, #End, #exit').hide();
            Game.startEvents();
        });
    } else {
        $('#exit').show();
        Game.yAxis = window.innerHeight - 60;
        Game.xAxis = 30;
        Game.LastX = undefined;
        Game.LastY = undefined;
        Game.LastX2 = undefined;
        Game.LastY2 = undefined;
        Game.LastX3 = undefined;
        Game.LastY3 = undefined;
        Game.LastX4 = undefined;
        Game.LastY4 = undefined;
        if (Game.Type != "LinearTransformations" && Game.Type != "QuadraticTransformations") {
            $('#' + Game.Type).show();
        }
        switch (Game.Type) {
        case "Tutorial":
            if (Game.SubLevel == 1) {
                Game.LastX = 2;
                Game.LastY = 3;
                $("#Tutorial .Submit, #Score").hide();
                $("#tdiv").show();
                $('#ttext').html(Game.tutorialMsg[0].text)
                window.addEventListener('keyup', tfunction, true)
                $("#Tutorial #m1").prop("disabled", "true")
                $("#Tutorial #b1").prop("disabled", "true")
            } else {
                if (Game.SubLevel == 2) {
                    $('#Score').show()
                    $("#Tutorial #m1").removeAttr('disabled');
                    $("#Tutorial #b1").removeAttr('disabled');
                    $('#tspace').html("Press space to continue").css('font-weight', 'normal')
                    $("#tdiv").hide();
                    $("input[type=submit]").css("outline", "none");
                    window.removeEventListener('keyup', tfunction, true)
                    tcount = 0
                }
                Game.LastX = Game.Tutorial.fGoalX();
                Game.LastY = Game.Tutorial.fGoalY();
            }
            break;
        case "Coordinate":
            switch (Game.SubLevel % 3) {
            case 1:
                if (Math.random() < 0.5) {
                    Game.LastX = Game.Coordinate.sub1.fGoalX1();
                    Game.LastY = 0;
                } else {
                    Game.LastX = 0;
                    Game.LastY = Game.Coordinate.sub1.fGoalY1();
                }
                break;
            case 2:
                if (Math.random() < 0.75) {
                    Game.xAxis = window.innerWidth / 2;
                    Game.LastX = Game.Coordinate.sub2.fGoalX1();
                    Game.LastY = Game.Coordinate.sub2.fGoalY1();
                } else {
                    Game.LastX = Game.Coordinate.sub1.fGoalX1();
                    Game.LastY = Game.Coordinate.sub1.fGoalY1();
                }
                break;
            case 0:
                Game.xAxis = window.innerWidth / 2;
                Game.yAxis = window.innerHeight / 2;
                Game.LastX = Game.Coordinate.sub3.fGoalX1();
                Game.LastY = Game.Coordinate.sub3.fGoalY1();
                break;
            }
            break;
        case "Linear":
            Game.LastX = Game.Linear.fGoalX1();
            Game.LastY = Game.Linear.fGoalY1()
            Game.LastX2 = Game.Linear.fGoalX2()
            Game.LastY2 = Game.Linear.fGoalY2()
            break;
        case "SimpleQuad":
            Game.LastX = Game.Quad.fGoalX1();
            Game.LastY = Game.Quad.fGoalY1();
            break;
        case "StandardQuad":
        case "GeneralQuad":
            Game.LastX = Game.Quad.fGoalX1();
            Game.LastY = Game.Quad.fGoalY1();
            Game.LastX2 = Game.Quad.fGoalX2();
            Game.LastY2 = Game.Quad.fGoalY2();
            break;
        case "ZeroQuad":
            Game.yAxis = window.innerHeight / 2;
            Game.xAxis = window.innerWidth / 2;
            Game.LastX = Game.ZeroQuad.fGoalX1();
            Game.LastY = Game.ZeroQuad.GoalY1;
            Game.LastX2 = Game.ZeroQuad.fGoalX2();
            Game.LastY2 = Game.ZeroQuad.GoalY2;
            break;

        case "LinearTransformations":
            $('#Linear').show();
            Game.LastX = Game.LinearTransformations.fGoalX1();
            Game.LastY = Game.LinearTransformations.fGoalY1();
            Game.LastX2 = Game.LinearTransformations.fGoalX2();
            Game.LastY2 = Game.LinearTransformations.fGoalY2();
            Game.plot.Linear.mTop = Game.LastY2 - Game.LastY;
            Game.plot.Linear.mBottom = Game.LastX2 - Game.LastX
            Game.plot.Linear.b = Game.LastY - ((Game.plot.Linear.mTop / Game.plot.Linear.mBottom) * Game.LastX);
            Game.lineDrawn = true;
            Game.Responsive.drawLine();
            switch (Game.SubLevel % 4) {
            case 1:
                Game.LinearTransformations.VerticalShift = Game.LinearTransformations.fVerticalShift();
                Game.plot.Linear.b = (Game.plot.Linear.b < 0) ? "(" + Game.plot.Linear.b + ")" : Game.plot.Linear.b; // Adds parenthesis if negative
                $("#Linear").replaceWith("<div id='Linear' class='input' onMouseDown='Game.Responsive.mouseDown(event)' onMouseUp='Game.Responsive.mouseUp()'>\
                                                    Y = " + Game.plot.Linear.mTop + "/" + Game.plot.Linear.mBottom + "X + " + Game.plot.Linear.b + "\
                                                    + <input type='text' id='b2' class='text' />\
                                                    <input type='submit' value='Submit!' class='Submit'/>\
                                                </div>");
                Game.LastX3 = Game.LastX;
                Game.LastY3 = Game.LastY + Game.LinearTransformations.VerticalShift;
                Game.LastX4 = Game.LastX2;
                Game.LastY4 = Game.LastY2 + Game.LinearTransformations.VerticalShift;
                break;
            case 2:
                Game.LinearTransformations.HorizontalShift = Game.LinearTransformations.fHorizontalShift();
                Game.plot.Linear.b = (Game.plot.Linear.b < 0) ? "(" + Game.plot.Linear.b + ")" : Game.plot.Linear.b; // Adds parenthesis if negative
                $("#Linear").replaceWith("<div id='Linear' class='input' onMouseDown='Game.Responsive.mouseDown(event)' onMouseUp='Game.Responsive.mouseUp()'>\
                                                    Y = " + Game.plot.Linear.mTop + "/" + Game.plot.Linear.mBottom + "(X + <input type='text' id='h'/>)\
                                                    + " + Game.plot.Linear.b + "<input type='submit' value='Submit!' class='Submit'/>\
                                                </div>");
                Game.LastX3 = Game.LastX - Game.LinearTransformations.HorizontalShift;
                Game.LastY3 = Game.LastY;
                Game.LastX4 = Game.LastX2 - Game.LinearTransformations.HorizontalShift;
                Game.LastY4 = Game.LastY2;
                break;
            case 3:
                Game.LinearTransformations.HorizontalShift = Game.LinearTransformations.fHorizontalShift();
                Game.LinearTransformations.VerticalShift = Game.LinearTransformations.fVerticalShift();
                Game.plot.Linear.b = (Game.plot.Linear.b < 0) ? "(" + Game.plot.Linear.b + ")" : Game.plot.Linear.b; // Adds parenthesis if negative
                $("#Linear").replaceWith("<div id='Linear' class='input' onMouseDown='Game.Responsive.mouseDown(event)' onMouseUp='Game.Responsive.mouseUp()'>\
                                                    Y = " + Game.plot.Linear.mTop + "/" + Game.plot.Linear.mBottom + "(X + <input type='text' id='h'/>)\
                                                    + " + Game.plot.Linear.b + " + <input type='text' id='b'/><input type='submit' value='Submit!' class='Submit'/>\
                                                </div>");
                Game.LastX3 = Game.LastX - Game.LinearTransformations.HorizontalShift;
                Game.LastY3 = Game.LastY + Game.LinearTransformations.VerticalShift;
                Game.LastX4 = Game.LastX2 - Game.LinearTransformations.HorizontalShift;
                Game.LastY4 = Game.LastY2 + Game.LinearTransformations.VerticalShift;
                break;
            case 0:
                Game.LinearTransformations.HorizontalShift = Game.LinearTransformations.fHorizontalShift();
                Game.LinearTransformations.VerticalShift = Game.LinearTransformations.fVerticalShift();
                Game.plot.Linear.b = (Game.plot.Linear.b < 0) ? "(" + Game.plot.Linear.b + ")" : Game.plot.Linear.b; // Adds parenthesis if negative
                $("#Linear").replaceWith("<div id='Linear' class='input' onMouseDown='Game.Responsive.mouseDown(event)' onMouseUp='Game.Responsive.mouseUp()'>\
                                                    Y = <input type='text' id='m'/> (X + <input type='text' id='h'/>)\
                                                    + " + Game.plot.Linear.b + " + <input type='text' id='b'/><input type='submit' value='Submit!' class='Submit'/>\
                                                </div>");
                Game.LastX3 = Game.LastX - Game.LinearTransformations.HorizontalShift;
                Game.LastY3 = Game.LastY + Game.LinearTransformations.VerticalShift;
                Game.LastX4 = Game.LastX2 - Game.LinearTransformations.HorizontalShift;
                Game.LastY4 = Game.LastY2 + Game.LinearTransformations.VerticalShift;
                break;
            }
            Game.plot.Linear.b = Game.LastY - ((Game.plot.Linear.mTop / Game.plot.Linear.mBottom) * Game.LastX);
            break;
        case "QuadTransformations":
            $('#StandardQuad').show();
            Game.LastX = Game.Quad.fGoalX1();
            Game.LastY = Game.Quad.fGoalY1();
            Game.LastX2 = Game.Quad.fGoalX2();
            Game.LastY2 = Game.Quad.fGoalY2();
            Game.plot.Quadratic.a = (Game.LastY2 - Game.LastY) / ((Game.LastX2 - Game.LastX) * (Game.LastX2 - Game.LastX))
            Game.plot.Quadratic.h = Game.LastX;
            Game.plot.Quadratic.k = Game.LastY;
            Game.lineDrawn = true;
            Game.Responsive.drawLine();
            switch (Game.SubLevel % 4) {
            case 1:
                Game.Quad.VerticalShift = Game.Quad.fVerticalShift();
                Game.plot.Quadratic.k = (Game.plot.Quadratic.k < 0) ? "(" + Game.plot.Quadratic.k + ")" : Game.plot.Quadratic.k; // Adds parenthesis if negative
                $('#StandardQuad').replaceWith("<div id='StandardQuad' class='input' onMouseDown='Game.Responsive.mouseDown(event)' onMouseUp='Game.Responsive.mouseUp()'>\
                                                            " + Game.plot.Quadratic.a + "( X - " + Game.plot.Quadratic.h + " )^2 + " + Game.plot.Quadratic.k + " + \
                                                            <input type='text' id='k'/><input value='Submit!' type='submit' class='Submit'/>\
                                                        </div>");
                Game.LastX3 = Game.LastX
                Game.LastY3 = Game.LastY + Game.Quad.VerticalShift;
                Game.LastX4 = Game.LastX2
                Game.LastY4 = Game.LastY2 + Game.Quad.VerticalShift;
                break;
            case 2:
                Game.Quad.HorizontalShift = Game.Quad.fHorizontalShift();
                Game.plot.Quadratic.k = (Game.plot.Quadratic.k < 0) ? "(" + Game.plot.Quadratic.k + ")" : Game.plot.Quadratic.k; // Adds parenthesis if negative
                $('#StandardQuad').replaceWith("<div id='StandardQuad' class='input' onMouseDown='Game.Responsive.mouseDown(event)' onMouseUp='Game.Responsive.mouseUp()'>\
                                                            " + Game.plot.Quadratic.a + "( X - " + Game.plot.Quadratic.h + " +\
                                                            <input type='text'id='h'/>)^2 + " + Game.plot.Quadratic.k + "\
                                                            <input type='submit' value='Submit!' class='Submit'/>\
                                                        </div>");
                Game.LastX3 = Game.LastX - Game.Quad.HorizontalShift;
                Game.LastY3 = Game.LastY;
                Game.LastX4 = Game.LastX2 - Game.Quad.HorizontalShift;
                Game.LastY4 = Game.LastY2;
                break;
            case 3:
                Game.Quad.VerticalShift = Game.Quad.fVerticalShift();
                Game.Quad.HorizontalShift = Game.Quad.fHorizontalShift();
                Game.plot.Quadratic.k = (Game.plot.Quadratic.k < 0) ? "(" + Game.plot.Quadratic.k + ")" : Game.plot.Quadratic.k; // Adds parenthesis if negative
                $('#StandardQuad').replaceWith("<div id='StandardQuad' class='input' onMouseDown='Game.Responsive.mouseDown(event)' onMouseUp='Game.Responsive.mouseUp()'>\
                                                            " + Game.plot.Quadratic.a + "( X - " + Game.plot.Quadratic.h + " +\
                                                            <input type='text'id='h'/>)^2 + " + Game.plot.Quadratic.k + " + \
                                                            <input type='text' id='k'/><input type='submit' value='Submit!' class='Submit'/>\
                                                        </div>");
                Game.LastX3 = Game.LastX - Game.Quad.HorizontalShift;
                Game.LastY3 = Game.LastY + Game.Quad.VerticalShift;
                Game.LastX4 = Game.LastX2 - Game.Quad.HorizontalShift;
                Game.LastY4 = Game.LastY2 + Game.Quad.VerticalShift;
                break;
            case 0:
                Game.Quad.VerticalShift = Game.Quad.fVerticalShift();
                Game.Quad.HorizontalShift = Game.Quad.fHorizontalShift();
                Game.plot.Quadratic.k = (Game.plot.Quadratic.k < 0) ? "(" + Game.plot.Quadratic.k + ")" : Game.plot.Quadratic.k; // Adds parenthesis if negative
                $('#StandardQuad').replaceWith("<div id='StandardQuad' class='input' onMouseDown='Game.Responsive.mouseDown(event)' onMouseUp='Game.Responsive.mouseUp()'>\
                                                            <input type='text' id='a'/>( X - " + Game.plot.Quadratic.h + " +\
                                                            <input type='text'id='h'/>)^2 + " + Game.plot.Quadratic.k + " + \
                                                            <input type='text' id='k'/><input type='submit' value='Submit!' class='Submit'/>\
                                                        </div>");
                Game.LastX3 = Game.LastX - Game.Quad.HorizontalShift;
                Game.LastY3 = Game.LastY + Game.Quad.VerticalShift;
                Game.LastX4 = Game.LastX2 - Game.Quad.HorizontalShift;
                Game.LastY4 = Game.LastY2 + Game.Quad.VerticalShift;
                break;
            }
            Game.plot.Quadratic.k = Game.LastY;
            break;
        }
        $(".Submit").on('click', Game.Check);
        if (Game.Type != "Tutorial" || Game.SubLevel != 1) {
            $('input[type=text]').on('keypress', Game.PreventAlpha);
            $('input[type=text]').on('focus', function () {
                $(this).val("");
            });
        }
        $('#exit').on('click', function () {
            Game.Exit();
        });
        Game.Responsive.start();
    }
};