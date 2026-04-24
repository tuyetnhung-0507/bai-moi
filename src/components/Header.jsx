import { useState } from "react";
import Login from "./Login";
import { Link } from "react-router-dom";

export default function Header() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <header>
        <div className="row frame-header">
          <div className="row">
            <div className="col-md-4 cch text-center">HOTLINE: 0912345678</div>
            <div className="col-md-4 cch text-center">Liên Hệ</div>
            <div className="col-md-4 cch text-center">
              <button className="btn btn-light" id="btn-login" type="button" onClick={() => setShowLogin(true)}>
                Đăng nhập
              </button>
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