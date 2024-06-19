import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FilterIcon from "./FilterIcon";
import { useContext } from "react";
import { ProductContext, ProductContextType } from "@/context/product";

const SortDropdown = () => {
  const { selectedSort, sortProducts }: ProductContextType =
    useContext(ProductContext);
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="border border-slate-200 text-slate-700 p-2 rounded-md font-[600] hover:bg-slate-800 hover:text-white custom-box-shadow text-sm flex gap-2">
            <p>Sort By</p> <FilterIcon />
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-52 ">
          <DropdownMenuCheckboxItem
            checked={selectedSort === "Price (High to Low)"}
            onClick={() => sortProducts("Price (High to Low)")}
            className="focus:bg-slate-800 focus:text-white"
          >
            Price (High to Low)
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={selectedSort === "Price (Low to High)"}
            onClick={() => sortProducts("Price (Low to High)")}
            className="focus:bg-slate-800 focus:text-white"
          >
            Price (Low to High)
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={selectedSort === "Rating (High to Low)"}
            onClick={() => sortProducts("Rating (High to Low)")}
            className="focus:bg-slate-800 focus:text-white"
          >
            Rating (High to Low)
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={selectedSort === "Rating (Low to High)"}
            onClick={() => sortProducts("Rating (Low to High)")}
            className="focus:bg-slate-800 focus:text-white"
          >
            Rating (Low to High)
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={selectedSort === "Remove Sorting"}
            onClick={() => sortProducts("Remove Sorting")}
            className="focus:bg-slate-800 focus:text-white"
          >
            Remove Sorting
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SortDropdown;
