export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-4">
            <h3 className="fw-bold text-info">@ 2026 ArtToy</h3>
            <p><i className="fa fa-map-marker-alt me-2" /> Quận 9, TPHCM, Việt Nam</p>
            <p><i className="fa fa-phone me-2" /> Hotline: 0988 888 888</p>
            <p><i className="fa fa-envelope me-2" /> Email: arttoy@gmail.com</p>
          </div>
          <div className="col-md-6 text-center">
            <h5 className="mb-3 text-uppercase">Bản đồ cửa hàng</h5>
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
