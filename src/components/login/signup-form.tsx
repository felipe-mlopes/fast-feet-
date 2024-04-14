"use client";

import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
  useState,
} from "react";
import { useFormState } from "react-dom";

import { FormStateTypes } from "@/types";

import LoginInput from "@/components/login/login-input";

import { Button } from "@/components/global/button";
import { MailIcon } from "@/components/icons/mail-icon";
import { PadlockIcon } from "@/components/icons/padlock-icon";
import { ProfileIcon } from "@/components/icons/profile-icon";
import { IdIcon } from "@/components/icons/id-icon";
import { Modal } from "../global/modal";

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

  const [isOpen, setIsOpen] = useState(false);
  const [isNameFilled, setIsNameFilled] = useState(false);
  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [isCpfFilled, setIsCpfFilled] = useState(false);
  const [isPasswordFilled, setIsPasswordFilled] = useState(false);
  const [isConfirmPasswordFilled, setIsConfirmPasswordFilled] = useState(false);

  function handleClose() {
    setIsOpen(!isOpen);
  }

  return (
    <form action={formAction} className="space-y-10">
      <div className="space-y-4 text-gray-light">
        <div className="space-y-2 w-full">
          <label>Nome Completo</label>
          <LoginInput
            inputType="text"
            type="text"
            name="name"
            minLength={3}
            onFilled={setIsNameFilled}
          >
            <ProfileIcon inputFilled={isNameFilled} />
          </LoginInput>
        </div>
        <div className="space-y-2 w-full">
          <label>E-mail</label>
          <LoginInput
            inputType="text"
            type="email"
            id="email"
            name="email"
            minLength={5}
            onFilled={setIsEmailFilled}
          >
            <MailIcon inputFilled={isEmailFilled} />
          </LoginInput>
        </div>
        <div className="space-y-2 w-full">
          <label>CPF</label>
          <LoginInput
            inputType="text"
            type="text"
            id="cpf"
            name="cpf"
            maxLength={14}
            onFilled={setIsCpfFilled}
          >
            <IdIcon inputFilled={isCpfFilled} />
          </LoginInput>
        </div>
        <div className="space-y-2 w-full">
          <label>Senha</label>
          <LoginInput
            inputType="password"
            name="password"
            minLength={6}
            onFilled={setIsPasswordFilled}
          >
            <PadlockIcon inputFilled={isPasswordFilled} />
          </LoginInput>
        </div>
        <div className="space-y-2 w-full">
          <label>Confirme sua Senha</label>
          <LoginInput
            inputType="password"
            name="passwordConfirm"
            minLength={6}
            onFilled={setIsConfirmPasswordFilled}
          >
            <PadlockIcon inputFilled={isConfirmPasswordFilled} />
          </LoginInput>
        </div>
      </div>
      <Button content="Cadastrar" />
      {state.error && (
        <Modal
          type="error"
          content="O usuário já possui cadastro."
          isOpen={isOpen}
          onClose={handleClose}
        />
      )}
    </form>
  );
}
