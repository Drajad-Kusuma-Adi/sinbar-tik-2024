<?php

class BaseModel {
  public $connection;
  public $model;

  public function __construct() {
    try {
      mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

      $env = parse_ini_file("../.env");

      if (!$env) {
        throw new Exception("Unable to load environment file.");
      }

      $this->connection = new mysqli(
        $env["DB_HOST"],
        $env["DB_USERNAME"],
        $env["DB_PASSWORD"],
        $env["DB_DATABASE"],
        $env["DB_PORT"]
      );
    } catch (mysqli_sql_exception $error) {
      $this->logError($error);
    } catch (Exception $error) {
      $this->logError($error);
    }
  }

  /**
   * Logs an error message to the console and displays an alert message.
   *
   * @param mixed $error The error message to log and display.
   * @return void
   */
  public function logError($error): void {
    echo ("<script>alert('Something went wrong.')</script>");
    echo ("<script>console.log('$error')</script>");
  }

  /**
   * Query database based on the specified action.
   *
   * @param string|null $action The action to perform on the database.
   * @param array|null $data The data to pass to the database.
   * @param string|null $column The column to filter by.
   * @param int $limit The number of rows to return. Default: 10.
   *
   * @return mixed The result of the query.
   *
   * @throws mysqli_sql_exception|Exception If the query fails.
   */
  public function query(?string $action, ?array $data, ?string $column, int $limit = 10): mixed {
    try {
      $output = null;

      switch ($action) {
        case "create":
          $sql = "INSERT INTO $this->model (" . implode(', ', array_keys($data)) . ") VALUES (" . implode(', ', array_fill(0, count($data), '?')) . ")";
          $params = array_values($data);
          $stmt = $this->connection->prepare($sql);
          if ($stmt === false) {
            throw new Exception($this->connection->error);
          }
          $stmt->execute($params);
          $output = true;
          break;

        case "read_with_limit":
          $sql = "SELECT * FROM $this->model LIMIT ?";
          $params = [$limit];
          $stmt = $this->connection->prepare($sql);
          if ($stmt === false) {
            throw new Exception($this->connection->error);
          }
          $stmt->execute($params);
          $output = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
          break;

        case "read_by_column":
          if (!isset($data[$column])) {
            throw new Exception("Column value not found in data.");
          }
          $sql = "SELECT * FROM $this->model WHERE $column = ?";
          $params = [$data[$column]];
          $stmt = $this->connection->prepare($sql);
          if ($stmt === false) {
            throw new Exception($this->connection->error);
          }
          $stmt->execute($params);
          $output = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
          break;

        case "update":
          if (!isset($data['id'])) {
            throw new Exception("ID not found in data.");
          }
          $id = $data['id'];
          unset($data['id']);
          $sql = "UPDATE $this->model SET " . implode(', ', array_map(fn($key) => "$key = ?", array_keys($data))) . " WHERE id = ?";
          $params = array_merge(array_values($data), [$id]);
          $stmt = $this->connection->prepare($sql);
          if ($stmt === false) {
            throw new Exception($this->connection->error);
          }
          $stmt->execute($params);
          $output = true;
          break;

        case "delete":
          if (!isset($data['id'])) {
            throw new Exception("Id not found in data.");
          }
          $sql = "DELETE FROM $this->model WHERE id = ?";
          $params = [$data['id']];
          $stmt = $this->connection->prepare($sql);
          if ($stmt === false) {
            throw new Exception($this->connection->error);
          }
          $stmt->execute($params);
          $output = true;
          break;

        default:
          throw new Exception("Action invalid.");
      }

      return $output;
    } catch (mysqli_sql_exception $error) {
      $this->logError($error);
      return false;
    } catch (Exception $error) {
      $this->logError($error);
      return false;
    }
  }
}
