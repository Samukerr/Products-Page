import { useEffect, useState } from "react";
import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function fetchProducts() {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products?limit=20");
      const data = await res.json();
      setProducts(data.products);
    } catch {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div>
        <p>{error}</p>
        <button onClick={fetchProducts}>Retry</button>
      </div>
    );

  return (
    <div className=" grid grid-cols-3 ">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}