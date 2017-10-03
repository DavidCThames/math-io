
//store entry form template

//extracts '?thread=General' for example
var thread = window.location.search.substring(8);
var entryForm = "<form id = 'entryForm' action = 'blog_action.php' method = 'post'>\
			Title: <input placeholder = 'Your title here' type = 'text' name = 'title'/><br><br>\
			<textarea name = 'content' placeholder ='Your content here'rows = '10' cols='100'></textarea><br><br>\
			<input type = 'submit' value = 'Post' />\
			<input type = 'hidden' name = 'mode' value = 'postentry'/>\
			<input type = 'hidden' name = 'thread' value = '" + thread + "' /></form>";

var newEntryButton = "<input id = 'newEntry' style = 'margin:20px;font-size:1em;' type = 'submit' value = 'New Entry' onClick = 'showEntryForm()'/>";
var closeEntryButton = "<input id = 'closeEntry' style = 'margin:20px;font-size:1em;' type = 'submit' value = 'Close' onClick = 'removeEntryForm()'/>";

//show the form onclick, switch NEW button to say CLOSE
function showEntryForm(){
	
	$('#newEntry').after(entryForm);
	$('#newEntry').replaceWith(closeEntryButton);
}

//CLOSE button closes the entry form
function removeEntryForm(){
	$('#entryForm').remove();
	$('#closeEntry').replaceWith(newEntryButton);
}

/////comments



function submitComment(form, idElem, post_id){
	//takes '16' from 'commentForm16'
	var id = post_id.substring(11);
	/*
	//gets the comment form in the current post
	var comment = '#post' + id + ' form.commentForm';
	//sets the value of the post_id input to be submitted
	$(comment + ' #post_id').val(Number(id));
	$(comment).submit();*/
	idElem.value = Number(id);
	form.submit();
}


var showPastCommentsButton = "<input style = 'margin:10px;' type = 'submit' id = 'showComments' value = 'Show Comments' onClick = 'showComments(this)'/>";
var hidePastCommentsButton = "<input style = 'margin:10px;' type = 'submit' id = 'hideComments' value = 'Hide Comments' onClick ='hideComments(this)'/>";

function showComments(button){
	// 2 'next()'s to skip over the <br> and get to the table 
	var br = $(button).next();
	var commentsList = $(br).next();
	$(commentsList).show();

	$(button).replaceWith(hidePastCommentsButton);
	
}
function hideComments(button){
	// 2 'next()'s to skip over the <br> and get to the table 
	var br = $(button).next();
	var commentsList = $(br).next();
	$(commentsList).hide();

	$(button).replaceWith(showPastCommentsButton);
	
}

$(document).ready(function(){
	$('.comments').on('change', function(){
		$('.comments .commentSubmit').prop('disabled', false);
	});
	$('.commentSubmit').click(function(e){
		e.preventDefault();
		submitComment(this.form, this.form.post_id, $(this).parent().attr('id') );
	});
	$('.commentsList').hide();
});



