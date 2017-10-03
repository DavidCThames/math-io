<!-- list of threads-->
<?php
	if (session_status() == 'PHP_SESSION_NONE' || !isset($_COOKIE['username'])){
		echo "<script language='javascript' type='text/javascript'>window.location.href='http://www.admin.math-io.com/';</script>";
	} else {
		$name = $_COOKIE['name'];
		$username = $_COOKIE['username'];

	}
?>

<html>
	<head>
		<meta charset = 'utf-8'>
		<title>Admin | Home</title>
		<script src='jquery.js'></script>
		<script type = 'text/javascript' src = 'script_home.js'></script>
		<link rel = 'stylesheet' href ='style.css'/>
	</head>
	<body style = 'margin:40px;font-family:sans-serif;'>
		<div id = 'navbar' style = 'position:fixed;width:100%;top:10px;'>
			<table style = 'padding:5px;width:100%;background:#8F85FF;'>
				<tr>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;'><a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href = 'home.php'>	Home	</a></td>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;'><a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href="blog.php?thread=General">	Blog	</a></td>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;'><a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href = 'calendar/'>	Calendar	</a></td>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;'><a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href = 'tasks/'>  Tasks    </a></td>
					<td style = 'padding:5px;text-align:center;'><?php echo "<h3 style = 'display:inline;'>Welcome, ".$name."</h3>"; echo "<form method = 'post' action = 'action_home.php'><input type = 'submit' name = 'logout' value = 'Log out'/><input type = 'hidden' name = 'mode' value = 'logout'/></form>";?></td>
				</tr>
			</table>
		</div><br><br><br>
		<div id = "welcome" style = "position:absolute;right:3%; top:90px;">
			<?php /*
				echo "<h3>Welcome, ".$_COOKIE['name']."</h3>"; 
				echo "<form method = 'post' action = 'action_home.php'><input type = 'submit' name = 'logout' value = 'Log out'/><input type = 'hidden' name = 'mode' value = 'logout'/></form>";
				*/
			?>
		</div>
		<div style="margin-top: 30px; padding-top:25px; text-align:center;width:40%; max-width:600px; min-width:350px; height:10%; min-height:100px; max-height:200px; background-color:green;">
			<a href="GameCreator/GameCreator.html" style="text-decoration:none;font-weight:bold;font-size:30px;color:white;  line-height:50%; position:relative; top:25%;" >Create new game page</a>
		</div>
		<div id = 'threadlist'>
			<h3><strong>Threads</strong></h3>
			<?php
				
				function linkThread($name, $manager, $subscribed, $username){
					if (!$subscribed){
						$subcribeButton = "<form style = 'display:inline;' method = 'post' action = 'blog_action.php'><input style = 'display:inline;' type = 'submit' value = 'Subscribe'/><input type = 'hidden' name = 'username' value ='".$username."'><input type = 'hidden' name = 'thread' value ='$name''><input type = 'hidden' name = 'mode' value = 'subscribe'/></form>";
					} else {
						$subcribeButton = "<form style = 'display:inline;' method = 'post' action = 'blog_action.php'><input style = 'display:inline;' type = 'submit' value = 'Unsubscribe'/><input type = 'hidden' name = 'username' value = '".$username."'/><input type = 'hidden' name = 'thread' value = '".$name."'/><input type = 'hidden' name = 'mode' value = 'unsubscribe' /></form>";
					}
					echo "<div class = 'thread'><a href = 'http://www.admin.math-io.com/blog.php?thread=".$name."'><h4>".str_replace('_', ' ', $name)."</a> by $manager</h4>".$subcribeButton."</div>";
				}

				$dbc = mysql_connect('localhost', 'project', 'B0bslayer') or die("Error: couldn't connect to server. ".mysql_error());
				mysql_select_db('admin');
				$query = "SELECT * FROM threads";
				$results = mysql_query($query);

				while ($result = mysql_fetch_assoc($results) ) {
					//php docs say to use '===' to check for equality of return value
					if ( strpos( $result['subscribers'], $username) === false){
						$subscribed = false;
					} else {
						$subscribed = true;
					}
					linkThread(htmlspecialchars_decode($result['name'], ENT_QUOTES), $result['manager'], $subscribed, $_COOKIE['username']);
				}

			?>
		</div>
		<input id = 'newThread' style = 'margin:20px;font-size:1em;' type = 'submit' value = 'New Thread' onClick = 'showThreadForm()'/>
	</body>
</html>