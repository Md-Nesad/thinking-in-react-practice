import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

// স্টার রেটিং কম্পোনেন্ট
const StarRating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0); // লোকাল স্টোরেজ থেকে রেটিং লোড করা হচ্ছে

  const [hover, setHover] = useState(0); // হোভার করলে কোন স্টার হাইলাইট হবে সেটার স্টেট

  // যখন রেটিং পরিবর্তন হবে, তখন লোকাল স্টোরেজে সংরক্ষণ করা হবে
  //   useEffect(() => {
  //     localStorage.setItem("starRating", rating);
  //   }, [rating]);
  return (
    <div className="flex space-x-1">
      {/* স্টার গুলো লুপ করে তৈরি করা হচ্ছে */}
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <FaStar
            key={index}
            className={`cursor-pointer transition-colors duration-200 ${
              starValue <= (hover || rating)
                ? "text-yellow-500"
                : "text-gray-300"
            }`}
            onClick={() => setRating(starValue)} // ইউজার ক্লিক করলে সেট রেটিং আপডেট হবে
            onMouseEnter={() => setHover(starValue)} // হোভার করলে স্টার হাইলাইট হবে
            onMouseLeave={() => setHover(0)} // মাউস সরালে হোভার ইফেক্ট চলে যাবে
            size={24}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
