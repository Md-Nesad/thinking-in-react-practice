import React, { useEffect } from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStar }) {
  const [rating, setRating] = useState(
    Number(localStorage.getItem("starRating") || 0)
  );
  const [hover, setHover] = useState(0);

  useEffect(() => {
    localStorage.setItem("starRating", rating);
  }, [rating]);

  return (
    <div className="flex">
      {[...Array(totalStar)].map((_, index) => {
        const starValue = index + 1; //it will start form one
        return (
          <FaStar
            key={index}
            className={`cursor-pointer transition-colors duration-300 ${
              starValue <= (rating || hover)
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            size={24}
          />
        );
      })}
    </div>
  );
}
