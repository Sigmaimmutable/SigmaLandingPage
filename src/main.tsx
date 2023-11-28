import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ModalWrapper from "./modal/components/ModalWrapper.tsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ModalWrapper>
      <App />
      <ToastContainer />
    </ModalWrapper>
  </React.StrictMode>
);


