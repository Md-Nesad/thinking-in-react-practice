import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ModalExample from "./App";
import { StrictMode } from "react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModalExample />
  </StrictMode>
);
