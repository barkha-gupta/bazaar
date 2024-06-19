import { FC, ReactNode, createContext, useEffect, useState } from "react";
import { Product } from "./product";
import { toast } from "sonner";

interface CartProviderProps {
  children: ReactNode;
}

export interface CartItem {
  id: number;
  title: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addItemsToCart: (productToAdd: Product) => void;
  removeItemsFromCart: (productToRemove: CartItem) => void;
  cartTotal: number;
}
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItemsToCart: () => {},
  removeItemsFromCart: () => {},
  cartTotal: 0,
});

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: Product
): CartItem[] => {
  //find if cartitems contains productToAdd
  const exsistingProduct = cartItems.find(
    (cartItem: CartItem) => cartItem.id === productToAdd.id
  );
  //if found - quantity ++
  if (exsistingProduct) {
    toast.success("Item added to cart");
    return cartItems.map((cartItem: CartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
        : cartItem
    );
  }

  toast.success("Item added to cart");

  return [...cartItems, { ...productToAdd, quantity: 1 }];
  //return new array
};

const removeCartItem = (cartItems: CartItem[], productToRemove: CartItem) => {
  const updatedCartItems = cartItems.filter(
    (cartItem) => cartItem.id !== productToRemove.id
  );

  toast.success("Item removed from cart");

  return updatedCartItems;
};

const calculateCartTotal = (cartItems: CartItem[]) => {
  const total = cartItems.reduce(
    (total, ele) => total + ele.price * ele.quantity,
    0
  );
  return Math.round(total * 100) / 100;
};

export const CartProvider: FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem("cart");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const [cartTotal, setCartTotal] = useState<number>(0);

  const addItemsToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemsFromCart = (productToRemove: CartItem) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    setCartTotal(calculateCartTotal(cartItems));
  }, [cartItems]);

  const value = {
    cartItems,
    addItemsToCart,
    removeItemsFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
