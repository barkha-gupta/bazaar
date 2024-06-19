import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import Star from "./Star";

const ProductCard = ({ product }: any) => {
  return (
    <div className="border border-slate-100 rounded-lg w-[250px] min-h-[380px] flex flex-col p-2 items-center justify-evenly custom-box-shadow overflow-hidden">
      <div className="h-[200px]">
        <Link to={`/product/${product.id}`}>
          <img
            className="h-full object-contain overflow-hidden"
            src={product.image}
            alt={product.title}
            loading="lazy"
          />
        </Link>
      </div>

      <div className="font-[600] text-center w-full">{product.title}</div>

      <div className="flex w-full justify-between text-sm text-slate-500 p-2 font-[500] ">
        <p>${product.price}</p>
        <p className="flex gap-1 items-center">
          {product.rating.rate} <Star />
        </p>
      </div>

      <AddToCartButton product={product} />
    </div>
  );
};

export default ProductCard;
