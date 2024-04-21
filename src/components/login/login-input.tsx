"use client";

import {
  ForwardRefRenderFunction,
  useState,
  ChangeEvent,
  InputHTMLAttributes,
  forwardRef,
} from "react";

import { PasswordHiddenIcon } from "../icons/password-hidden-icon";
import { PasswordShowIcon } from "../icons/password-show-icon";
import { cpfMask } from "@/utils/cpf-mask";

interface LoginInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputType: "text" | "password";
  error?: string | undefined;
  onFilled: (filled: boolean) => void;
}

const LoginInput: ForwardRefRenderFunction<
  HTMLInputElement,
  LoginInputProps
> = ({ inputType, error, onFilled, children, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputFilled, setInputFilled] = useState(false);

  function toggleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleChangeValue({
    currentTarget,
  }: ChangeEvent<HTMLInputElement>) {
    currentTarget.setCustomValidity(error ?? "");
    const { value, name } = currentTarget;

    if (name === "name") {
      const nameValue = currentTarget.value.toString();
      setInputFilled(nameValue.length >= props.minLength! - 1);
    }

    if (name === "email") {
      const emailValue = currentTarget.value.toString();
      setInputFilled(emailValue.length >= props.minLength! - 1);
    }

    if (name === "cpf") {
      const formattedValue = cpfMask(value);
      currentTarget.value = formattedValue;
      setInputFilled(formattedValue.length === props.maxLength! - 1);
    }

    if (name === "password" || name === "passwordConfirm") {
      const passwordValue = currentTarget.value;
      setInputFilled(passwordValue.length >= props.minLength!);
    }

    onFilled(inputFilled);
  }

  return (
    <div className="flex justify-between gap-4 w-full p-4 rounded bg-gray-light">
      <div className="flex gap-4 items-center w-full">
        <span>{children}</span>
        <span className="border-[1px] bg-bluish-gray rounded w-[1px] h-6" />
        <input
          ref={ref}
          type={showPassword ? "text" : "password"}
          required={true}
          onChange={handleChangeValue}
          className="grow min-w-5 outline-none text-base font-normal text-purple-dark bg-gray-light appearance-none"
          {...props}
        />
      </div>
      {inputType === "password" && (
        <span onClick={toggleShowPassword} className="cursor-pointer">
          {showPassword ? <PasswordShowIcon /> : <PasswordHiddenIcon />}
        </span>
      )}
    </div>
  );
};

export default forwardRef(LoginInput);
