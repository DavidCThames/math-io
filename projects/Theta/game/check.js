/*
/*
    New function Check: 
    uses regular expressions to detect the existence of "sqrt(x)" where x is an integer and 0 <= x < 10
    currently alerts errors
    
    Then divides numerator and denominator 
    
    ------OLD--------
    Takes the arc(Sin/Cos/Tan) depending on Game.operation variable
    Then turns it into degrees and compares it to theta within a margin of error
    
    Keeps in mind the ranges of the arc trig functions
    Checks if it works for positive or negative
    Final answer if it is asking for a positive or negative
    ------------------
    
    finds true answer using Math.[trigfunction] and compares with #sign * #num / #denom
*/
function Check() {
    var numAns = $('#num').prop("data-val");
    var denAns = $('#denom').prop("data-val");
    var sign = $("#sign").data("val");
    
    /*if 0 denom return error*/
    if(denAns == 0) {
        if ($('#submit').next('div').length == 0)
            $('#submit').after("<div style='width:90%; margin:auto; margin-top: 5%; background-color:#E65353; border-radius:5px; padding:2px; text-align:center;'>Denominator cannot equal 0 <br> Tip: Try DNE</div>")
        $('#submit').next('div').hide()
        $('#submit').next('div').fadeIn()
        return 0;
    }
    
    /*if DNE => ans = 1/0 = infinity*/
    if(denAns == "DNE" || numAns == "DNE") {
        numAns = 9999;
        denAns = 1;
        sign = 1;
        console.log(numAns/denAns)
    }
    /*//If no den is inserted make it '1'
    if (String(denAns) == '' || denAns == undefined) {
        denAns = 1;
        //alert("den is now 1");
    }
    if (denom == 0)
        
    console.log(numAns + " / " + denAns);
    //Check if it has a sqrt()*/
    if (Game.sqrt.test(numAns)) {
        /*if (numAns[0] == "-") { //negative check is no longer needed since negative is seperated from num and denom
            numAns = Math.sqrt(Number(numAns.substring(numAns.indexOf("(") + 1, numAns.indexOf(")")))) * -1;
        } else {*/
            numAns = Math.sqrt(Number(numAns.substring(numAns.indexOf("(") + 1, numAns.indexOf(")"))));
        //}
    } else {
        if (isNaN(Number(numAns))) {
            //alert("Must enter a number");
            if ($('#submit').next('div').length == 0) {
                $('#submit').after("<div style='width:90%; margin:auto; margin-top: 5%; background-color:#E65353; border-radius:5px; padding:2px; text-align:center;'>Please enter a dvalid number</div>")
            }
            $('#submit').next('div').hide()
            $('#submit').next('div').fadeIn()
            return 0;
        } else {
            numAns = Number(numAns);
        }
    }
    if (Game.sqrt.test(denAns)) {
        denAns = Math.sqrt(Number(denAns.substring(denAns.indexOf("(") + 1, denAns.indexOf(")"))));
    } else {
        if (isNaN(Number(denAns))) {
            //alert("Must enter a number");
            if ($('#submit').next('div').length == 0) {
                $('#submit').after("<div style=' margin:auto; margin-top: 5%; background-color:#E65353; border-radius:5px; padding:2px; text-align:center;'>Please enter a valid number</div>")
            }
            $('#submit').next('div').hide()
            $('#submit').next('div').fadeIn()
            return 0;
        } else {
            denAns = Number(denAns);
        }
    }
    
    var ans = numAns / denAns * sign;
    console.log(sign);
    var correct = 0;
    var rad = Game.phi * Math.PI / 180; //converet angle to radions
    
    //First determine the operation being used and then get the arc of it leaving the angle in radians, it's converted to degrees next
    switch (Game.operation) {
    /*case 'sin':
        arcAns = Math.asin(ans);
        arcAns *= 180 / Math.PI;
        negQuad = arcAns - 0.000001 < -Game.theta && -Game.theta < arcAns + 0.000001;
        break;
    case 'cos':
        arcAns = Math.acos(ans);
        arcAns *= 180 / Math.PI;
        negQuad = arcAns - 0.000001 < 180 - Game.theta && 180 - Game.theta < arcAns + 0.000001;
        break;
    case 'tan':
        arcAns = Math.atan(ans);
        arcAns *= 180 / Math.PI;
        negQuad = arcAns - 0.000001 < -Game.theta && -Game.theta < arcAns + 0.000001;
        break;
    case 'csc':
        arcAns = Math.asin(1 / ans);
        arcAns *= 180 / Math.PI;
        negQuad = arcAns - 0.000001 < -Game.theta && -Game.theta < arcAns + 0.000001;
        break;
    case 'sec':
        arcAns = Math.acos(1 / ans);
        arcAns *= 180 / Math.PI;
        negQuad = arcAns - 0.000001 < 180 - Game.theta && 180 - Game.theta < arcAns + 0.000001;
        break;
    case 'cot':
        arcAns = Math.atan(1 / ans);
        arcAns *= 180 / Math.PI;
        negQuad = arcAns - 0.000001 < -Game.theta && -Game.theta < arcAns + 0.000001;
        break;*/
        case 'sin':
            correct = Math.sin(rad);
            break;
        case 'cos':
            correct = Math.cos(rad);
            break;
        case 'tan':
            correct = Math.tan(rad);
            break;
        case 'csc':
            correct = 1 / Math.sin(rad);
            break;
        case 'sec':
            correct = 1 / Math.cos(rad);
            break;
        case 'cot':
            correct = 1 / Math.tan(rad);
            break;
    }
    
    /*if greater than 2 assume infinity*/
    if(correct > 2)
        correct = 9999;
    
    //If within margin of error
   // posQuad = arcAns - 0.000001 < Game.theta && Game.theta < arcAns + 0.000001;
    /* posQuad = correct - 0.000001 < ans && ans < correct + 0.000001;

    switch (Game.operation) {
    case 'sin':
    case 'csc':
        var final = (Game.phi > 180) ? negQuad : posQuad
        break;
    case 'cos':
    case 'sec':
        var final = (Game.phi > 90 && Game.phi < 270) ? negQuad : posQuad
        break;
    case 'tan':
    case 'cot':
        var final = ((Game.phi > 90 && Game.phi < 180) || (Game.phi >= 270 && Game.phi < 360)) ? negQuad : posQuad
        break;
    }*/

    if(Math.round(ans * 1000) == Math.round(correct * 1000))
        final = true;
    else
        final = false;
    
    if (final) {
        //alert("You win!");
        Game.score += 10;
        if (Game.triangleShown && !(Game.phi % 90 == 0)) {
            canvas.removeChild(line2);
            canvas.removeChild(text1);
            canvas.removeChild(text2);
            canvas.removeChild(text3);
        }
        if ($('#submit').next('div').length !== 0) {
            $('#submit').next('div').remove()
        }
        $('#panel input').val("")
        $('#panel').hide();
        $('#submit, input').off();
        game();
    } else {
        alert("You lose... Your total Score is: " + Game.score);
        //Goes to main menu and clears 
        $('#panel').hide();
        $('#submit, input').off();
        mainMenu();
        Game = {
            functionsChosen: [],
            triangleShown: false,
            referenceShown: false,
            operation: '',
            theta: undefined,
            phi: undefined,
            angle: undefined,
            sqrt: /sqrt\(\d\)/,
            score: 0
        }
        canvas.removeChild(line2);
        canvas.removeChild(text1);
        canvas.removeChild(text2);
        canvas.removeChild(text3);
        line2 = undefined;
        text1 = undefined;
        text2 = undefined;
        text3 = undefined;
    }

}