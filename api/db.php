<?php
$host = "localhost"; 
$user = "u2909435_default"; // Логин для базы данных
$password = "72HNlZy8Cnt4bX2e"; // Пароль для базы данных
$dbname = "u2909435_default"; // Имя базы данных

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}
?>
