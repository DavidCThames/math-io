// JavaScript Document

	
function gif(){
	$(".gifbox").css("opacity", "1");
	$(".gifbox").css("z-index", "1");
	
}	

function gif2(){
	$(".gifbox2").css("opacity", "1");
	$(".gifbox2").css("z-index", "1");
	
}	

function endgif(){
	$(".gifbox").css("opacity", "0");
	$(".gifbox").css("z-index", "-1");
	
	$(".gifbox2").css("opacity", "0");
	$(".gifbox2").css("z-index", "-1");
}

function hindsight(){
	hindsightactive=true;
	$(".bottominfo").css("z-index", "-1");
	$(".upgrades").css("z-index", "1");
	$(".test").css("z-index", "1");
	$(".destroyed").css("opacity", "1");
	$(".destroyed").css("z-index", "1");
	document.getElementById("hindsight").innerHTML = "HINDSIGHT MODE";
	document.getElementById("hindsight2").innerHTML = "yes your rocket is gone for good.</br>But you are still welcome to grovel in your failure. And see what you shouldve done.";
}

function launch(){

	if(rocket.cost===0)
	{
		alert("Maybe you should add some parts to your rocket before trying to launch it.")
	}
	else if(rocket.cost>totalfunds)
	{
		alert("not enough funds");
	}
	else{
		$(".launch").css("opacity", "0");
		
		totalfunds=totalfunds-rocket.cost;	
		changebottomtext();
		
		testacceleration()
		
		var x=0,end=false,win=false
		while(end===false){
			
			checkfuel(x);
			
			if((((x*x*(acceleration))/2)+elevation)>=atmosphere)
			{
				if(enoughfuel)
				{
					win=true;
					end=true;
					rocketlaunch(1);
				}
				else
				{
					end=true;
				}	
			}
			
			if((((x*x*(acceleration))/2)+elevation)<=0){
				end=true;
			}
			x++;
		}
		
		if(win===true&&hindsightactive===false){
			
			totalfunds=totalfunds+planetprofit;
			document.getElementById("nfunds").innerHTML ="current funds $"+ totalfunds;
			//gif2();
			gamemessage("YOU MADE IT</br></br>Would you like to continue your journey</br></br><button class='consolebuttons' onClick='continuejourney(); leaveconsole()'>Continue Journey</button></br></br><button class='consolebuttons' onClick='refresh()'>NEW GAME</button>");
			
		}
		else if(win===true)
		{
			gamemessage("BETTER</br></br>These plans would've made it. Now that you have a handle on the game you should try again!</br></br><button class='consolebuttons; leaveconsole()' onClick='refresh()'>NEW GAME</button>");
		}
		else if(hindsightactive===false){
			gif();
			$(".upgrades").css("z-index", "-1");
			$(".test").css("z-index", "-1");
			$(".rocket").css("opacity", "0");
			
			
			if(rocket.storage===0&&rocket.lift===0)
			{			
		        rocketlaunch(3);
				gamemessage("FAILURE</br></br>Wow isn't this intresting, not only did you neglect to add fuel for your rocket, but you also forgot to add boosters to propel it. I would love to know your thought process right now. Like you know I dont really feel like building a working rocket right now, but if I just add fins and cones, you know it might look like a shark. Brilliant!</br></br>Suprisingly your rocket was of no danger to anyone. However the local inhabitants of this planet took offense to your uhh rocket... something about it resembling one of their mothers. Anyway they destroyed your rocket.</br></br>Try again!</br></br><button class='consolebuttons' onClick='hindsight(); leaveconsole()'>CONTINUE</button></br></br><button class='consolebuttons' onClick='refresh()'>NEW GAME</button>")
			}
			else if(rocket.storage===0)
			{
			    rocketlaunch(3);
				gamemessage("FAILURE</br></br>What an idea! Lets just not add a fuel to our rocket. Because who needs fuel anyway? Genius!</br></br>Because of your inability to add fuel you never left the launch pad. Because of this you were stuck and helpless, and a wild herd of martian cows charged and ripped you and your rocket to shreds. Nasty little creatures they are. Fun fact did you know that martian cows have 12 horns, and they are just perfect for tearing poorly made rockets apart.</br></br><button class='consolebuttons' onClick='hindsight(); leaveconsole()'>CONTINUE</button></br></br><button class='consolebuttons' onClick='refresh()'>NEW GAME</button>")
			}
			else if(rocket.lift===0)
			{
			    rocketlaunch(3);
				gamemessage("FAILURE</br></br>Fun Fact: did you know that if you don't add anything to propel your rocket, for example boosters, your rocket will not move.</br></br></br>Your rocket combusted on the launch pad and destoryed 167 acres of forests and led to the extinction of 13 species. Good Job!</br></br><button class='consolebuttons' onClick='hindsight()'>CONTINUE</button></br></br><button class='consolebuttons' onClick='refresh()'>NEW GAME</button>")
			}
			else	
			{
			rocketlaunch(2);
			gamemessage("Unfortunetly your rocket building techniques were not enough for you to make it out the atmosphere. You were however lucky enough that your ejector seat worked. But alas, after escaping the cockpit you asphyxiated, and died quickly due to the lack of oxygen. Nor did your cargo make it. All two hundred innocent kittens aboard your rocket were lost. And their cute furry personalities will never be enjoyed by a family because of you. You will forever be known for your failure as a rocket builder and a mathmatician. SHAME ON YOU </br></br> Thank you for playing, feel free to try again!</br></br><button class='consolebuttons' onClick='hindsight(); leaveconsole()'>CONTINUE</button></br></br><button class='consolebuttons' onClick='refresh()'>NEW GAME</button>");
			}
		}
		else{
			rocketlaunch(2);
			gamemessage("FAILURE</br></br>Yeah your plan still sucks... feel free to quit whenever now.</br></br><button class='consolebuttons' onClick='hindsight(); leaveconsole()'>CONTINUE</button></br></br><button class='consolebuttons' onClick='refresh()'>NEW GAME</button>")
		}
	}
}


