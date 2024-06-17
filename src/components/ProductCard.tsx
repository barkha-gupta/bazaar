import AddToCartButton from "./AddToCartButton";
import Star from "./Star";

const ProductCard = ({ product }: any) => {
  return (
    <div className="border border-slate-100 rounded-xl w-[250px] min-h-[380px] flex flex-col p-2 items-center justify-evenly custom-box-shadow custom-font-size overflow-hidden">
      <div className="h-[200px]">
        <img
          className="h-full object-fit overflow-hidden"
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="font-[600] text-center w-full">{product.title}</div>

      <div className="flex w-full justify-between text-sm text-slate-500 p-2 font-[500] ">
        <p>${product.price}</p>
        <p className="flex gap-1 items-center">
          {product.rating.rate} <Star />
        </p>
      </div>

      <AddToCartButton />
    </div>
  );
};

export default ProductCard;
