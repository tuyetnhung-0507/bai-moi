import { useEffect, useState } from "react";
import { db } from "../data/firebase"; // Nhớ check kỹ đường dẫn này nha
import { collection, getDocs } from "firebase/firestore";

const ShowFirebase = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        const getToys = async () => {
            const data = await getDocs(collection(db, "toys"));
            setToys(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getToys();
    }, []);

    return (
        <div style={{ padding: "20px", display: "flex", gap: "20px", flexWrap: "wrap", justifyContent: "center" }}>
            {toys.map((toy) => (
                <div key={toy.id} style={{ border: "1px solid #ffc0cb", padding: "15px", borderRadius: "15px", backgroundColor: "#fff5f8", textAlign: "center", width: "200px" }}>
                    <img src={toy.image} alt={toy.name} style={{ width: "100%", borderRadius: "10px" }} />
                    <h3 style={{ color: "#ff85a2", fontSize: "18px" }}>{toy.name}</h3>
                    <p style={{ fontWeight: "bold", color: "#333" }}>{Number(toy.price).toLocaleString()}đ</p>
                </div>
            ))}
        </div>
    );
};

export default ShowFirebase;