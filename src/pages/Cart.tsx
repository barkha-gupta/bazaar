import { CartContext } from "@/context/Cart";
import { useContext } from "react";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="py-5 custom-box-shadow border border-slate-100 rounded-lg">
      <h1 className="text-[2rem] font-[700] text-slate-700 text-center">
        Shoping Cart
      </h1>
    </div>
  );
};

export default Cart;
