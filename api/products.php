<?php
include 'db.php';

// Получение списка товаров
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $conn->query("SELECT * FROM products");
    $products = [];

    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }

    echo json_encode($products);
}

// Добавление нового товара
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);
    $name = $conn->real_escape_string($data['name']);
    $price = $conn->real_escape_string($data['price']);

    $conn->query("INSERT INTO products (name, price) VALUES ('$name', '$price')");

    echo json_encode(["message" => "Товар добавлен"]);
}
?>
