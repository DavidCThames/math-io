// JavaScript Document

var savearray1=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var savearray2=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var savearray3=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];
var savearray4=[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1];

var savearraystrings=["SAVE 1 (EMPTY)","SAVE 2 (EMPTY)","SAVE 3 (EMPTY)","SAVE 4 (EMPTY)"]

var savearrays=[savearray1,savearray2,savearray3,savearray4];    

var cheatarray=[totalfunds];

var xpressed=false;
var cheatsused=false;
var cheatsactive=false;
var situation=false;
var priceincrease=false;
var wanted=false;
var hindsightactive=false;
var enoughfuel=true;
var isgameover=false;
var danger=0;
var totalfunds=10000;
var planetprofit=0;
var planetsfinished=0;
var initvelocity=0;
var acceleration=0;
var gravity=0;
var totalmass=1000;
var totallift=0;
var totalaerodynamics=0;
var totalcost=0;
var totalfuel=0;
var thrust=0;
var situationnumber=0;
var cheatchoice=-1;
////var totalempty=0;
////var totalfilled=0;
var atmosphere;
var elevation;

var rocket={
	mass:0,
	emptyspots:10,
	filledspots:0,
	storage:0,
	aero:0,
	lift:0,
	cost:0,
	fueluse:0
}



/////SHELLS//////
var shells=[shell1,shell2,shell3,shell4];	

var shell1={
	cost:2000,
	mass:500,
	spots:6,
	////nochange////
	aero:0,
	fueluse:0,
	lift:0,
	storage:0
}
var shell2={
	cost:3500,
	mass:1000,
	spots:12,
	////nochange////
	aero:0,
	fueluse:0,
	lift:0,
	storage:0
}
var shell3={
	cost:3000,
	mass:350,
	spots:6,
	////nochange////
	aero:0,
	fueluse:0,
	lift:0,
	storage:0
}
var shell4={
	cost:5000,
	mass:700,
	spots:12,
	////nochange////
	aero:0,
	fueluse:0,
	lift:0,
	storage:0
}
	
////////////////////

////////BOOSTERS///////
var boosters=[booster1,booster2,booster3,booster4];

var booster1={
	cost:300,
	mass:300,
	fueluse:6,
	lift:7000,
	///nochange///
	aero:0,
	storage:0,
	spots:0
}


var booster2={
	cost:400,
	mass:300,
	fueluse:4,
	lift:7000,
	///nochange///
	aero:0,
	storage:0,
	spots:0
}

var booster3={
	cost:500,
	mass:600,
	fueluse:10,
	lift:12000,
	///nochange///
	aero:0,
	storage:0,
	spots:0
}

var booster4={
	cost:600,
	mass:600,
	fueluse:8,
	lift:12000,
	///nochange///
	aero:0,
	storage:0,
	spots:0
}

////////////////////////////

/////////FUEL TANKS///////////
var tanks=[tank1,tank2];

var tank1={
	cost:300,
	mass:1000,
	storage:110000,
	///nochange///
	aero:0,
	spots:0,
	lift:0,
	fueluse:0
}

var tank2={
	cost:500,
	mass:600,
	storage:110000,
	///nochange///
	aero:0,
	spots:0,
	lift:0,
	fueluse:0
}

////////////////////

///////FINS///////////
var fins=[fin1,fin2,fin3,fin4];

var fin1={
	cost:200,
	mass:200,
	aero:0.03,
	///nochange///
	spots:0,
	lift:0,
	fueluse:0,
	storage:0
}

var fin2={
	cost:300,
	mass:200,
	aero:0.05,
	///nochange///
	spots:0,
	lift:0,
	fueluse:0,
	storage:0
}

var fin3={
	cost:300,
	mass:100,
	aero:0.03,
	///nochange///
	spots:0,
	lift:0,
	fueluse:0,
	storage:0
} 

var fin4={
	cost:400,
	mass:100,
	aero:0.05,
	///nochange///
	spots:0,
	lift:0,
	fueluse:0,
	storage:0
}

////////////////////////

/////////CONES//////////
var cones=[cone1,cone2,cone3,cone4];

var cone1={
	cost:200,
	mass:300,
	aero:0.08,
	///nochange///
	spots:0,
	lift:0,
	fueluse:0,
	storage:0
}

var cone2={
	cost:300,
	mass:300,
	aero:0.10,
	///nochange///
	spots:0,
	lift:0,
	fueluse:0,
	storage:0
}

var cone3={
	cost:300,
	mass:200,
	aero:0.08,
	///nochange///
	spots:0,
	lift:0,
	fueluse:0,
	storage:0
}

var cone4={
	cost:400,
	mass:200,
	aero:0.10,
	///nochange///
	spots:0,
	lift:0,
	fueluse:0,
	storage:0
}


var parts=[booster1,booster2,booster3,booster4,tank1,tank2,fin1,fin2,fin3,fin4,cone1,cone2,cone3,cone4];

//////////planet arrays////////////

var newplanet1={
	profit:0,
	danger:0,
	atmosphere:0,
	gravity:0,
	elevation:0,
	color:"black"
}

var newplanet2={
	profit:0,
	danger:0,
	atmosphere:0,
	gravity:0,
	elevation:0,
	color:"black"
}

var newplanet3={
	profit:0,
	danger:0,
	atmosphere:0,
	gravity:0,
	elevation:0,
	color:"black"
}

var newplanet4={
	profit:0,
	danger:0,
	atmosphere:0,
	gravity:0,
	elevation:0,
	color:"black"
}

var planets=[newplanet1,newplanet2,newplanet3,newplanet4];