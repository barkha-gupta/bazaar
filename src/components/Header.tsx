import {
  ChangeEvent,
  FC,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Logo from "./Logo";
import { Link, Outlet } from "react-router-dom";
import ShopIcon from "./ShopIcon";
import ShoppingCartIcon from "./ShoppingCartIcon";

import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import SearchIcon from "./SearchIcon";
import { ProductContext } from "@/context/product";
import { useDebounce } from "@/hooks/useDebounce";

const Header: FC = () => {
  const { setSearchQuery } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const debouncedSearchQuery = useDebounce(searchTerm, 500);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "k") {
        event.preventDefault();
        searchInputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    setSearchQuery(debouncedSearchQuery);
  }, [debouncedSearchQuery, setSearchQuery]);

  const handleSearchQuery = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <div className="w-full flex justify-between items-center px-5 sm:flex-wrap gap-2">
        <div>
          <Link to={"/"}>
            <Logo />
          </Link>
        </div>
        <div className="flex items-center relative w-full max-w-xs sm:max-w-md lg:max-w-lg">
          <Input
            type="text"
            placeholder="Search here folks (ctrl + k)"
            className="w-full pr-10 focus-visible:ring-1 focus-visible:ring-slate-700 focus-visible:border-none"
            onChange={handleSearchQuery}
            ref={searchInputRef}
          />
          <div className="absolute right-1">
            <SearchIcon />
          </div>
        </div>
        <div className="flex gap-5">
          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link to="/">
                    <ShopIcon />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Shop</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

          <div>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Link to="/cart">
                    <ShoppingCartIcon />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Cart</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Header;
