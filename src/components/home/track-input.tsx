"use client";

import Link from "next/link";
import { useState } from "react";

export function TrackInput() {
  const [inputValue, setInputValue] = useState("");

  function handleChange(value: string) {
    setInputValue(value.toLowerCase());
  }

  return (
    <div className="flex items-end gap-6 px-4 py-3 absolute -bottom-2 z-50 bg-gray-light rounded shadow-card">
      <div className="flex gap-3">
        <div>
          <legend className="text-sm text-lavender-gray">
            Código de rastreio
          </legend>
          <input
            type="search"
            value={inputValue}
            onChange={(e) => handleChange(e.target.value)}
            className="flex items-center justify-between py-2 px-3 gap-4 w-full border rounded outline-none appearance-none bg-white text-lavender-gray"
          />
        </div>
        <div>
          <legend className="text-sm text-lavender-gray">Cidade</legend>
          <input
            type="text"
            className="flex items-center justify-between py-2 px-3 gap-4 w-40 border rounded outline-none appearance-none bg-white text-lavender-gray"
          />
        </div>
      </div>
      <Link
        href={inputValue.length === 0 ? "#" : `/order/${inputValue}`}
        className="p-4 rounded-lg bg-orange-light font-bold text-lavender-gray"
      >
        Consultar
      </Link>
    </div>
  );
}
