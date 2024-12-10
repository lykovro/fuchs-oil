<?php
require_once 'db.php';

header("Content-Type: application/json"); 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    $userId = $data['user_id'] ?? null;
    $rating = $data['rating'] ?? null;
    $comment = $data['comment'] ?? null;

    if (!$rating || !$comment) {
        echo json_encode(['error' => 'Рейтинг и комментарий обязательны.']);
        exit;
    }

    $query = "INSERT INTO reviews (user_id, rating, comment) VALUES (?, ?, ?)";
    $stmt = $connection->prepare($query);
    $stmt->bind_param("iis", $userId, $rating, $comment);

    if ($stmt->execute()) {
        echo json_encode(['message' => 'Отзыв добавлен.']);
    } else {
        echo json_encode(['error' => 'Ошибка при добавлении отзыва.']);
    }

    $stmt->close();
}
?>
