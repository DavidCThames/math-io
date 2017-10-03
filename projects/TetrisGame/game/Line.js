/*an actual object for lines
includes equation with shifting

animation function is in Graph.js, accepts a line object and animates it
*/
function Line(config) {

    this.equation = config.equation;
    this.type = config.type;
    this.hShift = Game.shifts.h; //specified like in regular graphing, positive goes to left, negative to right
    this.vShift = Game.shifts.k;
    this.hStretch = 1;
    this.vStretch = 1;

    this.goalhShift = this.hShift;
    this.goalvShift = this.vShift;

    this.graph = myGraph;
    //console.log('new line');
    this.shiftIncrement = 0.2; //amount of change in animation frame
    this.shiftAmount = 5; //starting vertical shift amount, height of falling graph above goal graph
    this.stretchFactor;
    //var for state
    this.falling = false;
    this.graph.drawdottedEquation(this.equation);
}