import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Index from "./pages/Home";
import Footer from "./components/Footer";
import Gioithieu from "./pages/Gioithieu";
import Lienhe from "./pages/Lienhe";
import Sanpham from "./pages/Sanpham";
import Tintuc from "./pages/Tintuc";
import Detail from "./pages/Detail";
import KhachHang from "./components/KhachHang";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <Router>
      <Header/>
      
      <Routes>
        <Route path="/" element={<Index />} />

        <Route exact path="/index" element={<Index />} />
        <Route path="/gioithieu" element={<Gioithieu />} />
        <Route path="/sanpham" element={<Sanpham />} />
        <Route path="/lienhe" element={<Lienhe />} />
        <Route path="/tintuc" element={<Tintuc />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/khach-hang" element={<KhachHang />} />
        <Route path="/giohang" element={<Cart />} />

      </Routes>

      <Footer />
    </Router>
  );
}