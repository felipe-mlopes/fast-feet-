"use client";

import { useState } from "react";

import { MenuModal } from "@/components/home/menu-modal";
import { MenuMain } from "./menu-main";
import { DeliverymanArea } from "./deliveryman-area";

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
        <DeliverymanArea />
      </div>
    </>
  );
}
