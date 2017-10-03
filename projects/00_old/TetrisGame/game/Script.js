var startMenu = function () {
    $('#reset, .input input').off()
    $('.msg').remove();
    $('#myCanvas, .input, #score, #bar').hide();
    var i = 1;
    Game.currentLevel = undefined;
    Game.level = 1;
    Game.moder = '';
    Game.score = 0;
    Game.transformList = [];
    $('#menu').show();
    $('#speed').on('click', function () {
        switch (i % 3) {
        case 1:
            $('#speedLabel').css('color', 'red').text('Fast');
            Game.speed = 'f';
            break;
        case 2:
            $('#speedLabel').css('color', 'yellow').text('Slow');
            Game.speed = 's';
            break;
        case 0:
            $('#speedLabel').css('color', 'orange').text('Medium');
            Game.speed = 'm'
            break;
        };
        i++;
    });
    $('#Play').on('click', check);
}

var check = function () {
    if ($('#menu #left input:checked').val() == undefined) {
        alert("You need to select at least one equation.");
        return 0;
    }
    if ($('#menu #right input[type="radio"]:checked').val() == undefined) {
        alert("You need to select a game mode.");
        return 0;
    }
    $('#menu #left input:checked').each(function (i) {
        Game.transformList.push($(this).val());
    });
    Game.moder = $('#menu #right input[type="radio"]:checked').val();
    Game.parentChoose = ($('#menu #right input[type="checkbox"]:checked').val() == undefined) ? false : true;
    startGame();

}

var startGame = function () {
    Game.falling = true;
    $('#Play').off();
    $('#menu').hide();
    $('#myCanvas, #score').show();
    if (Game.parentChoose) {
        $('#bar').show();
    }
    $('.input input').click(function () {
        this.blur();
    })
    document.getElementById('myCanvas').width = window.innerWidth; //Sets size of Width
    document.getElementById('myCanvas').height = window.innerHeight; //Sets size of Height
    //Creates graph
    myGraph = new Graph({
        centerY: window.innerHeight / 2,
        centerX: window.innerWidth / 2,
        minX: 0,
        minY: 0,
        maxX: window.innerWidth / (window.innerHeight / 10),
        maxY: 10,
        unitsPerTick: 1
    });
    playLevel();
}

var playLevel = function () {
    $('.input').hide();
    Game.equation = {};
    $('#score').text("Score: " + Game.score);
    Game.shifts.h = Game.shifts.fh();
    Game.shifts.k = Game.shifts.fk();
    if (Game.moder == 'k') {
        Game.mode = 0;
    }
    if (Game.moder == 'h') {
        Game.mode = 1;
    }
    if (Game.moder == 'hk') {
        Game.mode = (Math.random() > 0.5) ? 0 : 1;
    }
    Game.currentLevel = Game.transformList[Math.floor(Math.random() * Game.transformList.length)];
    var gameSpeed = (Game.speed == 's') ? Game.level * 0.3 + 0.8 : (Game.speed == 'm') ? Game.level * 0.4 + 0.8 : Game.level * 0.5 + 0.8;
    switch (Game.currentLevel) {
    case 'Absolute':
        Game.equation = new Line({
            equation: function (x) {
                return Math.abs(x + Game.shifts.h) + Game.shifts.k;
            }
        });
        break;
    case 'Quadratic':
        Game.equation = new Line({
            equation: function (x) {
                return Math.pow((x + Game.shifts.h), 2) + Game.shifts.k;
            }
        });
        break;
    case 'squareRoot':
        Game.equation = new Line({
            equation: function (x) {
                return Math.sqrt(x + Game.shifts.h) + Game.shifts.k;
            }
        });
        break;
    case 'Log':
        Game.equation = new Line({
            equation: function (x) {
                return Math.log(x + Game.shifts.h) + Game.shifts.k;
            }
        });
        break;
    case 'Exp':
        Game.equation = new Line({
            equation: function (x) {
                return Math.pow(2, x + Game.shifts.h) + Game.shifts.k;
            }
        });
        break;
    case 'arcSin':
        Game.equation = new Line({
            equation: function (x) {
                return Math.asin(x + Game.shifts.h) + Game.shifts.k;
            }
        });
        break;
    case 'arcCos':
        Game.equation = new Line({
            equation: function (x) {
                return Math.acos(x + Game.shifts.h) + Game.shifts.k;
            }
        });
        break;
    default:
        return 0;
    }
    myGraph.animateLine(Game.equation, Game.mode, gameSpeed);
}

