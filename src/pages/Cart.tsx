import CartTable from "@/components/CartTable";
import { CartContext } from "@/context/Cart";
import { useContext } from "react";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="p-5 custom-box-shadow border border-slate-100 rounded-lg m-2">
      <h1 className="text-[2rem] font-[700] text-slate-700 text-center mb-5">
        Shoping Cart
      </h1>
      {cartItems.length ? (
        <CartTable cartItems={cartItems} />
      ) : (
        <h2 className="font-[500] text-slate-500 text-center mb-5">
          No items in your Cart!
        </h2>
      )}
    </div>
  );
};

export default Cart;
