import React from "react";
import StarRating from "./practice/star_rating/StarRating";
import Accordion from "./practice/accordion/Accordion";

export default function App() {
  const item = [
    {
      id: 0,
      title: "Accordion one",
      content:
        "This is accordion project. I have completed html, css, javascript, react, tailwind and next.js as afront end developer. Now i am learning backend development",
    },

    {
      id: 1,
      title: "Accordion two",
      content:
        "This is accordion project. I have completed html, css, javascript, react, tailwind and next.js as afront end developer. Now i am learning backend development",
    },

    {
      id: 3,
      title: "Accordion three",
      content:
        "This is accordion project. I have completed html, css, javascript, react, tailwind and next.js as afront end developer. Now i am learning backend development",
    },
  ];
  return (
    <>
      <Accordion items={item} />
    </>
  );
}
