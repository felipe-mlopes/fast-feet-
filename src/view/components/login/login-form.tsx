"use client";

import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
} from "react";

import { useLoginForm } from "@/view/ui-logic/hooks/use-login-form";
import { Color } from "@/view/ui-logic/types/color-enum.types";

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

interface LoginFormProps extends PropsWithChildren<HTMLFormProps> {}

export function LoginForm({ children }: LoginFormProps) {
  const {
    register,
    errors,
    isSubmitting,
    emailWatch,
    passwordWatch,
    formRef,
    showPassword,
    toggleShowPassword,
    showModal,
    handleModal,
    state,
    handleLoginForm,
  } = useLoginForm();

  return (
    <form
      ref={formRef}
      action={handleLoginForm}
      className="flex flex-col gap-[1.625rem] pb-24 md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-2 md:flex md:flex-col md:items-center md:mb-0 md:pb-0"
    >
      <div className="space-y-2">
        <Input
          type="email"
          id="email"
          placeholder="Digite seu e-mail cadastrado"
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
