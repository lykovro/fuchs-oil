import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("http://localhost/fuchs-php/api/auth.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          username,
          password,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else if (data.message) {
        alert(data.message);
        // Если это администратор, можно перенаправить на панель администратора
        if (data.role === "admin") {
            console.log('Роль пользователя: ', data.role); // Выводим роль в консоль
          window.location.href = "/catalog";
        } else {
            console.log('Роль пользователя: ', data.role); // Выводим роль в консоль
            window.location.href = "/news";
        }
      }
    } catch (err) {
      setError("Ошибка соединения с сервером");
    }
  };

  return (
    <div>
      <h1>Авторизация</h1>
      <form onSubmit={handleLogin}>
        <label>Имя пользователя:</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <br />
        <label>Пароль:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Войти</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Login;
