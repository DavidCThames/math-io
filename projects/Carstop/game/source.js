var d; //distance
var v; //velocity
var score = 0;

document.getElementById("score").innerHTML = score;

/*function play() {
	$(".menu").css("display", "none");
	document.getElementById("acceleration").value = "";
}

function options(){
	$(".options").css("display", "block")
	$(".options").css("background-color", "white")
	$(".options").css("width", "100vw")
	$(".options").css("height", "100vh")
	$(".options").css("z-index", "60")
	$(".options").css("position", "absolute")
	$(".options").css("top", "0")
	$(".options").css("left", "0")
}
function help(){
	$(".help").css("display", "block")
	$(".help").css("background-color", "white")
	$(".help").css("width", "100vw")
	$(".help").css("height", "100vh")
	$(".help").css("z-index", "60")
	$(".help").css("position", "absolute")
	$(".help").css("top", "0") 
	$(".help").css("left", "0")
	
}*/
function resetfunc(){
	d = null;
    v = null;
	q = null; //correct answer
	document.getElementById("distance").innerHTML = "";
	document.getElementById("velocity").innerHTML = "";
	document.getElementById("acceleration").value = "";
	velocity();
	distance();
	score = 0;
	document.getElementById("score").innerHTML = score;
}

/*function nextSet(){
		d = null;
		v = null;
		q = null;
		velocity();
		distance();
		
		

}*/

function velocity(){
		
	//inserts velocity value into velocity field
		v = Math.floor((Math.random() * 20) + 10);
		document.getElementById("velocity").innerHTML = v;
		
			

		

	
	
}

function distance(){
		
	//inserts distance value into distance field	
		d = Math.floor((Math.random() * 100) + 50);
	
		
		document.getElementById("distance").innerHTML = d;
		
		
		


}

function formulate(){
	var a = document.getElementById("acceleration").value; // user_input (user's answer)
	
	var q = ((v)*(v))/(2*d);
	
	if (a > q){
		
		score = Math.round((q/a)*10)*100;
		document.getElementById("score").innerHTML = score;
		console.log(score);
	}
	
		//--------------------------------------------------------------------
		
		//animates car
		$(".car").animate({left:animationDist}, 2000);
		
		//NEED BARRIER TO PROGRAM TO ACCURATELY to do [screen.width - barrier_width_location]
		
		//--------------------------------------------------------------------


}