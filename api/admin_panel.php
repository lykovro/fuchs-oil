<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Управление пользователями</title>
</head>
<body>
    <h1>Добавить пользователя</h1>
    <form action="http://localhost/fuchs-php/api/users.php" method="post" >
        <label>Имя пользователя:</label>
        <input type="text" name="username" required><br>
        <label>Email:</label>
        <input type="email" name="email" required><br>
        <label>Пароль:</label>
        <input type="password" name="password" required><br>
        <label>Роль:</label>
        <select name="role">
            <option value="user">User</option>
            <option value="admin">Admin</option>
        </select><br>
        <button type="submit">Добавить</button>
    </form>
</body>
</html>
