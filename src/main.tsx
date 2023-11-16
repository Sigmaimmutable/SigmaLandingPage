import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ModalWrapper from "./modal/components/ModalWrapper.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalWrapper>
      <App />
    </ModalWrapper>
  </React.StrictMode>
);
