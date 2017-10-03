<!-- PHP up here-->

<html>
	<head>
		<meta charset = 'utf-8'/>
		<title>Admin | Login</title>
	</head>
	<body style = "font-family:sans-serif;">
		<?php
			//check if data is submitted yet
			if ($_SERVER['REQUEST_METHOD'] == 'POST'){
				//define the access code
				$access = '0112358';
				
				$username = $_POST['username'];
				$name = $_POST['name'];
				$email = $_POST['email'];
				$password = $_POST['password'];

				$okay = true;
				$usernameErr = $emailErr = $nameErr = $passwordErr = $accessCodeErr = $mysqlErr = $notice = "";
				$register = false;

				//check the username
				if (empty($username)){
					$okay = false;
					$usernameErr = "This is required";
				} else {
					if(!ctype_alnum($username)){
						$okay = false;
						$usernameErr = "Please use only letters and numbers";
					} else {
						$usernameErr = "";
					}
				}
				//password
				if (empty($password)){
					$okay = false;
					$passwordErr = "This is required";
				} else {
					if(!ctype_alnum($password)){
						$okay = false;
						$passwordErr = "Please use letters and numbers";
					} else {
						$passwordErr = "";
					}
				}
				
				//try connecting to db to check for registering or logging in
				if ($okay){
					if ($dbc = @mysql_connect('localhost', 'project', 'B0bslayer') ){
						//try selecting db
						if (@mysql_select_db('admin')){
							$query = "SELECT * FROM users WHERE username = '$username'";
							//try querying db
							if ($result = @mysql_query($query)){
								$rows = mysql_num_rows($result);
								//user exists: he is logging in otherwise he is registering
								if ($rows == 1){
									$register = false;
								} else {
									$register = true;
								}
							} else {
								$mysqlErr = "Could not query db. ".mysql_error();
							}
						} else {
							$mysqlErr = "Could not connect to db. ".mysql_error();
						}
					} else {
						$mysqlErr = "Could not connect to server. ".mysql_error();
					}

					if (!$register){
						$dbc = mysql_connect('localhost', 'project', 'B0bslayer');
						mysql_select_db('admin');
						$query = "SELECT * FROM users WHERE username = '$username' AND password = '$password'";
						$result = mysql_query($query);
						$rows = mysql_num_rows($result);
						
						if ($rows == 1){
							
							$results = mysql_fetch_array($result);
							//set the cookies for login info
							
							setcookie('username', $username);
							setcookie('name', $results['name']);
							
							$name = $results['name'];
							header('Location: http://www.admin.math-io.com/home.php');
							//$notice = "Login successful. Welcome back ".$results['name'];
							

						} else {
							$notice = "Login unsuccessful. You have not registered or you input incorrect information";
						}
					} else if ($register){
						$registerOkay = true;
						
						//confirm all fields are filled
						//access code
						if (empty($_POST['accesscode'])){
							$registerOkay = false;
							$accessCodeErr = "This is required for registering";
						} else {
							$accessCodeErr = "";
						}
						//name
						if (empty($name)){
							$registerOkay = false;
							$nameErr = "This is required for registering";
						} else {
							if (!ctype_alpha($name)){
								$registerOkay = false;
								$nameErr = "Please use only letters";
							} else {
								$nameErr = "";
							}
						}

						if (empty($email)){
							$registerOkay = false;
							$emailErr = "This is required for registering";
						} else {
							$emailErr = "";
						}
						//-----^^^---------^^^^

						//try to register
						if ($registerOkay){
							if ($_POST['accesscode'] == $access){
								$query = "INSERT INTO users (name, email, username, password) VALUES ('$name', '$email', '$username', '$password')";
								mysql_query($query);
								//set cookies for login info
								
								setcookie('username', $username);
								setcookie('name', $results['name']);
								
								$name = $results['name'];
								header('Location: http://www.admin.math-io.com/home.php');
								//$notice = 'Thank you for registering and logging in '.$name;
								
							} else {
								$accessCodeErr = "Incorrect access code";
							}
						}
						
					}
				}
				
				
				

			} else {
				//data not submitted yet
				$okay = false;
				$name = $email = $username = $password = "";
				$notice = $usernameErr = $emailErr = $passwordErr = $nameErr = $accessCodeErr = $mysqlErr = "";
			}
		?>


		<h1>Register / Log In</h1>
		<p>Access code, username, password and email are required for registry.<br>
			Username, password required for login</p>
		<form action = "<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" method="post">
			Access Code: <input type = 'text' name = 'accesscode' /> <span class = "error"><?php echo $accessCodeErr?></span><br><br>

			Name: <input type = 'text' name = "name" value = "<?php echo $name; ?>"/> <span class = "error"><?php echo $nameErr?></span><br><br>

			Username: <input placeholder = 'Use only a-Z, 0-9'type = 'text' name = 'username' value = "<?php echo $username; ?>"/> <span class = "error"><?php echo $usernameErr?></span><br><br>

			Password: <input placeholder = 'Use only a-Z, 0-9' type = "text" name = 'password' value = "<?php echo $password; ?>"/> <span class = "error"><?php echo $passwordErr?></span><br><br>

			Email: <input type = 'text' name = "email" value = "<?php echo $email; ?>"/> <span class = "error"><?php echo $emailErr?></span><br><br>

			<input type = 'submit' value = "Register / Log In"/>
			<?php echo $mysqlErr."<br>"; echo $notice; echo $button;?>
		</form>
	</body>
</html>