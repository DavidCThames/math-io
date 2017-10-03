var Game = {
    yAxis: window.innerHeight - 60,
    xAxis: 30,
    lineDrawn: false,
    Score: 0,
    SubLevel: 1,
    fStretch: function () {
        var myChoices = [-2, -1, -0.5, 0.5, 1, 2];
        return myChoices[Math.floor(Math.random() * myChoices.length)];
    }
};
Game.plot = {
    Linear: {
        mTop: undefined,
        mBottom: undefined,
        b: undefined
    },
    Quadratic: {
        a: undefined,
        h: undefined,
        k: undefined
    }
}
Game.Tutorial = {
    fGoalX: function () {
        return Math.floor((Math.random() * 6) + 2);
    },
    fGoalY: function () {
        return Math.floor((Math.random() * 5) + 2);
    }
};
Game.Coordinate = {
    sub1: {
        fGoalX1: function () {
            return Math.floor((Math.random() * 5) + 3);
        },
        fGoalY1: function () {
            return Math.floor((Math.random() * 3) + 1);
        }
    },
    sub2: {
        fGoalX1: function () {
            return Math.floor((Math.random() * 15) - 7);
        },
        fGoalY1: function () {
            return Math.floor((Math.random() * 3) + 1);
        }
    },
    sub3: {
        fGoalX1: function () {
            return Math.floor((Math.random() * 15) - 7);
        },
        fGoalY1: function () {
            return Math.floor((Math.random() * 7) - 3);
        }
    }
};
Game.Linear = {
    fGoalX1: function () {
        return Math.floor((Math.random() * 7) + 2);
    },
    fGoalY1: function () {
        return Math.floor((Math.random() * 6) + 2);
    },
    fGoalX2: function () {
        X2 = Math.floor((Math.random() * 7) + 2);
        if (X2 == Game.LastX) {
            this.fGoalX2();
        }
        return X2;
    },
    fGoalY2: function () {
        return Math.floor((Math.random() * 6) + 2);
    }
};
Game.Quad = {
    fGoalX1: function () {
        return Math.floor((Math.random() * 5) + 3);
    },
    fGoalY1: function () {
        return Math.floor((Math.random() * 3) + 1);
    },
    fGoalX2: function () {
        return Game.LastX + Math.floor((Math.random() * 2) + 1);
    },
    fGoalY2: function () {
        return Game.LastY + Math.floor((Math.random() * 4) + 1);
    },
    fVerticalShift: function () {
        return Math.floor((Math.random() * 5) - 2);
    },
    fHorizontalShift: function () {
        return Math.floor((Math.random() * 5) - 2);
    }
};

Game.ZeroQuad = {
    n: undefined,
    fGoalX1: function () {
        return Math.floor((Math.random() * 9) - 4);
    },
    fGoalX2: function () {
        this.n = Math.floor((Math.random() * 7) - 3);
        if (this.n == 0) {
            this.fGoalX2();
        }
        return Game.LastX + this.n;
    },
    GoalY1: 0,
    GoalY2: 0
};
Game.LinearTransformations = {
    fGoalX1: function () {
        return Math.floor((Math.random() * 7) + 2);
    },
    fGoalY1: function () {
        return Math.floor((Math.random() * 4) + 2);
    },
    fGoalX2: function () {
        X2 = Math.floor((Math.random() * 7) + 2);
        if (X2 == Game.LastX) {
            this.fGoalX2();
        }
        return X2;
    },
    fGoalY2: function () {
        Y2 = Math.floor((Math.random() * 4) + 2);
        if (Y2 == Game.LastY) {
            this.fGoalY2();
        }
        return Y2;
    },
    fVerticalShift: function () {
        return Math.floor((Math.random() * 5) - 2);
    },
    fHorizontalShift: function () {
        return Math.floor((Math.random() * 5) - 2);
    }
};
Game.messages = [ /*Time template, Quit message, Win message, Lose message, Base Linear Template, Base Quad Template*/ ]
Game.messages[0] = '<div id = "timeInput">\
                        <label>\
                            <select id = "min">\
                                <option value = "5">5 minutes</option>\
                                <option value = "4">4 minutes</option>\
                                <option value = "3">3 minutes</option>\
                                <option value = "2">2 minutes</option>\
                                <option value = "1">1 minutes</option>\
                            </select>\
                        </label>\
                        <label>\
                            <select id = "sec">\
                                <option value = "0">0 seconds</option>\
                                <option value = "15">15 seconds</option>\
                                <option value = "30">30 seconds</option>\
                                <option value = "45">45 seconds</option>\
                            </select>\
                        </label>\
                    </div>';
Game.messages[1] = "<div id='endText' class='msg'>\
                        <h2> Are you sure you want to quit? </h2>\
                        <input type='submit' id='quit' value='Yes'/>\
                        <input type='submit' id='resume' value='No'/>\
                    </div>";
Game.messages[2] = "<div id='endText' class='msg'>\
                        <h1> You win! </h1>\
                        <input type='submit' id='reset' value='Next'/>\
                    </div>";
Game.messages[3] = "<div id='endText' class='msg'>\
                        <h1> You lose... </h1>\
                        <input type='submit' id='reset' value='Retry'/>\
                    </div>";

Game.messages[4] = '<div id="Linear" class="input" onMouseDown="Game.Responsive.mouseDown(event)" onMouseUp="Game.Responsive.mouseUp()">\
                        Y = <input type="text" id="rise" value="rise" class="text" />/\
                        <input type="text" id="run" value="run" class="text" />X\
                        <span id="Horizontal"></span>\
                        + <input type="text" id="b2" class="text" />\
                        <input type="submit" value="Submit!" class="Submit" />\
                    </div>';
Game.messages[5] = '<div id="StandardQuad" class="input" onMouseDown="Game.Responsive.mouseDown(event)" onMouseUp="Game.Responsive.mouseUp()">Y =\
                        <input type="text" id="a" value="a" class="text" />( X -\
                        <input type="text" id="h2" value="h" class="text" />)^2 +\
                        <input type="text" id="k2" value="k" class="text" />\
                        <input type="submit" value="Submit!" class="Submit" />\
                    </div>'