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

export interface ProductContextType {
  productList: Product[];
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  filteredProductList: Product[];
}

export const ProductContext = createContext<ProductContextType>({
  productList: [],
  categories: [],
  selectedCategory: "",
  setSelectedCategory: () => {},
  filteredProductList: [],
});

export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredProductList, setFilteredProductList] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductList(json);
        setFilteredProductList(json);
      })
      .catch((error) => console.error("Error fetching products:", error));

    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((json) => setCategories(json))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    const filterByCategory = (category: string) => {
      if (selectedCategory === "") {
        setFilteredProductList(productList);
      } else {
        setFilteredProductList(
          productList.filter((product) => product.category === category)
        );
      }
    };

    filterByCategory(selectedCategory);
  }, [selectedCategory, productList, setFilteredProductList]);

  return (
    <ProductContext.Provider
      value={{
        productList,
        categories,
        selectedCategory,
        setSelectedCategory,
        filteredProductList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
