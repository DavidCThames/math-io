// JavaScript Document

function continuejourney(){
	
	
	$(".planetmap").css("z-index", "11");
	$(".planetmap").css("opacity", "1");
	

}

function dangercheck(){
	priceincrease=false;
	
	var s=Math.round(Math.random()*100);
	if(s<danger)
	{
		var q=Math.round(Math.random()*10);
		
		
		if(q===0)
		{
			
			gamemessage("As you decend into the promising looking planet you realize that is it covered in an organgish yellow haze, and seems to be devoid of life at first. Despite the ominous signs you continue your landing. You send your lowest ranking officer out and watch as he finds out the hard way of the radiation covering the planet. You sick person he was only 5! the outer walls of your ship began to bubble and you realize the severity of your mistake. You quickly prepare your ship for a emergency launch but are stopped by a giant mutant squid. The radiation had caused the squid to expand to the size of a 747 and he had somehow gained wings. The squid takes you to his evil squid layer and forces you to entertain his small slimy squid children. You are forced to live the rest of your life in this squid layer. YOU LOSE");
			isgameover=true;
			gameover();
			
		}
		else if(q===1)
		{
			toll=Math.round(Math.random()*999+1);
			gamemessage("SPACE TOLL</br></br>You were charged $"+toll+"</br></br>The toll women winks at you and wishes you a good day");
			totalfunds=totalfunds-toll;
			
		}
		else if(q===2)
		{
			gamemessage("SPACE PIRATES</br></br>The pirates board your ship and demand all of your moneys. You are very fortunate that you opened a bank account earlier and only have some of your money aboard. They take what you have and leave. as they walk out you overhear one of them commenting on your haircut. Despite the fact that they just robbed you, you cant help but being flattered.</br></br>You lose 20% of your funds.");
			totalfunds=Math.round(totalfunds*0.8);
		}
		else if(q===3||q===4)
		{
			gamemessage("A random alien takes some potshots at you with his space lazer, you are lucky enough to be missed. You utter some obscenities and make a comment about teens these days.")
		}
		else if(q===5||q===6||q===7)
		{
			priceincrease=true;
			gamemessage("As you land on the planet you notice the green and gold banners of the intergalactic creature labor union. You're disapointed because you know that the resulting higher labor costs on this planet will mean for more expensive parts.</br></br>All parts are 10% more expensive")
		}
		else if(q===8||q===9||q===10)
		{
			if(wanted===false)
			{
				var result
			    var randomn=Math.round(Math.random()*2);
			    if(randomn===-1)
			    {
				    result="your ship was in good shape and passed inspection! you are waved off";
				    gamemessage("You were stopped by the intergalactic police force for a random ship inspection "+result);
			    }
			    else if(randomn===-2)
			    {
				    result="Your turn signal was not working, the officer looks at you and grins as he hands you a ticket</br></br>You were fined $500";
				    totalfunds=totalfunds-500;
				    gamemessage("You were stopped by the intergalactic police force for a random ship inspection "+result);
			    }
			    else
			    {
					situation=true;
					situationnumber=1;
				    result="The officer finds out about all that music you pirated online. You are arrested immediately";
				    gamemessage("You were stopped by the intergalactic police force for a random ship inspection "+result+"</br></br>will you pay the bail of $10000 or take a chance and break out?</br></br>bail or escape");
				    
			    }
			}
			else
			{
				gamemessage("You have been caught by the intergalactic police again, and you have made the officers day. There is a large warrant out for your arrest.</br>Take comfort in the fact that your capture will most likely lead to a nice vacation for the officer.</br></br>However your journey is over.");
			    gameover();
			}
			
		}
		
	}
}

function changegalaxy(){
	
	if(totalfunds>=500)
	{
		gamemessage("you travel to a new galaxy and lose $500 in fuel costs");
		newgalaxy();
		totalfunds=totalfunds-500;
		document.getElementById("nfunds").innerHTML ="current funds $"+ totalfunds;
	}
        else{
			alert("not enough funds");
		}
}


