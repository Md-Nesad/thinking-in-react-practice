import React from "react";
import Tabs from "./tabs component/Tabs";

export default function App() {
  const tabsData = [
    { label: "Tab 1", content: "content one" },
    { label: "Tab 2", content: <p>Content for Tab 2</p> },
    { label: "Tab 3", content: <p>Content for Tab 3</p> },
  ];

  return <Tabs tabs={tabsData} />;
}
