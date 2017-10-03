<?php
	if (session_status() == 'PHP_SESSION_NONE' || !isset($_COOKIE['username'])){
		echo "<script language = 'javascript' type='text/javascript'>window.location.href = 'http://www.admin/math-io.com/';</script> ";
	} else {
		$name = $_COOKIE['name'];
		$username = $_COOKIE['username'];
	}
?>

<html
	<head>
		<meta charset = 'utf-8'>
		<title>Admin | Tasks</title>
		<script src = 'jquery.js'></script>
		<script src = 'script_tasks.js'></script>
	</head>
	<body style = 'margin:40px;font-family:sans-serif;'>
		<div id = 'navbar' style = 'position:fixed;width:100%;top:10px;'>
			<table style = 'padding:5px;width:100%;background:#8F85FF;'>
				<tr>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;'>
						<a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href =
						'http://www.admin.math-io.com/home.php'>	Home    </a>
					</td>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;'>
						<a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href =
						'http://www.admin.math-io.com/blog.php?thread=General'>	Blog    </a>
					</td>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;'>
						<a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href =
						'http://www.admin.math-io.com/calendar'>	Calendar    </a>
					</td>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;'>
						<a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href =
						'http://www.admin.math-io.com/tasks'>	Tasks    </a>
					</td>
					<td style = 'padding:5px;text-align:center;'><?php echo "<h3 style = 'display:inline;'>Welcome, ".$name."</h3>"; echo "<form method = 'post' action = 'http://www.admin.math-io.com/action_home.php'><input type = 'submit' name = 'logout' value = 'Log out'/><input type = 'hidden' name = 'mode' value = 'logout'/></form>";?></td>
				</tr>
			</table>
		</div><br><br><br>
		<input type = 'submit' value = 'New Task' id = 'newtasks' style = 'position:fixed;right:10%;top:120px;'>

		</input>
		<div id = 'tasks' >
			<h2>Current Tasks</h2>
			<table style = 'border:1px solid black;width:80%;border-collapse:collapse;'>
				<style>
					.task {
						padding:10px;
						border:1px solid black;
						width:80%;
					}
				</style>
				
			</table>
		</div>
	</body>
</html>