import ProductCard from "@/components/ProductCard";
import { Product, ProductContext } from "@/context/product";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const { productList }: any = useContext(ProductContext);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center border border-slate-100 rounded-lg m-2 py-5">
      {productList.map((product: Product) => (
        <Link to={`/product/${product.id}`}>
          <ProductCard key={product.id} product={product} />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
