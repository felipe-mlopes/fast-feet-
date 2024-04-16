"use client";

import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
  useState,
} from "react";
import { useFormState } from "react-dom";

import { FormStateTypes } from "@/types";

import LoginInput from "./login-input";
import { Modal } from "../global/modal";
import { Button } from "../global/button";

import { ProfileIcon } from "../icons/profile-icon";
import { PadlockIcon } from "../icons/padlock-icon";

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

export function SignInForm({ action, children, ...props }: FormProps) {
  const [state, formAction] = useFormState(action, {
    data: null,
    error: null,
  });

  const [showModal, setShowModal] = useState(false);

  const [isCpfFilled, setIsCpfFilled] = useState(false);
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  return (
    <form
      action={formAction}
      className="flex flex-col gap-[1.625rem] pb-24 lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-2 lg:flex lg:flex-col lg:items-center lg:mb-0"
      {...props}
    >
      <div className="space-y-2">
        <LoginInput
          inputType="text"
          type="text"
          id="cpf"
          name="cpf"
          maxLength={14}
          placeholder="CPF"
          onFilled={setIsCpfFilled}
        >
          <ProfileIcon inputFilled={isCpfFilled} />
        </LoginInput>
        {!!state.error && state.error.length == 2 ? (
          <span className="pt-1 text-xs text-red-400">
            O CPF deve conter 11 números válidos.
          </span>
        ) : null}
        <LoginInput
          inputType="password"
          id="password"
          name="password"
          minLength={6}
          placeholder="Senha"
          onFilled={setIsPasswordFilled}
        >
          <PadlockIcon inputFilled={isPasswordFilled} />
        </LoginInput>
      </div>
      {!!state.error && (
        <Modal
          type="error"
          content="Senha ou CPF incorretos."
          isOpen={!showModal}
          onClose={handleModal}
        />
      )}
      {children}
      <Button content="Entrar" type="submit" />
    </form>
  );
}
