<?php
	if (!isset($_COOKIE['username']) || !isset($_COOKIE['name'])){
		header("Location: http://www.admin.math-io.com/");
	}
?>
<html>
	<head>
		<meta charset = 'utf-8'/>
		<title> Admin | Blog </title>
		<link rel ="stylesheet" href = "../../Mobile/admin/old/style_blog.css"/>
		<script src = "../../Mobile/admin/old/jquery.js"></script>
	</head>
	<body style = "font-family:sans-serif;margin:40px;">
		<h1>Home</h1>
		<div id = "welcome" style = "position:absolute;right:3%; top:3%;">
			<?php echo "<h3>Welcome, ".$_COOKIE['name']."</h3>"; ?>
		</div>
		<h3>Blog | Threads</h3>
		<ul>
			<?php
				function linkThread($name, $manager){
					echo "<li><strong>$name</strong> managed by <i>$manager</i></li>";
				}

				//fetch threads list from database
				//threads contain a name and manager username
				$query = "SELECT * FROM threads ";
				$dbc = mysql_connect('localhost', 'project', 'B0bslayer') or die("Error: couldn't connect to server. ".mysql_error());
				mysql_select_db('admin');
				$result = mysql_query($query);
				while ($post = mysql_fetch_assoc($result)){
					linkThread($post['name'], $post['manager']);
				}
			?>
		</ul>
	</body>
</html>