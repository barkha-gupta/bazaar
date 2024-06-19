import { ProductContext } from "@/context/product";
import { useContext } from "react";

const AdvancedFilter = () => {
  const { categories, selectedCategory, setSelectedCategory } =
    useContext(ProductContext);
  return (
    <div className="border border-red-500 mt-4 p-5 flex items-center justify-between gap-5 ">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <div
            key={category}
            className={`${
              selectedCategory === category ? "btn-primary" : "btn-secondary"
            }`}
          >
            <button onClick={() => setSelectedCategory(category)}>
              {category}
            </button>
          </div>
        ))}
      </div>

      <div className="btn-secondary">
        <button>sort</button>
      </div>
    </div>
  );
};

export default AdvancedFilter;
