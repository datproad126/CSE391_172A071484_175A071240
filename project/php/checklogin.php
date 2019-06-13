<?php
  if (!$_POST) {
    die('Only allow post method');
  }
  $username = $_POST['username'];
  $password = $_POST['password'];

  $jsonFile = '../json/account.json';
  $string = file_get_contents($jsonFile);
  $jsonObjects = json_decode($string, true);

  $logged = false;
  foreach ($jsonObjects as $account) {
    if ($account['User'] == $username && $account['Password'] == $password) {
      $logged = true;
      break;
    }
  }

  $data = array(
    'logged' => $logged
  );
  header('Content-Type: application/json');
  echo json_encode($data);
?>