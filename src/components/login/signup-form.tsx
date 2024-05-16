"use client";

import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
  useRef,
  useState,
} from "react";
import { useFormState } from "react-dom";

import { UseFormSignUp } from "@/hooks/use-form-sign-up";
import { Color, FormStateTypes } from "@/types";

import Input from "../global/input";
import { Button } from "@/components/global/button";
import { Modal } from "../global/modal";

import { MailIcon } from "@/components/icons/mail-icon";
import { PadlockIcon } from "@/components/icons/padlock-icon";
import { ProfileIcon } from "@/components/icons/profile-icon";
import { IdIcon } from "@/components/icons/id-icon";

type HTMLFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

interface FormProps extends PropsWithChildren<Omit<HTMLFormProps, "action">> {
  action: (
    prevState: FormStateTypes,
    formData: FormData
  ) => Promise<FormStateTypes>;
}

export function SignUpForm({ action }: FormProps) {
  const [state, formAction] = useFormState(action, {
    data: null,
    error: null,
  });

  const [showModal, setShowModal] = useState(false);
  const {
    handleSubmit,
    register,
    errors,
    isSubmitting,
    nameWatch,
    cpfWatch,
    emailWatch,
    passwordWatch,
    confirmPasswordWatch,
  } = UseFormSignUp();
  const formRef = useRef<HTMLFormElement>(null);

  function handleModal() {
    setShowModal(!showModal);
  }

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
          <label>Nome Completo</label>
          <Input type="text" {...register("name")}>
            <ProfileIcon
              color={
                !!nameWatch
                  ? errors.name
                    ? Color.Error
                    : Color.Ok
                  : Color.Default
              }
            />
          </Input>
          {errors.name && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.name?.message}
            </span>
          )}
        </div>
        <div className="space-y-2 w-full">
          <label>E-mail</label>
          <Input type="email" {...register("email")}>
            <MailIcon
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
        <div className="space-y-2 w-full">
          <label>CPF</label>
          <Input type="text" {...register("cpf")}>
            <IdIcon
              color={
                !!cpfWatch
                  ? errors.cpf
                    ? Color.Error
                    : Color.Ok
                  : Color.Default
              }
            />
          </Input>
          {errors.cpf && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.cpf?.message}
            </span>
          )}
        </div>
        <div className="space-y-2 w-full">
          <label>Senha</label>
          <Input type="password" {...register("password")}>
            <PadlockIcon
              color={
                !!passwordWatch
                  ? errors.password
                    ? Color.Error
                    : Color.Ok
                  : Color.Default
              }
            />
          </Input>
          {errors.password && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.password?.message}
            </span>
          )}
        </div>
        <div className="space-y-2 w-full">
          <label>Confirme sua Senha</label>
          <Input type="password" {...register("confirmPassword")}>
            <PadlockIcon
              color={
                !!confirmPasswordWatch
                  ? errors.confirmPassword
                    ? Color.Error
                    : Color.Ok
                  : Color.Default
              }
            />
          </Input>
          {errors.confirmPassword && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.confirmPassword?.message}
            </span>
          )}
        </div>
      </div>
      <Button
        content="Cadastrar"
        disabled={isSubmitting}
        className="w-full md:px-[8.25rem] py-[1.125rem] rounded whitespace-nowrap text-center bg-orange-light text-purple-dark hover:bg-orange-300 font-medium disabled:opacity-50"
      />
      {state.error && (
        <Modal
          type="error"
          content="O usuário já possui cadastro."
          isOpen={!showModal}
          onClose={handleModal}
        />
      )}
    </form>
  );
}
