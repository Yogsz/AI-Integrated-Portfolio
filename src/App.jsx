import React from "react"
import { Routes, Route } from "react-router-dom";
import Hero from "./components/hero"
import Navbar from "./components/navbar"
import About from "./components/about"

function App() {
  return (
    <div>
    <Navbar></Navbar>
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/hero" element={<Hero/>} />
      <Route path="/about" element={<About />} />
    </Routes>
    </div>
  );
}

export default App