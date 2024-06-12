import { useState } from "react";

import { editOrderStatusToPicknUpAction } from "@/view/ui-logic/actions/edit-order-status-to-picknup.action";

export function useEditOrderStatusToPicknUp(orderId: string) {
const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalErrorOpen(false);
    setIsModalSuccessOpen(false);
  };

  async function handleSetChangeOrderStatus() {
    const response = await editOrderStatusToPicknUpAction(orderId);

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