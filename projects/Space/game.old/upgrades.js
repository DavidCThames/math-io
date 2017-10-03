// JavaScript Document

function addpart(){
	rocket.mass=1000;
	rocket.cost=0;
	rocket.aero=0;
	rocket.spots=0;
	rocket.lift=0;
	rocket.storage=0;
	rocket.fueluse=0;
	for(var i = 0; i < $(".upgradeDrop").length; i++) {
		if($("#10" + i + " .card").attr("id") != null) {
			id = $("#10" + i + " .card").attr("id");
			
			var part=id-1;
			rocket.mass=rocket.mass  +   parts[part].mass;
			rocket.cost=rocket.cost  +   parts[part].cost;
			rocket.aero=rocket.aero  +   parts[part].aero;
			rocket.spots=rocket.spots-1;
			rocket.lift=rocket.lift  +   parts[part].lift;
			rocket.storage=rocket.storage  +   parts[part].storage;
			rocket.fueluse=rocket.fueluse  +   parts[part].fueluse;
		}
		
		
	}
	if(priceincrease===true)
		{
			rocket.cost=Math.round(rocket.cost*1.1);
		}
		cost()
	
}

function losepart(num){
	rocket.mass=rocket.mass  -   parts[num].mass;
	rocket.cost=rocket.cost  -   parts[num].cost;
	rocket.aero=rocket.aero  -   parts[num].aero;
	rocket.spots=rocket.spots  -   parts[num].emptyspots  + 1;
	rocket.lift=rocket.lift  -   parts[num].lift;
	rocket.storage=rocket.storage  -   parts[num].storage;
	rocket.fueluse=rocket.fueluse  -   parts[num].fueluse;
}

function cost(){
	document.getElementById("cost").innerHTML = "COST: $ "+rocket.cost;
	if(rocket.cost>totalfunds){
		$(".costc").css("color", "red");
	}
	else{
		$(".costc").css("color", "hsla(209,100%,58%,1.00)");
	}
	document.getElementById("mass").innerHTML = "mass: "+rocket.mass+" units of weight";
	var aero1=rocket.aero*100+100;
	document.getElementById("aero").innerHTML = "aero: "+aero1;
	document.getElementById("lift").innerHTML = "lift: "+rocket.lift+" energies";
	document.getElementById("storage").innerHTML = "storage: "+rocket.storage+" fuels";
	document.getElementById("fueluse").innerHTML = "fuel use: "+rocket.fueluse+" FUPS";
}

function UpgradesHUD(t) {
	if(t) {
		$(".upgradeHUD").css("z-index", "1");
		$(".upgradeHUD").css("opacity", "1");
		//$(".partinfo").css("z-index", "1");
		
	}
	else {
		$(".upgradeHUD").css("z-index", "-1");
		$(".upgradeHUD").css("opacity", "0");
		$(".partinfo").css("z-index", "-1");
	}
}

var highlighted = "";

function highlight(e) {
	$("#" + highlighted).css("border", "");
	$("#" + e).css("border", "thick red solid");
	highlighted = e;

	var part=e-1;
	if(priceincrease===true)
	{
		document.getElementById("cost1").innerHTML = "COST: $ "+Math.round(parts[part].cost*1.1);
	}
	else
	{
		document.getElementById("cost1").innerHTML = "COST: $ "+parts[part].cost;
	}
	
	document.getElementById("mass1").innerHTML = "mass: "+parts[part].mass+" units of weight";
	var aero1=parts[part].aero*100;
	document.getElementById("aero1").innerHTML = "aero: "+aero1+" %";
	document.getElementById("lift1").innerHTML = "lift: "+parts[part].lift+" energies";
	document.getElementById("storage1").innerHTML = "storage: "+parts[part].storage+" fuels";
	document.getElementById("fueluse1").innerHTML = "fuel use: "+parts[part].fueluse+" FUPS";
}

function moveHighlighted(e) {
	console.log($("#" + e).attr("data-loc") + ", " + $("#" + highlighted).attr("data-loc"));
	var leftside=false;
	if(e==="101"||e==="104"||e==="107")
	{
		leftside=true;
	}
	if(highlighted>6&&highlighted<11&&leftside===true)
	{
		if(highlighted==="7")
		{
			document.getElementById("fin1").src="resources/Fin1L.svg";
		}
		else if(highlighted==="8")
		{
			document.getElementById("fin2").src="resources/Fin2L.svg";
		}
		else if(highlighted==="9")
		{
			document.getElementById("fin3").src="resources/Fin3L.svg";
		}
		else if(highlighted==="10")
		{
			document.getElementById("fin4").src="resources/Fin4L.svg";
		}
		
	}
	if(leftside===false)
		{
			document.getElementById("fin1").src="resources/Fin1R.svg";
			document.getElementById("fin2").src="resources/Fin2R.svg";
			document.getElementById("fin3").src="resources/Fin3R.svg";
			document.getElementById("fin4").src="resources/Fin4R.svg";
		}
	if($("#" + e).attr("data-loc") === $("#" + highlighted).attr("data-loc")&&xpressed===false) {
		$("#" + e + " .card").remove();
		$("#" + e).append($("#" + highlighted).clone());
		$("#" + e + " .card").removeAttr("onClick");
		$("#" + e + " .card").css("border", "");
	}
	xpressed=false;
}

function partInfo(e) {
	var part=e-1;
	if(priceincrease===false)
	{
		document.getElementById("parttitle").innerHTML = document.getElementById(part+1000).innerHTML;
		document.getElementById("cost1").innerHTML = "COST: $ "+parts[part].cost;
	    document.getElementById("mass1").innerHTML = "mass: "+parts[part].mass+" units of weight";
	    var aero1=parts[part].aero*100;
	    document.getElementById("aero1").innerHTML = "aero: "+aero1+" %";
	    document.getElementById("lift1").innerHTML = "lift: "+parts[part].lift+" energies";
	    document.getElementById("storage1").innerHTML = "storage: "+parts[part].storage+" fuels";
	    document.getElementById("fueluse1").innerHTML = "fuel use: "+parts[part].fueluse+" FUPS";
	}
	else
	{
		document.getElementById("parttitle").innerHTML = document.getElementById(part+1000).innerHTML;
		document.getElementById("cost1").innerHTML = "COST: $ "+parts[part].cost+" + "+Math.round(parts[part].cost*0.1);
	    document.getElementById("mass1").innerHTML = "mass: "+parts[part].mass+" units of weight";
	    var aero1=parts[part].aero*100;
	    document.getElementById("aero1").innerHTML = "aero: "+aero1+" %";
	    document.getElementById("lift1").innerHTML = "lift: "+parts[part].lift+" energies";
	    document.getElementById("storage1").innerHTML = "storage: "+parts[part].storage+" fuels";
	    document.getElementById("fueluse1").innerHTML = "fuel use: "+parts[part].fueluse+" FUPS";
	}
	
	
	$(".partinfo").css("left", "20%");
}

function partInfoHide() {
	$(".partinfo").css("left", "0%");
}

function removepart(e)
{
	xpressed=true;
	$("#" + highlighted).css("border", "");
	$("#" + e + " .card").remove();
}