import AdvancedFilter from "@/components/AdvancedFilter";
import ProductCard from "@/components/ProductCard";
import { Product, ProductContext, ProductContextType } from "@/context/product";
import { useContext } from "react";

const ProductList = () => {
  const { filteredProductList }: ProductContextType =
    useContext(ProductContext);

  return (
    <>
      <div>
        <div>
          <AdvancedFilter />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-items-center border border-slate-100 rounded-lg m-2 py-5">
          {filteredProductList.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
