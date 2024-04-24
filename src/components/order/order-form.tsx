"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";

import { createOrder } from "@/data/actions/orders";
import { prepareFormData } from "@/utils/prepare-form-data";
import { useFormCreateOrder } from "@/hooks/use-form-create-order";
import { Color } from "@/types";

import Input from "../global/input";
import { Button } from "../global/button";

import { OrderIcon } from "../icons/order-icon";
import { ProfileIcon } from "../icons/profile-icon";

export function OrderForm() {
  const [state, formAction] = useFormState(createOrder, {
    data: null,
    error: null,
  });

  const {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    titleWatch,
    emailWatch,
  } = useFormCreateOrder();

  const formRef = useRef<HTMLFormElement>(null);

  function handleFormSubmit(formData: FormData) {
    formAction(formData);
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={handleSubmit(() =>
        handleFormSubmit(new FormData(formRef.current!))
      )}
      className="flex flex-col gap-10"
    >
      <div className="space-y-4 text-gray-light">
        <div className="space-y-2 w-full">
          <label htmlFor="title">Título do Pedido</label>
          <Input
            type="text"
            placeholder="Digite um título para o pedido"
            {...register("title")}
          >
            <OrderIcon
              color={
                !!titleWatch
                  ? errors.title
                    ? Color.Error
                    : Color.Ok
                  : Color.Default
              }
            />
          </Input>
          {errors.title && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.title?.message}
            </span>
          )}
        </div>
        <div className="space-y-2 w-full">
          <label htmlFor="email">Destinatário</label>
          <Input
            type="text"
            placeholder="Pesquise pelo e-mail do destinatário"
            {...register("email")}
          >
            <ProfileIcon
              color={
                !!emailWatch
                  ? errors.email
                    ? Color.Error
                    : Color.Ok
                  : Color.Default
              }
            />
          </Input>
          {errors.email && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.email?.message}
            </span>
          )}
        </div>
      </div>
      <Button content="Criar o pedido" type="submit" disabled={isSubmitting} />
    </form>
  );
}
