import { BrowserRouter } from "react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BaseLayout } from "./layouts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <App />
      </BaseLayout>
    </BrowserRouter>
  </StrictMode>,
);