function gameover()
{
	$(".upgrades").css("z-index", "-1");
	$(".test").css("z-index", "-1");
	$(".rocket").css("opacity", "0");
	$(".destroyed").css("opacity", "1");
	$(".destroyed").css("z-index", "1");
	var r = confirm("Game over, try again?");
    if (r === true) 
	{
        refresh();
	}
	else 
	{
    }
}

function callanimation(){
	
	$(".launch").css("opacity", "1");
	$(".animation").css("z-index", "10");
	$(".animation").css("opacity", "1");
	$(".arocket").css("transition", "bottom 5s");	
}

function closeanimation(){
	$(".animation").css("z-index", "-1");
	$(".animation").css("opacity", "0");
	$(".arocket").css("transition", "bottom 1s");	
	document.getElementById("abortlaunch").innerHTML = "ABORT";
}

function buildanimation(){
	
	
	var aheight=(atmosphere/300000)*100;
	var gheight=(elevation/300000)*100;
	
	document.getElementById("arocket").src="resources/Rocketship.svg";
	
	$(".arocket").css("transition", "bottom 0s");
	$(".arocket").css("bottom", gheight+"%");
	$(".atheight").css("bottom", aheight+"%");
	$(".groundheight").css("height", gheight+"%");
	
	$(".winlose").css("font-size", "0px");
}






function rocketlaunch(result){
	var lose=false;
	if(result===1)
	{
		$(".arocket").css("bottom", "100%");
		
	}
	if(result===2)
	{
		var goheight=elevation+((atmosphere-elevation)/2);
		goheight=((goheight/300000)*100);
		
		lose=true;
		$(".arocket").css("bottom", goheight+"%");
		setTimeout(function(){document.getElementById("arocket").src="resources/explosion.svg";$(".arocket").css("width", "6%");},5000);
		setTimeout(function(){document.getElementById("arocket").src="resources/explosion.svg";$(".arocket").css("width", "6%");},5000);
		
	}
	if(result===3)
	{
		lose=true;
		document.getElementById("arocket").src="resources/explosion.svg";
		$(".arocket").css("width", "12%");		
	}
	document.getElementById("abortlaunch").innerHTML = "CONTINUE";
	winlose(lose);
}


