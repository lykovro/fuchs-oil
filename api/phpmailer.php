<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $text = $_POST['text'];

    $mail = new PHPMailer(true);

    try {
        // Настройки SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.your-email-provider.com'; // SMTP сервер
        $mail->SMTPAuth = true;
        $mail->Username = 'your-email@example.com'; // Ваш email
        $mail->Password = 'your-password'; // Ваш пароль
        $mail->SMTPSecure = 'ssl';
        $mail->Port = 465;

        // Отправитель и получатель
        $mail->setFrom($email, $name);
        $mail->addAddress('your-email@example.com'); // Куда отправлять сообщение

        // Тема и текст письма
        $mail->isHTML(true);
        $mail->Subject = 'Новое сообщение с сайта';
        $mail->Body = nl2br("Имя: $name\nEmail: $email\nСообщение: $text");

        $mail->send();
        echo 'Сообщение отправлено!';
    } catch (Exception $e) {
        echo "Ошибка отправки: {$mail->ErrorInfo}";
    }
}
?>
