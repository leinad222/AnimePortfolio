<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$successMsg = "";

// Start session to carry message across redirect
session_start();

if (isset($_SERVER["REQUEST_METHOD"]) && $_SERVER["REQUEST_METHOD"] === "POST") {
    $servername = "localhost";
    $username   = "root";
    $password   = "";
    $dbname     = "kuromi_tv";

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) die("Connection failed: " . $conn->connect_error);

    $name    = htmlspecialchars($_POST['name']);
    $email   = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $stmt = $conn->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $message);

    if ($stmt->execute()) {
        $_SESSION['successMsg'] = "✅ Thank you, $name! Your message has been saved.";
    } else {
        $_SESSION['successMsg'] = "❌ Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();

    // Redirect so form clears
    header("Location: " . $_SERVER['PHP_SELF']);
    exit();
}

// Retrieve message after redirect
if (isset($_SESSION['successMsg'])) {
    $successMsg = $_SESSION['successMsg'];
    unset($_SESSION['successMsg']);
}
?>
