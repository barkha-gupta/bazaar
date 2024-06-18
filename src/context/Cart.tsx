import { ReactNode, createContext, useEffect, useState } from "react";
import { Product } from "./product";

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
}
export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItemsToCart: () => {},
});

const addCartItem = (
  cartItems: CartItem[],
  productToAdd: Product
): CartItem[] => {
  console.log(productToAdd);

  //find if cartitems contains productToAdd
  const exsistingProduct = cartItems.find(
    (cartItem: CartItem) => cartItem.id === productToAdd.id
  );
  //if found - quantity ++
  if (exsistingProduct) {
    return cartItems.map((cartItem: CartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: (cartItem.quantity || 0) + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
  //return new array
};

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem("cart");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  const addItemsToCart = (productToAdd: Product) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const value = {
    cartItems,
    addItemsToCart,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
