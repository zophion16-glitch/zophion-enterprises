import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import ExportImport from "./pages/ExportImport";
import Contact from "./pages/contact";
import Products from "./pages/Products";
import Language from "./pages/Language"; // 👈 NEW
import "./App.css";

function App() {
  const [language, setLanguage] = useState("en"); // 👈 language state

  return (
    <BrowserRouter>
      {/* pass setLanguage if needed later */}
      <Navbar />

      <Header />

      <Routes>
        <Route path="/" element={<Home language={language} />} />
        <Route path="/enquiry" element={<Enquiry language={language} />} />
        <Route path="/products" element={<Products language={language} />} />
        <Route path="/export-import" element={<ExportImport language={language} />} />
        <Route path="/contact" element={<Contact language={language} />} />

        {/* 🌍 Language route */}
        <Route
          path="/language"
          element={<Language setLanguage={setLanguage} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
