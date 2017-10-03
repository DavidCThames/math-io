/*
    Theta: the refrence angle 
    Phi: angle without extra 360degs
    Angle: total angle
*/
Game = {
    functionsChosen: [],
    triangleShown: false,
    referenceShown: false,
    operation: '',
    theta: undefined,
    phi: undefined,
    angle: undefined,
    sqrt: /sqrt\(\d\)/,
    score: 0
}

var canvas;
var line;
var xaxis;
var yaxis;
var line2;
var text1;
var text2;
var text3;

window.onload = mainMenu();

function mainMenu() {
    $('#MainMenu').show();
    $('canvas, #panel').hide();
}


function play() {
    $('canvas').show();

    $("canvas").width(window.innerWidth).height(window.innerHeight); //Sets size of Height and Width

    //Checks main menu items
    for (var i = 1; i <= 6; i++) {
        if ($('#check' + i).is(':checked')) {
            Game.functionsChosen.push($('#check' + i).val())
        }
    }
    if (Game.functionsChosen.length == 0) {
        //        alert("You must choose at least one trig function");

        //Basis for new error code
        if ($('#MainMenu').next('div').length == 0) {
            $('#MainMenu').after("<div style='width:25%; height:10%; margin:auto; margin-top: 5%; background-color:#E65353; border-radius:5px; padding:5px; text-align:center;'>You must choose at least one trig function</div>")
        }
        $('#MainMenu').next('div').hide()
        $('#MainMenu').next('div').fadeIn()
        return 0;
    }
    Game.referenceShown = ($('#check7').is(':checked')) ? true : false;
    Game.triangleShown = ($('#check8').is(":checked")) ? true : false;
    $('#MainMenu').hide();
    $('#MainMenu').next('div').remove()
    //Sets up Canvas
    if (canvas == null) {
        canvas = oCanvas.create({
            canvas: "canvas",
            background: "#0cc"
        });
        canvas.width *= 10;
        canvas.height *= 10;
        //===========Types of Shaps(oCanvas)============================================
        line = canvas.display.rectangle({
            x: canvas.width / 2,
            y: canvas.height / 2,
            origin: {
                x: "center",
                y: "top"
            },
            width: 10,
            height: 500,
            fill: "red",
            fps: 60,
            shadow: "0 0 2px rgba(0,0,0, 0.8)"
        });

        xaxis = canvas.display.rectangle({
            x: canvas.width / 2,
            y: canvas.height / 2,
            origin: {
                x: "center",
                y: "center"
            },
            width: 5,
            height: 1000,
            rotation: 90,
            fill: "gray"
        });

        yaxis = canvas.display.rectangle({
            x: canvas.width / 2,
            y: canvas.height / 2,
            origin: {
                x: "center",
                y: "center"
            },
            width: 5,
            height: 1000,
            fill: "gray"
        });

        //==============================================================================
    }
    game();

}

