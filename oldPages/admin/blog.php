<!-- specific thread page-->

<?php
	if (session_status() == 'PHP_SESSION_NONE' || !isset($_COOKIE['username']) ){
		echo "<script language='javascript' type='text/javascript'>window.location.href='http://www.admin.math-io.com/';</script>";
	} else {
		$name = $_COOKIE['name'];
		$username = $_COOKIE['username'];

	}
?>


<html>
	<head>
		<meta charset = 'utf-8'/>
		<title> Admin | Blog </title>
		<link rel ="stylesheet" href = "style_blog.css"/>
		<script src = "jquery.js"></script>
		<script type = "text/javascript" src = "script_blog.js"></script>
	</head>
	<body style = "font-family:sans-serif;margin:40px;">
		<?php
			if (empty($_GET['thread'])){
				echo "<script>window.location.href='http://www.admin.math-io.com/blog.php?thread=General'</script>";
			} else {
				$thread = $_GET['thread'];
			}
		?>


		<div id = 'navbar' style = 'position:fixed;width:100%;top:10px;'>
			<table style = 'padding:5px;width:100%;background:#8F85FF;'>
				<tr>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;' ><a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href = 'home.php'>	Home	</a></td>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;'><a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href="blog.php?thread=General">	Blog	</a></td>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;'><a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href = 'calendar/'>	Calendar	</a></td>
					<td style = 'border-right:1px solid black;padding:5px;text-align:center;'><a style = 'text-decoration:none;font-weight:bold;font-size:2em;color:white;' href = 'tasks/'>  Tasks    </a></td>
					<td style = 'padding:5px;text-align:center;'><?php echo "<h3 style = 'display:inline;'>Welcome, ".$name."</h3>"; echo "<form method = 'post' action = 'action_home.php'><input type = 'submit' name = 'logout' value = 'Log out'/><input type = 'hidden' name = 'mode' value = 'logout'/></form>";?></td>
				</tr>
			</table>
		</div><br><br><br>
		<div id = "welcome" style = "position:absolute;right:3%; top:90px;">
	
			<?php /*echo "<h3>Welcome, ".$name."</h3>"; 
				echo "<form method = 'post' action = 'action_home.php'><input type = 'submit' name = 'logout' value = 'Log out'/><input type = 'hidden' name = 'mode' value = 'logout'/></form>";
				*/
			?>
		</div>
		<?php
			echo "<h2 id = 'thread' value = '$thread'>".str_replace("_", " ", $thread)."</h2>";
		?>
		<input id = "newEntry" style = "margin:20px;font-size:1em;" type = "submit" value = "New entry" onClick = "showEntryForm()"/>
		<table id = "posts" border='0' style = "width:100%;border-spacing:0 2em;">
			<!--Use php to load it with all the posts-->
			<?php
				function formatComments($id){
					$query = "SELECT * FROM comments WHERE post_id = '$id'";
					$dbc = mysql_connect('localhost', 'project', 'B0bslayer');
					mysql_select_db('admin');
					$result = mysql_query($query);
					$comments = array();
					while ($comment = mysql_fetch_assoc($result)){
						array_push($comments, $comment);
					}
					$comments = array_reverse($comments);
					$commentHtml = "";
					foreach ($comments as $comment){
						$content = $comment['content'];
						$author = $comment['author'];
						$date = $comment['date'];
						$commentHtml .= "<tr style = 'border:1px solid black;'>
							<td style = 'padding:10px;margin:5px;'>
								<p style = 'color:gray; font-style:0.7em;'><span style = 'color:blue; font-weight:bold;'>$author</span> on <span style = 'color:black; font-weight:bold;'>$date</span> wrote:</p>
								<p style = 'font-size:15px;'>".$content."</p>
							</td>
						</tr>";
					}
					return $commentHtml;
				}
				function formatPost($title, $content, $author, $date, $id){
					//only delete your own posts
					if ($_COOKIE['username'] == $author){
						$deleteButton = "<form style = 'position:absolute;right:5%;' method = 'post' action = 'blog_action.php'>
							<input type = 'submit' name = 'delete' value = 'Delete'/>
							<input type = 'hidden' name = 'mode' value = 'deletepost'/>
							<input type = 'hidden' name = 'postid' value = '$id'/>
							<input type = 'hidden' name = 'thread' value = '$thread'/>
						</form>";
					} else {
						$deleteButton = "";
					}
					//sets the id of each table data to the post id
					$commentHtml = formatComments($id);
					echo "<tr><td style = 'border: 1px solid black; padding:10px' id = 'post".$id."'>
						".$deleteButton."
						<h3 style = 'color:blue;'>$title</h3>
						<p style = 'font-style:italic;color:gray;'>Posted by <span style = 'font-weight:bold;color:black;'>$author</span> on <span style = 'font-weight:bold;color:black;'>$date</span></p>
						<br><p>$content</p><br><hr><br>
						<div class = 'comments'>
							<form class = 'commentForm' name = 'commentForm".$id."' id = 'commentForm".$id."' action = 'blog_action.php' method = 'post'>
								<textarea name = 'content' placeholder = 'Your comment here' rows = '4' cols = '40'></textarea>
								<!--Submit button is separate from form so it can fetch post_id-->
								<input type = 'hidden' name = 'mode' value = 'postcomment' />
								<input type = 'hidden' name = 'thread' value = '$thread'/>
								<input id = 'post_id' type = 'hidden' name = 'post_id' value = ''/>
								<input type = 'submit' class = 'commentSubmit' value = 'Post' disabled/>
							</form><br>
						</div>
						<div>
							<input id = 'showComments' style = 'margin:10px;' type = 'submit' Value = 'Show comments' onClick = 'showComments(this)'/><br>
							<table id = 'commentsList".$id."'class = 'commentsList' style = 'position:relative;left:35px;border: 1px solid black; border-collapse:collapse;font-family:monospace;'>".$commentHtml."</table>
						</div>
					</tr></td>";
				}

				

				$dbc = mysql_connect('localhost', 'project', 'B0bslayer') or die("Error connecting to server. ".mysql_error());
				mysql_select_db('admin');
				
				if (empty($thread)){
					$query = "SELECT * FROM blog";
				} else {
					$query = "SELECT * FROM blog WHERE thread = '$thread'";
				}
				
				$result = mysql_query($query) or die("Error connecting to database. ".mysql_error());
				$posts = array();
				//create all the posts
				while($post = mysql_fetch_assoc($result)){
					//formatPost($post['title'], $post['post'], $post['author'], $post['date_posted'], $post['id']);
					array_push($posts, $post);
				}
				//posts show oldest to newest
				$posts = array_reverse($posts);
				foreach ($posts as $post) {
					formatPost(htmlspecialchars_decode($post['title'], ENT_QUOTES), htmlspecialchars_decode($post['content'], ENT_QUOTES), $post['author'], $post['date'], $post['id']);
				}

			?>
		</table>


	</body>
</html