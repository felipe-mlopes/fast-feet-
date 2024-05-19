"use client";

import Link from "next/link";
import { useState } from "react";

import { MenuModal } from "@/components/home/menu/menu-modal";
import { MenuMain } from "./menu-main";

import { HamburguerIcon } from "@/components/icons/hamburguer-icon";

export function Menu() {
  const [showMenuModal, setShowMenuModal] = useState(false);

  function handleCloseMenuModal() {
    setShowMenuModal(false);
  }

  function handleOpenMenuModal() {
    setShowMenuModal(true);
  }

  return (
    <>
      <div className="lg:hidden">
        {showMenuModal ? (
          <MenuModal isOpen={showMenuModal} onClose={handleCloseMenuModal} />
        ) : (
          <button onClick={handleOpenMenuModal}>
            <HamburguerIcon />
          </button>
        )}
      </div>
      <div className="hidden lg:flex lg:gap-12 xl:gap-24">
        <MenuMain onClose={handleCloseMenuModal} />
        <Link
          href={"/signin"}
          className="flex gap-2 py-2 px-3 rounded cursor-pointer bg-orange-light hover:opacity-90"
        >
          Área do Entregador
        </Link>
      </div>
    </>
  );
}
