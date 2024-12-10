import React, { useState, useEffect } from "react";

function ReviewsList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost/fuchs-php/api/getReviews.php")
      .then((response) => response.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <h2>Отзывы</h2>
      {reviews.length ? (
        reviews.map((review) => (
          <div key={review.id}>
            <p><strong>Рейтинг:</strong> {review.rating}/5</p>
            <p>{review.comment}</p>
            <small>{new Date(review.created_at).toLocaleString()}</small>
          </div>
        ))
      ) : (
        <p>Пока нет отзывов.</p>
      )}
    </div>
  );
}

export default ReviewsList;
