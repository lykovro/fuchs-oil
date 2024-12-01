<?php
require_once 'db.php';

// Получение всех пользователей (GET)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT id, username, email, role FROM users";
    $result = $connection->query($query);

    $users = [];
    while ($row = $result->fetch_assoc()) {
        $users[] = $row;
    }
    echo json_encode($users);
}

// Добавление нового пользователя (POST)
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Проверяем, откуда пришли данные: JSON или форма
    $inputData = file_get_contents('php://input');
    $data = json_decode($inputData, true);

    if ($data) {
        // Если данные пришли в формате JSON
        $username = $data['username'] ?? null;
        $email = $data['email'] ?? null;
        $password = $data['password'] ?? null;
        $role = $data['role'] ?? null;
    } else {
        // Если данные пришли через форму (application/x-www-form-urlencoded)
        $username = $_POST['username'] ?? null;
        $email = $_POST['email'] ?? null;
        $password = $_POST['password'] ?? null;
        $role = $_POST['role'] ?? null;
    }

    // Проверяем, что все поля переданы
    if (!$username || !$email || !$password || !$role) {
        echo json_encode(['error' => 'Необходимо указать username, email, password и role']);
        exit;
    }

    // Экранируем данные для безопасности
    $username = $connection->real_escape_string($username);
    $email = $connection->real_escape_string($email);
    $password = password_hash($password, PASSWORD_BCRYPT); // Хэшируем пароль
    $role = $connection->real_escape_string($role);

    // Выполняем запрос на добавление пользователя
    $sql = "INSERT INTO users (username, email, password, role) VALUES ('$username', '$email', '$password', '$role')";

    if ($connection->query($sql)) {
        echo json_encode(['message' => 'Пользователь добавлен']);
    } else {
        echo json_encode(['error' => 'Ошибка добавления пользователя: ' . $connection->error]);
    }
}



if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['id'], $data['username'], $data['email'], $data['role'])) {
        echo json_encode(['error' => 'Необходимо указать id, username, email и role']);
        exit;
    }

    $id = $connection->real_escape_string($data['id']);
    $username = $connection->real_escape_string($data['username']);
    $email = $connection->real_escape_string($data['email']);
    $role = $connection->real_escape_string($data['role']);

    $sql = "UPDATE users SET username = '$username', email = '$email', role = '$role' WHERE id = '$id'";

    if ($connection->query($sql)) {
        echo json_encode(['message' => 'Данные пользователя обновлены']);
    } else {
        echo json_encode(['error' => 'Ошибка обновления данных пользователя: ' . $connection->error]);
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (!isset($data['id'])) {
        echo json_encode(['error' => 'Необходимо указать id пользователя']);
        exit;
    }

    $id = $connection->real_escape_string($data['id']);

    $sql = "DELETE FROM users WHERE id = '$id'";

    if ($connection->query($sql)) {
        echo json_encode(['message' => 'Пользователь удалён']);
    } else {
        echo json_encode(['error' => 'Ошибка удаления пользователя: ' . $connection->error]);
    }
}

?>
