var newEventForm = "<form id = 'newEventForm' action = 'action_calendar.php' method = 'post'>\
						Date: <input class = 'masked' id = 'date' type = 'text' name = 'date' placeholder = 'YYYY-MM-DD'/><br>\
						Time (24-hr time): <input class = 'masked' type = 'text' id = 'time' name = 'time' placeholder = 'HH:MM'/><br>\
						Location: <input type = 'text' name = 'location'/><br>\
						Host: <input type = 'text' name = 'host'/><br>\
						Title: <input type = 'text' name = 'title'/>\
						Description: <textarea name = 'description' rows = '2' cols = '40'></textarea><br>\
						<input type = 'submit' name = 'submit' value = 'Schedule event'></form> ";

var showEventFormButton = "<input id ='showEventFormButton' type = 'submit' value = 'New Event' onClick = 'showEventForm()' />";
var hideEventFormButton = "<input type = 'submit' id = 'hideEventFormButton' value = 'Close' onClick = 'hideEventForm()'/>";

function showEventForm(){
	$('#showEventFormButton').after(newEventForm);
	$('#showEventFormButton').replaceWith(hideEventFormButton);
}

function hideEventForm(){
	$('#newEventForm').remove();
	$('#hideEventFormButton').replaceWith(showEventFormButton);
}	


var currentMonth = moment().format('YYYY-MM');
var nextMonth    = moment().add('month', 1).format('YYYY-MM');
//using php to write events, make sure to put the date in format YYYY-MM-DD
var events = [
  { date: currentMonth + '-' + '10', title: 'Persian Kitten Auction', location: 'Center for Beautiful Cats' },
  { date: currentMonth + '-' + '19', title: 'Cat Frisbee', location: 'Jefferson Park' },
  { date: currentMonth + '-' + '23', title: 'Kitten Demonstration', location: 'Center for Beautiful Cats' },
  { date: nextMonth + '-' + '07',    title: 'Small Cat Photo Session', location: 'Center for Cat Photography' }
];



$(document).ready(function(){

	$('#date').mask("9999-99-99",{placeholder:"-"});
	/*
	$('#calendar').clndr({
		template: $('#calendar-template').html(),
		events: events,
		clickEvents: {
			click: function(target) {
			  if(target.events.length) {
			    var daysContainer = $('#calendar').find('.days-container');
			    daysContainer.toggleClass('show-events', true);
			    $('#calendar').find('.x-button').click( function() {
			      daysContainer.toggleClass('show-events', false);
			    });
			  }
			}
		},
		adjacentDaysChangeMonth: true
	});
	*/

});