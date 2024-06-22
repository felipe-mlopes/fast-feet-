"use client";

import { useRegisterRecipientForm } from "@/view/ui-logic/hooks/use-register-recipient-form";

import Input from "@/view/components/global/input";
import { Button } from "@/view/components/global/button";

import { ProfileIcon } from "@/view/components/icons/profile-icon";
import { MailIcon } from "@/view/components/icons/mail-icon";
import { AddressIcon } from "@/view/components/icons/address-icon";

export function RecipientForm() {
  const {
    values,
    register,
    errors,
    isSubmitting,
    formRef,
    handleRegisterRecipient,
  } = useRegisterRecipientForm();

  return (
    <form
      ref={formRef}
      action={handleRegisterRecipient}
      className="flex flex-col gap-10"
    >
      <div className="space-y-4 text-gray-light">
        <div className="space-y-2 w-full">
          <label htmlFor="clientName">Nome Completo</label>
          <Input type="text" {...register("clientName")}>
            <ProfileIcon
              className={
                !!values.clientName
                  ? errors.clientName && values.clientName
                    ? "fill-red-500"
                    : "fill-indigo-blue"
                  : "fill-orange-light"
              }
            />
          </Input>
          {errors.clientName && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.clientName?.message}
            </span>
          )}
        </div>
        <div className="space-y-2 w-full">
          <label htmlFor="clientEmail">E-mail</label>
          <Input type="email" {...register("clientEmail")}>
            <MailIcon
              className={
                !!values.clientEmail
                  ? errors.clientEmail && values.clientEmail
                    ? "fill-red-500"
                    : "fill-indigo-blue"
                  : "fill-orange-light"
              }
            />
          </Input>
          {errors.clientEmail && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.clientEmail?.message}
            </span>
          )}
        </div>
        <div className="space-y-2 w-full">
          <label htmlFor="zipcode">CEP</label>
          <Input type="text" maxLength={9} {...register("zipcode")}>
            <AddressIcon
              className={
                !!values.zipcode
                  ? errors.zipcode && values.zipcode
                    ? "fill-red-500"
                    : "fill-indigo-blue"
                  : "fill-orange-light"
              }
            />
          </Input>
          {errors.zipcode && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.zipcode?.message}
            </span>
          )}
        </div>
        <div className="space-y-2 w-full">
          <label htmlFor="address-street">Endereço</label>
          <Input type="text" {...register("address_street")}>
            <AddressIcon
              className={
                !!values.address_street
                  ? errors.address_street && values.address_street
                    ? "fill-red-500"
                    : "fill-indigo-blue"
                  : "fill-orange-light"
              }
            />
          </Input>
          {errors.address_street && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.address_street?.message}
            </span>
          )}
        </div>
        <div className="flex gap-4 md:gap-6">
          <div className="space-y-2 grow-0 max-w-24">
            <label htmlFor="address-number">Número</label>
            <Input
              type="number"
              hasIcon={false}
              {...register("address_number")}
            />
          </div>
          <div className="space-y-2 grow min-w-40">
            <label htmlFor="address-complement">Complemento</label>
            <Input
              type="text"
              hasIcon={false}
              {...register("address_complement")}
            />
          </div>
        </div>
        {errors.address_number && (
          <span className="pt-1 text-xs font-bold text-red-400">
            {errors.address_number?.message}
          </span>
        )}
        <div className="space-y-2 w-full">
          <label htmlFor="neighborhood">Bairro</label>
          <Input type="text" {...register("neighborhood")}>
            <AddressIcon
              className={
                !!values.neighborhood
                  ? errors.neighborhood && values.neighborhood
                    ? "fill-red-500"
                    : "fill-indigo-blue"
                  : "fill-orange-light"
              }
            />
          </Input>
          {errors.neighborhood && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.neighborhood?.message}
            </span>
          )}
        </div>
        <div className="flex gap-4 md:gap-6">
          <div className="space-y-2 grow min-w-40">
            <label htmlFor="city">Cidade</label>
            <Input type="text" {...register("city")}>
              <AddressIcon
                className={
                  !!values.city
                    ? errors.city && values.city
                      ? "fill-red-500"
                      : "fill-indigo-blue"
                    : "fill-orange-light"
                }
              />
            </Input>
            {errors.city && (
              <span className="pt-1 text-xs font-bold text-red-400">
                {errors.city?.message}
              </span>
            )}
          </div>
          <div className="space-y-2 grow-0 max-w-24">
            <label htmlFor="name">UF</label>
            <Input
              type="text"
              maxLength={2}
              hasIcon={false}
              {...register("state")}
            />
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
        className="w-full md:px-[8.25rem] py-[1.125rem] rounded whitespace-nowrap text-center bg-orange-light text-purple-dark hover:bg-orange-300 font-medium disabled:opacity-50"
      />
    </form>
  );
}
