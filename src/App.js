import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Enquiry from "./pages/Enquiry";
import ExportImport from "./pages/ExportImport";
import Contact from "./pages/contact";
import Products from "./pages/Products";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/products" element={<Products />} />
        <Route path="/export-import" element={<ExportImport />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
