import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import type { Product } from "../types/product";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
    }

    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="h-screen bg-linear-120 from-pink-300 flex justify-center items-center px-50">

      <div>
        <h1 className="text-9xl">{product.title}</h1>
        <p className="font-medium">Price: R{product.price}</p>
        <p className="font-extralight">Category: {product.category}</p>
        <p className="font-light text-lg">{product.description}</p>
      </div>

      <div>
        <img src={product.thumbnail} className="w-300" />
      </div>
    </div>
  );
}
