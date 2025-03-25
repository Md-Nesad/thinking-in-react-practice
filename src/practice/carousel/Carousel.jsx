import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Carousel({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextView = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const prevView = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextView();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Carousel component</h1>
      <div>
        <motion.img
          key={activeIndex}
          src={items[activeIndex]}
          alt={`Slide ${activeIndex}`}
          className="w-full h-full object-cover absolute"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        />
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded"
          onClick={prevView}
        >
          &#10094;
        </button>
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-2 rounded"
          onClick={nextView}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
