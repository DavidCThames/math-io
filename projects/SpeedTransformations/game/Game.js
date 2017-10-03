//variables and functions for game state
Game = {
    currentLine: undefined,
    currentLevel: undefined,
    level: 1,
    score: 0,
    mode: 0,
    moder: '',
    speed: 'm',
    parentChoose: false,
    kEdit: false,
    hEdit: false,
    negative: false,
    falling: true,
    transformList: [],
    equation: {},
    lastEquation: '',
    equationChosen: ''
}

Game.shifts = {
    fh: function () {
        return Math.floor(Math.random() * 9 - 4);
    },
    fk: function () {
        return Math.floor(Math.random() * 5 - 3);
    }
};