import AddToCartButton from "@/components/AddToCartButton";
import Star from "@/components/Star";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const [currentProduct, setCurrentProduct]: any = useState({});
  const { productId } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => setCurrentProduct(json));
  }, [productId]);
  {
    /* <pre>{JSON.stringify(currentProduct)}</pre> */
  }
  return (
    <div className="m-2 grid grid-cols-1 gap-5 py-5 custom-box-shadow border border-slate-100 rounded-lg sm:grid-cols-2">
      <div className="p-5 h-[300px] sm:h-[500px] mx-auto">
        <img
          src={currentProduct?.image}
          alt={currentProduct?.title}
          className="h-full overflown-hidden"
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
        <div className="text-sm text-slate-500">
          {currentProduct?.description}
        </div>
        {/* <div>
          <div>Quantity</div>
          
        </div> */}
        <AddToCartButton />
      </div>
    </div>
  );
};

export default ProductDetails;