var equationSelector = function () {
    var selected = (Game.equationChosen == '') ? Game.lastEquation : Game.equationChosen;
    var h = (Game.mode == 0) ? Game.currentLine.hShift : Game.currentLine.shiftAmount;
    var k = (Game.mode == 0) ? Game.currentLine.shiftAmount : Game.currentLine.vShift;
    switch (selected) {
    case 'Absolute':
        Game.currentLine.graph.drawEquation(function (x) {
            return Game.currentLine.vStretch * Math.abs((x / Game.currentLine.hStretch + h) + Game.shifts.h) + k + Game.shifts.k;
        });
        break;
    case 'squareRoot':
        Game.currentLine.graph.drawEquation(function (x) {
            return Game.currentLine.vStretch * Math.sqrt((x / Game.currentLine.hStretch + h) + Game.shifts.h) + k + Game.shifts.k;
        });
        break;
    case 'Log':
        Game.currentLine.graph.drawEquation(function (x) {
            return Game.currentLine.vStretch * Math.log((x / Game.currentLine.hStretch + h) + Game.shifts.h) + k + Game.shifts.k;
        });
        break;
    case 'Exp':
        Game.currentLine.graph.drawEquation(function (x) {
            return Game.currentLine.vStretch * Math.pow(2, (x / Game.currentLine.hStretch + h) + Game.shifts.h) + k + Game.shifts.k;
        });
        break;
    case 'arcSin':
        Game.currentLine.graph.drawEquation(function (x) {
            return Game.currentLine.vStretch * Math.asin((x / Game.currentLine.hStretch + h) + Game.shifts.h) + k + Game.shifts.k;
        });
        break;
    case 'arcCos':
        Game.currentLine.graph.drawEquation(function (x) {
            return Game.currentLine.vStretch * Math.acos((x / Game.currentLine.hStretch + h) + Game.shifts.h) + k + Game.shifts.k;
        });
        break;
    case 'Quadratic':
    default:
        Game.currentLine.graph.drawEquation(function (x) {
            return Game.currentLine.vStretch * Math.pow((x / Game.currentLine.hStretch + h) + Game.shifts.h, 2) + k + Game.shifts.k;
        });
    };
}

