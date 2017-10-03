
var threadForm = "<form id = 'threadForm' action = 'action_home.php' method = 'post'>\
			Name: <input type = 'text' name = 'name'/><br><br>\
			Manager: <input type = 'text' name = 'manager'/><br><br>\
			<input type = 'submit' value = 'Submit' /></form>";

var newThreadButton = "<input id = 'newThread' style = 'margin:20px;font-size:1em;' type = 'submit' value = 'New Thread' onClick = 'showThreadForm()'/>";
var closeThreadButton = "<input id = 'closeThread' style = 'margin:20px;font-size:1em;' type = 'submit' value = 'Close' onClick = 'closeThreadForm()'/>";

//show the form onclick, switch NEW button to say CLOSE
function showThreadForm(){
	
	$('#newThread').after(threadForm);
	$('#newThread').replaceWith(closeThreadButton);
}

//CLOSE button closes the entry form
function closeThreadForm(){
	$('#threadForm').remove();
	$('#closeThread').replaceWith(newThreadButton);
}