<?php
// define 
define("servername", "127.0.0.1");
define("database", "the_optimal_user");
define("username", "root");
define("password", "");

function connection_db()
{
  //  Create connection
  $conn = mysqli_connect(servername, username, password, database);
  return $conn;
}

function select_query($query)
{
  $result = connection_db()->query($query);
  if ($result->num_rows > 0) {
    // output data of each row
    while ($row = $result->fetch_assoc()) {
      return $row;
    }
  } 
  else {
    return 0;
  }
}


// Check connection
if ($conn->connect_errno) {
  printf("Connect failed: %s\n", $mysqli->connect_error);
  exit();
}
// echo "Connected successfully";
mysqli_close($conn);
