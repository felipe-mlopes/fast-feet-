import { useState } from "react";

import { editOrderStatusToDoneAction } from "../actions/edit-order-status-to-done.action";

export function useEditOrderStatusToDone(orderId: string) {
const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalErrorOpen(false);
    setIsModalSuccessOpen(false);
  };

  async function handleSetChangeOrderStatus() {
    const response = await editOrderStatusToDoneAction(orderId);

    if (!response) {
      return setIsModalErrorOpen(!isModalErrorOpen);
    }

    setIsModalSuccessOpen(!isModalSuccessOpen);
  }

  return {
    isModalSuccessOpen,
    isModalErrorOpen,
    handleModalClose,
    handleSetChangeOrderStatus
  }
}