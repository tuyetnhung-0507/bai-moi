export default function Banner() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-3 frame-danhmuc">
                    <h3>DANH MỤC</h3>
                    <ul>
                        <li>
                            NHÂN VẬT NỔI BẬT
                            <ul>
                                <li>DIMOO</li>
                                <li>MOLLY</li>
                                <li>SKULLPANDA</li>
                            </ul>
                        </li>
                        <li>
                            PHỤ KIỆN ART TOY
                            <ul>
                                <li>Túi đựng Blindbox</li>
                                <li>Hộp trưng bày</li>
                                <li>Móc khóa</li>
                            </ul>
                        </li>
                        <li>
                            DỊCH VỤ & ƯU ĐÃI
                            <ul>
                                <li>Hàng mới về</li>
                                <li>Săn Deal Blindbox</li>
                                <li>Hàng Order</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="col-md-9 frame-danhmuc">
                    <div className="carousel slide" data-bs-ride="carousel" id="demo">
                        <div className="carousel-indicators">
                            <button
                                className="active"
                                data-bs-slide-to="0"
                                data-bs-target="#demo"
                                type="button"
                            />
                            <button data-bs-slide-to="1" data-bs-target="#demo" type="button" />
                            <button data-bs-slide-to="2" data-bs-target="#demo" type="button" />
                        </div>
                        <div className="carousel-inner banner">
                            <div className="carousel-item active">
                                <img alt="Los Angeles" src="images/banner1.jpg" />
                            </div>
                            <div className="carousel-item">
                                <img alt="Chicago" src="images/banner5.jpg" />
                            </div>
                            <div className="carousel-item">
                                <img alt="New York" src="images/banner6.jpg" />
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            data-bs-slide="prev"
                            data-bs-target="#demo"
                            type="button">
                            <span className="carousel-control-prev-icon" />
                        </button>
                        <button
                            className="carousel-control-next"
                            data-bs-slide="next"
                            data-bs-target="#demo"
                            type="button">
                            <span className="carousel-control-next-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}