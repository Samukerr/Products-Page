import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    if (!query.trim()) return;
    navigate(`/search?q=${query}`);
  }

  return (
    <div className=" mt-10 w-full flex justify-center" >
      <div className="w-full border-2 border-gray-400 max-w-5xl h-16 focus-within:border-pink-300 rounded ring-pink-400 ">
        <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        className="h-full  w-full focus-within:outline-0 px-4 rounded"
       
      />
      
      </div>
      <button className="bg-pink-500 h-16 w-31.5 rounded-r-sm" onClick={handleSearch}>Search</button>

      
    </div>
  );
}