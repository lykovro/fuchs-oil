<?php
require_once 'db.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'] ?? null;
    $password = $_POST['password'] ?? null;

    if (!$username || !$password) {
        echo json_encode(['error' => 'Необходимо указать username и password']);
        exit;
    }

    // Экранируем данные для безопасности
    $username = $connection->real_escape_string($username);

    // Проверяем наличие пользователя в базе
    $query = "SELECT * FROM users WHERE username = '$username'";
    $result = $connection->query($query);

    if ($result && $result->num_rows > 0) {
        $user = $result->fetch_assoc();

        // Проверяем пароль
        if (password_verify($password, $user['password'])) {
            session_start();
            $_SESSION['user_id'] = $user['id'];
            $_SESSION['role'] = $user['role'];

            // Проверяем роль пользователя
            if ($user['role'] === 'admin') {
                header('Location: /fuchs-php/api/admin_panel.php');
                exit;
            } else {
                echo json_encode(['message' => 'Добро пожаловать, пользователь!']);
                exit;
            }
        } else {
            echo json_encode(['error' => 'Неверный пароль']);
        }
    } else {
        echo json_encode(['error' => 'Пользователь не найден']);
    }
}
?>
