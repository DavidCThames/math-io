Game.Responsive = {
    canvas: function () {
        document.getElementById('myCanvas').width = window.innerWidth;
        document.getElementById('myCanvas').height = window.innerHeight;
    },
    inputs: function () {
        $('.input').width(window.innerWidth / 2.8);
        $('.input').height(window.innerHeight / 10);
    },
    menu: function () {
        document.getElementById('Menu').width = window.innerWidth;
        document.getElementById('Menu').height = window.innerHeight;
    },
    drawLine: function () {
        if (Game.lineDrawn) {
            switch (Game.Type) {
            case "Tutorial":
            case "Linear":
            case "LinearTransformations":
                myGraph.drawEquation(function (x) {
                    return (Game.plot.Linear.mTop / Game.plot.Linear.mBottom) * x + Number(Game.plot.Linear.b);
                }, 'red');
                break;
            case "SimpleQuad":
            case "StandardQuad":
            case "GeneralQuad":
            case "QuadTransformations":
                myGraph.drawEquation(function (x) {
                    return Game.plot.Quadratic.a * (x - Game.plot.Quadratic.h) * (x - Game.plot.Quadratic.h) + Game.plot.Quadratic.k;
                }, 'red')
                break;
            }
        }
    },
    start: function () {
        Game.Responsive.canvas();
        Game.Responsive.inputs();
        Game.Responsive.menu();
        myGraph = {};
        myGraph = new Graph({
            centerY: Game.yAxis,
            centerX: Game.xAxis,
            minX: 0,
            minY: 0,
            maxX: window.innerWidth / (window.innerHeight / 10),
            maxY: 10,
            unitsPerTick: 1
        });
        Game.Responsive.drawLine();
        if (Game.Type != "LinearTransformations" && Game.Type != "QuadTransformations") {
            myGraph.drawPoint(Game.LastX, Game.LastY);
            myGraph.drawPoint(Game.LastX2, Game.LastY2);
        }
        myGraph.drawPoint(Game.LastX3, Game.LastY3);
        myGraph.drawPoint(Game.LastX4, Game.LastY4);
    }
};
Game.Responsive.mouseUp = function () {
    window.removeEventListener('mousemove', Game.Responsive.divMove, true);
};
Game.Responsive.mouseDown = function (e) {
    target = (e.target || e.srcElement).id;
    var div = document.getElementById(target);
    offY = e.clientY - parseInt(div.offsetTop);
    offX = e.clientX - parseInt(div.offsetLeft);
    window.addEventListener('mousemove', Game.Responsive.divMove, true);
};
Game.Responsive.divMove = function (e) {
    var div = document.getElementById(target);
    div.style.top = (e.clientY - offY) + 'px';
    div.style.left = (e.clientX - offX) + 'px';
};