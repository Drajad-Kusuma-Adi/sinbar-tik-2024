# Architecture

A lightweight MVC micro-framework designed for Sinbar Tik development.

---

## Folders
- Controllers => Files that handle interaction with database, usually by means of HTTP requests.
- Models => Files that connect to the database based on each individual table.
- Views => Files that render the frontend screen visible to the user.

---

# Special Files
- `./Controllers/base_controller.php` => Base of all controllers, allow basic CRUD operations and generic methods.
- `./Models/base_model.php` => Base of all models, allow generic operations and connection with database.
- `./index.php` => Base of all views, allow rendering of the frontend screen and routing.