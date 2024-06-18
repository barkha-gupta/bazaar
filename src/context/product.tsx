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

interface ProductProviderProps {
  children: ReactNode;
}

interface ProductContextType {
  productList: Product[];
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}
// const initialState = {};
export const ProductContext = createContext<ProductContextType>({
  productList: [],
  categories: [],
  selectedCategory: "",
  setSelectedCategory: () => {},
});

export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProductList(json))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <ProductContext.Provider
      value={{ productList, categories, selectedCategory, setSelectedCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
};
