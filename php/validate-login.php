<?php
// Get the email and password from the AJAX request
$email = $_POST['email'];
$password = $_POST['password'];

// Perform the validation against the RDS database
$host = 'internteam2admin.ctgb19tevqci.eu-west-1.rds.amazonaws.com';
$user = 'admin';
$password = 'mypassword';
$database = 'internteam2admin';

// Create a connection to the RDS database
$conn = new mysqli($host, $user, $password, $database);
if ($conn->connect_error) {
  die('Connection failed: ' . $conn->connect_error);
}

// Prepare the SQL statement with placeholders for email and password
$query = "SELECT * FROM admin_users WHERE email = ? AND password = ?";
$stmt = $conn->prepare($query);

if ($stmt) {
  // Bind the parameters to the placeholders
  $stmt->bind_param('ss', $email, $password);

  // Execute the prepared statement
  $stmt->execute();

  // Fetch the result
  $result = $stmt->get_result();

  // Check if a row is returned
  if ($result && $result->num_rows > 0) {
    echo json_encode(['success' => true]);
  } else {
    echo json_encode(['success' => false, 'message' => 'An error occurred during login: ' . $conn->error]);
  }  

  // Close the statement
  $stmt->close();
} else {
  echo json_encode(['success' => false, 'message' => 'An error occurred during login: ' . $conn->error]);
}


// Close the database connection
$conn->close();
?>
