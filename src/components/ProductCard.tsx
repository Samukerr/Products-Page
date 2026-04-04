import type { Product } from "../types/product";
import { Link } from "react-router-dom";

type Props = {
  product: Product;
};

export default function ProductCard({ product }: Props) {
  return (
    <Link
        to={`/products/${product.id}`}
        
      >
    <div className="shadow-md bg-linear-60  m-2 rounded p-1 w-90 h-80">
      <div className="flex w-full justify-center bg-linear-60 from-pink-300">
        <img src={product.thumbnail} className="w-60 " alt="" />
      </div>
      <div>
        <h3 className="font-bold">{product.title}</h3>

        <div className="">
          <p className="text-">R{product.price}</p>
        <p>{product.category}</p>
        </div>
        
      </div>

      
        
      
    </div>
    </Link>
  );
}
