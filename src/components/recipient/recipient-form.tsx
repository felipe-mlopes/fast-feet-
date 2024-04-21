"use client";

import { useRef } from "react";
import { useFormState } from "react-dom";

import { Color } from "@/types";

import { registerRecipient } from "@/data/actions/recipients";

import { Button } from "../global/button";

import { ProfileIcon } from "../icons/profile-icon";
import { MailIcon } from "../icons/mail-icon";
import { AddressIcon } from "../icons/address-icon";
import { prepareFormData } from "@/utils/prepare-form-data";
import { useFormRegisterRecipient } from "@/hooks/use-form-register-recipient";

export function RecipientForm() {
  const [state, formAction] = useFormState(registerRecipient, {
    data: null,
    error: null,
  });

  const { handleSubmit, values, register, errors, isSubmitting } =
    useFormRegisterRecipient();

  const formRef = useRef<HTMLFormElement>(null);

  function handleFormSubmit(formData: FormData) {
    const data = prepareFormData(formData);

    formAction(data);
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      onSubmit={handleSubmit((data) =>
        handleFormSubmit(new FormData(formRef.current!))
      )}
      className="flex flex-col gap-10"
    >
      <div className="space-y-4 text-gray-light">
        <div className="space-y-2 w-full">
          <label htmlFor="">Nome Completo</label>
          <div className="flex justify-between gap-4 w-full p-4 rounded bg-gray-light">
            <div className="flex gap-4 items-center w-full">
              <ProfileIcon
                color={
                  !!values.clientName
                    ? errors.clientName && values.clientName
                      ? Color.Error
                      : Color.Ok
                    : Color.Default
                }
              />
              <span className="border-[1px] bg-bluish-gray rounded w-[1px] h-6" />
              <input
                type="text"
                className="grow min-w-5 outline-none text-base font-normal text-purple-dark bg-gray-light appearance-none"
                {...register("clientName")}
              />
            </div>
          </div>
          {errors.clientName && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.clientName?.message}
            </span>
          )}
        </div>
        <div className="space-y-2 w-full">
          <label htmlFor="">E-mail</label>
          <div className="flex justify-between gap-4 w-full p-4 rounded bg-gray-light">
            <div className="flex gap-4 items-center w-full">
              <MailIcon
                color={
                  !!values.clientEmail
                    ? errors.clientEmail && values.clientEmail
                      ? Color.Error
                      : Color.Ok
                    : Color.Default
                }
              />
              <span className="border-[1px] bg-bluish-gray rounded w-[1px] h-6" />
              <input
                type="text"
                className="grow min-w-5 outline-none text-base font-normal text-purple-dark bg-gray-light appearance-none"
                {...register("clientEmail")}
              />
            </div>
          </div>
          {errors.clientEmail && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.clientEmail?.message}
            </span>
          )}
        </div>
        <div className="space-y-2 w-full">
          <label htmlFor="">CEP</label>
          <div className="flex justify-between gap-4 w-full p-4 rounded bg-gray-light">
            <div className="flex gap-4 items-center w-full">
              <AddressIcon
                color={
                  !!values.zipcode
                    ? errors.zipcode && values.zipcode
                      ? Color.Error
                      : Color.Ok
                    : Color.Default
                }
              />
              <span className="border-[1px] bg-bluish-gray rounded w-[1px] h-6" />
              <input
                type="text"
                className="grow min-w-5 outline-none text-base font-normal text-purple-dark bg-gray-light appearance-none"
                {...register("zipcode")}
              />
            </div>
          </div>
          {errors.zipcode && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.zipcode?.message}
            </span>
          )}
        </div>
        <div className="space-y-2 w-full">
          <label htmlFor="">Endereço</label>
          <div className="flex justify-between gap-4 w-full p-4 rounded bg-gray-light">
            <div className="flex gap-4 items-center w-full">
              <AddressIcon
                color={
                  !!values.address
                    ? errors.address?.street && values.address.street
                      ? Color.Error
                      : Color.Ok
                    : Color.Default
                }
              />
              <span className="border-[1px] bg-bluish-gray rounded w-[1px] h-6" />
              <input
                type="text"
                className="grow min-w-5 outline-none text-base font-normal text-purple-dark bg-gray-light appearance-none"
                {...register("address.street")}
              />
            </div>
          </div>
          {errors.address?.street && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.address?.street?.message}
            </span>
          )}
        </div>
        <div className="flex gap-4 md:gap-6">
          <div className="space-y-2 grow-0 max-w-24">
            <label htmlFor="">Número</label>
            <div className="flex justify-between gap-4 w-full p-4 rounded bg-gray-light">
              <div className="flex gap-4 items-center w-full">
                <input
                  type="text"
                  className="grow min-w-5 outline-none text-base font-normal text-purple-dark bg-gray-light appearance-none"
                  {...register("address.number")}
                />
              </div>
            </div>
          </div>
          <div className="space-y-2 grow min-w-40">
            <label htmlFor="">Complemento</label>
            <div className="flex justify-between gap-4 w-full p-4 rounded bg-gray-light">
              <div className="flex gap-4 items-center w-full">
                <input
                  type="text"
                  className="grow min-w-5 outline-none text-base font-normal text-purple-dark bg-gray-light appearance-none"
                  {...register("address.complement")}
                />
              </div>
            </div>
          </div>
        </div>
        {errors.address?.number && (
          <span className="pt-1 text-xs font-bold text-red-400">
            {errors.address?.number?.message}
          </span>
        )}
        <div className="space-y-2 w-full">
          <label htmlFor="">Bairro</label>
          <div className="flex justify-between gap-4 w-full p-4 rounded bg-gray-light">
            <div className="flex gap-4 items-center w-full">
              <AddressIcon
                color={
                  !!values.neighborhood
                    ? errors.neighborhood && values.neighborhood
                      ? Color.Error
                      : Color.Ok
                    : Color.Default
                }
              />
              <span className="border-[1px] bg-bluish-gray rounded w-[1px] h-6" />
              <input
                type="text"
                className="grow min-w-5 outline-none text-base font-normal text-purple-dark bg-gray-light appearance-none"
                {...register("neighborhood")}
              />
            </div>
          </div>
          {errors.neighborhood && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.neighborhood?.message}
            </span>
          )}
        </div>
        <div className="flex gap-4 md:gap-6">
          <div className="space-y-2 grow min-w-40">
            <label htmlFor="">Cidade</label>
            <div className="flex justify-between gap-4 w-full p-4 rounded bg-gray-light">
              <div className="flex gap-4 items-center w-full">
                <AddressIcon
                  color={
                    !!values.city
                      ? errors.city && values.city
                        ? Color.Error
                        : Color.Ok
                      : Color.Default
                  }
                />
                <span className="border-[1px] bg-bluish-gray rounded w-[1px] h-6" />
                <input
                  type="text"
                  className="grow min-w-5 outline-none text-base font-normal text-purple-dark bg-gray-light appearance-none"
                  {...register("city")}
                />
              </div>
            </div>
            {errors.city && (
              <span className="pt-1 text-xs font-bold text-red-400">
                {errors.city?.message}
              </span>
            )}
          </div>
          <div className="space-y-2 grow-0 max-w-24">
            <label htmlFor="">UF</label>
            <div className="flex justify-between gap-4 w-full p-4 rounded bg-gray-light">
              <div className="flex gap-4 items-center w-full">
                <input
                  type="text"
                  className="grow min-w-5 outline-none text-base font-normal text-purple-dark bg-gray-light appearance-none"
                  {...register("state")}
                />
              </div>
            </div>
            {errors.state && (
              <span className="pt-1 text-xs font-bold text-red-400">
                {errors.state?.message}
              </span>
            )}
          </div>
        </div>
      </div>
      <Button
        content="Registar o destinatário"
        type="submit"
        disabled={isSubmitting}
      />
    </form>
  );
}
