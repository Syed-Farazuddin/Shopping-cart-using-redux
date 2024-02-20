import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Homepage from "./pages/Homepage";
import MyCart from "./pages/MyCart";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<MyCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
