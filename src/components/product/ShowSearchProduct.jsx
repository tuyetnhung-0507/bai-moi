import listProduct from "../../components/data/products.js";
import useSearch from "../../components/hook/useSearch.jsx";

export default function ShowSearchProduct() {
    const { searchTerm, setSearchTerm, filteredData } = useSearch(listProduct);

    return (
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
                                <img src={`/images/${item.hinh}`} className="card-img-top" alt={item.tensp} />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{item.tensp}</h5>
                                    <p className="text-danger fw-bold">{item.gia.toLocaleString()}VNĐ</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center w-100">Không tìm thấy sản phẩm nào!</p>
                )}
            </div>
        </div>
    );
}