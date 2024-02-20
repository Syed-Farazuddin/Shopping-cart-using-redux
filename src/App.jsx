import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import MyCart from "./pages/MyCart";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/" element={<MyCart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
