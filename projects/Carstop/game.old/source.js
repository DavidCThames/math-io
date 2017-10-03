var d;
var v;
var b;
function play() {
	$(".menu").css("display", "none");
}
function remStart(){
	//replaces start button with reload

	document.getElementById("start").innerHTML = "<button type='button' onClick='resetfunc()'> RELOAD </button>"
	


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
	
}
function btrue(){
	b = true; 
}
function resetfunc(){
	d = null;
    v = null;
	q = null;
	b = null;
	document.getElementById("distance").innerHTML = "";
	document.getElementById("velocity").innerHTML = "";
	document.getElementById("acceleration").value = "";
	document.getElementById("start").innerHTML = "<button type='button' onClick='distance(); velocity(); remStart(); btrue()'> START </button>";


}
function distance(){
		
	//inserts distance value into distance field	
		d = Math.floor((Math.random() * 24) + 1);
		document.getElementById("distance").innerHTML = d;
		
		
		


}

function velocity(){
		
	//inserts velocity value into velocity field
		v = Math.floor((Math.random() * 60) + 25);
		document.getElementById("velocity").innerHTML = v;
		
			

		

	
	
}

function formulate(){
	if( b == true ){
	var a = document.getElementById("acceleration").value;
	var q = Math.round(((v)*(v))/(-2*d));
		
		if((typeof a ==='number') || (a % 1 !== 0)){
			alert("PLEASE ENTER AN INTEGER!");
			return;
		}
		
		
		//--------------------------------------------------------------------
		
		//animates car
		
		$("img").animate({left:('calc(1% * ' + (((v)^2))/(2*a)/2 +'px)')});
		
		
		//--------------------------------------------------------------------
		
		if ( a == -1 * q){
			alert("YOU WIN!");
		
		
		}
		else{
			
			alert("YOU LOSE!");
		
		}
	}
}