import React from "react";

export default function Sidebar() {
  return (
    <aside className="col-md-4">
      <div className="input-group mb-4 shadow-sm">
        <input
          className="form-control border-info"
          id="mySearch"
          placeholder="Tìm kiếm..."
          type="text"
        />
        <button className="btn btn-info text-white">
          <i className="fa fa-search me-1" />
          Tìm kiếm
        </button>
      </div>

      <div className="tieu-de-sidebar fw-bold mb-3 border-bottom pb-2">DANH MỤC ĐỒ CHƠI</div>
      <div className="list-group list-group-flush mb-4 shadow-sm rounded">
        <a className="list-group-item list-group-item-action active" href="#">BlindBox</a>
        <a className="list-group-item list-group-item-action" href="#">SKULLPANDA</a>
        <a className="list-group-item list-group-item-action" href="#">MOLLY</a>
        <a className="list-group-item list-group-item-action" href="#">DIMOO</a>
      </div>

      <div className="tieu-de-sidebar fw-bold mb-3 border-bottom pb-2">TIN MỚI NHẬN</div>
      <div className="list-recent mb-4">
        {[
          { img: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=100", txt: "Review bộ sưu tập Molly mới nhất" },
          { img: "https://images.unsplash.com/photo-1532330393533-443990a51d10?w=100", txt: "Sự kiện Offline săn đồ chơi TPHCM" },
          { img: "/images/banner2.png", txt: "Skullpanda City of Night có gì hot?" },
          { img: "/images/h1.png", txt: "Mẹo săn Blind Box không bị trùng" }
        ].map((item, index) => (
          <a className="bai-viet-nho d-flex align-items-center mb-3 text-decoration-none text-dark p-2 border-bottom" href="#" key={index}>
            <img
              alt="Toy"
              src={item.img}
              className="rounded-2 me-3"
              style={{ width: "60px", height: "60px", objectFit: "cover" }}
            />
            <h6 className="small fw-bold mb-0">{item.txt}</h6>
          </a>
        ))}
      </div>

      <div className="tieu-de-sidebar fw-bold mb-3 border-bottom pb-2">TỪ KHÓA PHỔ BIẾN</div>
      <div className="d-flex flex-wrap gap-2 mt-3">
        {["Blind Box", "Skullpanda", "Molly", "Dimoo", "Labubu", "Limited", "Unboxing", "Pop Mart"].map((tag) => (
          <a className="badge bg-light text-info border text-decoration-none p-2" href="#" key={tag}>
            {tag}
          </a>
        ))}
      </div>
    </aside>
  );
}