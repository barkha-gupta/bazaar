import AddToCartButton from "@/components/AddToCartButton";
import Star from "@/components/Star";
import { Product } from "@/context/product";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const defaultProduct: Product = {
  id: 0,
  title: "",
  image: "",
  price: 0,
  description: "",
  category: "",
  rating: {
    rate: 0,
    count: 0,
  },
};

const ProductDetails = () => {
  const [currentProduct, setCurrentProduct] = useState<Product>(defaultProduct);

  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setCurrentProduct(json))
      .catch((error) => console.error("Error fetching products:", error));
  }, [productId]);

  return (
    <div className="m-2 grid grid-cols-1 gap-5 py-5 custom-box-shadow border border-slate-100 rounded-lg sm:grid-cols-2">
      <div className="p-5 h-[300px] sm:h-[500px] mx-auto">
        <img
          src={currentProduct?.image}
          alt={currentProduct?.title}
          className="h-full w-full object-contain overflown-hidden"
        />
      </div>
      <div className=" flex flex-col gap-2 justify-around p-5">
        <div className="font-[700] text-[2rem] text-slate-700">
          {currentProduct?.title}
        </div>

        <div className="flex w-full justify-between text-slate-500 p-2 font-[500] ">
          <p>${currentProduct?.price}</p>
          <p className="flex gap-1 items-center">
            {currentProduct?.rating?.rate} <Star />
          </p>
        </div>

        <div className="h-[2px] bg-slate-200" />
        <div className="text-sm text-slate-500 custom-font-size mb-4">
          {currentProduct?.description}
        </div>

        <AddToCartButton product={currentProduct} />
      </div>
    </div>
  );
};

export default ProductDetails;
