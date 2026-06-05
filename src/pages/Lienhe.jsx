import React, { useState } from "react";

export default function Lienhe() {
    const [form, setForm] = useState({
        fullname: "",
        address: "",
        phone: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const newErrors = {};

        if (!form.fullname.trim()) {
            newErrors.fullname = "Họ tên không được để trống.";
        }

        if (!form.address.trim()) {
            newErrors.address = "Địa chỉ không được để trống.";
        }

        if (!form.phone.trim()) {
            newErrors.phone = "Số điện thoại không được để trống.";
        } else if (!/^0[0-9]{9}$/.test(form.phone.trim())) {
            newErrors.phone =
                "Số điện thoại phải bắt đầu bằng 0 và có 10 chữ số.";
        }

        if (!form.email.trim()) {
            newErrors.email = "Email không được để trống.";
        } else if (
            !/^[\w-.]+@[\w-]+\.[a-zA-Z]{2,}$/.test(form.email.trim())
        ) {
            newErrors.email = "Email không hợp lệ.";
        }

        if (!form.message.trim()) {
            newErrors.message = "Vui lòng nhập nội dung.";
        }

        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));

        setErrors((prev) => ({
            ...prev,
            [name]: "",
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const validationErrors = validate();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            setSubmitted(true);

            console.log("Thông tin gửi:", form);

        } else {
            setSubmitted(false);
        }
    };

    return (
        <div className="container py-5">
            <div className="text-center mb-5">
                <h2 className="fw-bold text-info">
                    LIÊN HỆ VỚI CHÚNG TÔI
                </h2>
                <p className="text-secondary">
                    Hãy để lại lời nhắn, chúng tôi sẽ phản hồi bạn sớm nhất có
                    thể!
                </p>
            </div>

            <div className="row g-5">
                {/* Thông tin liên hệ */}
                <div className="col-md-6">
                    <div className="bg-light p-4 rounded-4 shadow-sm h-100">
                        <h4 className="mb-4 fw-bold">Thông tin liên lạc</h4>

                        <div className="mb-3 d-flex align-items-center">
                            <span
                                className="bg-info text-white p-2 rounded-circle me-3"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                📍
                            </span>
                            <p className="mb-0">
                                Địa chỉ: TPHCM, Việt Nam
                            </p>
                        </div>

                        <div className="mb-3 d-flex align-items-center">
                            <span
                                className="bg-info text-white p-2 rounded-circle me-3"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                📞
                            </span>
                            <p className="mb-0">
                                Hotline: 0912345678
                            </p>
                        </div>

                        <div className="mb-4 d-flex align-items-center">
                            <span
                                className="bg-info text-white p-2 rounded-circle me-3"
                                style={{
                                    width: "40px",
                                    height: "40px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                ✉️
                            </span>
                            <p className="mb-0">
                                Email: arttoy@gmail.com
                            </p>
                        </div>
                        <div className="mt-5 pt-4 border-top">
                            <h5 className="fw-bold mb-3 text-info">Câu hỏi thường gặp?</h5>

                            <div className="accordion accordion-flush bg-transparent" id="faqContact">

                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed bg-transparent px-0"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq1"
                                        >
                                            Shop có ship COD không?
                                        </button>
                                    </h2>

                                    <div
                                        id="faq1"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqContact"
                                    >
                                        <div className="accordion-body px-0 text-secondary small">
                                            Dạ có, ArtToy ship toàn quốc, khách được kiểm hàng trước khi nhận nha!
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item bg-transparent">
                                    <h2 className="accordion-header">
                                        <button
                                            className="accordion-button collapsed bg-transparent px-0"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#faq2"
                                        >
                                            Hàng khui seal có đổi được không?
                                        </button>
                                    </h2>

                                    <div
                                        id="faq2"
                                        className="accordion-collapse collapse"
                                        data-bs-parent="#faqContact"
                                    >
                                        <div className="accordion-body px-0 text-secondary small">
                                            Với Blind Box, shop chỉ đổi nếu lỗi do nhà sản xuất khi chưa khui seal túi nhé.
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* Form liên hệ */}
                <div className="col-md-6">
                    <form
                        onSubmit={handleSubmit}
                        className="p-4 border rounded-4 shadow-sm bg-white h-100"
                    >
                        <h4 className="mb-4 fw-bold">
                            Gửi tin nhắn cho ArtToy
                        </h4>

                        <div className="mb-3">
                            <label className="form-label">
                                Họ và tên
                            </label>
                            <input
                                type="text"
                                name="fullname"
                                value={form.fullname}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.fullname && (
                                <small className="text-danger">
                                    {errors.fullname}
                                </small>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Địa chỉ
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={form.address}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.address && (
                                <small className="text-danger">
                                    {errors.address}
                                </small>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Số điện thoại
                            </label>
                            <input
                                type="text"
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.phone && (
                                <small className="text-danger">
                                    {errors.phone}
                                </small>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.email && (
                                <small className="text-danger">
                                    {errors.email}
                                </small>
                            )}
                        </div>

                        <div className="mb-3">
                            <label className="form-label">
                                Nội dung
                            </label>
                            <textarea
                                rows="4"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                className="form-control"
                            />
                            {errors.message && (
                                <small className="text-danger">
                                    {errors.message}
                                </small>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="btn btn-info w-100 text-white fw-bold py-2 rounded-pill shadow-sm mt-3"
                        >
                            GỬI TIN NHẮN
                        </button>

                        {submitted && (
                            <div className="alert alert-success mt-3 rounded-4 shadow-sm border-0">
                                <div className="d-flex align-items-center mb-2">
                                    <span className="me-2 fs-4">🎉</span>
                                    <h5 className="mb-0 fw-bold text-success">
                                        Gửi liên hệ thành công!
                                    </h5>
                                </div>

                                <p className="text-secondary mb-3">
                                    Chúng tôi sẽ phản hồi sớm nhất có thể.
                                </p>

                                <div className="bg-white p-3 rounded-3 border">
                                    <p className="mb-1">
                                        <strong>👤 Họ tên:</strong> {form.fullname}
                                    </p>
                                    <p className="mb-1">
                                        <strong>📍 Địa chỉ:</strong> {form.address}
                                    </p>
                                    <p className="mb-1">
                                        <strong>📞 Số điện thoại:</strong> {form.phone}
                                    </p>
                                    <p className="mb-1">
                                        <strong>✉️ Email:</strong> {form.email}
                                    </p>
                                    <p className="mb-0">
                                        <strong>💬 Nội dung:</strong> {form.message}
                                    </p>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}