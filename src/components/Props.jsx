// Ví dụ: Truyền nhiều loại dữ liệu qua Props (cùng file)
function Product(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>Giá: {props.price} VNĐ</p>
      <p>Còn hàng: {props.inStock ? "Có" : "Hết"}</p>
      <p>Danh mục: {props.categories.join(", ")}</p>
      <p>Xuất xứ: {props.info.origin}</p>
    </div>
  );
}

export default function Sp() {
  return (
    <div>
      <Product
        name="Laptop Dell"
        price={15000000}
        inStock={true}
        categories={["Laptop", "Văn phòng"]}
        info={{ origin: "USA" }}
      />
    </div>
  );
}
