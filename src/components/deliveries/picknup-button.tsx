"use client";

import { HTMLAttributes, useState } from "react";

import { editOrderStatusToPicknUp } from "@/data/actions/orders";

import { Button } from "../global/button";
import { Modal } from "../global/modal";

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
  const [isModalSuccessOpen, setIsModalSuccessOpen] = useState(false);
  const [isModalErrorOpen, setIsModalErrorOpen] = useState(false);

  const handleModalClose = () => {
    setIsModalErrorOpen(false);
    setIsModalSuccessOpen(false);
  };

  async function handleSetChangeOrderStatus() {
    const response = await editOrderStatusToPicknUp(orderId);

    if (!response) {
      return setIsModalErrorOpen(!isModalErrorOpen);
    }

    setIsModalSuccessOpen(!isModalSuccessOpen);
  }

  return (
    <div {...props}>
      <Button
        content={buttonContent}
        disabled={isDisable}
        onClick={handleSetChangeOrderStatus}
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
