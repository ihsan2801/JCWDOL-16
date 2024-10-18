// File ini merupakan FILE UTAMA aplikasi React.
// Berfungsi sebagai root component dari aplikasi React,
// tempat komponen lain dipanggil dan dirender.
// Semua komponen aplikasi yang lebih kecil biasanya akan
// "dimasukkan" ke dalam App.tsx untuk dirender di sini.

import { Routes, Route } from "react-router";
import Home from "./components/home";
import Register from "./components/register";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;