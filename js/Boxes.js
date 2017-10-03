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
//shortDesc: short summary of game
//img: background image displayed
//color: color of box when moused over(should fit with the average color of the background; in hex)
//href: the link to the game
//date: the date the game was released (YYYYMMDD) ex.. for 6/8/2014 put 20140608
//release: 0 = coming soon, 1 = beta, 2 = released
games[0] = {
    //only used if featured different from a game
    title: null,
    shortDesc: null,
    img: null,
    color: null,
    href: null,
    date: null,
}
/*games[1] = {
    title: "EQ Boat",
    shortDesc: "Sail your boat through the rocks to reach the docks.",
	longDesc:"Using simple equations and piecewize functions you lead the boat on a path through the rocks into the docks.",
	spec: "Requires Unity Web Plugin (suported on most major PC and Mac web browsers)",
	math: "Coming soon...",
	credits: "Lead Programmer: David Thames</br>Programmer: Zachery Henshaw", 
    color: "#00A6E1",
    href: "EQBoat/",
    date: null, //TODO
    beta: true,
}*/
games[1] = {
	title: "Trig Identities", //TODO
    shortDesc: "Solve procedurally genorated trig functions.", 
	longDesc:"Solve procedurally genorated trig functions by editing the function.", //TODO
	math: "Coming soon...",
	credits: "Lead Programmers: Jack Schumann and Stephen Shamaienger", 
    color: "#00A6E1",
    href: "TrigIdent/",
    date: "2015 - 7 - 1",
    release: 0,
}
games[2] = {
    title: "Speed Transformations",
    shortDesc: "Test your transformation skills in this fast-paced game!",
	longDesc: "Test your transformation skills in this fast-paced game! Line up your falling graph with the one on the screen to advance. Speed it up to get more points!",math: "Coming soon...",
    math: "Coming soon...",
	credits: "Lead Programmer: Brandon Rozek <br> Lead Programmer: Stephen Shamaiengar", 
	color: "#232323",
    href: "SpeedTransformations/",
    date: null, //TODO
    release: 2,
}
games[3] = {
    title: "Darts",
    shortDesc: "Pop the balloons by graphing the trajectory of your dart.",
	longDesc: "Work on graphing skills with this fun game! Enter the equation of the line your dart will follow, and make sure it pops all of the balloons!",math: "Coming soon...",
    math: "Coming soon...",
	credits: "Lead Programmer: Brandon Rozek <br> Programmer: David Thames <br> Programmer: Stephen Shamaiengar", 
	color: "#55DCFF",
    href: "Darts/",
    date: null, //TODO
	release: 2,
}
games[4] = {
    title: "Theta",
    shortDesc: "Find the exact values of trigonometric functions of angles.",
	longDesc: "Practice exact values of common trig functions with this helpful visual aid. Be consistent to get more points!",
    math: "Coming soon...",
	credits: "Lead Programmer: David Thames <br> Lead Programmer: Brandon Rozek", 
	color: "#b34f4f",
    href: "Theta/",
    date: "2014 - 07 - 26",
    release: 2,
}
games[5] = {
	title: "CarStop",
	shortDesc: "Use your knowledge of physics to stop the car before it hits the obstical!",
	longDesc: "Use your knowledge of physics (or a bit of common sense) to save this car! Make sure the car doesn’t crash into the obstacle in the road. The closer you get to the obstacle, the better your brakes are (and the more points you get). Don’t get too close, though, or… BOOM!",
	math: "Coming soon...",
	credits: "Lead Programmer: Matthew Daniel <br> Lead Programmer: Zachary Henshaw <br> Physicist: Noah Miller", 
	img: "resources/images/carStop.png",
	color: "#00D072",
	href: "Carstop/",
	date: "2014 - 12 - 27",
	release: 0,
}
games[6] = {
	title: "Geometry",
	shortDesc: "Complete the building by following all of the geometric guidlines.",
	longDesc: "Complete the building by following all of the geometric guidlines. Use your geometry skills to explore the interactions of length, area, and volume in this graphing simulator.",math: "Coming soon...",
	math: "Coming soon...",
	credits: "Lead Programmer: Stephen Shamaiengar <br> Lead Programmer: Jack Schumann", 	
	img: "ai/Geometric.svg",
	color: "#7FFF78",
	href: "Geometry/",
	date: "2014 - 12 - 27",
	release: 1,
}
games[7] = {
	title: "Into-Great Space Game",
	shortDesc: "Using physics and calculus, do the calculations to become a top-tier interstellar entrepreneur!",
	longDesc: "Using physics and calculus, do the calculations to become a top-tier interstellar entrepreneur! Buy the cheapest parts you can and still escape the planet’s gravity to make the most profit.",
	math: "Coming soon...",
	credits: "Lead Programmer: Josh Peterson <br> Programmer: David Thames", 
	color: "#000000",
	href: "Space/",
	date: "2014 - 12 - 27",
	release: 1,
}

games[0] = games[featured.game]
