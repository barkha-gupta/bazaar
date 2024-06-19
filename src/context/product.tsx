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
  selectedSort: string;
  sortProducts: (sortType: string) => void;
}

export const ProductContext = createContext<ProductContextType>({
  productList: [],
  categories: [],
  selectedCategory: "",
  setSelectedCategory: () => {},
  filteredProductList: [],
  selectedSort: "",
  sortProducts: () => {},
});

const sortArray = (array: Product[], sortType: string) => {
  switch (sortType) {
    case "Price (High to Low)":
      return array.sort((a, b) => b.price - a.price);
    case "Price (Low to High)":
      return array.sort((a, b) => a.price - b.price);
    case "Rating (High to Low)":
      return array.sort((a, b) => b.rating.rate - a.rating.rate);
    case "Rating (Low to High)":
      return array.sort((a, b) => a.rating.rate - b.rating.rate);
    case "Remove Sorting":
      return array;
    default:
      return array;
  }
};

export const ProductProvider: FC<ProductProviderProps> = ({ children }) => {
  const [productList, setProductList] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredProductList, setFilteredProductList] = useState<Product[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>("");

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

  const sortProducts = (sortType: string) => {
    if (selectedSort === sortType) return;
    setSelectedSort(sortType);

    const sortedProducts =
      sortType === "Remove Sorting"
        ? productList
        : sortArray([...filteredProductList], sortType);

    setFilteredProductList(sortedProducts);
  };

  return (
    <ProductContext.Provider
      value={{
        productList,
        categories,
        selectedCategory,
        setSelectedCategory,
        filteredProductList,
        selectedSort,
        sortProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
