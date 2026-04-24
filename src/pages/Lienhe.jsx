import React from "react";

export default function Lienhe() {
    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold text-info">LIÊN HỆ VỚI CHÚNG TÔI</h2>
                <p className="text-secondary">Hãy để lại lời nhắn, chúng tôi sẽ phản hồi bạn sớm nhất có thể!</p>
            </div>

            <div className="row g-5">
                <div className="col-md-6">
                    <div className="bg-light p-4 rounded-4 shadow-sm h-100">
                        <h4 className="mb-4 fw-bold">Thông tin liên lạc</h4>

                        <div className="mb-3 d-flex align-items-center">
                            <span className="bg-info text-white p-2 rounded-circle me-3" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>📍</span>
                            <p className="mb-0">Địa chỉ: TPHCM, Việt Nam</p>
                        </div>
                        <div className="mb-3 d-flex align-items-center">
                            <span className="bg-info text-white p-2 rounded-circle me-3" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>📞</span>
                            <p className="mb-0">Hotline: 0912345678</p>
                        </div>
                        <div className="mb-4 d-flex align-items-center">
                            <span className="bg-info text-white p-2 rounded-circle me-3" style={{ width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center" }}>✉️</span>
                            <p className="mb-0">Email: arttoy@gmail.com</p>
                        </div>

                        <div className="mt-5 pt-4 border-top">
                            <h5 className="fw-bold mb-3 text-info">Câu hỏi thường gặp?</h5>
                            <div className="accordion accordion-flush bg-transparent" id="faqContact">
                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed bg-transparent px-0" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                                            Shop có ship COD không?
                                        </button>
                                    </h2>
                                    <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqContact">
                                        <div className="accordion-body px-0 text-secondary small">
                                            Dạ có, ArtToy ship toàn quốc, khách được kiểm hàng trước khi nhận nha!
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header">
                                        <button className="accordion-button collapsed bg-transparent px-0" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                                            Hàng khui seal có đổi được không?
                                        </button>
                                    </h2>
                                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqContact">
                                        <div className="accordion-body px-0 text-secondary small">
                                            Với Blind Box, shop chỉ đổi nếu lỗi do nhà sản xuất khi chưa khui seal túi nhé.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <form className="p-4 border rounded-4 shadow-sm bg-white h-100">
                        <h4 className="mb-4 fw-bold">Gửi tin nhắn cho ArtToy</h4>
                        <div className="mb-3">
                            <label className="form-label">Họ và tên</label>
                            <input type="text" className="form-control" placeholder="Nhập tên của bạn..." />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input type="email" className="form-control" placeholder="name@example.com" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Số điện thoại</label>
                            <input type="text" className="form-control" placeholder="Số điện thoại của bạn..." />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Nội dung</label>
                            <textarea className="form-control" rows="4" placeholder="Bạn cần hỗ trợ gì?"></textarea>
                        </div>
                        <button type="button" className="btn btn-info w-100 text-white fw-bold py-2 rounded-pill shadow-sm mt-3">
                            GỬI TIN NHẮN
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}