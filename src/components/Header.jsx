import { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <header>
  <div className="header-top-bar">
    <div className="container d-flex justify-content-between align-items-center py-1">

      {/* Bên trái */}
      <div className="header-links-left d-flex align-items-center">
        <span className="me-3">ART TOY - Thế giới đồ chơi nghệ thuật</span>

        <div className="vr mx-2"></div>

        <span className="me-3">
          Hotline: 0912345678
        </span>

        <div className="vr mx-2"></div>

        <span>
          Kết nối
          <i className="bi bi-facebook mx-1"></i>
          <i className="bi bi-instagram"></i>
        </span>
      </div>

      {/* Bên phải */}
      <div className="header-links-right d-flex align-items-center">

        <div className="header-item mx-2">
          <i className="bi bi-bell"></i> Thông báo
        </div>

        <div className="header-item mx-2">
          <i className="bi bi-question-circle"></i> Hỗ trợ
        </div>

        <div className="header-item mx-2">
          <i className="bi bi-globe"></i> Tiếng Việt <i className="bi bi-chevron-down"></i>
        </div>

        <div className="auth-buttons ms-3 d-flex align-items-center">
          <span className="auth-link">Đăng Ký</span>

          <div className="vr mx-2"></div>

          <span
            className="auth-link fw-bold"
            style={{ cursor: "pointer" }}
            onClick={() => setShowLogin(true)}
          >
            Đăng Nhập
          </span>
          <div className="vr mx-2"></div>
          <Link to="/khach-hang" className="nav-link">Khách Hàng</Link>
        </div>

      </div>
    </div>
  </div>
</header>
      <div className="container">
        <div className="row">
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
              <a className="navbar-brand" href="javascript:void(0)">
                <img
                  alt=""
                  src="logo.jpg"
                  style={{
                    width: "50px",
                  }}
                />
              </a>
              <button
                className="navbar-toggler"
                data-bs-target="#mynavbar"
                data-bs-toggle="collapse"
                type="button">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="mynavbar">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/Index">Trang chủ</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/sanpham">Sản phẩm</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/gioithieu">Giới thiệu</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/tintuc">Tin tức</Link>
                  </li>

                  <li className="nav-item">
                    <Link className="nav-link text-white" to="/lienhe">Liên hệ</Link>
                  </li>
                </ul>
                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    placeholder="Tìm kiếm..."
                    type="text"
                  />
                  <button className="btn btn-dark" type="button">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <Login show={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}