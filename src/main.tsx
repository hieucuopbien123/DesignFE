import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import 'animate.css';
import "./index.css";
import "./module.style.css";
import { ParallaxProvider } from "react-scroll-parallax";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </React.StrictMode>,
)
