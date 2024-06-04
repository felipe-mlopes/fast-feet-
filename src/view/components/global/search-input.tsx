"use client";

import {
  ForwardRefRenderFunction,
  InputHTMLAttributes,
  forwardRef,
} from "react";

import { SearchIcon } from "../icons/search-icon";

interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  isHome?: boolean;
  onChangeSearchContent?: () => void;
}

const SearchInput: ForwardRefRenderFunction<
  HTMLInputElement,
  SearchInputProps
> = ({ isHome, onChangeSearchContent, ...props }, ref) => {
  return (
    <div
      className={`flex items-center gap-4 w-full bg-white border rounded shadow-card 
      ${isHome ? "justify-between py-2 px-3" : "justify-around px-6 py-5"}`}
    >
      <input
        ref={ref}
        className="outline-none appearance-none bg-white w-full"
        {...props}
      />
      <button>
        <SearchIcon />
      </button>
    </div>
  );
};

export default forwardRef(SearchInput);
