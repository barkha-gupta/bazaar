import { ProductContext } from "@/context/product";
import { useContext } from "react";
import FilterIcon from "./FilterIcon";

const AdvancedFilter = () => {
  const { categories, selectedCategory, setSelectedCategory } =
    useContext(ProductContext);
  return (
    <div className="mt-4 p-5 flex items-center justify-between gap-5 ">
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <div
            key={category}
            className={`${
              selectedCategory === category
                ? "border border-slate-200 p-2 rounded-md font-[600] bg-slate-700 text-white hover:bg-slate-800 custom-box-shadow text-sm"
                : "border border-slate-200 text-slate-700 p-2 rounded-md font-[600] hover:bg-slate-800 hover:text-white custom-box-shadow text-sm"
            }`}
          >
            <button onClick={() => setSelectedCategory(category)}>
              {category}
            </button>
          </div>
        ))}
        <div className="border border-slate-200 text-slate-700 p-2 rounded-md font-[600] hover:bg-slate-800 hover:text-white custom-box-shadow text-sm ">
          <button
            onClick={() => setSelectedCategory("")}
            className="flex gap-1"
          >
            <p>clear</p> <FilterIcon />
          </button>
        </div>
      </div>

      <div className="btn-secondary">
        <button>sort</button>
      </div>
    </div>
  );
};

export default AdvancedFilter;
