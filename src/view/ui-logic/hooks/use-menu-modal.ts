import { useState } from "react";

export function useMenuModal() {
    const [showMenuModal, setShowMenuModal] = useState(false);

  function handleCloseMenuModal() {
    setShowMenuModal(false);
  }

  function handleOpenMenuModal() {
    setShowMenuModal(true);
  }

  return {
    showMenuModal,
    handleCloseMenuModal,
    handleOpenMenuModal
  }
}