function game() {
    canvas.addChild(line);
    canvas.addChild(xaxis);
    canvas.addChild(yaxis);
    var angle = pickAngle();
    //Randomly decide between trig functions, perhaps save operation variable in Game object eventually?
    Game.operation = Game.functionsChosen[Math.floor(Math.random() * Game.functionsChosen.length)];
    line.rotation = -90;
    canvas.setLoop(function () {
        line.rotation -= 10;
        if (line.rotation <= -90 - angle) {
            canvas.timeline.stop();
            var radians = Game.phi * (Math.PI / 180);
            if (Game.triangleShown && !(Game.phi % 90 == 0)) {
                line2 = canvas.display.line({
                    start: {
                        x: yaxis.x + line.height * Math.cos(radians),
                        y: xaxis.y + -1 * (line.height * Math.sin(radians))
                    },
                    end: {
                        x: yaxis.x + line.height * Math.cos(radians),
                        y: xaxis.y
                    },
                    stroke: "10px red"
                })

                /*Initialize text elements
                text1 is on the x xaxis
                text2 is on the vertical side
                text3 is on the hypotenuse*/
                text1 = canvas.display.text({
                    font: "bold 45px sans-serif",
                    fill: 'black',
                });
                text2 = canvas.display.text({
                    font: "bold 45px sans-serif",
                    fill: 'black',
                });
                text3 = canvas.display.text({
                    font: "bold 45px sans-serif",
                    fill: 'black',
                });

                //Set position of text
                text1.x = yaxis.x + (line.height * Math.cos(radians)) / 2
                text1.y = xaxis.y
                text2.x = yaxis.x + (line.height * Math.cos(radians))
                text2.y = xaxis.y + -1 * (line.height * Math.sin(radians)) / 2
                text3.x = yaxis.x + 25 + (line.height * Math.cos(radians)) / 2
                text3.y = xaxis.y + 25 + -1 * (line.height * Math.sin(radians)) / 2

                //Set contents of text
                if (Game.phi % 60 == 0) {
                    text1.text = (Game.phi < 90 || Game.phi > 270) ? "1" : "-1";
                    text2.text = (Game.phi < 180) ? "sqrt(3)" : "-sqrt(3)";
                    text3.text = "2";
                } else if (Game.phi % 45 == 0) {
                    text1.text = (Game.phi < 90 || Game.phi > 270) ? "sqrt(2)" : "-sqrt(2)";
                    text2.text = (Game.phi < 180) ? "sqrt(2)" : "-sqrt(2)";
                    text3.text = "2";
                } else if (Game.phi % 30 == 0) {
                    text1.text = (Game.phi < 90 || Game.phi > 270) ? "sqrt(3)" : "-sqrt(3)";
                    text2.text = (Game.phi < 180) ? "1" : "-1";
                    text3.text = "2";
                }

                canvas.addChild(line2)
                canvas.addChild(text1)
                canvas.addChild(text2)
                canvas.addChild(text3)
            }
            $('#operation').html(Game.operation + '( &theta; )');
            $('#panel').show();
            $('#submit').on('click', Check);
            $('input').on('focus', function () {
                $(this).val("")
            })
            $('input').on('keyup', function (e) {
                if (e.keyCode == 13) {
                    $('#submit').click();
                }
            })
        }
    });
    canvas.timeline.start();
    $("#Phi").html(Game.phi);
    if (Game.referenceShown) {
        $('#panel').css('height', '42vh');
        $('#Reference').show();
        $('#Theta').html(Game.theta);
    } else {
        $('#Reference').hide();
        $('#panel').css('height', '30vh');
    }
}


function pickAngle() {

    Game.phi = Math.round(Math.random() * 3); //determine first quadrent angle
    if (Game.theta == 3) { //all other significant angles are multiples of 30deg so 45deg is done seperatly
        Game.phi = 45;
    } else {
        Game.phi *= 30;
    }
    Game.phi += (Math.round(Math.random() * 3) * 90); //spread angle out through all four quadrents
    Game.angle = Game.phi + (Math.round(Math.random() * 4) * 360); //add multiples of 360deg
    if (90 < Game.phi && Game.phi < 270) //determin refrence angle
        Game.theta = Math.abs(180 - Game.phi);
    else if (270 <= Game.phi)
        Game.theta = Math.abs(360 - Game.phi);
    else
        Game.theta = Math.abs(Game.phi);
    return Game.angle;
}


