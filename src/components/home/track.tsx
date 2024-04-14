"use client";

import Link from "next/link";
import { useState } from "react";

import { DeliveryIcon } from "../icons/delivery-icon";
import { SearchIcon } from "../icons/search-icon";

export function Track() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  function handleModal() {
    setIsOpen(!isOpen);
  }

  function handleChange(value: string) {
    setInputValue(value.toLowerCase());
  }

  return (
    <section className="flex justify-between items-center">
      <h3
        className={`py-2 text-lg text-orange-light ${
          isOpen ? "hidden" : "block"
        }`}
      >
        Consulte aqui o status do seu pedido
      </h3>
      <Link
        href={inputValue.length === 0 ? "#" : `/order/${inputValue}`}
        className={`${isOpen ? "block" : "hidden"}`}
      >
        <div className="flex items-center justify-between py-2 px-3 gap-4 w-full bg-white border rounded shadow-card">
          <input
            type="search"
            value={inputValue}
            onChange={(e) => handleChange(e.target.value)}
            className="outline-none appearance-none bg-white w-full"
          />
          <button type="submit">
            <SearchIcon />
          </button>
        </div>
      </Link>
      <button onClick={handleModal} className="p-2 rounded bg-orange-light">
        <DeliveryIcon />
      </button>
    </section>
  );
}
