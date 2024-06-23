<?php

class BaseModel {
  // Database properties
  public $connection;
  public $model;

  public function __construct() {
    try {
      // Enable error reporting for mysqli.
      mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

      // Load the database connection parameters from the .env file.
      $env = parse_ini_file("../.env");

      // If the .env file cannot be loaded, throw an exception.
      if (!$env) {
        throw new Exception("Unable to load environment file.");
      }

      // Establish a connection to the database using the loaded parameters.
      $this->connection = new mysqli(
        $env["DB_HOST"],
        $env["DB_USERNAME"],
        $env["DB_PASSWORD"],
        $env["DB_DATABASE"],
        $env["DB_PORT"]
      );
    } catch (mysqli_sql_exception $error) {
      // If there is an error establishing the connection, print the error.
      $this->logError($error);
    } catch (Exception $error) {
      // If the .env file cannot be loaded, print the error.
      $this->logError($error);
    }
  }

  public function logError($error): void {
    echo("<script>alert('Something went wrong.')</script>");
    echo("<script>console.log('$error')</script>");
  }

  public function query(string $sql): bool {
    try {
      // !Fix this later, we'll have to use prepared statements to prevent SQL injections. To do that, we'll also need to modify the CRUD operations in base_controller.php
      // Execute the query.
      $result = $this->connection->query($sql);

      // If the query was successful, return true.
      return true;
    } catch (Exception $error) {
      // If there is an error establishing the connection, print the error.
      $this->logError($error);

      // Return false if the query failed.
      return false;
    }
  }
}
?>

