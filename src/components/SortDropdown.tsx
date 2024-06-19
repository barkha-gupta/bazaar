import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import FilterIcon from "./FilterIcon";

type Checked = DropdownMenuCheckboxItemProps["checked"];

const SortDropdown = () => {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true);
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false);
  const [showPanel, setShowPanel] = React.useState<Checked>(false);
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="border border-slate-200 text-slate-700 p-2 rounded-md font-[600] hover:bg-slate-800 hover:text-white custom-box-shadow text-sm flex gap-2">
            <p>Sort By</p> <FilterIcon />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52 ">
          <DropdownMenuCheckboxItem className="focus:bg-slate-800 focus:text-white">
            Price (High to Low)
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem className="focus:bg-slate-800 focus:text-white">
            Price (Low to High)
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem className="focus:bg-slate-800 focus:text-white">
            Rating (High to Low)
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem className="focus:bg-slate-800 focus:text-white">
            Rating (Low to High)
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem className="focus:bg-slate-800 focus:text-white">
            Remove Sorting
          </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default SortDropdown;
