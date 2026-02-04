import React from "react";
import "./style.css";
import { createRoot } from "react-dom/client";
import Intro from "./Intro";
import App from "./App";
import { initTheatreStudio } from "./animation/theatre";

import { ErrorBoundary } from "./ErrorBoundary";

initTheatreStudio();
const root = createRoot(document.getElementById("root"));
root.render(
  <ErrorBoundary>
    <Intro>
      <App />
    </Intro>
  </ErrorBoundary>
);
