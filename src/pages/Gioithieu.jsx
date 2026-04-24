import React from "react";

export default function Gioithieu() {
    return (
        <div className="container py-5">
            <div className="row align-items-center mb-5 pb-5">
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="position-relative d-inline-block">
                        <img
                            alt="Art Toy World"
                            src="/images/gt.jpg"
                            className="img-fluid rounded-4 shadow-lg"
                            style={{ border: "8px solid #f8f9fa", minHeight: "400px", objectFit: "cover" }}
                        />
                        <div className="position-absolute bottom-0 start-0 bg-info text-white p-2 px-3 rounded-end-pill shadow"
                            style={{ marginBottom: "30px", fontWeight: "bold" }}>
                            Since 2026
                        </div>
                    </div>
                </div>

                <div className="col-md-6 ps-md-5">
                    <h6 className="text-info fw-bold text-uppercase">Về ArtToy Shop</h6>
                    <h2 className="display-5 fw-bold mb-4" style={{ color: "#333" }}>
                        ĐỒ CHƠI ĐƯỢC TẠO RA TỪ <span className="text-info">TRÍ TƯỞNG TƯỢNG</span>
                    </h2>

                    <div className="description fs-5 text-secondary mb-4">
                        <p>
                            Đồ chơi không chỉ đơn thuần là vật giải trí, mà còn là người bạn
                            đồng hành trong hành trình trưởng thành. Thông qua vui chơi, trẻ phát triển
                            tư duy sáng tạo và khả năng quan sát.
                        </p>
                        <p>
                            Mỗi sản phẩm là một tác phẩm nghệ thuật nhỏ được thiết kế tỉ mỉ,
                            mang lại trải nghiệm vui chơi trọn vẹn nhất.
                        </p>
                    </div>

                    <ul className="list-unstyled mb-4">
                        <li className="mb-2">✔ An toàn và chất lượng cao</li>
                        <li className="mb-2">✔ Thiết kế sáng tạo từ các nghệ sĩ</li>
                        <li className="mb-2">✔ Truyền cảm hứng tuổi thơ bất tận</li>
                    </ul>

                    <div className="d-flex gap-3">
                        <button className="btn btn-info btn-lg text-white px-4 rounded-pill shadow">
                            Chi tiết ngay
                        </button>
                    </div>
                </div>
            </div>

            <section
                className="video-section"
                style={{
                    padding: "60px 0",
                    textAlign: "center",
                }}>
                <div
                    style={{
                        marginBottom: "40px",
                    }}>
                    <h2
                        style={{
                            fontWeight: "bold",
                            textTransform: "uppercase",
                        }}>
                        Hành Trình Nghệ Thuật
                    </h2>
                    <p
                        style={{
                            color: "#777",
                        }}>
                        Cùng xem qua quy trình sáng tạo và những câu chuyện đằng sau mỗi bộ sưu
                        tập Art Toy.
                    </p>
                </div>
                <div
                    className="row"
                    style={{
                        borderRadius: "20px",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
                        height: "0",
                        overflow: "hidden",
                        paddingBottom: "56.25%",
                        position: "relative",
                    }}>
                    <iframe
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        frameBorder="0"
                        referrerPolicy="strict-origin-when-cross-origin"
                        src="https://www.youtube.com/embed/zj0uZgPQSrg?si=ds-x6O61mWzhqHfN"
                        style={{
                            height: "100%",
                            left: "0",
                            position: "absolute",
                            top: "0",
                            width: "100%",
                        }}
                        title="YouTube video player"
                    />
                </div>
            </section>

            <div
                className="about-full-img"
                style={{
                    borderRadius: "20px",
                    height: "500px",
                    margin: "60px 0",
                    overflow: "hidden",
                    width: "100%",
                }}>
                <img
                    alt="ArtToy GIF"
                    src="images/vid1.gif"
                    style={{
                        height: "100%",
                        objectFit: "cover",
                        width: "100%",
                    }}
                />
            </div>

            <hr className="my-5 opacity-25" />
            <section className="testimonial py-5 bg-light rounded-4 px-4">
                <div className="testimonial-header text-center mb-5">
                    <h2 className="fw-bold">ĐÁNH GIÁ KHÁCH HÀNG</h2>
                    <p className="text-secondary">
                        Chúng tôi tự hào khi nhận được phản hồi tích cực từ cộng đồng yêu Art Toy.
                    </p>
                </div>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="card p-4 shadow-sm border-0 h-100 rounded-4">
                            <h4 className="text-info">Tuyệt vời</h4>
                            <div className="text-warning mb-3">★★★★★</div>
                            <p className="text-muted">"Trải nghiệm tuyệt vời! Tôi rất hài lòng với dịch vụ chuyên nghiệp và chu đáo của đội ngũ."</p>
                            <div className="d-flex align-items-center mt-auto pt-3">
                                <img alt="Bạch Ngân" src="/images/avt.jpg" className="rounded-circle me-3" style={{ width: "45px", height: "45px" }} />
                                <div>
                                    <h6 className="mb-0 fw-bold">Bạch Ngân</h6>
                                    <small className="text-secondary">Khách hàng</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card p-4 shadow border-0 h-100 rounded-4 bg-info text-white">
                            <h4 className="text-white">Rất tốt</h4>
                            <div className="mb-3">★★★★★</div>
                            <p>"Đội ngũ tư vấn tận tâm, đáp ứng đúng mong đợi. Chắc chắn sẽ quay lại và giới thiệu cho bạn bè."</p>
                            <div className="d-flex align-items-center mt-auto pt-3">
                                <img alt="Phúc Phúc" src="/images/avt1.jpg" className="rounded-circle me-3 border border-white" style={{ width: "45px", height: "45px" }} />
                                <div>
                                    <h6 className="mb-0 fw-bold">Phúc Phúc</h6>
                                    <small className="opacity-75">Khách hàng</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card p-4 shadow-sm border-0 h-100 rounded-4">
                            <h4 className="text-info">Tuyệt vời</h4>
                            <div className="text-warning mb-3">★★★★★</div>
                            <p className="text-muted">"Dịch vụ chất lượng cao, trải nghiệm đáng nhớ. Tôi thực sự hài lòng với sự hỗ trợ nhiệt tình."</p>
                            <div className="d-flex align-items-center mt-auto pt-3">
                                <img alt="Lê Hào" src="/images/avt2.jpg" className="rounded-circle me-3" style={{ width: "45px", height: "45px" }} />
                                <div>
                                    <h6 className="mb-0 fw-bold">Lê Hào</h6>
                                    <small className="text-secondary">Khách hàng</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}