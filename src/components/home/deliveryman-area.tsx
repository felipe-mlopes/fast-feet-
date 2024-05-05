"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowSelectIcon } from "../icons/arrow-select-icon";

export function DeliverymanArea() {
  const [showDropMenu, setShowDropMenu] = useState(false);

  function handleShowDropMenu() {
    setShowDropMenu(!showDropMenu);
  }

  return (
    <div className="relative">
      <button
        onClick={handleShowDropMenu}
        className="flex gap-2 py-2 px-3 rounded cursor-pointer bg-orange-light hover:opacity-90"
      >
        <strong className="text-lavender-gray">Área do Entregador</strong>
        <ArrowSelectIcon side={showDropMenu ? "top" : "down"} />
      </button>
      {showDropMenu && (
        <ul className="absolute top-11 left-0 w-full p-1 space-y-2 border-[1px] border-purple-dark rounded bg-gray-light">
          <li>
            <Link
              href={"/signin"}
              className="flex items-center justify-center p-2 rounded bg-gray-light text-indigo-blue hover:bg-orange-light/70 hover:font-bold"
            >
              Sign In
            </Link>
          </li>
          <li>
            <Link
              href={"/signup"}
              className="flex items-center justify-center p-2 rounded bg-gray-light text-indigo-blue hover:bg-orange-light/70 hover:font-bold"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
