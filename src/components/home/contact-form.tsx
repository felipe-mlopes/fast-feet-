"use client";

import {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
  useRef,
} from "react";
import { useFormState } from "react-dom";

import { FormStateTypes } from "@/types";
import { useFormContact } from "@/hooks/use-form-contact";

import { Button } from "../global/button";

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

export function ContactForm({ action }: FormProps) {
  const [state, formAction] = useFormState(action, {
    data: null,
    error: null,
  });
  const { register, handleSubmit, errors } = useFormContact();

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
      className="flex flex-col gap-6 w-full md:w-[30rem]"
    >
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="w-full">
          <input
            type="text"
            placeholder="Digite seu nome completo"
            className="flex items-center justify-between py-2 px-3 gap-4 w-full border rounded outline-none appearance-none bg-white text-lavender-gray"
            {...register("name")}
          />
          {errors.name && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.name?.message}
            </span>
          )}
        </div>
        <div className="w-full">
          <input
            type="email"
            placeholder="Digite seu email"
            className="flex items-center justify-between py-2 px-3 gap-4 w-full border rounded outline-none appearance-none bg-white text-lavender-gray"
            {...register("email")}
          />
          {errors.email && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.email?.message}
            </span>
          )}
        </div>
        <div className="w-full">
          <textarea
            placeholder="Descreva aqui sua dúvida, sugestão ou reclamação"
            className="flex items-center justify-between py-2 px-3 gap-4 w-full min-h-32 border rounded outline-none appearance-none resize-none bg-white text-lavender-gray "
            {...register("description")}
          />
          {errors.description && (
            <span className="pt-1 text-xs font-bold text-red-400">
              {errors.description?.message}
            </span>
          )}
        </div>
      </div>
      <Button
        content="Enviar"
        className="p-3 max-w-20 rounded bg-orange-light"
      />
    </form>
  );
}
