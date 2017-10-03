// JavaScript Document

function randomize(){

newgalaxy();
	gravity=(((Math.random()*10)));
	atmosphere=((Math.random()*200000)+100000);
	elevation=((Math.random()*100000));
	
	gravity=Math.round(gravity);
	atmosphere=Math.round(atmosphere);
	elevation=Math.round(elevation);
	
	document.getElementById("elevation").innerHTML = "launch elevation: "+elevation;
	document.getElementById("gravity").innerHTML = "planets gravity: "+gravity;
	document.getElementById("atmosphere").innerHTML = "Atmosphere height: "+atmosphere;
}



function refresh(){
	location.reload();
}

function help(){
	gamemessage("INSTRUCTIONS</br></br>insert lengthy instructions here</br></br>Instructions graphic COMING SOON</br></br></br></br></br></br></br></br></br></br></br></br> ");
}
	

function save(){
	gamemessage("<button class='consolebuttons' onClick='save2(0)'>"+savearraystrings[0]+"</button></br></br><button class='consolebuttons' onClick='save2(1)'>"+savearraystrings[1]+"</button></br></br><button class='consolebuttons' onClick='save2(2)'>"+savearraystrings[2]+"</button></br></br><button class='consolebuttons' onClick='save2(3)'>"+savearraystrings[3]+"</button></br></br>");
}	
	

function save2(e){
	var p=e+1;
	savearraystrings[e]="SAVE "+p;
	save();
	
	for(var i = 0; i <= $(".upgradeDrop").length; i++) {
		if($("#10" + i + " .card").attr("id") != null) {
			id = $("#10" + i + " .card").attr("id");
			savearrays[e][i]=parseInt(id);
		}
	}
	
}

function load(){
	gamemessage("<button class='consolebuttons' onClick='load2(0)'>"+savearraystrings[0]+"</button></br></br><button class='consolebuttons' onClick='load2(1)'>"+savearraystrings[1]+"</button></br></br><button class='consolebuttons' onClick='load2(2)'>"+savearraystrings[2]+"</button></br></br><button class='consolebuttons' onClick='load2(3)'>"+savearraystrings[3]+"</button></br></br>");
}


function load2(e){
	for(var i=0;i<10;i++)
	{
		if(savearrays[e][i]===-1)
		{
			$("#10" + i + " .card").remove();
		}
		else
		{
			highlight(savearrays[e][i]);
			var spot=100+i;
			moveHighlighted(spot);
		}
	}
	addpart();
	
}

function giveinfo(){
	var gamecondition;
	if(hindsightactive===true)
	{
		gamecondition="Game Over";
	}
	else{
		gamecondition="In Progress";
	}
	gamemessage("total funds: "+totalfunds+"</br></br>Planets beat: "+planetsfinished+"</br></br>Game status: "+gamecondition+"</br></br>Planet bonus: "+planetprofit+"</br></br>Cheats used: "+cheatsused);

}


function changebottomtext(){
	document.getElementById("totalfunds").innerHTML = "Total Funds: $"+totalfunds+"   Planet Bonus: $"+planetprofit;
	//document.getElementById("planetbonus").innerHTML = "Planet Bonus: $"+planetprofit;
	
}


function bestloadout(){
	var bestarray=[14,4,6,4,4,6,4,4,6,4]
	
	for(var i=0;i<10;i++)
	{
		if(bestarray[i]===-1)
		{
			$("#10" + i + " .card").remove();
		}
		else
		{
			highlight(bestarray[i]);
			var spot=100+i;
			moveHighlighted(spot);
		}
	}
	addpart();
}

function callconsole(){
	$(".console").css("z-index", "2");
	$(".console").css("opacity", "1");
	$(".console").css("bottom", "10%");
}

function leaveconsole(){
	gamemessage("");
	if(situation)
	{
		var consoledata=document.getElementById("innerconsole").innerHTML;
		document.getElementById("innerconsole").innerHTML=consoledata+"</br>U> BLOCKED finish what you are doing";
	}
	else
	{
	$(".console").css("z-index", "-1");
	$(".console").css("opacity", "0");
	$(".console").css("bottom", "-50%");
	}
	
}

