import React from "react";
import BannerTintuc from "../components/BannerTinTuc";
import ShowTinTucNoiBat from "../components/ShowTinTucNoiBat";
import ShowKienThucMoi from "../components/ShowKienThucMoi";
import Sidebar from "../components/Sidebar";


export default function Tintuc() {
  return (
    <div className="container mt-5">
      <div className="row g-5">
        <BannerTintuc />
        <div className="col-md-8">
          <ShowTinTucNoiBat />
          <ShowKienThucMoi />
        </div>
        <Sidebar />
      </div>
    </div>
  );
}