import { useEffect, useState } from "react";

export default function AddToCart({ product, children }) {
  const [quantity, setQuantity] = useState(0);

  // Guard
  if (!product) return null;

  // Load dữ liệu từ localStorage khi mở trang / F5
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    const productInCart = storedCart.find(
      (item) => item.id === product.id
    );

    if (productInCart) {
      setQuantity(productInCart.quantity);
    }
  }, [product.id]);

  // Cập nhật localStorage khi quantity thay đổi
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    let newCart = [...storedCart];

    const index = newCart.findIndex(
      (item) => item.id === product.id
    );

    // Nếu quantity > 0
    if (quantity > 0) {
      if (index !== -1) {
        // cập nhật số lượng
        newCart[index].quantity = quantity;
      } else {
        // thêm mới
        newCart.push({
          ...product,
          quantity,
        });
      }
    } else {
      // xóa sản phẩm nếu quantity = 0
      if (index !== -1) {
        newCart.splice(index, 1);
      }
    }

    localStorage.setItem("cart", JSON.stringify(newCart));
  }, [quantity]);

  // Nếu chưa có sản phẩm trong cart
  if (quantity === 0) {
    return (
      <button
        className="btn btn-sm px-3"
        style={{
          backgroundColor: "#ffafe7",
          color: "white",
          border: "none",
          whiteSpace: "nowrap"
        }}
        onClick={() => setQuantity(1)}
      >
        {children}
      </button>
    );
  }

  // Nếu đã có sản phẩm
  return (
    <div className="row justify-content-center ">


      <div className="input-group my-2 w-auto">
        <button
          className="btn btn-sm"
          style={{
            backgroundColor: "#ffafe7",
            color: "white",
            border: "none"
          }}
          onClick={() => setQuantity(quantity - 1)}
        >
          -
        </button>

        <input
          type="number"
          min="0"
          value={quantity}
          className="text-center border"
          style={{ width: "40px" }}
          onChange={(e) =>
            setQuantity(parseInt(e.target.value) || 0)
          }
        />

        <button
          className="btn btn-sm"
          style={{
            backgroundColor: "#ffafe7",
            color: "white",
            border: "none"
          }}
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}
