<?php
class BaseController {
  protected $model;

  /**
   * Logs an error message into the client browser.
   *
   * @param mixed $error The error message or exception.
   * @return void
   */
  protected function logError($error): void {
    echo ("<script>alert('Something went wrong.')</script>");
    echo ("<script>console.log('$error')</script>");
  }

  /**
   * Handles try-catch logic for database operations.
   *
   * @param callable $operation The database operation callback.
   * @param mixed ...$params The parameters to pass to the operation callback.
   * @return mixed The result of the operation or false on failure.
   */
  protected function handleDbOperation(callable $operation, ...$params) {
    try {
      return call_user_func_array($operation, $params);
    } catch (mysqli_sql_exception $error) {
      $this->logError($error);
      return false;
    } catch (Exception $error) {
      $this->logError($error);
      return false;
    }
  }

  /**
   * Creates a new record in the database.
   *
   * @param array $data The data to create the record with.
   * @return bool True on success, false on failure.
   */
  protected function create(array $data): bool {
    return $this->handleDbOperation([$this->model, 'query'], "create", $data);
  }

  /**
   * Reads records from the database with a limit.
   *
   * @param array $data The data to filter the records.
   * @param int $limit The limit of records to retrieve.
   * @return array|bool The result of the operation or false on failure.
   */
  protected function read_with_limit(array $data, int $limit = 10): array | bool {
    return $this->handleDbOperation([$this->model, 'query'], "read_with_limit", $data, null, $limit);
  }

  /**
   * Reads records from the database by column.
   *
   * @param array $data The data to filter the records.
   * @param string $column The column to filter by.
   * @param string $column_value The value of the column to filter by.
   * @return array|bool The result of the operation or false on failure.
   */
  protected function read_by_column(array $data, string $column, string $column_value): array | bool {
    return $this->handleDbOperation([$this->model, 'query'], "read_by_column", $data, $column, $column_value);
  }

  /**
   * Reads a record from the database by ID.
   *
   * @param string $id The ID of the record to retrieve.
   * @return array|bool The result of the operation or false on failure.
   */
  protected function read_by_id(string $id): array | bool {
    return $this->handleDbOperation([$this->model, 'query'], "read_by_column", ["id" => $id], "id");
  }

  /**
   * Updates a record in the database.
   *
   * @param array $data The data to update the record with.
   * @return bool True on success, false on failure.
   */
  protected function update(array $data): bool {
    return $this->handleDbOperation([$this->model, 'query'], "update", $data);
  }

  /**
   * Deletes a record from the database.
   *
   * @param array $data The data to identify the record to delete.
   * @return bool True on success, false on failure.
   */
  protected function delete(array $data): bool {
    return $this->handleDbOperation([$this->model, 'query'], "delete", $data);
  }
}
?>
