import { useLayoutEffect, useState } from "react"; // THÊM DÒNG NÀY
import { useParams } from "react-router-dom";
import sp from "./data/products";

export default function Show_Detail() {
    const { id } = useParams();
    const product = sp.find(item => item.id === parseInt(id));

    useLayoutEffect(() => {
        window.scrollTo(0,0);
    }, [id]);

    // --- PHẦN THÊM MỚI ---
    const [count, setCount] = useState(1);
    const TinhTang = () => setCount(count + 1);
    const TinhGiam = () => { if (count > 1) setCount(count - 1); };
    // ---------------------

    const relatedProducts = sp.filter(item => item.danhmuc === product.danhmuc && item.id !== product.id).slice(0, 4);

    if (!product) {
        return <div className="container my-5 text-center"><h2>Sản phẩm không tồn tại</h2></div>;
    }

    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* BÊN TRÁI: HÌNH ẢNH */}
                <div className="col-md-6 text-center">
                    <img
                        src={`/images/${product.hinh}`}
                        alt={product.tensp}
                        className="img-fluid rounded-4 shadow-sm"
                        style={{ maxHeight: '500px', objectFit: 'contain' }}
                    />
                </div>

                {/* BÊN PHẢI: CHI TIẾT */}
                <div className="col-md-6 ps-md-5">
                    <div className="mb-2">
                        <span className="badge bg-danger me-2">Yêu thích</span>
                        <span className="text-muted small">Đã bán 1.2k | Đánh giá (4.9k)</span>
                    </div>

                    <h1 className="fw-bold display-6 mb-3">{product.tensp}</h1>

                    <div className="p-4 bg-light rounded-3 mb-4">
                        <h2 className="text-primary fw-bold mb-0">
                            {Number(product.gia).toLocaleString('vi-VN')}đ
                        </h2>
                        <p className="text-danger small mb-0 mt-2">
                            <i className="bi bi-lightning-fill"></i> Giá rẻ nhất trong các dòng {product.danhmuc}
                        </p>
                    </div>

                    <div className="mb-4">
                        <p className="mb-2"><strong>Dòng sản phẩm:</strong> {product.danhmuc}</p>
                        <p className="text-muted" style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                            {product.mota || "Sản phẩm ArtToy cao cấp chính hãng, thiết kế tinh xảo từng chi tiết. Thích hợp để sưu tầm hoặc làm quà tặng ý nghĩa cho những người yêu thích nhân vật " + product.danhmuc}
                        </p>
                    </div>

                    {/* PHẦN CHỈNH SỬA ĐỂ TĂNG GIẢM HOẠT ĐỘNG */}
                    <div className="d-flex align-items-center mb-4">
                        <span className="me-3">Số lượng:</span>
                        <div className="input-group w-25">
                            <button className="btn btn-outline-secondary btn-sm" type="button" onClick={TinhGiam}>-</button>
                            <input type="text" className="form-control form-control-sm text-center" value={count} readOnly />
                            <button className="btn btn-outline-secondary btn-sm" type="button" onClick={TinhTang}>+</button>
                        </div>
                        <span className="text-muted ms-3 small">99 sản phẩm có sẵn</span>
                    </div>

                    {/* Hai nút bấm giữ nguyên */}
                    <div className="d-flex gap-3">
                        <button className="btn btn-outline-primary btn-lg px-4 flex-grow-1">
                            Thêm vào giỏ
                        </button>
                        <button className="btn btn-primary btn-lg px-4 flex-grow-1 text-white fw-bold">
                            Mua ngay
                        </button>
                    </div>

                    {/* Cam kết giữ nguyên */}
                    <div className="mt-4 pt-3 border-top row text-center small text-muted">
                        <div className="col-4 border-end">100% Chính hãng</div>
                        <div className="col-4 border-end">Đổi trả 7 ngày</div>
                        <div className="col-4">Miễn phí ship</div>
                    </div>
                </div>
            </div>

            {/* SẢN PHẨM CÙNG DÒNG GIỮ NGUYÊN */}
            <div className="mt-5 pt-4 border-top">
                <h3 className="fw-bold mb-4">SẢN PHẨM CÙNG DÒNG {product.danhmuc}</h3>
                <div className="row">
                    {relatedProducts.map(item => (
                        <div className="col-md-3 mb-4" key={item.id}>
                            <div className="card h-100 border-0 shadow-sm text-center p-3">
                                <img
                                    src={`/images/${item.hinh}`}
                                    className="card-img-top rounded"
                                    alt={item.tensp}
                                    style={{ height: '180px', objectFit: 'contain' }}
                                />
                                <div className="card-body">
                                    <h6 className="fw-bold text-truncate">{item.tensp}</h6>
                                    <p className="text-primary fw-bold">{Number(item.gia).toLocaleString('vi-VN')}đ</p>
                                    <a href={`/detail/${item.id}`} className="btn btn-outline-primary btn-sm rounded-pill w-100">
                                        Xem chi tiết
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}