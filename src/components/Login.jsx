import { useState } from "react";

export default function Login({ show, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Hàm xử lý logic khi bấm nút Đăng Nhập
  const handleLogin = () => {
    // Kiểm tra nếu tài khoản hoặc mật khẩu bị bỏ trống
    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu!");
      return;
    }

    // Check thử với tài khoản 'nhung' giống trong ảnh bạn chụp
    if (username === "nhung" && password === "0507") {
      alert("Đăng nhập thành công!");
      onClose(); // Đăng nhập xong tự tắt khung modal
    } else {
      alert("Sai tài khoản hoặc mật khẩu rồi!");
    }
  };

  if (!show) return null; // Không render nếu show=false

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <form
        className="p-4"
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          minWidth: "300px",
          position: "relative",
        }}
        onSubmit={(e) => e.preventDefault()} // Chặn load lại trang khi bấm Enter
      >
        <button
          type="button"
          style={{
            position: "absolute",
            top: "5px",
            right: "10px",
            fontSize: "20px",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          ×
        </button>

        <h3 className="text-center mb-3">Đăng Nhập</h3>

        <label>Tài khoản</label>
        <input
          type="text"
          className="form-control mb-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: "#00a2ff", borderColor: "#00a2ff" }} // Giữ màu xanh giống ảnh của bạn
            onClick={handleLogin} // Gọi hàm handleLogin ở trên
          >
            Đăng Nhập
          </button>
        </div>
      </form>
    </div>
  );
}