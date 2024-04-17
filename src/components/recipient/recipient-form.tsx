"use client";

import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
  useState,
} from "react";
import { useFormState } from "react-dom";

import { FormStateTypes } from "@/types";

import LoginInput from "../login/login-input";

import { ProfileIcon } from "../icons/profile-icon";
import { MailIcon } from "../icons/mail-icon";

type HTMLFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

interface FormRecipientProps
  extends PropsWithChildren<Omit<HTMLFormProps, "action">> {
  action: (
    prevState: FormStateTypes,
    formData: FormData
  ) => Promise<FormStateTypes>;
}

export function RecipientForm({ children, action }: FormRecipientProps) {
  const [state, formAction] = useFormState(action, {
    data: null,
    error: null,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isNameFilled, setIsNameFilled] = useState(false);
  const [isEmailFilled, setIsEmailFilled] = useState(false);
  const [isZipCodeFilled, setIsZipCodeFilled] = useState(false);
  const [isAddressFilled, setIsAddressFilled] = useState(false);
  const [isCityFilled, setIsCityFilled] = useState(false);
  const [isStateFilled, setIsStateFilled] = useState(false);
  const [isNeighborhoodFilled, setIsNeighborhoodFilled] = useState(false);

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
            name="email"
            minLength={4}
            onFilled={setIsEmailFilled}
          >
            <MailIcon inputFilled={isEmailFilled} />
          </LoginInput>
        </div>
        <div className="space-y-2 w-full">
          <label>CEP</label>
          <LoginInput
            inputType="text"
            type="number"
            name="zipcode"
            minLength={3}
            onFilled={setIsZipCodeFilled}
          >
            <ProfileIcon inputFilled={isZipCodeFilled} />
          </LoginInput>
        </div>
        <div className="space-y-2 w-full">
          <label>Endereço Completo</label>
          <LoginInput
            inputType="text"
            type="text"
            name="address"
            minLength={3}
            onFilled={setIsAddressFilled}
          >
            <ProfileIcon inputFilled={isAddressFilled} />
          </LoginInput>
        </div>
        <div className="space-y-2 w-full">
          <label>Bairro</label>
          <LoginInput
            inputType="text"
            type="text"
            name="neighborhood"
            minLength={2}
            onFilled={setIsNeighborhoodFilled}
          >
            <ProfileIcon inputFilled={isNeighborhoodFilled} />
          </LoginInput>
        </div>
        <div className="flex gap-6">
          <div className="space-y-2 flex-1 w-full">
            <label>Cidade</label>
            <LoginInput
              inputType="text"
              type="text"
              name="city"
              minLength={3}
              onFilled={setIsCityFilled}
            >
              <ProfileIcon inputFilled={isCityFilled} />
            </LoginInput>
          </div>
          <div className="space-y-2 flex-none w-40">
            <label>Estado</label>
            <LoginInput
              inputType="text"
              type="text"
              name="state"
              minLength={2}
              maxLength={2}
              onFilled={setIsStateFilled}
            >
              <ProfileIcon inputFilled={isStateFilled} />
            </LoginInput>
          </div>
        </div>
      </div>
      {children}
    </form>
  );
}
