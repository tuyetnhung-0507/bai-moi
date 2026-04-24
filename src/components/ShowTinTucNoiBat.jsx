import React from "react";
import tintuc from "./data/new";

export default function ShowTinTucNoiBat() {

  const tinNoiBat = tintuc.filter(tin => tin.loai === "noibat");

  return (
    <div className="container mt-5">
      <h2 className="text-purple fw-bold mb-4 border-bottom pb-2">TIN TỨC NỔI BẬT</h2>

      <div className="news-container">
        {tinNoiBat.map(tin => (
          <article className="post-item mb-5 pb-4 border-bottom" key={tin.id}>
            <img
              src={`/images/${tin.hinh}`}
              className="img-fluid rounded-4 mb-3 w-100 shadow-sm"
              alt={tin.tieude}
              style={{ height: "auto", objectFit: "contain" }}
            />

            <h2 className="fw-bold text-dark mt-2">{tin.tieude}</h2>

            <p className="text-muted small">
              Ngày {tin.ngay || "20/03/2026"} | Bởi ArtToy Team | 12 bình luận
            </p>

            <p className="text-secondary mt-3" style={{ textAlign: "justify", lineHeight: "1.6" }}>
              {tin.noidung}
            </p>

            <button className="btn btn-purple rounded-pill px-4 text-white">Đọc thêm</button>
          </article>
        ))}
      </div>
    </div>
  );
}