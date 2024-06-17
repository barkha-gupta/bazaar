import {
  createContext,
  useEffect,
  useState,
  ReactNode,
  FC,
  Dispatch,
  SetStateAction,
} from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductContextType {
  productList: Product[];
  setProductList: Dispatch<SetStateAction<Product>>;
}
// const initialState = {};
export const ProductContext = createContext<ProductContextType | {}>({});

interface ProductProviderProps {
  children: ReactNode;
}

export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductList(json))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <ProductContext.Provider value={{ productList, setProductList }}>
      {children}
    </ProductContext.Provider>
  );
};
