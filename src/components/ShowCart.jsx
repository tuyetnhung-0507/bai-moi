import React, { useEffect, useState } from "react";

export default function CartTable() {
  const [cart, setCart] = useState([]);

  // Lấy dữ liệu từ localStorage
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(data);
  }, []);

  // Xóa sản phẩm
  const handleDelete = (id) => {
    const newCart = cart.filter((item) => item.id !== id);

    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
  };

  // Tính tổng tiền
  const totalMoney = cart.reduce(
    (sum, item) => sum + item.gia * item.quantity,
    0
  );

  return (
    <div className="container">
        <table className="table table-hover">
      <thead>
        <tr>
          <th>STT</th>
          <th>TÊN SẢN PHẨM</th>
          <th>HÌNH</th>
          <th>ĐƠN GIÁ</th>
          <th>SỐ LƯỢNG</th>
          <th>THÀNH TIỀN</th>
          <th>XÓA</th>
        </tr>
      </thead>

      <tbody>
        {cart.length > 0 ? (
          cart.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>

              <td>{item.tensp}</td>

              <td>
                <img
                  src={`/images/${item.hinh}`}
                  alt={item.tensp}
                  style={{ width: "50px" }}
                />
              </td>

              <td>{item.gia}</td>

              <td>{item.quantity}</td>

              <td>{item.gia * item.quantity}</td>

              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="7" className="text-center">
              Giỏ hàng trống
            </td>
          </tr>
        )}
      </tbody>

      <tfoot>
        <tr>
          <td colSpan="4">
            <strong>TỔNG THÀNH TIỀN</strong>
          </td>

          <td colSpan="2">
            <strong>{totalMoney}</strong>
          </td>

          <td>
            <button className="btn btn-primary">
              Thanh toán
            </button>
          </td>
        </tr>
      </tfoot>
    </table>
    </div>
  );
}
