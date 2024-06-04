"use client";

import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
} from "react";

import { useSignInForm } from "@/view/ui-logic/hooks/use-sign-in-form";
import { Color } from "@/view/ui-logic/types/color-enum.type";

import Input from "../global/input";
import { Button } from "../global/button";
import { Modal } from "../global/modal";

import { ProfileIcon } from "../icons/profile-icon";
import { PadlockIcon } from "../icons/padlock-icon";
import { PasswordShowIcon } from "../icons/password-show-icon";
import { PasswordHiddenIcon } from "../icons/password-hidden-icon";

type HTMLFormProps = DetailedHTMLProps<
  FormHTMLAttributes<HTMLFormElement>,
  HTMLFormElement
>;

interface SignInFormProps extends PropsWithChildren<HTMLFormProps> {}

export function SignInForm({ action, children, ...props }: SignInFormProps) {
  const {
    formRef,
    formAction,
    state,
    showPassword,
    toggleShowPassword,
    showModal,
    handleModal,
    register,
    errors,
    isSubmitting,
    cpfWatch,
    passwordWatch,
  } = useSignInForm();

  return (
    <form
      ref={formRef}
      action={formAction}
      className="flex flex-col gap-[1.625rem] pb-24 lg:row-start-2 lg:row-end-3 lg:col-start-2 lg:col-end-2 lg:flex lg:flex-col lg:items-center lg:mb-0"
      {...props}
    >
      <div className="space-y-2">
        <Input
          type="text"
          id="cpf"
          maxLength={14}
          placeholder="CPF"
          {...register("cpf")}
        >
          <ProfileIcon
            color={
              !!cpfWatch ? (errors.cpf ? Color.Error : Color.Ok) : Color.Default
            }
          />
        </Input>
        {errors.cpf && (
          <span className="pt-1 text-xs font-bold text-red-400">
            {errors.cpf?.message}
          </span>
        )}
        <Input
          type={showPassword ? "text" : "password"}
          id="password"
          minLength={6}
          placeholder="Senha"
          {...register("password")}
        >
          <PadlockIcon
            color={
              !!passwordWatch
                ? errors.password
                  ? Color.Error
                  : Color.Ok
                : Color.Default
            }
          />
          {
            <button onClick={toggleShowPassword} className="cursor-pointer">
              {showPassword ? <PasswordShowIcon /> : <PasswordHiddenIcon />}
            </button>
          }
        </Input>
        {errors.password && (
          <span className="pt-1 text-xs font-bold text-red-400">
            {errors.password?.message}
          </span>
        )}
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
      <Button
        content="Entrar"
        type="submit"
        disabled={isSubmitting}
        className="w-full md:px-[8.25rem] py-[1.125rem] rounded whitespace-nowrap text-center bg-orange-light text-purple-dark hover:bg-orange-300 font-medium disabled:opacity-50"
      />
    </form>
  );
}
