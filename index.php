<!-- Use this as routing to views pages -->
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sinbar Tik</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
  <?php
  // Define the base URL
  $base_url_page = "./Views/Pages";
  $base_url_component = "./Views/Components";

  // Header
  require_once "$base_url_component/header.php";

  // Set default route
  if (!isset($_GET['page'])) {
    $_GET['page']=null;
    //currently redirecting default page, can be changed to another page -> ex: out-of-bound / page not found
  }

  // Routing
  switch ($_GET['page']) {
    case "dashboard":
      // Redirect to dashboard page

      /*
      Pseudocode for role guard routing

      if(isset(role)) { <- Deny Guest access to pages
        if(role != admin) {
          require_once "$base_url_page/dashboard.php";
        } else {
          require_once "$base_url_page/admin-dashboard.php";
        }
      } else {
        require_once "$base_url_page/login.php";
      }

      This is for every routes except login (guest default)
      */

    break;

    case "quiz":
      // Redirect to quiz page
      // Possibly more routing here for list, questions, result page
    break;

    case "material":
      // Redirect to material page
      // Possibly more routing here for list, material page
    break;

    case "leaderboard":
      // Redirect to leaderboard page
      // Possibly more routing here for create new account page
    break;

    case "profile":
      // Redirect to profile page -> needs userid to display the profile
    break;

    default:
      require_once "$base_url_page/login.php"; // Default for guest
      // If already logged-in -> default dashboard.php -> logged-in user cannot access login.php
    break;
  }

  // Footer
  require_once "$base_url_component/footer.php";
  ?>
</body>

</html>