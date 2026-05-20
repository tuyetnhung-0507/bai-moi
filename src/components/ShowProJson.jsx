import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useSearch from "../components/hook/useSearch";
//import SearchProductAPI from "./product/SearchProductAPI";
// import "./test.css";

export default function ConnectAPI() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { searchTerm, setSearchTerm, filteredData } = useSearch(products);


  useEffect(() => {
    axios
      .get("https://firestore.googleapis.com/v1/projects/toy-star-web/databases/(default)/documents/products")
      .then((res) => {

        const rawData = res.data.documents || [];

        const formattedProducts = rawData.map((doc) => ({
          id: doc.fields.id.integerValue,
          tensp: doc.fields.tensp.stringValue,
          hinh: doc.fields.hinh.stringValue,
          gia: parseInt(doc.fields.gia.integerValue),
        }));

        setProducts(formattedProducts);
      })
      .catch((err) => {
        console.log(err.response);
        console.error("Lỗi:", err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center w-100">Đang tải...</p>;
  if (error) return <p className="text-center w-100 text-danger">Lỗi khi tải dữ liệu.</p>;

  return (

    <div className="container">

      <div className="container mt-4">
        <input
          type="text"
          className="form-control mb-4"
          placeholder="Nhập tên sản phẩm để tìm..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <div className="row">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div className="col-md-3 mb-4" key={item.id}>
                <div className="card h-100 shadow-sm">
                  <img src={`${item.hinh}`} className="card-img-top" alt={item.tensp} />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.tensp}</h5>
                    <p className="text-danger fw-bold">{item.gia.toLocaleString()}VNĐ</p>
                    <Link to={`/detail/${item.id}`} className="btn btn-primary btn-sm px-4"> Xem chi tiết</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-100">Không tìm thấy sản phẩm nào!</p>
          )}
        </div>
      </div>




      {/* <div className="row g-3">
        {products.length > 0 ? (
          products.map((item) => (
            <div className="col-12 col-sm-6 col-md-4" key={item.id}>
              <div className="card h-100 shadow-sm">
                <img src={item.hinh} className="card-img-top img-fluid product-img" />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.tensp}</h5>
                  <p className="text-danger fw-bold">{item.gia.toLocaleString()} USD</p>
                  <Link to={`/detail/${item.id}`} className="btn btn-primary btn-sm px-4"> Xem chi tiết</Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center w-100">Không tìm thấy sản phẩm nào!</p>
        )}
      </div> */}
    </div>
  );
}