function submitconsole(e){
	if(situation){}
	else{
	var consoledata=document.getElementById("innerconsole").innerHTML;
	var consoleinput=document.getElementById("consoleinput").value;
	document.getElementById("innerconsole").innerHTML=consoledata+"</br>U> "+consoleinput;
	
	
	
	
	var consolereply;
	
	if(cheatsactive===true&&e===0)
	{
		cheatmode(consoledata,consoleinput,consolereply);
	}
	else{
	
	if(consoleinput==="help"||consoleinput==="?")
	{
		gamemessage("HelpMenu-command list</br></br>help or ? = helpmenu</br>new game or restart = New game</br>clear = clears the console</br>");
		consolereply="";
	}
	else if(consoleinput==="new game"||consoleinput==="restart")
	{
		consolereply="";
		refresh();
	}
	else if(consoleinput==="load")
	{
		consolereply="";
		load();
	}
	else if(consoleinput==="save")
	{
		consolereply="";
		save();
	}
	else if(consoleinput==="rename")
	{
		consolereply="type new name and then click on the save to rename";
		gamemessage("<button class='consolebuttons' onClick='rename(0)'>"+savearraystrings[0]+"</button></br></br><button class='consolebuttons' onClick='rename(1)'>"+savearraystrings[1]+"</button></br></br><button class='consolebuttons' onClick='rename(2)'>"+savearraystrings[2]+"</button></br></br><button class='consolebuttons' onClick='rename(3)'>"+savearraystrings[3]+"</button></br></br>");
	}
	else if(consoleinput==="cheats on")
	{
		cheatsactive=true;
		cheatsused=true;
		consolereply="cheats active";
		$(".bottominfo").css("color","red");
		$(".bottominfo").css("border-color","red");
		document.getElementById("consoleheader").innerHTML="CHEAT CONSOLE";
		
	}
	else if(consoleinput==="clear"||consoleinput==="clear console")
	{
		consolereply="cleared";
		document.getElementById("innerconsole").innerHTML="";
	}
	else if(consoleinput==="hello"||consoleinput==="hey"||consoleinput==="hi")
	{
		consolereply="greetings";
	}
	else
	{
		var notrec=true;
		for(var i=0;i<4;i++){
			if("load "+savearraystrings[i].toLowerCase()===consoleinput.toLowerCase())
			{
				load2(i);
				consolereply=savearraystrings[i]+" -loaded";
				notrec=false;
			}
			if("rename "+savearraystrings[i].toLowerCase()===consoleinput.toLowerCase())
			{
				load2(i);
				consolereply=savearraystrings[i]+" -rename";
				notrec=false;
			}
		}
		if(notrec){
			consolereply="Command not recognized";
		}
		
	}
	document.getElementById("consoleinput").value="";
	consoledata=document.getElementById("innerconsole").innerHTML
	document.getElementById("innerconsole").innerHTML=consoledata+"</br>C> "+consolereply;
	}
	}
}

function cheatmode(consoledata,consoleinput,consolereply)
{
	if(cheatchoice>-1)
	{
		if(isNaN(consoleinput)===false)
		{
			if(cheatchoice===0)
			{
				totalfunds=totalfunds+parseInt(consoleinput);
				consolereply=consoleinput+" funds added";
				cheatchoice=-1;
				changebottomtext();
			}
			if(cheatchoice===1)
			{
				planetprofit=planetprofit+parseInt(consoleinput);
				consolereply=consoleinput+" planet bonus added";
				cheatchoice=-1;
				changebottomtext();
			}
			
		}
		else
		{
			consolereply="Enter a number";
		}
	}
	else if(consoleinput==="cheats off")
	{
		cheatsactive=false;
		consolereply="cheats off";
		document.getElementById("consoleheader").innerHTML="CONSOLE";
	}
	else if(consoleinput==="best loadout")
	{
		bestloadout();
		consolereply="all highest tier parts installed";
	}
	else if(consoleinput==="add funds")
	{
		consolereply="amount...";
		cheatchoice=0;
	}
	else if(consoleinput==="add planet bonus")
	{
		consolereply="amount...";
		cheatchoice=1;
	}
	else
	{
		submitconsole(1);
		consolereply="";
	}
	
	document.getElementById("consoleinput").value="";
	consoledata=document.getElementById("innerconsole").innerHTML
	document.getElementById("innerconsole").innerHTML=consoledata+"</br>C> "+consolereply;
}

function gamemessage(message)
{
	document.getElementById("innerconsole").innerHTML=message;
	callconsole();
}


function winlose(lose){
	if(lose)
	{
		document.getElementById("winlose").innerHTML="YOU LOSE";
	}
	$(".winlose").css("font-size", "100px");
}

function rename(e){
	savearraystrings[e]=document.getElementById("consoleinput").value;
	document.getElementById("consoleinput").value="";
	gamemessage("renamed");
}


 function keyevent(inputElement, event, e) {
        if (event.keyCode === 13&&e===0) {
            submitconsole(0);
        }
		else if(event.keyCode ===13){
			callconsole();
		}
		else if(event.keyCode ===16){
			leaveconsole();
		}
		
		
    }