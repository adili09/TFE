<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB";

$conn = new mysqli($servername, $username, $password, $dbname);

$st = $pdo->prepare('SELECT id FROM cities');
$st->execute();
$cols = $st->fetchAll(PDO::FETCH_COLUMN);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}