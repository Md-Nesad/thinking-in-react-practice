import React from "react";
import Tabs from "./practice/tabs/Tabs";

export default function App() {
  const tabs = [
    {
      title: "Tab one",
      description:
        "This is tab one. This is tab one. This is tab one. This is tab one.",
    },

    {
      title: "Tab two",
      description:
        "This is tab two. This is tab one. This is tab one. This is tab one.",
    },
    {
      title: "Tab three",
      description:
        "This is tab three. This is tab one. This is tab one. This is tab one.",
    },
  ];
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
}
