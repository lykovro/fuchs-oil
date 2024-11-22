<?php
include 'db.php';

$json = file_get_contents('products.json');
$products = json_decode($json, true);

foreach ($products as $product) {
    $stmt = $conn->prepare("
        INSERT INTO products (name, price, description, specifications, approvals, recommendations, document_path, image_path, category_id) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ");
    $stmt->bind_param(
        "sdssssssi",
        $product['name'],
        $product['price'],
        $product['description'],
        $product['specifications'],
        $product['approvals'],
        $product['recommendations'],
        $product['documentPath'],
        $product['imagePath'],
        $product['categoryId']
    );
    $stmt->execute();
}

echo "Данные успешно добавлены!";
?>
