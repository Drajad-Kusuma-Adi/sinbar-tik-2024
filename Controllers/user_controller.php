<?php
require_once "../Models/user_model.php";

class UserController extends BaseController {
  public function __construct() {
    $this->model = new UserModel();
  }
}
?>