<?php
class BaseController {
  // The database model associated with this controller;
  protected $model;

  // The list of valid fields for data validation.
  protected $validation;

  /**
   * Validates the necessary data.
   *
   * @param array $data The input data to validate.
   * @return array Validated data.
   */
  protected function validate(array $data): array {
    $out = [];

    foreach ($data as $key => $val) {
      // Only include data that is verified in the validation
      if (in_array($key, $this->validation)) {
        $out[$key] = $val;
      }
    }

    return $out;
  }

  /**
   * Logs an error message into the client browser.
   *
   * @param mixed $error The error message or exception.
   * @return void
   */
  protected function logError($error): void {
    echo("<script>alert('Something went wrong.')</script>");
    echo("<script>console.log('$error')</script>");
  }

  /**
   * Create a new record in the database.
   *
   * @param array $data The data to insert.
   * @return bool|array Returns true if the query was successful, false otherwise.
   */
  protected function create(array $data): bool {
    try {
      // Validate the necessary data
      $data = $this->validate($data);

      // Define the SQL query
      $sql = "INSERT INTO {$this->model} (" . implode(', ', array_keys($data)) . ") VALUES (" . implode(', ', array_map(fn($val) => "?", array_values($data))) . ")";

      // Execute the query
      $this->model->query($sql, array_values($data));

      // Return true if the query was successful
      return true;
    } catch (Exception $error) {
      // Log the error
      $this->logError($error);

      // Return false if the query failed
      return false;
    }
  }

  /**
   * Read records from the database.
   *
   * @param int $limit The maximum number of records to return.
   * @return bool|array Returns an array of records if successful, false otherwise.
   */
  protected function read(int $limit = 10): bool|array {
    try {
      // Define the SQL query
      $sql = "SELECT * FROM {$this->model} LIMIT ?";

      // Execute the query
      $result = $this->model->query($sql, [$limit]);

      // Return the result
      return $result;
    } catch (Exception $error) {
      // Log the error
      $this->logError($error);

      // Return false if the query failed
      return false;
    }
  }

  /**
   * Read a record from the database by ID.
   *
   * @param string $id The ID of the record.
   * @return bool|array Returns an array of records if successful, false otherwise.
   */
  protected function readById(string $id): bool|array {
    try {
      // Define the SQL query
      $sql = "SELECT * FROM {$this->model} WHERE id = ?";

      // Execute the query
      $result = $this->model->query($sql, [$id]);

      // Return the result
      return $result;
    } catch (Exception $error) {
      // Log the error
      $this->logError($error);

      // Return false if the query failed
      return false;
    }
  }

  /**
   * Update a record in the database.
   *
   * @param string $id The ID of the record.
   * @param array $data The data to update.
   * @return bool|array Returns the updated record if successful, false otherwise.
   */
  protected function update(string $id, array $data): bool|array {
    try {
      // Validate the necessary data
      $data = $this->validate($data);

      // Define the SQL query
      $sql = "UPDATE {$this->model} SET " . implode(', ', array_map(fn($key) => "$key = ?", array_keys($data))) . " WHERE id = ?";

      // Execute the query
      $this->model->query($sql, [$id]);

      // Return the updated record
      return $this->readById($id);
    } catch (Exception $error) {
      // Log the error
      $this->logError($error);

      // Return false if the query failed
      return false;
    }
  }

  /**
   * Delete a record from the database.
   *
   * @param string $id The ID of the record.
   * @return bool Returns true if the query was successful, false otherwise.
   */
  protected function delete(string $id): bool {
    try {
      // Define the SQL query
      $sql = "DELETE FROM {$this->model} WHERE id = ?";

      // Execute the query
      $this->model->query($sql, [$id]);

      // Return true if the query was successful
      return true;
    } catch (Exception $error) {
      // Log the error
      $this->logError($error);

      // Return false if the query failed
      return false;
    }
  }
}
?>
