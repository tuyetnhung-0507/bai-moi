import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Đây là đoạn mã bạn vừa lấy trên Firebase ban nãy nè
const firebaseConfig = {
  apiKey: "AIzaSyDUgKwb2vD4WwxSN0YvH1AVMTL6zGByetQ",
  authDomain: "toy-star-af78e.firebaseapp.com",
  projectId: "toy-star-af78e",
  storageBucket: "toy-star-af78e.firebasestorage.app",
  messagingSenderId: "637814835024",
  appId: "1:637814835024:web:e43b8f4c2bd2ab67474a55",
  measurementId: "G-BJDTH03PVR"
};

// Khởi tạo Firebase
const app = initializeApp(firebaseConfig);

// Khởi tạo Firestore (cái kho chứa đồ chơi của bạn)
const db = getFirestore(app);

// Xuất db ra để các file khác (như Home.jsx hay App.jsx) dùng được
export { db };