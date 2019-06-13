<?php
class Account {
  public $UserName;
  public $DisplayName;
  public $Password;
  public function __construct($DisplayName,$UserName,$Password)
  {
    $this->$DisplayName=$DisplayName;
    $this->$UserName=$UserName;
    $this->$Password=$Password;
  }
}
?>