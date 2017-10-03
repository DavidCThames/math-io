// JavaScript Document

function checkfuel(x)
{
	var leftover=rocket.storage-(rocket.fueluse*x)
	if(leftover<0) {
		enoughfuel=false;
	}
}

function testacceleration(){
	var a=rocket.aero+1;
	thrust=((rocket.lift*a)/rocket.mass);
	acceleration=thrust-gravity;
}

function testinitvelocity(){
	return rocket.lift;
}







