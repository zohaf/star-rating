import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = (props) => {
  const numOfStars = props.numOfStars || 5;
  const sizeOfStars = props.sizeOfStars || 70;

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="main-container">
      <div className="header-container">
        {rating ? (
          <h1>Thanks! You just rated this {rating} star! </h1>
        ) : (
          <h1>Please rate us</h1>
        )}
      </div>

      <div className="star-container">
        {[...Array(numOfStars)].map((star, index) => {
          const ratingValue = index + 1;
          return (
            <label key={index}>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                size={sizeOfStars}
                className="star"
                color={ratingValue <= (hover || rating) ? "#7dcc83" : "#e4e5e9"}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;
