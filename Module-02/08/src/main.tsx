import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// File ini merupakan entry point dari aplikasi.
// Di sini, aplikasi React mulai dijalankan. Pada aplikasi 
// modern berbasis Vite, file ini mungkin mengimpor App dan 
// mengatur mounting root component.