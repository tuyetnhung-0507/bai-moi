import React from "react";
import tintuc from "./data/new";

export default function ShowKienThucMoi() {
  const kienThuc = tintuc.filter(tin => tin.loai === "kienthuc");

  return (
    <div className="container mt-5">
      <h2 className="text-success fw-bold mb-4">KIẾN THỨC MÔ HÌNH</h2>

      <div className="news-list">
        {kienThuc.map(tin => (
          <article className="post-item mb-5 pb-4 border-bottom" key={tin.id}>
            <img
              src={`/images/${tin.hinh}`}
              className="img-fluid rounded-4 mb-3 w-100 shadow-sm"
              alt={tin.tieude}
              style={{ height: "auto", objectFit: "contain" }}
            />

            <h2 className="fw-bold text-dark">{tin.tieude}</h2>

            <p className="text-muted small">
              Ngày {tin.ngay || "23/03/2026"} | Bởi ArtToy Team
            </p>

            <p className="text-secondary" style={{ textAlign: "justify" }}>
              {tin.noidung}
            </p>

            <button className="btn btn-success rounded-pill px-4">Đọc thêm</button>
          </article>
        ))}
      </div>
    </div>
  );
}