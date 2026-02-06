import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import ExportImport from "./pages/ExportImport";
import Contact from "./pages/contact";
import Products from "./pages/Products";
import Language from "./pages/Language";
import Blyzza from "./pages/Blyzza";

import "./App.css";

/* 👇 Layout wrapper */
function AppLayout({ language, setLanguage }) {
  const location = useLocation();

  // routes where header & navbar should be hidden
  const hideHeaderNavbarRoutes = ["/blyzza"];
  const shouldHide = hideHeaderNavbarRoutes.includes(location.pathname);

  return (
    <div className="app-wrapper">
      {/* Header & Navbar */}
      {!shouldHide && <Navbar />}
      {!shouldHide && <Header />}

      {/* Page content */}
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/enquiry" element={<Enquiry language={language} />} />
          <Route path="/products" element={<Products language={language} />} />
          <Route
            path="/export-import"
            element={<ExportImport language={language} />}
          />
          <Route path="/contact" element={<Contact language={language} />} />
          <Route path="/blyzza" element={<Blyzza language={language} />} />
          <Route
            path="/language"
            element={<Language setLanguage={setLanguage} />}
          />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <BrowserRouter>
      <AppLayout
        language={language}
        setLanguage={setLanguage}
      />
    </BrowserRouter>
  );
}

export default App;