var input = function (e) {
    var divSelector = (Game.parentChoose) ? (Game.equationChosen == '') ? (Game.lastEquation == '') ? '#Quadratic' : '#' + Game.lastEquation : '#' + Game.equationChosen : '#' + Game.currentLevel;
    if (Game.falling && (!Game.kEdit && !Game.hEdit)) {
        switch (e.which) {
        case 75: //k (used for editing k in equation)
            Game.kEdit = true;
            $(divSelector + ' .vShift').val("").focus();
            break;
        case 72: //h (used for editing h in equation)
            Game.hEdit = true;
            $(divSelector + ' .hShift').val("").focus();
            break;

            //Choosing parent functions e = 69, q = 81, a = 65, r = 82, l = 76, s = 83, c = 67
        case 81:
            if (Game.parentChoose) {
                Game.equationChosen = 'Quadratic';
                $(divSelector).hide();
                divSelector = '#Quadratic';
                $(divSelector).show();
            }
            break;
        case 69:
            if (Game.parentChoose) {
                Game.equationChosen = 'Exp';
                $(divSelector).hide();
                divSelector = '#Exp';
                $(divSelector).show();
            }
            break;
        case 65:
            if (Game.parentChoose) {
                Game.equationChosen = 'Absolute';
                $(divSelector).hide();
                divSelector = '#Absolute';
                $(divSelector).show();
            }
            break;
        case 82:
            if (Game.parentChoose) {
                Game.equationChosen = 'squareRoot';
                $(divSelector).hide();
                divSelector = '#squareRoot';
                $(divSelector).show();
            }
            break;
        case 76:
            if (Game.parentChoose) {
                Game.equationChosen = 'Log';
                $(divSelector).hide();
                divSelector = '#Log';
                $(divSelector).show();
            }
            break;
        case 83:
            if (Game.parentChoose) {
                Game.equationChosen = 'arcSin';
                $(divSelector).hide();
                divSelector = '#arcSin';
                $(divSelector).show();
            }
            break;
        case 67:
            if (Game.parentChoose) {
                Game.equationChosen = 'arcCos';
                $(divSelector).hide();
                divSelector = '#arcCos';
                $(divSelector).show();
            }
            break;

        }
    }
    if ((Game.falling && Game.kEdit) || (Game.falling && Game.hEdit)) {
        switch (e.which) {
        case 8: //backspace
            if (Game.negative) {
                Game.negative = false;
            }
            break;
        case 75: //k
            if (Game.kEdit) {
                if ($(divSelector + ' .vShift').val() !== undefined) {
                    var a = $(divSelector + ' .vShift').val();
                    a = a.substring(0, -1);
                    $(divSelector + ' .vShift').val(a)
                }
            }
            if (Game.hEdit) {
                $(divSelector + ' .hShift').val(a).blur();
                Game.hEdit = false;
                Game.kEdit = true;
                $(divSelector + ' .vShift').val("").focus();
            }
            break;
        case 72: //h
            if (Game.hEdit) {
                if ($(divSelector + ' .hShift').val() !== undefined) {
                    var b = $(divSelector + ' .hShift').val();
                    b = b.substring(0, -1);
                    $(divSelector + ' .hShift').val(a);
                }
            }
            if (Game.kEdit) {
                $(divSelector + ' .vShift').val(a).blur();
                Game.kEdit = false;
                Game.hEdit = true;
                $(divSelector + ' .hShift').val("").focus();
            }

            break;
        case 189:
        case 109:
	case 173: //Negative sign
            if (Game.kEdit) {
                $(divSelector + '.vShift').val("-");
            }
            if (Game.hEdit) {
                $(divSelector + '.hShift').val("-");
            }
            Game.negative = true;
            break;
            //Numbers 0-9
        case 48:
        case 49:
        case 50:
        case 51:
        case 52:
        case 53:
        case 54:
        case 55:
        case 56:
        case 57:
            if (Game.kEdit) {
                (Game.negative) ? $(divSelector + ' .vShift').val(Number(String.fromCharCode(e.which)) * -1).blur() :
                    $(divSelector + ' .vShift').val(String.fromCharCode(e.which)).blur();
                if (Game.mode == 0) {
                    Game.currentLine.shiftAmount = Number($(divSelector + ' .vShift').val()) - Game.currentLine.goalvShift
                }
                if (Game.mode == 1) {
                    Game.currentLine.vShift = Number($(divSelector + ' .vShift').val()) - Game.currentLine.goalvShift

                }
                Game.kEdit = false;
                Game.negative = undefined;
            }
            if (Game.hEdit) {
                (Game.negative) ? $(divSelector + ' .hShift').val(Number(String.fromCharCode(e.which)) * -1).blur() :
                    $(divSelector + ' .hShift').val(String.fromCharCode(e.which)).blur();
                if (Game.mode == 0) {
                    Game.currentLine.hShift = Number($(divSelector + ' .hShift').val()) - Game.currentLine.goalhShift;
                }
                if (Game.mode == 1) {
                    Game.currentLine.shiftAmount = Number($(divSelector + ' .hShift').val()) - Game.currentLine.goalhShift;
                }
                Game.hEdit = false;
                Game.negative = undefined;
            }
            break;
        default:
            if (Game.kEdit) {
                var shifts = 'vShift';
            }
            if (Game.hEdit) {
                var shifts = 'hShift';
            }
            if (Game.kEdit || Game.hEdit) {
                var c = $(divSelector + ' .' + shifts).val()
                c = c.substring(0, -1);
                $(divSelector + ' .' + shifts).val(c)
            }
        }
    }
}
$(document).ready(startMenu);

//Doesn't work on second run thro...
$(document).on('keyup', input);