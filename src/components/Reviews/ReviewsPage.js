import React from "react";
import ReviewsList from "./ReviewsList";
import AddReview from "./AddReview";

function ReviewsPage() {
  return (
    <div>
      <h1>Отзывы о магазине</h1>
      <AddReview />
      <ReviewsList />
    </div>
  );
}

export default ReviewsPage;
