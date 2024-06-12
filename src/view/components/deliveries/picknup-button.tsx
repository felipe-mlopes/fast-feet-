"use client";

import { HTMLAttributes } from "react";

import { useEditOrderStatusToPicknUp } from "@/view/ui-logic/hooks/use-edit-order-status-to-picknup";

import { Button } from "@/view/components/global/button";
import { Modal } from "@/view/components/global/modal";

interface PicknUpButtonProps extends HTMLAttributes<HTMLDivElement> {
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
    <div {...props}>
      <Button
        content={buttonContent}
        disabled={isDisable}
        onClick={handleSetChangeOrderStatus}
        className="w-full md:px-[8.25rem] py-[1.125rem] rounded whitespace-nowrap text-center bg-orange-light text-purple-dark hover:bg-orange-300 font-medium disabled:opacity-50"
      />
      <Modal
        type={isModalSuccessOpen ? "package" : "error"}
        content={modalContent}
        isOpen={isModalErrorOpen || isModalSuccessOpen}
        onClose={handleModalClose}
      />
    </div>
  );
}
