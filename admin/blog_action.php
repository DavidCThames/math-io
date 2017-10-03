<?php
	
	if ($_SERVER['REQUEST_METHOD']== 'POST'){
		//include phpmailer
		require('class.PHPMailer.php');
		//fix to include correct file
		$mode = $_POST['mode'];
		switch ($mode){
			case 'postcomment':
				$thread = $_POST['$thread'];
				$post_id = $_POST['post_id'];
				$content = htmlspecialchars($_POST['content'], ENT_QUOTES);
				if (isset($_COOKIE['username'])){
					$author = $_COOKIE['username'];
				} else {
					$author = $_SESSION['username'];
				}
				date_default_timezone_set("America/New_York");
				$date = date("D, d M Y H:i");
				$query = "INSERT INTO comments (post_id, date, author, content) VALUES ('$post_id', '$date', '$author', '$content')";
				$dbc = mysql_connect('localhost', 'project', 'B0bslayer');
				mysql_select_db('admin');
				mysql_query($query);
				header('location: http://www.admin.math-io.com/blog.php?thread='.$thread);
				break;

			//postentry
			case 'postentry':

				$title = $_POST['title'];
				$content = htmlspecialchars($_POST['content'], ENT_QUOTES);
				$authorUsername = $_COOKIE['username'];
				date_default_timezone_set("America/New_York");
				$date = date("D, d M Y H:i");
				$thread = $_POST['thread'];
				//$thread = str_replace(" ", "_", $thread);

				$query = "INSERT INTO blog ( title, content, author, date, thread) VALUES ('$title', '$content', '$authorUsername', '$date', '$thread')";
				$dbc = mysql_connect('localhost', 'project', 'B0bslayer');
				mysql_select_db('admin');
				mysql_query($query);
				
				//email all subscribers of this thread
				$query = "SELECT * FROM threads WHERE name = '$thread'";
				$result = mysql_query($query);
				$subscriberList = explode(",", $result['subscribers']);
				//get email addresses of specific subscribers
				$thread = str_replace("_", " ", $thread);
				//debug echo statements
				/*
				echo "updated database and found subscribers";
				//$mail = new PHPMailer() or die("Error creating email. ".mysql_error());
				echo "initiated mail message";
				
				$mail->From = 'no-reply@math-io.com';
				$mail->FromName = 'Math-IO Admin';
				

				foreach ($subscriberList as $sub){
					$query = "SELECT * FROM users WHERE username = '$sub'";
					$result = mysql_query($query);
					$results = mysql_fetch_assoc($result);
					$address = $result['email'];
					//send an email about the post
					$mail->AddAddress($address);
					echo "added subscribers as recipients";

				}

				$message = "<html><body>";
				$message .= "<a style = 'font-family:sans-serif;color:blue;text-decoration:none;' href = 'http://www.admin.math-io.com/'>Math-IO</a><br><br>";
				$message .= "<p><strong>In thread ".$thread.", ".$authorUsername." just posted:</strong> </p><br>";
				$message .= "<p>".htmlspecialchars_decode($content, ENT_QUOTES)."</p><br><a href = 'http://www.admin.math-io.com/blog.php?thread=".str_replace(" ", "_", $thread)."'>View post here</a>";
				$message .= "<hr><br><form action = 'http://www.admin.math-io.com/blog_action.php' method = 'post'><input type = 'hidden' name = 'mode' value = 'unsubscribe'/><input type = 'submit' value = 'Unsubscribe from this thread'/><input type = 'hidden' name = 'username' value = '".$sub."'/><input type = 'hidden' name = 'thread' value = '".$thread."'/></form>";
				$message .= "</body></html>";
				echo "set mail message body";
				$mail->Subject = "Math-IO Admin: New Post in ".$thread;
				$mail->Body = $message;

				$mail->IsHTML(true);
				$mail->IsSMTP();
				$mail->Host = 'localhost';
				$mail->Username = 'no-reply@math-io.com';
				$mail->Password = 'B0bslayer';
				echo "set mail,smtp settings";

				if(!$mail->Send()) {
					echo "Error:" . $mail->ErrorInfo; 
				} else {
					echo "Success.";
					$link = 'location: http://www.admin.math-io.com/blog.php?thread='.$thread;
					header($link);
				}
				*/
				header('location: http://www.admin.math-io.com/blog.php?thread='.$thread);
				break;
			//deletepost
			case 'deletepost':
				$thread = $_POST['thread'];
				$id = $_POST['postid'];
				$query = "DELETE FROM blog WHERE id = '$id'";
				$dbc = mysql_connect('localhost', 'project', 'B0bslayer') or die('Error connecting to server. '.mysql_error());
				mysql_select_db('admin') or die ("Error connecting to database. ".mysql_error());
				mysql_query($query) or die('Error updating database.'.mysql_error());
				//////////change to correct url
				//echo "<script>window.location.href='http://www.admin.math-io.com/blog.php?thread=".$thread."</script>";
				
				header('location: http://www.admin.math-io.com/blog.php?thread='.$thread);
				break;
			case 'subscribe':
				$thread = $_POST['thread'];
				$username= $_POST['username'];
				
				$dbc = mysql_connect('localhost', 'project', 'B0bslayer') or die('Error connecting to server. '.mysql_error());
				mysql_select_db('admin') or die ("Error connecting to database. ".mysql_error());
				$query = "SELECT * FROM threads WHERE name = '$thread'";
				$result = mysql_query($query) or die('Error updating database.'.mysql_error());
				
				$results = mysql_fetch_assoc($result);
				$subscribers = $results['subscribers'];
				$subscriberList = explode(",", $subscribers);
				array_push($subscriberList, $username);
				$subscribers = implode(",", $subscriberList);

				$query = "UPDATE threads SET subscribers = '$subscribers' WHERE name = '$thread'";
				mysql_query($query);

				header('location: http://www.admin.math-io.com/home.php');
				break;
			case 'unsubscribe':
				$thread = $_POST['thread'];
				$username = $_POST['username'];
				$dbc = mysql_connect('localhost', 'project', 'B0bslayer');
				mysql_select_db('admin');
				$query = "SELECT * FROM threads WHERE name = '$thread'";
				$result = mysql_query($query);
				$results = mysql_fetch_assoc($result);
				$subscribers = $results['subscribers'];
				$subscriberList = explode(",", $subscribers);
				$index = array_search($username, $subscriberList);
				unset($subscriberList[$index]);
				$subscribers = implode(",", $subscriberList);
				$query = "UPDATE threads SET subscribers = '$subscribers' WHERE name = '$thread'";
				mysql_query($query);
				header('location: http://www.admin.math-io.com/');
				break;

		} 
		
		
	} else {
		header('location: http://www.admin.math-io.com/');
	}
?>