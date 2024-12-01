<?php
require_once 'db.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT id, username, email, role FROM users";
    $result = $connection->query($query);

    $users = [];
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
    echo json_encode($users);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $username = $connection->real_escape_string($data['username']);
    $email = $connection->real_escape_string($data['email']);
    $password = password_hash($data['password'], PASSWORD_BCRYPT);
    $role = $connection->real_escape_string($data['role'] ?? 'user');

    $query = "INSERT INTO users (username, email, password, role) VALUES ('$username', '$email', '$password', '$role')";

    if ($connection->query($query)) {
        echo json_encode(['message' => 'Пользователь успешно создан']);
    } else {
        echo json_encode(['error' => 'Ошибка создания пользователя']);
    }
}
?>
