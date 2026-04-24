import sanpham from "./data/products";
import { Link } from "react-router-dom";

export default function ShowSPKM() {
  const km = sanpham.filter(sp => sp.dmtc === "spkm");

  return (
    <div className="container">
      <div className="row">
        <h2>Sản phẩm khuyến mãi</h2>
        {km.map(sp => (
          <div className="col-md-3" key={sp.id}>
            <div className="card">
              <img className="card-img-top" src={`./images/${sp.hinh}`} alt={sp.tensp} />
              <div className="card-body">
                <h4 className="card-title">{sp.tensp}</h4>
                <p className="card-text">{sp.gia}đ</p>
                {/* <a href="#" className="btn btn-mua-ngay">Mua ngay</a> */}
                <Link to={`/detail/${sp.id}`} className="btn btn-primary btn-sm px-4">
                  Xem Chi Tiết
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
}

export function ShowSPBC() {
  const bc = sanpham.filter(sp => sp.dmtc === "spbc");

  return (
    <div className="container">
      <div className="row">
        <h2>Sản phẩm bán chạy</h2>
        {bc.map(sp => (
          <div className="col-md-3" key={sp.id}>
            <div className="card">
              <img className="card-img-top" src={`./images/${sp.hinh}`} alt={sp.tensp} />
              <div className="card-body">
                <h4 className="card-title">{sp.tensp}</h4>
                <p className="card-text">{sp.gia}đ</p>
                {/* <a href="#" className="btn btn-mua-ngay">Mua ngay</a> */}
                <Link to={`/detail/${sp.id}`} className="btn btn-primary btn-sm px-4">
                  Xem Chi Tiết
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ShowSPH() {
  const hot = sanpham.filter(sp => sp.dmtc === "sphot");

  return (
    <div className="container">
      <div className="row">
        <h2>Sản phẩm Hot</h2>
        {hot.map(sp => (
          <div className="col-md-3" key={sp.id}>
            <div className="card">
              <img className="card-img-top" src={`./images/${sp.hinh}`} alt={sp.tensp} />
              <div className="card-body">
                <h4 className="card-title">{sp.tensp}</h4>
                <p className="card-text">{sp.gia}đ</p>
                {/* <a href="#" className="btn btn-mua-ngay">Mua ngay</a> */}
                <Link to={`/detail/${sp.id}`} className="btn btn-primary btn-sm px-4">
                  Xem Chi Tiết
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}