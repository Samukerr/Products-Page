import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "../types/product";

export default function SearchResults() {
  const [params] = useSearchParams();
  const query = params.get("q") || "";

  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchResults() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://dummyjson.com/products/search?q=${query}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch results");
      }

      const data = await response.json();
      setResults(data.products);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div >
      <h1>Search Results</h1>
      <p>
        Showing results for: <strong>{query}</strong>
      </p>

     
      {loading && <p>Loading...</p>}

    
      {error && (
        <div>
          <p >{error}</p>
          <button onClick={fetchResults}>Retry</button>
        </div>
      )}

     
      {!loading && results.length === 0 && (
        <p>No products found</p>
      )}

     
      {results.map((product) => (
        <div
          key={product.id}
          
        >
          <h3>{product.title}</h3>
          <p>R{product.price}</p>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}