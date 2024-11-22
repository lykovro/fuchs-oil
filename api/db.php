<?php
$host = "localhost"; // Обычно "localhost" для shared-хостинга
$user = "ваш_логин"; // Логин для базы данных
$password = "ваш_пароль"; // Пароль для базы данных
$dbname = "ваша_база"; // Имя базы данных

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Ошибка подключения: " . $conn->connect_error);
}
?>
