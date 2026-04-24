import React from "react";

export default function BannerTintuc() {
  return (
    <div className="banner-tin-tuc text-center py-5 mb-5 shadow-sm" 
         style={{ 
           backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url("/images/banner10.webp")', 
           backgroundSize: 'cover', 
           backgroundPosition: 'center',
           color: 'white',
           minHeight: '300px',
           display: 'flex',
           alignItems: 'center'
         }}>
      <div className="container">
        <h1 className="display-3 fw-bold">THẾ GIỚI ART TOY</h1>
        <p className="lead">Cập nhật xu hướng Blind Box và mô hình mới nhất</p>
      </div>
    </div>
  );
}