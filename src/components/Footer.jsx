export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          
          {/* Cột 1: Thông tin liên hệ */}
          <div className="col-md-4 mb-4">
            <h3 className="fw-bold text-info">@ 2026 ArtToy</h3>
            <p><i className="fa fa-map-marker-alt me-2" /> Quận 9, TPHCM, Việt Nam</p>
            <p><i className="fa fa-phone me-2" /> Hotline: 0988 888 888</p>
            <p><i className="fa fa-envelope me-2" /> Email: arttoy@gmail.com</p>
            
            {/* Các app mạng xã hội */}
            <div className="mt-3">
              <h6 className="text-uppercase text-secondary mb-2">Theo dõi shop tại:</h6>
              <div className="d-flex gap-3">
                {/* Facebook */}
                <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ color: "#1877F2" }}>
                  <i className="bi bi-facebook fs-3"></i>
                </a>
                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: "#E1306C" }}>
                  <i className="bi bi-instagram fs-3"></i>
                </a>
                {/* TikTok */}
                <a href="https://tiktok.com" target="_blank" rel="noreferrer" style={{ color: "#000000", backgroundColor: "#fff", borderRadius: "50%", width: "32px", height: "32px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  <i className="bi bi-tiktok fs-5" style={{ color: "#000" }}></i>
                </a>
                {/* YouTube */}
                <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ color: "#FF0000" }}>
                  <i className="bi bi-youtube fs-3"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Cột 2: Chính sách dịch vụ */}
          <div className="col-md-4 mb-4">
            <h5 className="text-uppercase text-info mb-3">Chính Sách & Hỗ Trợ</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Chính sách bảo mật</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Chính sách đổi trả / Khui Box</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Hướng dẫn mua hàng</a></li>
              <li className="mb-2"><a href="#" className="text-white text-decoration-none">Vận chuyển & Giao nhận</a></li>
            </ul>
          </div>

          {/* Cột 3: Bản đồ cửa hàng */}
          <div className="col-md-4 text-center">
            <h5 className="mb-3 text-uppercase text-info">Bản đồ cửa hàng</h5>
            <div className="ratio ratio-16x9 rounded-4 overflow-hidden shadow-lg">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.485398611094!2d106.76933821474937!3d10.850632392271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752763f2381667%3A0x2803964f4347704b!2zVHLGsOG7nW5nIENhbyDEkeG6s25nIEPDt25nIG5naOG7hyBUUC5IQ00!5e0!3m2!1svi!2s!4v1711350000000"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}