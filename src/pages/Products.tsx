import ProductList from "../components/ProductList";
import ProductSearch from "../components/ProductSearch";

export function Products() {
  return (
    <div className="min-h-screen  bg-pink-200 flex flex-col justify-center items-center">
     
      <ProductSearch />
      <ProductList />
    </div>
  );
}