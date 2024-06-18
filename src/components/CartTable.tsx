import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CartContext, CartItem } from "@/context/Cart";
import RemoveIcon from "./RemoveIcon";
import ChevronLeftIcon from "./ChevronLeftIcon";
import ChevronRightIcon from "./ChevronRightIcon";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

const CartTable = ({ cartItems }: any) => {
  const navigate = useNavigate();
  const { removeItemsFromCart } = useContext(CartContext);

  return (
    <div className="border border-slate-100 rounded-lg">
      <Table className="w-[100%]">
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Remove</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {cartItems.map((item: CartItem) => (
            <TableRow key={item.id}>
              <TableCell>
                <div className="h-[150px]">
                  <img
                    className="h-full object-contain overflow-hidden"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
              </TableCell>
              <TableCell>{item.title}</TableCell>
              <TableCell>
                <div className="flex gap-1 items-center">
                  <ChevronLeftIcon />
                  {item.quantity}
                  <ChevronRightIcon />
                </div>
              </TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell>
                <RemoveIcon onClick={() => removeItemsFromCart(item)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>

        <TableFooter>
          <TableRow>
            <TableCell
              colSpan={3}
              className="text-xl font-[600] text-slate-700"
            >
              Total
            </TableCell>
            <TableCell>$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>

      <div className=" flex justify-end items-center gap-5">
        <div className=" border border-slate-200  p-2 rounded-md  py-2 font-[600] hover:bg-slate-800 hover:text-white custom-box-shadow">
          <button onClick={() => navigate("/")}>Continue Shopping</button>
        </div>

        <div className="border border-slate-200 p-2 rounded-md  py-2 font-[600] bg-slate-700 text-white hover:bg-slate-800 custom-box-shadow">
          <Link to="/checkout">
            <button>Checkout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartTable;
