import React from "react";
import ShowSPKM, { ShowSPBC, ShowSPH } from "../components/ShowProduct";

export default function Sanpham() {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-md-3">
                    <div className="filter-sidebar p-4 bg-light rounded-4 shadow-sm mb-4">
                        <h5 className="fw-bold mb-4 text-info">DANH MỤC</h5>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <a href="#" className="text-decoration-none text-dark d-flex justify-content-between">
                                    Skullpanda <span className="badge bg-secondary rounded-pill">12</span>
                                </a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-decoration-none text-dark d-flex justify-content-between">
                                    Molly <span className="badge bg-secondary rounded-pill">8</span>
                                </a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-decoration-none text-dark d-flex justify-content-between">
                                    Dimoo <span className="badge bg-secondary rounded-pill">15</span>
                                </a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-decoration-none text-dark d-flex justify-content-between">
                                    Hirono <span className="badge bg-secondary rounded-pill">6</span>
                                </a>
                            </li>
                        </ul>

                        <hr />

                        <h5 className="fw-bold my-4 text-info">KHOẢNG GIÁ</h5>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="price" id="p1" />
                            <label className="form-check-label" htmlFor="p1">Dưới 500k</label>
                        </div>
                        <div className="form-check mb-2">
                            <input className="form-check-input" type="radio" name="price" id="p2" />
                            <label className="form-check-label" htmlFor="p2">500k - 1 triệu</label>
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" type="radio" name="price" id="p3" />
                            <label className="form-check-label" htmlFor="p3">Trên 1 triệu</label>
                        </div>

                        <button className="btn btn-info w-100 text-white rounded-pill shadow-sm">LỌC SẢN PHẨM</button>
                    </div>
                </div>

                <div className="col-md-9">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h3 className="fw-bold mb-0">TẤT CẢ SẢN PHẨM</h3>
                        <select className="form-select w-25 rounded-pill shadow-sm">
                            <option>Mới nhất</option>
                            <option>Giá thấp đến cao</option>
                            <option>Giá cao đến thấp</option>
                        </select>
                    </div>

                    <div className="product-list">
                        <ShowSPKM />
                        <div className="mt-5">
                            <ShowSPBC />
                        </div>
                        <div className="mt-5">
                            <ShowSPH />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}