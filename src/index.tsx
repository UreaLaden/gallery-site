import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GalleryContextProvider } from "./store/galleryContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <GalleryContextProvider>
    <App />
  </GalleryContextProvider>
);