function planetstart(e){
	
	
	var p=e-200;
	
	
	
	endgif();
	
	$(".planetmap").css("z-index", "-1");
	$(".planetmap").css("opacity", "0");
	
	gravity=planets[p].gravity;
    atmosphere=planets[p].atmosphere;
    elevation=planets[p].elevation;
	planetprofit=planets[p].profit;
	danger=planets[p].danger;
	
	$(".basecolor").css("fill",planets[p].color);
	
	buildanimation();

	dangercheck();
	
    document.getElementById("elevation").innerHTML = "launch elevation: "+elevation;
    document.getElementById("gravity").innerHTML = "planets gravity: "+gravity;
    document.getElementById("atmosphere").innerHTML = "Atmosphere height: "+atmosphere;
	
	
	for(var i=0;i<10;i++)
	{
		$("#10" + i + " .card").remove();
	}
	
    planetsfinished++;	
	newgalaxy();	
	addpart();
	
	changebottomtext();
	
}

////////////new planet functions////////////
function newgalaxy(){
	for(var i=0;i<planets.length;i++)
	{
		planets[i].profit=Math.round((Math.random()*10000));
		planets[i].danger=Math.round((Math.random()*100));
		planets[i].atmosphere=Math.round(((Math.random()*200000)+100000));
		planets[i].gravity=Math.round((((Math.random()*10))));
		planets[i].elevation=Math.round(((Math.random()*100000)));
		
		
	}
	for(var i=1;i<5;i++)
	{
		var q=Math.round(Math.random()*5);
		if(q===0)
		{
			document.getElementById("image"+i).src="resources/jupiter.svg";
			planets[i-1].color="#E56454";
		}
		else if(q===1)
		{
			document.getElementById("image"+i).src="resources/Uranus.svg";
			planets[i-1].color="#3FADC6";
		}
		else if(q===2)
		{
			document.getElementById("image"+i).src="resources/Pluto.svg";
			planets[i-1].color="#BAC100";
		}
		else if(q===3)
		{
			document.getElementById("image"+i).src="resources/planet1.200px.svg";
			planets[i-1].color="#008740";
		}
		else if(q===4)
		{
			document.getElementById("image"+i).src="resources/Mars.svg";
			planets[i-1].color="#DE0000";
		}
		else if(q===5)
		{
			document.getElementById("image"+i).src="resources/Moon.svg";
			planets[i-1].color="#EAEAD2";
		}
	}
	
}

function planetinfo(e){
	if(e===0)
	{
		document.getElementById("nprofit").innerHTML ="NEW GALAXY";
		document.getElementById("ndanger").innerHTML ="COST: $500";
		document.getElementById("natmosphere").innerHTML ="will refresh the current options for planets";
		document.getElementById("ngravity").innerHTML ="";
	document.getElementById("nfunds").innerHTML ="current funds $"+ totalfunds;
	}
	else{
	var p=e-200;
	document.getElementById("nprofit").innerHTML ="profit "+ planets[p].profit;
	document.getElementById("ndanger").innerHTML ="Risk "+ planets[p].danger+"%";
	document.getElementById("natmosphere").innerHTML ="atmosphere "+ planets[p].atmosphere;
	document.getElementById("ngravity").innerHTML ="gravity "+ planets[p].gravity;
	document.getElementById("nfunds").innerHTML ="current funds $"+ totalfunds;
	}
	
}

function situationconsole(){
	if(situationnumber===1)
	{
		var choice=document.getElementById("consoleinput").value;
					var w=true;
				    while(w)
					{
						if(choice==="bail")
				        {
					        totalfunds=totalfunds-10000;
							w=false;
				        }
				        else if(choice==="escape")
				        {
					        gamemessage("Your plans to break out of the galactic penenterary were successful and you escape. next time you are stopped by the police you will be arrested for a life sentence. You are a wanted man!");
					        wanted=true;
							w=false
				        }
					    else
					    {
						   gamemessage("not a choice</br></br>bail or escape");
						   choice=document.getElementById("consoleinput").value;
							
					    }						
					}
					
		situationnumber=0;
		situation=false;
	}
}

