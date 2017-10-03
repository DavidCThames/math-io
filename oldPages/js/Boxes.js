// JavaScript Document

var notif = { //The noitification banner on the top of home
    use: false,
    img: "resources/notif.png",
    alt: null,
};

var featured = {
    //header: the text in the banner that shows at the top
    //game: which game is used for the text (if not a game set a game[0] = to what this should be and use "game: 0"
    header: "Featured",
    game: 2
};

var games = new Array();
//title: title of game
//about: short summary of game
//img: background image displayed
//color: color of box when moused over(should fit with the average color of the background; in hex)
//href: the link to the game
//date: the date the game was released (YYYYMMDD) ex.. for 6/8/2014 put 20140608
games[0] = {
    //only used if featured different from a game
    title: null,
    about: null,
    img: null,
    color: null,
    href: null,
    date: null,
}
games[1] = {
    title: "EQ Boat",
    about: "Sail your boat through the rocks to reach the docks.",
    img: "resources/images/eqboat.jpg",
    color: "#00A6E1",
    href: "projects/EQBoat/game.html",
    date: null, //TODO
    beta: true,
}
games[2] = {
    title: "Speed Transformations",
    about: "Line up the graph with the dotted line before it reaches the bottom.",
    img: "resources/images/speedtransformations.png",
    color: "#232323",
    href: "projects/SpeedTransformations/game.html",
    date: null, //TODO
    beta: false,
}
games[3] = {
    title: "Darts",
    about: "Pop the balloons by drawing graphs.",
    img: "resources/images/darts.jpg",
    color: "#55DCFF",
    href: "projects/Darts/game.html",
    date: null, //TODO
}
games[4] = {
    title: "Theta",
    about: "Find the exact values of trigonometric functions of angles.",
    img: "resources/images/theta.png",
    color: "#b34f4f",
    href: "projects/Theta/game.html",
    date: "2014 - 07 - 26",
    beta: false,
}
games[5] = {
	title: "CarStop",
	about: "Use physics equations to top the car before it hits the obstical!",
	img: "resources/images/carStop.png",
	color: "#00D072",
	href: "#",
	date: "2014 - 12 - 27",
	beta: true,
}
games[6] = {
	title: "Geometry",
	about: "Complete the building by following all of the geometric guidlines.",
	img: "ai/Geometric.svg",
	color: "#7FFF78",
	href: "#",
	date: "2014 - 12 - 27",
	beta: true,
}