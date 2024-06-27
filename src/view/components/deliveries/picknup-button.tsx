"use client";

import { HTMLAttributes } from "react";

import { useEditOrderStatusToPicknUp } from "@/view/ui-logic/hooks/use-edit-order-status-to-picknup";

import { Button } from "@/view/components/global/button";
import { Modal } from "@/view/components/global/modal";

interface PicknUpButtonProps extends HTMLAttributes<HTMLButtonElement> {
  buttonContent: string;
  modalContent: string;
  isDisable?: boolean;
  orderId: string;
}

export function PicknUpButton({
  buttonContent,
  modalContent,
  isDisable,
  orderId,
  ...props
}: PicknUpButtonProps) {
  const {
    isModalSuccessOpen,
    isModalErrorOpen,
    handleModalClose,
    handleSetChangeOrderStatus,
  } = useEditOrderStatusToPicknUp(orderId);

  return (
    <>
      <Button
        content={buttonContent}
        disabled={isDisable}
        onClick={handleSetChangeOrderStatus}
        {...props}
      />
      <Modal
        type={isModalSuccessOpen ? "package" : "error"}
        content={modalContent}
        isOpen={isModalErrorOpen || isModalSuccessOpen}
        onClose={handleModalClose}
      />
    </>
  );
}
