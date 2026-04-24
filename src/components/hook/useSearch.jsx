import { useState } from "react";

export default function useSearch(Data) {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredData = Data.filter((item) =>
        item.tensp.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
        searchTerm,
        setSearchTerm,
        filteredData
    };
}