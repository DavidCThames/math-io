function Graph(config) {
    this.minX = config.minX;
    this.minY = config.minY;
    this.maxX = config.maxX;
    this.maxY = config.maxY;
    this.unitsPerTick = config.unitsPerTick;
    this.centerY = config.centerY;
    this.centerX = config.centerX;
    this.canvas = document.getElementById('myCanvas');
    this.tickSize = 20;
    this.context = this.canvas.getContext('2d');
    this.rangeX = this.maxX - this.minX;
    this.rangeY = this.maxY - this.minY;
    this.unitX = this.canvas.width / this.rangeX;
    this.unitY = this.canvas.height / this.rangeY;
    this.iteration = (this.maxX - this.minX) / 1000;
    this.scaleX = this.canvas.width / this.rangeX;
    this.scaleY = this.canvas.height / this.rangeY;
    this.XmaxUnit;
    this.XminUnit;
    this.drawXAxis();
    this.drawYAxis();
    this.drawGrid();
}
Graph.prototype.drawXAxis = function () {
    var context = this.context;
    context.save();
    context.beginPath();
    context.moveTo(0, this.centerY);
    context.lineTo(this.canvas.width, this.centerY);
    context.strokeStyle = 'green';
    context.lineWidth = 2;
    context.stroke();
    context.restore();
};
Graph.prototype.drawYAxis = function () {
    var context = this.context;
    context.save();
    context.beginPath();
    context.moveTo(this.centerX, 0);
    context.lineTo(this.centerX, this.canvas.height);
    context.strokeStyle = 'green';
    context.lineWidth = 2;
    context.stroke();
    context.restore();
};
Graph.prototype.drawGrid = function () {
    var context = this.context;
    context.save();
    context.beginPath();
    context.strokeStyle = '#8c8c8c';
    context.fillStyle = '#000000';
    context.lineWidth = 2;
    var xPosIncrement = this.unitsPerTick * this.unitX;
    var xPos, unit;
    context.font = '12pt Ubuntu';
    context.textAlign = 'left';
    context.textBaseline = 'top';
    xPos = this.centerX - xPosIncrement;
    unit = -1 * this.unitsPerTick;
    while (xPos > 0) {
        context.moveTo(xPos, this.centerY - this.tickSize / 2);
        context.lineTo(xPos, this.canvas.height);
        context.lineTo(xPos, -this.canvas.height);
        context.stroke();
        context.fillText(unit, xPos, this.centerY + this.tickSize / 2 + 3);
        unit -= this.unitsPerTick;
        xPos = Math.round(xPos - xPosIncrement);
        this.XminUnit = unit;
    }
    if (this.XminUnit === undefined) {
        this.XminUnit = -1;
    }
    xPos = this.centerX + xPosIncrement;
    unit = this.unitsPerTick;
    while (xPos < this.canvas.width) {
        context.moveTo(xPos, this.centerY - this.tickSize / 2);
        context.lineTo(xPos, this.canvas.height);
        context.lineTo(xPos, -this.canvas.height);
        context.stroke();
        context.fillText(unit, xPos, this.centerY + this.tickSize / 2 + 3);
        unit += this.unitsPerTick;
        xPos = Math.round(xPos + xPosIncrement);
        this.XmaxUnit = unit;
    }
    var yPosIncrement = this.unitsPerTick * this.unitY;
    var yPos, unit;
    context.font = '12pt Ubuntu';
    context.textAlign = 'right';
    context.textBaseline = 'bottom';
    yPos = this.centerY - yPosIncrement;
    unit = this.unitsPerTick;
    while (yPos > 0) {
        context.moveTo(this.centerX - this.tickSize / 2, yPos);
        context.lineTo(this.canvas.width, yPos);
        context.lineTo(-this.canvas.width, yPos);
        context.stroke();
        context.fillText(unit, this.centerX - this.tickSize / 2 - 3, yPos);
        unit += this.unitsPerTick;
        yPos = Math.round(yPos - yPosIncrement);
    }
    yPos = this.centerY + yPosIncrement;
    unit = -1 * this.unitsPerTick;
    while (yPos < this.canvas.height) {
        context.moveTo(this.centerX - this.tickSize / 2, yPos);
        context.lineTo(this.canvas.width, yPos);
        context.lineTo(-this.canvas.width, yPos);
        context.stroke();
        context.fillText(unit, this.centerX - this.tickSize / 2 - 3, yPos);
        unit -= this.unitsPerTick;
        yPos = Math.round(yPos + yPosIncrement);
    }
    context.restore();
};
Graph.prototype.drawEquation = function (equation, color) {
    var context = this.context;
    context.save();
    this.transformContext();
    context.beginPath();
    context.moveTo(this.XminUnit, equation(this.XminUnit));
    for (var x = this.XminUnit + this.iteration; x <= this.XmaxUnit; x += this.iteration) {
        context.lineTo(x, equation(x));
    }
    context.restore();
    context.lineJoin = 'round';
    context.lineWidth = 1;
    context.strokeStyle = color;
    context.stroke();
    context.restore();
};
Graph.prototype.drawPoint = function (goalx, goaly) {
    var context = this.context;
    context.save();
    this.transformContext();
    context.beginPath();
    var c = document.getElementById("myCanvas");
    var img = document.getElementById("balloon");
    context.drawImage(img, goalx - 0.32, goaly - 0.48, 0.64, 0.96);
    context.stroke();
    context.restore();
};
Graph.prototype.transformContext = function () {
    var context = this.context;
    this.context.translate(this.centerX, this.centerY);
    context.scale(this.scaleX, -this.scaleY);
};
Graph.prototype.reset = function () {
    var context = this.context;
    context.save();
    context.fillStyle = 'white';
    context.fillRect(0, 0, myCanvas.width, myCanvas.height);
    this.drawXAxis();
    this.drawYAxis();
    this.drawGrid();
    context.restore();
};