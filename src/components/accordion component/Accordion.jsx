import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); //eta hocce on off korar jonno
  };
  return (
    <div className="w-full max-w-lg mx-auto space-y-2">
      {items.map((item, index) => (
        <div key={index} className="border rounded-2xl shadow-sm">
          <button
            className="w-full flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200 transition-all rounded-2xl"
            onClick={() => toggleAccordion(index)}
          >
            <span className="font-medium">{item.title}</span>
            <ChevronDown
              className={`transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={
              openIndex === index
                ? { height: "auto", opacity: 1 }
                : { height: 0, opacity: 0 }
            }
            className="overflow-hidden"
          >
            <div className="p-4 bg-white text-gray-700">{item.content}</div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
