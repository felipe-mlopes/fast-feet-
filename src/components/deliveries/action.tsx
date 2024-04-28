"use client";

import { HTMLAttributes, useState } from "react";

import { editOrderStatusToPicknUp } from "@/data/actions/orders";

import { Button } from "../global/button";
import { Modal } from "../global/modal";

interface ActionProps extends HTMLAttributes<HTMLDivElement> {
  buttonContent: string;
  modalContent: string;
  isDisable?: boolean;
  isDone: boolean;
  orderId: string;
}

export function Action({
  buttonContent,
  modalContent,
  isDisable,
  isDone,
  orderId,
  ...props
}: ActionProps) {
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
    <>
      {!isDone && (
        <div {...props}>
          <Button
            content={buttonContent}
            disabled={isDisable}
            onClick={handleSetChangeOrderStatus}
          />
          <Modal
            type={isModalSuccessOpen ? "package" : "error"}
            content={modalContent}
            isDone={isDone}
            isOpen={isModalErrorOpen || isModalSuccessOpen}
            onClose={handleModalClose}
          />
        </div>
      )}
    </>
  );
}
