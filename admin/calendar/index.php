<!-- list of threads-->

<style>
    @import url("style.css");
</style>

<?php
	if (session_status() == 'PHP_SESSION_NONE' || !isset($_COOKIE['username'])){
		echo "<script language='javascript' type='text/javascript'>window.location.href='http://www.admin.math-io.com/';</script>";
	} else {
		$name = $_COOKIE['name'];
		if (empty($_SESSION['username'])){
			$username = $_COOKIE['username'];
		} else {
			$username = $_SESSION['username'];
		}

	}
?>

<html>
	<head>
		<meta charset = 'utf-8'>
		<title>Admin | Calendar</title>
		<script src='jquery.js'></script>
		<script type = 'text/javascript' src = 'moment.js'></script>
		<script type="text/javascript" src = 'underscore.js'></script>
		<script type = 'text/javascript' src = 'clndr.js'></script>
		<script type = 'text/javascript' src = 'script_calendar.js'></script>
		<script type="text/javascript" src = 'jquery.maskedinput-1.2.2.js'></script>
		<link rel = 'stylesheet' href ='style_calendar_mini.css'/>
	</head>
	<body style = 'margin:40px;font-family:sans-serif;'>
		<div id = 'navbar' style = 'position:fixed;width:100%;top:10px;'>
			<table style = 'padding:5px;width:100%;background:#8F85FF;'>
				<tr>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;'><a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href = 'http://www.admin.math-io.com/home.php'>	Home	</a></td>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;'><a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href="http://www.admin.math-io.com/blog.php?thread=General">	Blog	</a></td>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;'><a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href = 'calendar.php'>	Calendar	</a></td>
					<td style = 'padding:5px;text-align:center;'><?php echo "<h3 style = 'display:inline;'>Welcome, ".$name."</h3>"; echo "<form method = 'post' action = 'http://www.admin.math-io.com/action_home.php'><input type = 'submit' name = 'logout' value = 'Log out'/><input type = 'hidden' name = 'mode' value = 'logout'/></form>";?></td>
				</tr>
			</table>
		</div><br><br><br>
		<!--embedded calendar-->
		<!--
		<div id="upto-calendar-container-i3MOKO" class="upto-calendar-plugin"><script>!function(c,b,a){function d(h){var e=document.getElementById("upto-calendar-container-"+c),f=document.createElement("SCRIPT"),g="http://upto.com/js/embed.js";f.onreadystatechange=function(){if(f.readyState==="loaded"||f.readyState==="complete"){f.onreadystatechange=null;h()}};f.onload=function(){h()};f.setAttribute("src",g);e.parentNode.insertBefore(f,e)}d(function(){upto.init(c,b,a)})}("i3MOKO",["rCYO"],{"template":"4"});</script></div>
		-->
		<a href="http://www.google.com/calendar/event?action=TEMPLATE&src=ne8o8vnofs03ul2r58145efhdo%40group.calendar.google.com&text=Math%20I/O&details=&sprop=website:www.math-io.com" style="display: block;">
        <div id = 'eventForm' class = 'eventForm'>
            <h3>
                Add Event<br>
            </h3>
            <h1> + </h1>
			<!--<script type="text/javascript">
				var newEventForm = "<form id = 'newEventForm' action = 'action_calendar.php' method = 'post'>\
						<fieldset style = 'padding:20px;'>\
						<label name = 'date' value = 'date'>Date</label> <br><input class = 'masked' id = 'date' type = 'text' name = 'date' placeholder = 'YYYY-MM-DD'/><br><br>\
						<label name = 'time' value = 'time'>Time (24-hr)</label><br><input class = 'masked' type = 'text' id = 'time' name = 'time' placeholder = 'HH:MM'/><br><br>\
						<label name = 'location' value = 'location'>Location</label><br><input type = 'text' name = 'location'/><br><br>\
						<label name = 'host' value = 'host'>Host</label><br><input type = 'text' name = 'host'/><br><br>\
						<label name = 'title' value = 'title'>Title</label><br><input type = 'text' name = 'title'/><br><br>\
						<label name = 'description' value = 'description'>Description</label><br><textarea name = 'description' rows = '2' cols = '40'></textarea><br><br>\
						<input type = 'submit' name = 'submit' value = 'Schedule event'></form>\
						</fieldset>";

				var showEventFormButton = "<input id ='showEventFormButton' type = 'submit' value = 'New Event' onClick = 'showEventForm()' />";
				var hideEventFormButton = "<input type = 'submit' id = 'hideEventFormButton' value = 'Close' onClick = 'hideEventForm()' />";

				function showEventForm(){
					$('#showEventFormButton').after(newEventForm);
					$('#showEventFormButton').replaceWith(hideEventFormButton);
				}

				function hideEventForm(){
					$('#newEventForm').remove();
					$('#hideEventFormButton').replaceWith(showEventFormButton);
				}

			</script>
			<input id ='showEventFormButton' type = 'submit' value = 'New Event' onClick = 'showEventForm()' />
		</div>
		
		<!--
		<div id="full-clndr" class="clearfix">
          <script type="text/template" id="full-clndr-template">
            <div class="clndr-grid">
              <div class="days-of-the-week clearfix">
                <% _.each(daysOfTheWeek, function(day) { %>
                  <div class="header-day"><%= day %></div>
                <% }); %>
              </div>
              <div class="days clearfix">
                <% _.each(days, function(day) { %>
                  <div class="<%= day.classes %>" id="<%= day.id %>"><span class="day-number"><%= day.day %></span></div>
                <% }); %>
              </div>
            </div>
            <div class="event-listing">
              <div class="event-listing-title">EVENTS THIS MONTH</div>
              <% _.each(eventsThisMonth, function(event) { %>
                  <div class="event-item">
                    <div class="event-item-name"><%= event.title %></div>
                    <div class="event-item-location"><%= event.location %></div>
                  </div>
                <% }); %>
            </div>
          </script>
          <script type="text/javascript">
          	clndr = $('#full-clndr').clndr({
			    template: $('#full-clndr-template').html(),
			    events: events
			  });
          </script>-->
        </div></a>
		
		
		<div id = 'calendar' style = 'float:right;position:fixed; left:1vw; width:71vw; overflow:scroll; height:calc(100% - 104px);' scrolling>
            <iframe src="https://www.google.com/calendar/embed?title=Math%20I%2FO&amp;height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;src=ne8o8vnofs03ul2r58145efhdo%40group.calendar.google.com&amp;color=%23182C57&amp;ctz=America%2FLos_Angeles" style=" border-width:0; width:70vw; height:50vw" frameborder="0";></iframe>
		</div>

		<!--<script id = 'calendar-template' type = 'text/template'>
		 	<div class="controls">
              <div class="clndr-previous-button"><</div><div class="month"><%= month %></div><div class="clndr-next-button">></div>
            </div>

            <div class="days-container">
              <div class="days">
                <div class="headers">
                  <% _.each(daysOfTheWeek, function(day) { %><div class="day-header"><%= day %></div><% }); %>
                </div>
                <% _.each(days, function(day) { %><div class="<%= day.classes %>" id="<%= day.id %>"><%= day.day %></div><% }); %>
              </div>
              <div class="events">
                <div class="headers">
                  <div class="x-button">x</div>
                  <div class="event-header">EVENTS</div>
                </div>
                <div class="events-list">
                  <% _.each(eventsThisMonth, function(event) { %>
                    <div class="event">

                      <h3><%= moment(event.date).format('MMMM Do') %> <%= event.time %> - <%= event.title %> at <%= event.location %></h3>
                      <p><%= event.description %></p>
                    </div>
                  <% }); %>
                </div>
              </div>
            </div>
		</script>
		<script type = 'text/javascript'>
			var currentMonth = moment().format('YYYY-MM');
			var nextMonth    = moment().add('month', 1).format('YYYY-MM');
			var events = [
			  <?php
			  
			  	$dbc = mysql_connect('localhost', 'project', 'B0bslayer');
			  	mysql_select_db('admin');
			  	$sql = "SELECT * FROM calendar";
			  	$result = mysql_query($sql);
			  	while ($event = mysql_fetch_assoc($result)){
			  		$time = $event['time'];
			  		$date = $event['date'];
			  		$title = htmlspecialchars_decode($event['title'], ENT_QUOTES);
			  		$location = htmlspecialchars_decode($event['location'], ENT_QUOTES);
			  		$description = htmlspecialchars_decode($event['description'], ENT_QUOTES);
			  		echo "{ time: '$time', date: '$date', title: '$title', location: '$location', description: '$description' }, ";
			  	}
			  ?>
			  
			];
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
		</script>-->
		
	</body>
</html>