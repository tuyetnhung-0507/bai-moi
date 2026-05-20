import axios from "axios";
import { useEffect, useState } from "react";

export default function Login({ show, onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [listUsers, setListUsers] = useState([]); // Thùng chứa danh sách user lấy từ Firebase

  // Gọi API lấy danh sách user từ Firebase về để sẵn trong máy
  useEffect(() => {
    axios
      .get("https://firestore.googleapis.com/v1/projects/toy-star-web/databases/(default)/documents/users")
      .then((res) => {
        const rawData = res.data.documents || [];
        const formattedUsers = rawData.map((doc) => ({
          username: doc.fields.username.stringValue,
          password: doc.fields.password.stringValue,
          hoten: doc.fields.hoten.stringValue,
          avatar: doc.fields.avatar.stringValue,
        }));
        setListUsers(formattedUsers);
      })
      .catch((err) => console.error("Lỗi lấy dữ liệu user:", err));
  }, []);

  const handleLogin = () => {
    if (!username || !password) {
      alert("Vui lòng nhập đầy đủ tài khoản và mật khẩu!");
      return;
    }

    // Dò tìm tài khoản gõ vào xem có khớp với danh sách trên Firebase không
    const checkUser = listUsers.find(
      (u) => u.username === username && u.password === password
    );

    if (checkUser) {
      alert(`Đăng nhập thành công! Chào ${checkUser.hoten}`);
      onClose(); // Đăng nhập xong tự tắt khung modal
    } else {
      alert("Sai tài khoản hoặc mật khẩu!");
    }
  };

  if (!show) return null; 

  return (
    <div
      style={{
        position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center",
        alignItems: "center", zIndex: 9999,
      }}
    >
      <form
        className="p-4"
        style={{
          backgroundColor: "#fff", borderRadius: "8px", minWidth: "300px", position: "relative",
        }}
        onSubmit={(e) => e.preventDefault()} 
      >
        <button
          type="button"
          style={{
            position: "absolute", top: "5px", right: "10px", fontSize: "20px",
            border: "none", background: "none", cursor: "pointer",
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
            style={{ backgroundColor: "#00a2ff", borderColor: "#00a2ff" }} 
            onClick={handleLogin} 
          >
            Đăng Nhập
          </button>
        </div>
      </form>
    </div>
  );
}