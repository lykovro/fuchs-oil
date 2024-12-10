import React, { useState } from "react";

function AddReview() {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  const data = { rating, comment };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost/fuchs-php/api/addReview.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ rating, comment }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
          setRating(5);
          setComment("");
        } else {
          alert(data.error);
        }
      });
  };

  

  return (
    <form onSubmit={handleSubmit}>
      <h2>Оставить отзыв</h2>
      <label>
        Рейтинг:
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
      </label>
      <br />
      <label>
        Комментарий:
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Добавить отзыв</button>
    </form>
  );
}

export default AddReview;
