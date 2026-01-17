import React from "react";
import { Routes, Route } from "react-router-dom";
import Svip from "./pages/svip"; // ✅ adjust path if needed

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Svip />} />
    </Routes>
  );
}
