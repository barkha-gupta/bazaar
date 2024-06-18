import { CartContext } from "@/context/Cart";
import { useContext } from "react";
import { Link } from "react-router-dom";

const AddToCartButton = ({ product }: any) => {
  const cartContext = useContext(CartContext);

  const { addItemsToCart } = cartContext;
  CartContext;
  return (
    <div className="w-full ">
      <Link to="/cart">
        <button
          className="w-full border border-slate-200 rounded-md  py-2 font-[600] bg-slate-700 text-white hover:bg-slate-800"
          onClick={() => addItemsToCart(product)}
        >
          Add to Cart
        </button>
      </Link>
    </div>
  );
};

export default AddToCartButton;