/*
    New function Check: 
    uses regular expressions to detect the existence of "sqrt(x)" where x is an integer and 0 <= x < 10
    currently alerts errors
    
    Then divides numerator and denominator 
    Takes the arc(Sin/Cos/Tan) depending on Game.operation variable
    Then turns it into degrees and compares it to theta within a margin of error
    
    Keeps in mind the ranges of the arc trig functions
    Checks if it works for positive or negative
    Final answer if it is asking for a positive or negative
*/
function Check() {
    var numAns = $('#num').val();
    var denAns = $('#den').val();
    //If no den is inserted make it '1'
    if (String(denAns) == '') {
        denAns = 1;
        //alert("den is now 1");
    }
    //Check if it has a sqrt()
    if (Game.sqrt.test(numAns)) {
        if (numAns[0] == "-") {
            numAns = Math.sqrt(Number(numAns.substring(numAns.indexOf("(") + 1, numAns.indexOf(")")))) * -1;
        } else {
            numAns = Math.sqrt(Number(numAns.substring(numAns.indexOf("(") + 1, numAns.indexOf(")"))));
        }
    } else {
        if (isNaN(Number(numAns))) {
            //alert("Must enter a number");
            if ($('#submit').next('div').length == 0) {
                $('#submit').after("<div style=' margin:auto; margin-top: 5%; background-color:#E65353; border-radius:5px; padding:2px; text-align:center;'>Please enter a valid number</div>")
            }
            $('#submit').next('div').hide()
            $('#submit').next('div').fadeIn()
            return 0;
        } else {
            numAns = Number(numAns);
        }
    }
    if (Game.sqrt.test(denAns)) {
        denAns = Math.sqrt(Number(denAns.substring(denAns.indexOf("(") + 1, denAns.indexOf(")"))));
    } else {
        if (isNaN(Number(denAns))) {
            //alert("Must enter a number");
            if ($('#submit').next('div').length == 0) {
                $('#submit').after("<div style=' margin:auto; margin-top: 5%; background-color:#E65353; border-radius:5px; padding:2px; text-align:center;'>Please enter a valid number</div>")
            }
            $('#submit').next('div').hide()
            $('#submit').next('div').fadeIn()
            return 0;
        } else {
            denAns = Number(denAns);
        }
    }

    var ans = numAns / denAns;

    //First determine the operation being used and then get the arc of it leaving the angle in radians, it's converted to degrees next
    switch (Game.operation) {
    case 'sin':
        arcAns = Math.asin(ans);
        arcAns *= 180 / Math.PI;
        negQuad = arcAns - 0.000001 < -Game.theta && -Game.theta < arcAns + 0.000001;
        break;
    case 'cos':
        arcAns = Math.acos(ans);
        arcAns *= 180 / Math.PI;
        negQuad = arcAns - 0.000001 < 180 - Game.theta && 180 - Game.theta < arcAns + 0.000001;
        break;
    case 'tan':
        arcAns = Math.atan(ans);
        arcAns *= 180 / Math.PI;
        negQuad = arcAns - 0.000001 < -Game.theta && -Game.theta < arcAns + 0.000001;
        break;
    case 'csc':
        arcAns = Math.asin(1 / ans);
        arcAns *= 180 / Math.PI;
        negQuad = arcAns - 0.000001 < -Game.theta && -Game.theta < arcAns + 0.000001;
        break;
    case 'sec':
        arcAns = Math.acos(1 / ans);
        arcAns *= 180 / Math.PI;
        negQuad = arcAns - 0.000001 < 180 - Game.theta && 180 - Game.theta < arcAns + 0.000001;
        break;
    case 'cot':
        arcAns = Math.atan(1 / ans);
        arcAns *= 180 / Math.PI;
        negQuad = arcAns - 0.000001 < -Game.theta && -Game.theta < arcAns + 0.000001;

        break;
    }
    //If within margin of error
    posQuad = arcAns - 0.000001 < Game.theta && Game.theta < arcAns + 0.000001;

    switch (Game.operation) {
    case 'sin':
    case 'csc':
        var final = (Game.phi > 180) ? negQuad : posQuad
        break;
    case 'cos':
    case 'sec':
        var final = (Game.phi > 90 && Game.phi < 270) ? negQuad : posQuad
        break;
    case 'tan':
    case 'cot':
        var final = ((Game.phi > 90 && Game.phi < 180) || (Game.phi >= 270 && Game.phi < 360)) ? negQuad : posQuad
        break;
    }

    if (final) {
        //alert("You win!");
        Game.score += 10;
        if (Game.triangleShown && !(Game.phi % 90 == 0)) {
            canvas.removeChild(line2);
            canvas.removeChild(text1);
            canvas.removeChild(text2);
            canvas.removeChild(text3);
        }
        if ($('#submit').next('div').length !== 0) {
            $('#submit').next('div').remove()
        }
        $('#panel input').val("")
        $('#panel').hide();
        $('#submit, input').off();
        game();
    } else {
        alert("You lose... Your total Score is: " + Game.score);
        //Goes to main menu and clears 
        $('#panel').hide();
        $('#submit, input').off();
        mainMenu();
        Game = {
            functionsChosen: [],
            triangleShown: false,
            referenceShown: false,
            operation: '',
            theta: undefined,
            phi: undefined,
            angle: undefined,
            sqrt: /sqrt\(\d\)/,
            score: 0
        }
        canvas.removeChild(line2);
        canvas.removeChild(text1);
        canvas.removeChild(text2);
        canvas.removeChild(text3);
        line2 = undefined;
        text1 = undefined;
        text2 = undefined;
        text3 = undefined;
    }

}