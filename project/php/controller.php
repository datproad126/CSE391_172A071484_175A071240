<?php
// connnection db and select
include 'db.php';

class Controller {
     public $conn;	

     public function __construct()  
     {  
          $this->model = new Model();
     } 
	
     public function invoke()
     {
          if (isset($_GET['UserName']))
          {
               // hiên thị user được yêu cầu
               $usr = $this->model->getUser($_GET['Username']);
               include '../html/admin.html';
          }
     }
}